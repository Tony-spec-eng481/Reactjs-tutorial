import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-group">
        <h3 className="sidebar-group-title">Getting Started</h3>
        <ul>
          <li><NavLink to="/" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>Introduction</NavLink></li>
          <li><NavLink to="/installation" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>Installation of react</NavLink></li>
          <li><NavLink to="/ES6" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>React ES6 Features</NavLink></li>
          <li><NavLink to="/jsx" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>JSX</NavLink></li>
          <li><NavLink to="/components" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>Components</NavLink></li>
          <li><NavLink to="/functions-jsx" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>Functions</NavLink></li>
          {/* <li><NavLink to="/jsx-in-depth" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>JSX in Depth</NavLink></li> */}
        </ul>
      </div>
      
      <div className="sidebar-group">
        <h3 className="sidebar-group-title">Core Concepts</h3>
        <ul>
          <li><NavLink to="/state" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>State Management</NavLink></li>
          <li><NavLink to="/props" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>Props</NavLink></li>
          <li><NavLink to="/events" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>Event Handling</NavLink></li>
          <li><NavLink to="/hooks" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>Hooks</NavLink></li>
        </ul>
      </div>

      <div className="sidebar-group">
        <h3 className="sidebar-group-title">Advanced</h3>
        <ul>
          <li><NavLink to="/lists" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>Lists & Keys</NavLink></li>
          <li><NavLink to="/conditional" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>Conditional Rendering</NavLink></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
