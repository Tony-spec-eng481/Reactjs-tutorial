import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-wrapper">
        <Sidebar />
        <main className="content-area">
          <Outlet />
          <footer style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid var(--border-light)', color: 'var(--text-muted)', fontSize: '0.875rem', textAlign: 'center' }}>
            <p>✨ Created for modern React learners — Florante's ReactJS Tutorial</p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Layout;
