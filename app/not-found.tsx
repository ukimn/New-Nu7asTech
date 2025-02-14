

import Link from "next/link";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold">Page Not Found</h1>

      {/* Message */}
      <p className="text-lg sm:text-2xl my-5 text-gray-600">You must sleep early</p>

      {/* Go Back Button */}
      <Link 
        href="/" 
        className="text-lg sm:text-xl border  border-[#55c996] bg-[#55c996] text-white px-6 py-3 rounded-lg duration-200 transition-colors hover:bg-[#48b081] hover:shadow-md"
        aria-label="Go back to homepage"
      >
        Go Back
      </Link>
    </div>
  );
}

export default NotFound;
