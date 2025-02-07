import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import RoutesC from "./routes/RoutesC";
import Home from "./components/Home";
import VoiceSearchComponent from "./components/VoiceSearchComponent/VoiceSearchComponent";

const rooter = createBrowserRouter([
  {
    path: "/",
    element: <RoutesC />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/voice-search",
        element: <VoiceSearchComponent />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={rooter} />;
}

export default App;
