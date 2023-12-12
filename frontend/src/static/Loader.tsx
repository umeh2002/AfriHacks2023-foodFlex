import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(57, 27, 27, 0.5)",
          position: "fixed",
        }}
      >
        <div className="z-10 flex justify-center items-center w-full h-full">
          <BallTriangle color="crimson"/>
        </div>
      </div>
    </>
  );
};

export default Loader;
