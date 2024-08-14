import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Inbox from "./components/Inbox";

const App = () => {
  return (
    <div className="bg-[#F5F8FC] h-screen p-0 m-0">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Inbox />
      </div>
    </div>
  );
};

export default App;
