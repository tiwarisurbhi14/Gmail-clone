import { MdCropSquare, MdOutlineStarBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Email = () => {
  const navigate = useNavigate();
  const openMail = () => {
    navigate("/mail/:1234");
  };
  return (
    <div
      onClick={openMail}
      className="flex items-center justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer"
    >
      <div className="flex items-center gap-2">
        <div className="text-gray-400">
          <MdCropSquare size={"20px"} />
        </div>
        <div className="text-gray-400">
          <MdOutlineStarBorder size={"20px"} />
        </div>
        <div>
          <h1 className="font-semibold">surbhi is smart</h1>
        </div>
      </div>

      <div className="flex-1 ml-4">
        <p>
          how are you doing and how have you been i have been dying to meet you
          and see you later tonight
        </p>
      </div>
      <div className="flex-none text-gray text-sm">
        <p>12 days ago</p>
      </div>
    </div>
  );
};

export default Email;
