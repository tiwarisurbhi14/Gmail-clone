import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { MdCropSquare, MdInbox } from "react-icons/md";
import { GoTag } from "react-icons/go";
import { IoRefresh } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import Emails from "./Emails";

const mailType = [
  {
    icon: <MdInbox size={"20px"} />,
    text: "Primary",
  },
  {
    icon: <GoTag size={"20px"} />,
    text: "Promotions",
  },
  {
    icon: <FaUserFriends size={"20px"} />,
    text: "Socials",
  },
];

const Inbox = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex-1 bg-white rounded-xl mx-5 ">
      <div className="flex justify-between items-center px-2 py-3 my-2">
        <div className="flex gap-1 items-center">
          <div className="flex">
            <div className="cursor-pointer rounded-md p-2 hover:bg-gray-200 ">
              <MdCropSquare size={"20px"} />
            </div>
            <div className="cursor-pointer rounded-md p-2 hover:bg-gray-200">
              <FaCaretDown size={"15px"} />
            </div>
          </div>
          <div className="cursor-pointer rounded-full p-2 hover:bg-gray-200">
            <IoRefresh size={"16px"} />
          </div>
          <div className="cursor-pointer rounded-full p-2 hover:bg-gray-200">
            <IoMdMore size={"20px"} />
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <span className="text-[14px]">1-50</span>
          <MdArrowBackIosNew size={"10px"} />
          <MdArrowForwardIos size={"10px"} />
        </div>
      </div>

      <div className="h-90vh overflow-y-auto">
        <div className="flex items-center gap-1">
          {mailType.map((item, index) => {
            return (
              <button
                onClick={() => setSelected(index)}
                key={index}
                className={`${
                  selected === index
                    ? "border-b-4 border-b-blue-600 text-blue-600"
                    : "border-b-4 border-b-transparent "
                } flex items-center gap-5 p-4 w-52 hover:bg-gray-200`}
              >
                {item.icon}
                <span>{item.text}</span>
              </button>
            );
          })}
        </div>
      </div>
      <Emails/>
    </div>
  );
};

export default Inbox;
