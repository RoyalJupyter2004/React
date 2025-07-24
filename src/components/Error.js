import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4 text-center">
      <h2 className="text-5xl font-bold text-red-600 mb-4">
        {err.status} : {err.statusText}
      </h2>
      <p className="text-lg text-gray-700">
        Oops! The page you’re looking for doesn’t exist.
      </p>
    </main>
  );
};

export default Error;
