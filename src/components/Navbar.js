import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

// styles & images
import './Navbar.css'
import OBP from '../assets/OBP.svg'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Navbar() {

    const { logout, isPending } = useLogout()
    const { user } = useAuthContext()
    return (
      <div className="navbar">
        <ul>
          <li className="logo">
            <img src={OBP} alt="logo" />
            <span>O'Briens Pharmacy Group</span>
          </li>
          {!user && (
            <>
                <li><Link to="/login">Login</Link></li>
                {/* <li><Link to="/signup">Sign Up</Link></li> */}
            </>)}
          {user && (
          <li>
              {!isPending && <button className="btn"onClick={logout}>Log Out</button>}
              {isPending && <button className="btn"disabled>Logging Out...</button>}
          </li>)}
        </ul>
      </div>
    );
}
