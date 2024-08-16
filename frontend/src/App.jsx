// import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Inbox from "./components/Inbox";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Mail from "./components/Mail";
import SendEmail from "./components/SendEmail";
import Login from "./components/Login"
import Signup from "./components/Signup";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  }
]);

const App = () => {
  return (
    <div className="bg-[#F5F8FC] h-screen p-0 m-0">
      <Navbar />
      <RouterProvider router={appRouter} />
      <div className="bottom-0 absolute w-[30%] right-20 z-10">
        <SendEmail />
      </div>
    </div>
  );
};

export default App;
