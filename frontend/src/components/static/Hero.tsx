import Header from "./Header"


const Hero = () => {
  return (
    <div className="w-full py-2 flex items-center justify-center bg-gradient-blue-pink flex-col">
        <Header/>
        <br/>
        <br/>
        <div className="w-[90%] h-full flex items-center justify-between">
            <div className="w-[60%]">
                <p className="text-[50px] max-md:text-[40px] font-bold text-white w-[60%] md:w-[80%] tracking-wider ">Groceries and Food items.</p>
                <p className="text-white text-[15px]">Get instant for urgent purchases.</p>
                <div className="mt-5">
                <button className="px-10 py-2 rounded-[20px] text-[13px] text-[white] font-semibold border-[1px] border-[#e97782] bg-[#e97782] hover:bg-[white] hover:border-[#e97782] transition-all duration-500 translate-x-(0.01) hover:text-[#e97782] mr-4">Register</button>
                <button className="px-10 py-2 rounded-[20px] text-[13px] text-[#e97782] font-semibold border-[1px] border-[#e97782] bg-white hover:bg-[#e97782] hover:border-[#e97782] transition-all duration-500 translate-x-(0.01) hover:text-white">Login</button>
                </div>
            </div>
            <div className="w-[40%] ">
                <img src="ddd" alt="HeroImage" />
            </div>
           
        </div>
    </div>
  )
}

export default Hero