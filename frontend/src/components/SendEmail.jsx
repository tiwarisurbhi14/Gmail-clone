import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { setOpen } from "../redux/appSlice";
import { useDispatch } from "react-redux";

const SendEmail = () => {
    const {open} =useSelector(store=>store.app)
    const dispatch=useDispatch();
  return (
    <div className={` ${open ? 'block' : 'hidden' } bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}>
      <div className="flex items-center justify-between px-3 py-2 bg-[#F2F6FC]">
        <h1 className="text-sm">New Message</h1>
        <div onClick={()=>dispatch(setOpen(false))} className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
          <RxCross2 size="16px" />
        </div>
      </div>
      <form action="" className="flex flex-col p-3 gap-2">
        <input type="text" placeholder="To" className="outline-none py-1 border-b-[1px] border-gray-300" />
        <input type="text" placeholder="Subject" className="outline-none py-1 border-b-[1px] border-gray-300" />
        <textarea rows={"10"} cols={"30"} className="outline-none py-1" />
      </form>
    </div>
  );
};

export default SendEmail;
