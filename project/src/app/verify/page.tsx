import { VERIFICATION_CHECKS, getVerificationSummary } from "@/lib/verify";

export default function VerifyPage() {
  const summary = getVerificationSummary();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Dispatch Verification — Findings 1-3
        </h1>

        <ul className="space-y-3 mb-8">
          {VERIFICATION_CHECKS.map((check) => (
            <li key={check.id} className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-green-500 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700">{check.label}</span>
            </li>
          ))}
        </ul>

        <div className="border-t border-gray-100 pt-4 text-sm text-gray-500">
          {summary.passed} / {summary.total} checks passed
          {summary.failed > 0 && (
            <span className="ml-2 text-red-500">
              ({summary.failed} failed)
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
