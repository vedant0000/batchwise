import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { useAuth } from "../../context/AuthContext"
import '../../styles/Styles.css';

const Topbar = () => {
  const { currentUser } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [openMenu, setOpenMenu] = useState(null); // 'filters' | 'announcements' | 'chat' | 'profile'
  const navigate = useNavigate();

  const { logout } = useAuth()

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const toggleMenu = (menu) => {
    setOpenMenu(prev => (prev === menu ? null : menu));
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">

        {/* LEFT */}
        <div className="navbar-left">
          <Link to="/" className="logo">
            🎓 <span className="logo-text">BatchWise</span>
          </Link>
        </div>

        {/* CENTER */}
        <div className="navbar-center">
          <form onSubmit={handleSearch} className="search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search posts, users, communities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>

        {/* RIGHT */}
        <div className="navbar-right">

          {/* Filters */}
          <div className="nav-item-wrapper">
            <button className="nav-icon-btn" onClick={() => toggleMenu('filters')}>
              🔍
            </button>
            {openMenu === 'filters' && (
              <div className="nav-dropdown">
                <h4>Filters</h4>
                <button>All Posts</button>
                <button>My Batch</button>
                <button>Announcements</button>
              </div>
            )}
          </div>

          {/* Announcements */}
          <div className="nav-item-wrapper">
            <button className="nav-icon-btn" onClick={() => toggleMenu('announcements')}>
              📢
            </button>
            {openMenu === 'announcements' && (
              <div className="nav-dropdown">
                <h4>Announcements</h4>
                <Link to="/announcements">View All</Link>
              </div>
            )}
          </div>

          {/* Chat */}
          <div className="nav-item-wrapper">
            <button className="nav-icon-btn" onClick={() => toggleMenu('chat')}>
              💬
            </button>
            {openMenu === 'chat' && (
              <div className="nav-dropdown">
                <h4>Chats</h4>
                <Link to="/chats">Open Chats</Link>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="nav-item-wrapper">
            <button className="profile-btn" onClick={() => toggleMenu('profile')}>
              {'0'}
            </button>
            {openMenu === 'profile' && (
              <div className="nav-dropdown">
                <div className="profile-info">
                  <strong>{currentUser.role}</strong>
                  <div>Batch {currentUser.batch}</div>
                </div>
                <Link to="/profile">Profile</Link>
                <Link to="/settings">Settings</Link>
                <button className="logout-btn" onClick={logout}>Logout</button>
              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Topbar;