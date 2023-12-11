

const Header = () => {
  return (
    <div className="w-full h-[60px] flex items-center justify-center ">
        <div className="w-[90%] h-full flex items-center justify-between">
            <div>
                <p className="text-[30px] font-semibold text-white">FoodFlex</p>
            </div>
            <button className="px-5 py-2 rounded-[20px] text-[13px] text-[#e97782] font-semibold border-[1px] border-[#e97782] bg-white hover:bg-[#e97782] hover:border-white transition-all duration-500 translate-x-(0.01) hover:text-white">Request for loan</button>
        </div>
    </div>
  )
}

export default Header