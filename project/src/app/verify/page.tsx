export default function VerifyPage() {
  const findings = [
    { id: 1, label: 'Finding 1' },
    { id: 2, label: 'Finding 2' },
    { id: 3, label: 'Finding 3' },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-8">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Dispatch Verification
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          Verification status after Findings 1-3
        </p>
        <ul className="space-y-4">
          {findings.map(({ id, label }) => (
            <li
              key={id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
            >
              <span className="text-gray-800 font-medium">{label}</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                OK
              </span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
