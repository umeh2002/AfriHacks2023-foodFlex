import { AiOutlineClose } from "react-icons/ai";
import DetailedProfile from "../components/DetailedProfile";
import Loans from "../components/Loans";

const HistoryPage = () => {
  return (
    <>
      <div className="bg-[#e7f6ff] w-full h-[100vh] flex justify-center items-center">
        <div className="w-[450px] overflow-hidden min-h-[100px] bg-white rounded-lg shadow-lg">
          <DetailedProfile />
          <div className="w-full p-3">
            {/* */}
            <div className="flex text-gray-500 justify-between items-center ">
              <div className="font-semibold ">Loan History*</div>
              <AiOutlineClose size={20} className="cursor-pointer" />
            </div>
            {/* */}
            <div className="w-full text-gray-500 text-[12px] px-2 flex items-center  border h-[30px] rounded mt-1">
              <div className="w-[10%]">S/N</div>
              <div className="w-[20%]">NGN</div>
              <div className="w-[25%]">Status</div>
              <div className="w-[25%]">BIN</div>
              <div className="w-[25%]">Method</div>
            </div>
            <Loans />
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
