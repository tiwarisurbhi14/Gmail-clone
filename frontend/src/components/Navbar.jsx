import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";
import { TbListSearch } from "react-icons/tb";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import Avatar from "react-avatar";

const Navbar = () => {
  const user = false;
  return (
    <div className="flex items-center justify-between mx-3 h-16 py-2 ">
      <div className="flex items-center gap-10">
        <div className="flex items-center cursor-pointer">
          <div className="p-2 hover:bg-gray-200 rounded-full text-2xl text-gray-500">
            <GiHamburgerMenu />
          </div>
          <img
            className="w-7 mx-2"
            src="https://static.vecteezy.com/system/resources/previews/020/964/377/non_2x/gmail-mail-icon-for-web-design-free-png.png"
          ></img>
          <h1 className="text-[24px] text-gray-700 ">Gmail</h1>
        </div>
      </div>
      {user && (
        <>
          <div className="w-[50%] mr-60">
            <div className="flex items-center bg-[#E9F1FB] px-3 py-1 rounded-full">
              <div className="text-2xl hover:bg-gray-200 cursor-pointer rounded-full p-2 ">
                <IoSearchSharp />
              </div>
              <input
                className="rounded-full bg-gray-300 w-full bg-transparent outline-none px-1 text-black placeholder-gray-500"
                type="text"
                placeholder="Search mail"
              ></input>
              <div className="text-2xl hover:bg-gray-200 cursor-pointer rounded-full p-2 ">
                <TbListSearch />
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <div className="p-2 hover:bg-gray-200 rounded-full text-xl text-gray-500 cursor-pointer  ">
              <FaRegQuestionCircle />
            </div>
            <div className="p-2 hover:bg-gray-200 rounded-full text-xl text-gray-500 cursor-pointer ">
              <IoSettingsOutline />
            </div>
            <div className="p-2 hover:bg-gray-200 rounded-full text-xl text-gray-500 cursor-pointer ">
              <TbGridDots />
            </div>
            <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer ">
              <Avatar
                src="data:image/jpeg;base64,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"
                size="35"
                round={true}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
