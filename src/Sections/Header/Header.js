import './Header.css'
import logo from '../../assets/images/logo.png'
import NavItem, {NavItemDropdown} from "../../components/NavItem/NavItem";
import {Link} from "react-router-dom";

export const Header = (props) => {
    return (
        <>
            <div className="navbar navbar-expand-md navbar-dark cyborg-navbar">
                <div className="container">
                    <Link to='/' className="navbar-brand">
                        <img src={logo} alt="logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#mainmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mainmenu">
                        <ul className="navbar-nav ms-auto">
                            <NavItem>
                                <Link to='/' className="nav-link">Home</Link>
                            </NavItem>
                            <NavItemDropdown>
                                <a href="src/Sections/Header/Header#" className="nav-link dropdown-toggle"
                                   data-bs-toggle="dropdown">Details</a>
                                <ul className="dropdown-menu">
                                    <li><Link to='/browse' className="dropdown-item">Browse</Link></li>
                                </ul>
                            </NavItemDropdown>
                            <NavItem><Link to="/streams" className="nav-link">Streams</Link></NavItem>
                            <NavItem> <Link to='/profile' className="nav-link">Profile</Link></NavItem>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}