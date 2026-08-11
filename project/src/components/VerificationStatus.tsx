export default function VerificationStatus() {
  const findings = [
    { id: 1, label: 'Finding 1' },
    { id: 2, label: 'Finding 2' },
    { id: 3, label: 'Finding 3' },
  ];

  return (
    <div className="rounded-lg border border-green-200 bg-green-50 p-6 space-y-4">
      <div className="text-center font-semibold text-green-800 text-lg">
        Dispatch Verified After Findings 1-3
      </div>
      {findings.map((finding) => (
        <div key={finding.id} className="flex items-center gap-2">
          <span className="text-green-600 font-bold">✓</span>
          <span className="text-green-800">{finding.label}</span>
          <span className="ml-auto text-sm font-medium text-green-700">Verified</span>
        </div>
      ))}
    </div>
  );
}
