import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const onlineStatus = useOnlineStatus();
  console.log("online status is -> " + onlineStatus);

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="menuItems">
        <ul>
          <li>Status : {onlineStatus ? "Online" : "Offline"}</li>
          <li>Home</li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <Link to="/contact"> Contact</Link>
          </li>
          <button>Login</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
