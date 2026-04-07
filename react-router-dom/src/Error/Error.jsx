import { Link } from "react-router";

export default function Error() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white px-4">
      
      {/* Big 404 */}
      <h1 className="text-8xl md:text-9xl font-bold tracking-widest">
        404
      </h1>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl mt-4 text-gray-200">
        Oops! Page not found
      </p>

      {/* Description */}
      <p className="mt-2 text-gray-300 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
      >
        Go Back Home
      </Link>

      {/* Optional Illustration */}
      <div className="mt-10 animate-bounce text-6xl">
        🚀
      </div>
    </div>
  );
}