import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import image from "../assets/download-removebg-preview (4) 2.png";
const MinCart = () => {
  return (
    <>
      {" "}
      <div className="border S900:flex-col S900:flex hidden w-[300px] min-h-[150px] p-3 m-5 rounded-md">
        <div className="w-full p-3 flex">
          <div className="w-[60px] h-[60px] rounded-md bg-slate-100">
            <img src={image} />
          </div>
          <div className="ml-2 w-[80%]">
            <p className="font-semibold">Product Name</p>
            <div className="text-[8px] leading-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, vel soluta?
            </div>
            <div className="text-[10px]">
              Only <span className="text-red-500 font-semibold">18</span> left
              in stock
            </div>
          </div>
        </div>
        <div className="font-Bold mb-2 text-[30px] flex justify-center items-center text-gray-500">
          ₦1,000.00
          <div className="w-[40px] ml-8 h-[40px] bg-slate-100 cursor-pointer flex justify-center items-center rounded ">
            <RiDeleteBin5Line color="red" size={20} />
          </div>
        </div>

        <div className="flex items-center w-full justify-center">
          <div className="w-[30px] h-[30px] bg-slate-100 cursor-pointer flex justify-center items-center rounded ">
            <FaRegArrowAltCircleUp color="red" size={20} />
          </div>
          <span className="font-Bold text-[20px] mx-5">5</span>
          <div className="w-[30px] h-[30px] bg-slate-100 cursor-pointer flex justify-center items-center rounded rotate-180">
            <FaRegArrowAltCircleUp color="red" size={20} />
          </div>
        </div>
        <div className="font-Bold text-[30px] text-center text-red-500">
          ₦1,000.00
        </div>
      </div>
    </>
  );
};

export default MinCart;
