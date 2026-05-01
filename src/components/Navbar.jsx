import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import '../styles/components.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          ⚛️ <span>Florante's ReactJS</span>
        </Link>
      </div>
      <div className="search-container">
        <Search className="search-icon" size={18} />
        <input 
          type="text" 
          className="search-input" 
          placeholder="Search documentation..." 
        />
      </div>
    </nav>
  );
};

export default Navbar;
