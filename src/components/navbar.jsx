
import "../styles/navbar-style.css"
export default function Navbar()
{
    return (
        <nav className="navbar">
            <div className="initial-first">
                <div className="navbar-brand">
                    <img src="../images/logo.svg" alt="" className="brand-logo"/>
                </div>
                <div className="navbar-list">
                    <ul className="navbar-items">
                        <li className="nav-item feature-dropdown">Features <img src="../images/icon-arrow-down.svg" className="arrow" alt="" /> 
                            <ul className="feature-menu">
                                <li><img src="../images/icon-todo.svg" alt="" className="feature-menu-icon"/> TO do list</li>
                                <li><img src="../images/icon-calendar.svg" alt="" className="feature-menu-icon"/> Calender</li>
                                <li><img src="../images/icon-reminders.svg" alt="" className="feature-menu-icon"/> Reminders </li>
                                <li><img src="../images/icon-planning.svg" alt="" className="feature-menu-icon"/>Planning</li>
                            </ul>
                        </li>
                        <li className="nav-item">Company <img src="../images/icon-arrow-down.svg" className="arrow" alt="" /></li>
                        <li className="nav-item">Careers</li>
                        <li className="nav-item">About</li>
                    </ul>
                </div>
            </div>
            <div className="initial-second">
                <a href="#">Login</a>
                <button type="button" className="register-button">Register</button>
            </div>
        </nav>  
    )
}