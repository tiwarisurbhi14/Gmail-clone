import { RiPencilFill } from "react-icons/ri";
import { MdInbox } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { RiSendPlane2Line } from "react-icons/ri";
import { MdOutlineDrafts } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setOpen } from "../redux/appSlice";


const sidebarItems = [
    {
      icon: <MdInbox size={"20px"} />,
      text: "Inbox",
    },
    {
      icon: <MdStarBorder size={"20px"} />,
      text: "Starred",
    },
    {
      icon: <IoMdTime size={"20px"} />,
      text: "Snoozed",
    },
    {
      icon: <RiSendPlane2Line size={"20px"} />,
      text: "Sent",
    },
    {
      icon: <MdOutlineDrafts size={"20px"} />,
      text: "Drafts",
    },
    {
      icon: <IoIosArrowDown size={"20px"} />,
      text: "More",
    },
  ];
const Sidebar = () => {
    const dispatch=useDispatch();

 
  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button onClick={()=>dispatch(setOpen(true))} className="bg-[#C1E7FE] flex gap-4 items-center rounded-2xl py-4 px-6 hover:shadow-md">
          <RiPencilFill size="24px" />
          <span className="text-[14px]">Compose</span>
        </button>
      </div>

      {sidebarItems.map((item, index) => {
        return (
          <div
            key={index}
            className="flex items-center bg- w-full py-1.5 px-7 hover:bg-gray-200 rounded-r-xl"
          >
            <div className="mr-3">{item.icon}</div>
            <div className="text-black text-[14px]">{item.text}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
