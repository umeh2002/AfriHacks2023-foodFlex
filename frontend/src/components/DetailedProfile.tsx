const DetailedProfile = () => {
  return (
    <>
      <div className="w-full h-[125px] flex p-3 bg-red-500">
        <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center text-red-500 font-semibold text-[50px] bg-white">
          C
        </div>
        <div className="w-[80%] h-full text-white ml-3">
          <div className="flex justify-between">
            <div className="capitalize font-semibold text-[20px] S425:text-[18px]">
              Chidera Okoro
            </div>
            <div className="text-[12px] text-red-500 bg-white rounded-md px-5 py-2 font-semibold cursor-default">
              Verified
            </div>
          </div>
          <div className="text-[11.3px] leading-3 S425:text-[8px]">
            cfoonyemmemme@gmail.com
          </div>
          <div className="text-[11.3px] leading-5">+2348136039861</div>
          <div className="flex text-center">
            <div className="mr-10">
              <div className="text-[20px] font-semibold S425:text-[15px]">
                ₦3, 000.00
              </div>
              <div className="text-[10px]">Wallet Balance</div>
            </div>
            <div>
              <div className="text-[20px] font-semibold S425:text-[15px]">
                -3, 000.00
              </div>
              <div className="text-[10px]">Loaned Amount</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedProfile;
