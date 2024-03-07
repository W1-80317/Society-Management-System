import React from 'react';
import ManIcon from '@mui/icons-material/Man';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Link } from "react-router-dom";
import "./sidebar.css"; // Import the CSS file for sidebar styles

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <HomeIcon />
                            Home
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <ul className="sidebarList">
                        <Link to="/about" className="link" style={{ textDecoration: 'none' }}>
                            <li className="sidebarListItem">
                                <ApartmentIcon />
                                About Us
                            </li>
                        </Link>
                        <Link to="/contact" className="link" style={{ textDecoration: 'none' }}>
                            <li className="sidebarListItem">
                                <ManIcon />
                                Contact Us
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}
