import { Menu } from '@mui/icons-material';
import React, { useState } from 'react';
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2><img src="/assets/ajoLogo.png" alt="" /></h2>
      </div>
      <div className={`menu ${open ? "show" : ""}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Solution</a></li>
        </ul>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i>{open ?<MenuOpenIcon />: <MenuIcon />}</i>
      </div>
    </nav>
  );
}

export default Navbar;
