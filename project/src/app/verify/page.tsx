import Link from "next/link";

const findings = [
  {
    id: 1,
    label: "Finding 1",
    description: "Dispatch event type validation",
  },
  {
    id: 2,
    label: "Finding 2",
    description: "Dispatch payload handling",
  },
  {
    id: 3,
    label: "Finding 3",
    description: "Dispatch result timestamp accuracy",
  },
];

export default function VerifyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-8">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
          Dispatch Verification
        </h1>
        <p className="text-gray-500 text-center mb-10">
          Status after Findings 1-3
        </p>

        <ul className="space-y-4 mb-10">
          {findings.map((finding) => (
            <li
              key={finding.id}
              className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg px-6 py-4 shadow-sm"
            >
              <span className="mt-0.5 flex-shrink-0 text-green-500 text-xl" aria-hidden="true">
                ✓
              </span>
              <div>
                <p className="font-semibold text-gray-800">{finding.label}</p>
                <p className="text-gray-500 text-sm">{finding.description}</p>
              </div>
              <span className="ml-auto text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                Verified
              </span>
            </li>
          ))}
        </ul>

        <div className="text-center">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
