import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>BatchWise</h2>

      <NavLink to="/">Home</NavLink>
      <NavLink to="/community">Community</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
      <NavLink to="/resources">Resources</NavLink>
      <NavLink to="/bookmarks">Bookmarks</NavLink>

      <div className="sidebar-footer">
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </aside>
  )
}