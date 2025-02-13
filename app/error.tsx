"use client"

interface ErrorProps {
  reset: () => void;
  error: Error;
}

export default function Error({ reset, error }: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-2xl font-bold text-red-600">Something went wrong!</h1>
      <p className="text-gray-700">{error.message}</p>
      <button
        onClick={reset}
        className="px-4 py-2 rouned-lg border-primary text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
      >
        Try Again
      </button>
    </div>
  );
}
