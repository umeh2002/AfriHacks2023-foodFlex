import { Link } from "react-router-dom";
import Logo from "../static/Logo";

const RegisterPage = () => {
  const BVNInput = (e: any) => {
    const input = e.target;
    const inputValue = input.value;

    input.value = inputValue.replace(/\D/g, "");
  };

  const validateInput = (e: any) => {
    const input = e.target;
    let inputValue = input.value;
    inputValue = inputValue.replace(/\D/g, "");

    inputValue = inputValue.replace(/^0+/, "");

    input.value = inputValue;
  };
  return (
    <>
      <div className="bg-[#f0f1f7] w-[100%] min-h-[100vh] py-5 flex justify-center flex-col items-center ">
        <Logo />
        <div className="w-[400px] min-h-[500px] bg-[white] mt-[20px] rounded p-6 ">
          <div className="text-[16px] mt-[10px] text-center font-semibold text-[#1E1E1E]">
            Register
          </div>
          <div className="text-[10px] text-gray-500 text-center ">
            Welcome and Join us by creating a free account
          </div>

          <div className=" mt-[20px] ">
            <div className=" text-[12px] font-semibold text-[#1E1E1E] ">
              User Name
            </div>
            <input
              className="w-[100%] text-[12px] mt-[3px]  h-[50px]  p-5 outline-none border rounded "
              placeholder="Tender Jecinta"
              type="text"
            />
          </div>
          <div className=" mt-[15px] ">
            <div className=" text-[12px] font-semibold text-[#1E1E1E] ">
              Email Address
            </div>
            <input
              className="w-[100%] text-[12px] mt-[3px] h-[50px]  p-5 outline-none border rounded "
              placeholder="tenderjecinta@gmail.com"
              type="text"
            />
          </div>
          <div className="mt-[15px] ">
            <div className=" text-[12px] font-semibold text-[#1E1E1E] ">
              Password
            </div>
            <input
              className="w-[100%] text-[12px] mt-[3px] h-[50px]  p-5 outline-none border rounded "
              placeholder="******************"
              type="password"
            />
          </div>
          <div className="mt-[15px] ">
            <div className=" text-[12px] font-semibold text-[#1E1E1E] ">
              Confirm Password
            </div>
            <input
              className="w-[100%] text-[12px] mt-[3px] h-[50px]  p-5 outline-none border rounded "
              placeholder="******************"
              type="password"
            />
          </div>
          <div className="mt-[15px] ">
            <div className=" text-[12px] font-semibold text-[#1E1E1E]">BVN</div>
            <input
              className="w-[100%] text-[12px] mt-[3px] h-[50px]  p-5 outline-none border rounded "
              placeholder="90263164223648294712"
              type="text"
              onInput={BVNInput}
            />
          </div>
          <div className="mt-[15px] ">
            <div className=" text-[12px] font-semibold text-[#1E1E1E] ">
              Phone Number
            </div>
            <input
              className="w-[100%] text-[12px] mt-[3px] h-[50px]  p-5 outline-none border rounded "
              placeholder="+2349123456789 "
              type="text"
              onInput={validateInput}
            />
          </div>
          <div className="w-[100%] h-[50px] text-[white] bg-red-500 rounded flex justify-center items-center font-medium text-[15px] mt-[15px] cursor-pointer hover:scale-[1.02] transition-all duration-700 overflow-hidden ">
            <div>Register</div>
          </div>
          <div className=" w-[100%] mt-[5px] flex justify-center items-center gap-2  ">
            <div className="text-[10px] text-gray-500 text-center">
              Already have an account
            </div>
            <Link to="/sign-in">
              <div className="text-[13px] text-red-600 font-semibold">
                Sign in
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
