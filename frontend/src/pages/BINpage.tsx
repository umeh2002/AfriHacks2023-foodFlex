import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const BINpage = () => {
  const validInput = (e: any) => {
    const input = e.target;
    const inputValue = input.value;

    input.value = inputValue.replace(/\D/g, "");
  };
  return (
    <>
      <div className=" w-[100%] h-[100vh] flex justify-center items-center bg-gradient-blue-pink">
        <div className="bg-white w-[450px] flex flex-col items-center justify-center relative min-h-[200px] rounded-lg p-5">
          <Link to={`/`}>
            <AiOutlineClose
              size={20}
              color="grey"
              className="absolute cursor-pointer top-3 right-3"
            />
          </Link>
          <div className="font-Bold text-[25px] text-red-500 ">BIN Checker</div>
          <div className="text-[11px] text-gray-500 font-medium text-center w-[80%] ">
            Our commitment to user safety reaches new heights <br /> as we
            implement this cutting-edge
            <br /> to verify user validity.
          </div>
          <div className="mt-[15px] font-Bold text-gray-500 text-[13px] text-center">
            PLACE THE FIRST 6 DIGIT OF YOUR CARD
          </div>
          <input
            type="text"
            onInput={validInput}
            maxLength={6}
            className="w-[200px] text-center text-[30px] font-Bold text-gray-500 outline-none border rounded-md h-[40px] pl-3"
          />
          <div className="w-[200px] mt-[10px] h-[45px] text-[white] bg-red-500 rounded flex justify-center items-center font-light text-[13px] cursor-pointer hover:scale-[1.02] transition-all duration-700 overflow-hidden ">
            Check BIN
          </div>
        </div>
      </div>
    </>
  );
};

export default BINpage;
