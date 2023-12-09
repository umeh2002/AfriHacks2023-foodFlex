import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./router/MainRouter";

const App = () => {
  return (
    <>
      <div className="font-Regular">
        <RouterProvider router={MainRouter} />
      </div>
    </>
  );
};

export default App;
