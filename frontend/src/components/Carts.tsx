import { RiDeleteBin5Line } from "react-icons/ri";
import image from "../assets/download-removebg-preview (4) 2.png";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
const Carts = () => {
  return (
    <>
      <div className="w-full border-b-2 flex">
        <div className="border-r-2 w-[320px] flex items-center">
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
        </div>
        <div className="border-r-2 w-[130px] flex items-center">
          <p className="font-Bold ml-2 h-5 text-gray-500">₦1,000.00</p>
        </div>
        <div className="border-r-2 pl-2 w-[150px] flex items-center ">
          <div className="w-[30px] h-[30px] bg-slate-100 cursor-pointer flex justify-center items-center rounded ">
            <FaRegArrowAltCircleUp color="red" size={20} />
          </div>
          <span className="font-Bold text-[20px] mx-5">5</span>
          <div className="w-[30px] h-[30px] bg-slate-100 cursor-pointer flex justify-center items-center rounded rotate-180">
            <FaRegArrowAltCircleUp color="red" size={20} />
          </div>
        </div>
        <div className="border-r-2 w-[150px] flex items-center">
          <p className="font-Bold ml-2 h-5 text-gray-500">₦1,000.00</p>
        </div>
        <div className="flex items-center">
          <div className="w-[40px] ml-8 h-[40px] bg-slate-100 cursor-pointer flex justify-center items-center rounded ">
            <RiDeleteBin5Line color="red" size={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carts;
