import { useNavigate } from "react-router-dom";
import morty from "../../assets/images/morty.png";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col self-center justify-center flex-1 w-5/12 gap-2 max-sm:w-full">
      <img
        src={morty}
        alt="Page not found"
        className="self-center h-auto w-60"
      />
      <h1 className="text-3xl font-bold text-center text-white max-sm:text-lg">
        Oops! Page not found, Rick!!
      </h1>
      <p className="text-lg text-center text-gray-400">Error code: 404</p>
      <button
        className="p-2 text-lg text-yellow-400"
        onClick={() => navigate("/")}
      >
        Back to the site!
      </button>
    </div>
  );
};

export default ErrorPage;
