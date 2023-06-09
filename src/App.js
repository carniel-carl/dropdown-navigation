import { useEffect, useState } from "react";
import "./App.css";
import BackDrop from "./component/BackDrop/BackDrop";
import Main from "./component/Main/Main";
import NavBar from "./component/NavBar/NavBar";
import SideBar from "./component/SideBar/SideBar";

function App() {
  const [showSidebar, setShowSideBar] = useState(false);

  const toggleSideBar = () => {
    setShowSideBar((prev) => !prev);
  };

  useEffect(() => {
    showSidebar
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [showSidebar]);

  return (
    <>
      <NavBar opensidebar={toggleSideBar} />
      <BackDrop showsidebar={showSidebar} closesidebar={toggleSideBar} />
      <SideBar open={showSidebar} close={toggleSideBar} />
      <Main />
    </>
  );
}

export default App;
