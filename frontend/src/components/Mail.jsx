import { IoMdArrowBack, IoMdMore } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { IoArchiveOutline } from "react-icons/io5";
import { RiSpam2Line } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  MdArrowBackIosNew,
  MdArrowForwardIos,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
  MdOutlineMarkAsUnread,
  MdOutlineWatchLater,
} from "react-icons/md";

const Mail = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between  px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div
            onClick={() => navigate("/")}
            className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer"
          >
            <IoMdArrowBack size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <IoArchiveOutline size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <RiSpam2Line size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <RiDeleteBin6Line size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <MdOutlineMarkAsUnread size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <MdOutlineWatchLater size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <MdOutlineAddTask size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <MdOutlineDriveFileMove size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <IoMdMore size={"20px"} />
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <span className="text-[14px]">1-50</span>
          <MdArrowBackIosNew size={"10px"} />
          <MdArrowForwardIos size={"10px"} />
        </div>
      </div>

      <div className="h-[90vh] overflow-y-auto p-4">
        <div className=" flex justify-between bg-white items-center gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium">Subject</h1>
            <span className="text-sm rounded-md px-2 bg-gray-200">inbox</span>
          </div>
          <div className="flex-none text-gray-400 my-5 text-sm">
            <p>12 days ago</p>
          </div>
        </div>
        <div className="text-gray-500 text-sm">
            <h1>tiwarisurbhi45@gmail.com</h1>
            <span>to me</span>
        </div>
        <div className="my-10">
        <p>are you excited to build this project togrhter as a team i am up for it</p>

        </div>
      </div>
    </div>
  );
};

export default Mail;
