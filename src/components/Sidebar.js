import { NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useGreeting } from "../hooks/useGreeting";


// styles & icons
import "./Sidebar.css";
import AddIcon from "../assets/add_icon.svg";
import DashboardIcon from "../assets/dashboard_icon.svg";
import Avatar from "./Avatar";

export default function Sidebar() {

    const greeting = useGreeting()
    const { user } = useAuthContext()
    console.log(user.displayName)
    
    return (
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="user">
            <Avatar src={user.photoURL} />
            <p>
              {greeting} {user.displayName}
            </p>
          </div>
          <nav className="links">
            <ul>
              <li>
                <NavLink to="/">
                  <img src={DashboardIcon} alt="dashboard icon" />
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/create">
                  <img src={AddIcon} alt="add project icon" />
                  <span>New Project</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/addRxFigures">
                  <img src={AddIcon} alt="add project icon" />
                  <span>Add Rx Figures</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
}
