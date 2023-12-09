import Carts from "../components/Carts";
import Headings from "../components/Headings";
import Logo from "../static/Logo";
import { TbShoppingCartCopy } from "react-icons/tb";
import MinCart from "../components/MinCart";
const CartPage = () => {
  return (
    <>
      <div className="w-full items-center flex flex-col justify-center min-h-[100vh] bg-[#e7f6ff]">
        <Logo clr="red" />
        <div className="w-[880px] S900:w-[95%] my-5 min-h-[200px] bg-white rounded-lg shadow-lg">
          {/*Cart Header*/}
          <div className="w-full h-[50px] border-b-2 p-5 flex justify-between items-center">
            <div className="flex items-center font-semibold">
              <div className="w-[5px] mr-3 h-[30px] rounded-md bg-red-500" />
              <p>Cart Items</p>
            </div>
            <div className="p-2 w-[150px] S425:w-[50px] flex items-center bg-red-500 hover:scale-[1.02] duration-300 rounded-md cursor-pointer text-white">
              <TbShoppingCartCopy size={25} className="" />
              <span className="S425:hidden ml-3"> Check Out</span>
            </div>
          </div>
          {/*Cart Header*/}
          <div className="flex justify-center flex-wrap">
            <MinCart />
            <MinCart />
            <MinCart />
            <MinCart />
          </div>
          <div className="w-full p-2 S900:hidden">
            <div className="border-[1px] text-[13px] min-h-[100px] border-[#e7e4e4] border-b-[0] rounded-lg w-full">
              <div className="flex flex-col">
                <Headings />
                <Carts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
