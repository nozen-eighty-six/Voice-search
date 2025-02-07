import { Link } from "react-router";

const Home = () => {
  return (
    <div className="border border-gray-500 p-2">
      <h2 className="text-center font-bold">Welcome to my proyect</h2>
      <span>
        <strong>Description:</strong>
      </span>
      <p>
        This proyect is about search with voice using webkitSpeechRecognition,
        you can search people with your voice or writing
      </p>
      <div className="flex justify-center">
        <Link
          to={"/voice-search"}
          className="py-1 px-6  bg-gray-300 mt-2  rounded-sm"
        >
          {"Ir ->"}
        </Link>
      </div>
    </div>
  );
};

export default Home;
