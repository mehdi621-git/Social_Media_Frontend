import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header";
import Footer from "./footer";
import SideBar from "./sidebar";

import PostProvider from "./context-app";

import { Outlet } from "react-router-dom";




function App() {
   
  return (
    <PostProvider>
      <div className="main-container">
        <SideBar></SideBar>
        <div className="head-foot-cont">
          <Header></Header>
         <Outlet/>
          <Footer></Footer>
        </div>
      </div>
      </PostProvider>
   
  );
}

export default App;
