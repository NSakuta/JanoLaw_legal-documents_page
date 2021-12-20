import { NavLink } from 'react-router-dom';

const activeColor = '#686868';

const Header = () => {
    return (
        <div>
            <header className="bd-header py-3 d-flex align-items-stretch border-bottom shadow z-ind-1">
                <div className="container-fluid d-flex align-items-center">
                    <h1 className="d-flex align-items-center fs-4  mb-0 logo">JANO<strong>LAW</strong></h1>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 m-auto">
                        <li>
                            <NavLink  style={({ isActive }) => ({color: isActive && activeColor})}
                                        to="/documents" 
                                        className="nav-link px-2 link-dark">Legal Documents
                            </NavLink>
                        </li>
                        <li>
                            <NavLink style={({ isActive }) => ({color: isActive && activeColor})} 
                                    to="/tips" 
                                    className="nav-link px-2 link-dark">Legal Tips</NavLink>
                        </li>
                        <li>
                            <NavLink style={({ isActive }) => ({color: isActive && activeColor})}
                                    to="/news" 
                                    className="nav-link px-2 link-dark">Legal News</NavLink>
                        </li>
                        <li>
                            <NavLink style={({ isActive }) => ({color: isActive && activeColor})}
                                    to="/myfiles" 
                                    className="nav-link px-2 link-dark">My Files</NavLink>
                        </li>
                        <li>
                            <NavLink style={({ isActive }) => ({color: isActive && activeColor})}
                                    to="/mydocuments" 
                                    className="nav-link px-2 link-dark">My Documents</NavLink>
                        </li>
                    </ul>
                    <ul className="nav nav-pills nav-flush flex-row mb-auto text-center">
                        <li className="nav-item">
                            <a href="/" className="nav-link border sm rounded-circle ms-3 buttonHeader" aria-current="page" title="Home" data-bs-toggle="tooltip" data-bs-placement="right">
                                <i className="far fa-bell fa-sm">
                                </i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link border sm rounded-circle ms-3 buttonHeader" aria-current="page" title="Home" data-bs-toggle="tooltip" data-bs-placement="right">
                                <i className="fas fa-search fa-sm">
                                </i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link border sm rounded-circle ms-3 buttonHeader" aria-current="page" title="Home" data-bs-toggle="tooltip" data-bs-placement="right">
                                <i className="fas fa-question fa-sm">
                                </i>
                            </a>
                        </li>
                        <li className="nav-item">
                        <a href="/" class="nav-link border rounded-circle ms-3 buttonFace p-0" title="Orders">
                            <img src="https://github.com/mdo.png" alt="mdo" width="40" height="40" class="rounded-circle"/>
                        </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link border sm rounded-circle ms-3 buttonHeader" aria-current="page" title="Home" data-bs-toggle="tooltip" data-bs-placement="right">
                                <i className="fas fa-sign-out-alt fa-sm">
                                </i>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header;