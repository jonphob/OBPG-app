import { NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useGreeting } from "../hooks/useGreeting";


// styles & icons
import "./Sidebar.css";
import ViewFigIcon from '../assets/viewFigs.svg'
import AddIcon from "../assets/add_icon.svg";
import DashboardIcon from "../assets/dashboard_icon.svg";
import Avatar from "./Avatar";
import userIcon from '../assets/personIcon.svg'

export default function Sidebar() {

    const greeting = useGreeting()
    const { user } = useAuthContext()
    
    
    return (
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="user">
            <Avatar src={userIcon} />
            <p>
              {greeting}, {user.displayName}
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
                  <span>Add New Learning</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/addRxFigures">
                  <img src={AddIcon} alt="add project icon" />
                  <span>Add Rx Figures</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/viewRxFigures">
                  <img src={ViewFigIcon} alt="view figures icon" />
                  <span>View Rx Figures</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/addServiceFigures">
                  <img src={AddIcon} alt="add project icon" />
                  <span>Add Service Figures</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
}
