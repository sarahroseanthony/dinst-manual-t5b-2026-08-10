/**
 * Smoke test – dispatch verification after Findings 1-3
 *
 * This test verifies that the project scaffold is in a healthy state
 * following the resolution of Findings 1-3. It uses Node's built-in
 * test runner (node:test) and assertion library (node:assert) so that
 * no additional npm packages are required.
 *
 * Findings addressed:
 *   Finding 1 – Scaffold file integrity
 *   Finding 2 – TypeScript / tsconfig path-alias consistency
 *   Finding 3 – Next.js config correctness
 */

import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// __dirname = project/src/__tests__
// root      = project/  (two levels up)
const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "../..");

// ---------------------------------------------------------------------------
// Helper: read a file relative to the project root
// ---------------------------------------------------------------------------
function readProject(relPath) {
  const abs = resolve(root, relPath);
  assert.ok(existsSync(abs), `Expected file to exist: ${relPath}`);
  return readFileSync(abs, "utf8");
}

// ---------------------------------------------------------------------------
// Finding 1 – Scaffold file integrity
// All scaffold files listed in memory must be present and non-empty where
// expected.
// ---------------------------------------------------------------------------
describe("Finding 1 – Scaffold file integrity", () => {
  const requiredNonEmpty = [
    "package.json",
    "tsconfig.json",
    "next.config.js",
    "postcss.config.js",
    "tailwind.config.js",
    "src/app/globals.css",
    "src/app/layout.tsx",
    "src/app/page.tsx",
    ".env.example",
  ];

  for (const file of requiredNonEmpty) {
    it(`${file} exists and is non-empty`, () => {
      const content = readProject(file);
      assert.ok(
        content.trim().length > 0,
        `${file} should not be empty`
      );
    });
  }

  it("src/app/page.tsx exports a default function", () => {
    const src = readProject("src/app/page.tsx");
    assert.match(
      src,
      /export\s+default\s+function/,
      "page.tsx must have a default-exported function component"
    );
  });
});

// ---------------------------------------------------------------------------
// Finding 2 – TypeScript / tsconfig path-alias consistency
// The @/* alias must point to ./src/* in tsconfig.json.
// ---------------------------------------------------------------------------
describe("Finding 2 – TypeScript tsconfig path-alias consistency", () => {
  it('tsconfig.json defines @/* → ./src/*', () => {
    const raw = readProject("tsconfig.json");
    const tsconfig = JSON.parse(raw);
    const paths = tsconfig?.compilerOptions?.paths ?? {};
    assert.ok(
      Array.isArray(paths["@/*"]),
      'compilerOptions.paths must contain an "@/*" entry'
    );
    assert.ok(
      paths["@/*"].includes("./src/*"),
      '"@/*" must map to "./src/*"'
    );
  });

  it("tsconfig.json has strict mode enabled", () => {
    const raw = readProject("tsconfig.json");
    const tsconfig = JSON.parse(raw);
    assert.strictEqual(
      tsconfig?.compilerOptions?.strict,
      true,
      "strict must be true"
    );
  });

  it("tsconfig.json targets es2017 or later", () => {
    const raw = readProject("tsconfig.json");
    const tsconfig = JSON.parse(raw);
    const target = (tsconfig?.compilerOptions?.target ?? "").toLowerCase();
    const validTargets = [
      "es2017", "es2018", "es2019", "es2020",
      "es2021", "es2022", "esnext",
    ];
    assert.ok(
      validTargets.includes(target),
      `target "${target}" should be es2017 or later`
    );
  });
});

// ---------------------------------------------------------------------------
// Finding 3 – Next.js config correctness
// next.config.js must export a valid config object with no illegal flags.
// ---------------------------------------------------------------------------
describe("Finding 3 – Next.js config correctness", () => {
  it("next.config.js is syntactically valid and exports an object", () => {
    const src = readProject("next.config.js");
    // Must contain module.exports
    assert.match(
      src,
      /module\.exports/,
      "next.config.js must use module.exports"
    );
    // Must not set deprecated / removed experimental flags
    const illegalPatterns = [
      /appDir\s*:/,           // experimental in Next 13, removed in 14
      /serverComponents\s*:/, // removed flag
    ];
    for (const pattern of illegalPatterns) {
      assert.doesNotMatch(
        src,
        pattern,
        `next.config.js must not contain deprecated flag matching ${pattern}`
      );
    }
  });

  it("package.json has next ^14 as a dependency", () => {
    const raw = readProject("package.json");
    const pkg = JSON.parse(raw);
    const nextVersion = pkg?.dependencies?.next ?? "";
    assert.match(
      nextVersion,
      /^\^?14/,
      `next version "${nextVersion}" should be ^14.x`
    );
  });

  it("package.json has react and react-dom as dependencies", () => {
    const raw = readProject("package.json");
    const pkg = JSON.parse(raw);
    assert.ok(pkg?.dependencies?.react, "react must be a dependency");
    assert.ok(
      pkg?.dependencies?.["react-dom"],
      "react-dom must be a dependency"
    );
  });
});
