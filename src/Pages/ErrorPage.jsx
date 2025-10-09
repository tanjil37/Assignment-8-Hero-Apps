import { useRouteError } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ErrorImg from "../../src/assets/error-404.png"
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar></Navbar>
       <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-50">
        <img
          src={ErrorImg}
          alt="Page Not Found"
          className="w-96 max-w-full mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Oops! Page not found</h1>
        <p className="text-gray-600 mb-6">
          {error.statusText || error.message || "The page you’re looking for doesn’t exist."}
        </p>

        <a
          href="/"
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Go Back Home
        </a>
      </div>
      ;
      <Footer />
    </>
  );
};

export default ErrorPage;
