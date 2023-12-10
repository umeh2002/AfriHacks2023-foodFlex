import img from "../assets/download-removebg-preview (4) 2.png";
import { FaCartShopping } from "react-icons/fa6";

const DetailedPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-blue-pink">
      <div className="w-[80%] h-[80%] max-sm:h-[90%] flex justify-between  max-sm:flex-col p-10 md:p-7 bg-white ">


        <div className="w-[40%]  S425:w-[100%] rotate-[4deg] rounded-[10px]" >
          <img
            src={img}
            alt=""
            className="w-[100%] h-[100%] bg-[#eeeeeef4] object-fill rounded-[10px] "
          />
        </div>
        <div className="w-[50%] S425:w-[100%]">
          <div className="text-[20px] font-semibold tracking-widest">
            Solid Cargo Pant
          </div>

          <div>
            <p>only <span className="text-[red] font-semibold">18</span> left in stock</p>
          </div>
          <br />
          <div className="font-semibold text-[24px]">₦20,000</div>
          <br />
          <div>
            <h1 className="text-[18px] font-semibold">Discription:</h1>
            <h3 className="text-[15px] S670::text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum esse
              fugiat iure, vel dolorum aut quasi quas itaque!
            </h3>
          </div>
          <br />

          <div className="flex mt-3  gap-4">
            <div className="flex items-center h-[40px] border">
              <div className="w-[40px] h-full flex items-center justify-center hover:cursor-pointer duration-300 transition-all hover:scale-[1.06]">
                -
              </div>
              <div className="mx-4">0</div>
              <div className="w-[40px] h-full flex items-center justify-center hover:cursor-pointer duration-300 transition-all hover:scale-[1.06]">
                +
              </div>
            </div>
          <button className="  px-5 rounded-md flex items-center gap-4 bg-[#ff4251] duration-300 transition-all hover:scale-[1.06] hover:text-white max-md:gap-2" >
            <FaCartShopping/>
            <p className="max-md:text-[14px]">Add to Cart</p>
          </button>
          </div>
          <br />
          <br />
        </div>
        </div>
      </div>
  );
};

export default DetailedPage;
