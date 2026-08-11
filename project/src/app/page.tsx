import VerificationStatus from '@/components/VerificationStatus';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome</h1>
        <p className="text-lg text-gray-600 mb-8">
          Your application is ready. Start building your features.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
          <a
            href="#"
            className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-8">
          <VerificationStatus />
        </div>
      </div>
    </main>
  );
}
