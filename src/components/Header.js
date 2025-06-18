import { LOGO_URL } from "../utils/constants";
const Header = () => {
   return  <div className="header">
      <div>
       <img className="logo" src={LOGO_URL}/>
       </div>
       <div className="menuItems">
       <ul>
         <li>Home</li>
         <li>About</li>
         <li>Contact</li>
       </ul>
       </div>
     </div>
};

export default Header;