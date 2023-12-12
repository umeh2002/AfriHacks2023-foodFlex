import tomato from "../assets/download-removebg-preview (4) 2.png";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { BiSolidCartDownload } from "react-icons/bi";
import { Link } from "react-router-dom";
const DetailedPage = () => {
  return (
    <>
      <div className="w-full min-h-[100vh] bg-[#f0f1f7] flex justify-center items-center">
        <div className="w-[95%] h-[95%] py-10 S1200:flex-col bg-white flex pl-20 S530:pl-5 justify-between items-center S670:items-start">
          <div className="w-[35%] S1200:w-[400px] flex justify-center items-center h-[500px] rotate-6 rounded bg-slate-100 S670:rotate-0 S670:hidden">
            <img src={tomato} className="object-cover" />
          </div>
          <img src={tomato} className="hidden S670:flex" />
          <div className="w-[60%] S1200:w-full">
            <p className="font-Bold text-[50px] text-gray-500 S670:text-[30px]">
              RICH POTATO
            </p>
            <p className="text-gray-500">
              Only{" "}
              <span className="text-[20px] text-red-500 font-Bold">18</span>{" "}
              left in stock
            </p>
            <p className="font-Bold text-[40px] text-red-500">₦1, 500.00</p>
            <p className="text-gray-700 text-[20px] font-bold">Description</p>
            <p className="w-[80%] leading-8 my-3 text-gray-500 S530:text-[13px] S530:w-[95%]">
              Whether you're a home cook seeking comfort or a gourmet enthusiast
              pushing the boundaries of flavor, rich potatoes are an essential
              ingredient in your culinary repertoire. Dive into the world of
              rich potatoes and savor the satisfaction they bring to every dish
              they grace.
            </p>
            <p className="text-gray-700 text-[20px] font-bold">Quantity</p>
            <div className="flex mt-3 items-center">
              <div className="w-[50px] cursor-pointer h-[50px] bg-gray-100 rounded flex justify-center items-center">
                <IoArrowDownCircleOutline className="rotate-180 text-[30px] text-red-500" />
              </div>
              <p className="font-Bold cursor-default mx-5 text-[30px]">5</p>
              <div className="w-[50px] cursor-pointer h-[50px] bg-gray-100 rounded flex justify-center items-center">
                <IoArrowDownCircleOutline className="text-[30px] text-red-500" />
              </div>
              <Link
                to={`/cart-page`}
                className="px-10 py-3 S530:p-3 cursor-pointer bg-red-500 ml-5 flex items-center text-white rounded-lg"
              >
                <BiSolidCartDownload className="text-[30px] mr-3" />
                <span className="S530:hidden">Add To Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedPage;
