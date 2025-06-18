
import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";




const MainContainer = () => {
   return  <div className="mainContainer">
      <Header/>
      <Body/>
     </div>

};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MainContainer/>);