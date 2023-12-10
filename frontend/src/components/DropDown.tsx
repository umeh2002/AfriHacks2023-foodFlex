import { IoMdCart, IoMdLogOut } from "react-icons/io";

const DropDown = () => {
  return (
    <>
      <div className="flex items-center cursor-pointer">
        <div className="text-[20px] font-bold mr-2 w-[20px] h-[20px] bg-red-600 p-4 flex justify-center items-center rounded-full text-green-300">
          C
        </div>
        <div className="text-[13px]">John Thomas</div>
      </div>
      <div className="flex mt-3 items-center w-full justify-center gap-5">
        <div className="cursor-pointer">
          <IoMdCart size={20} />
        </div>
        <div className="cursor-pointer">
          <IoMdLogOut size={20} />
        </div>
      </div>
    </>
  );
};

export default DropDown;
