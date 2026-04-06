import { NavLink, Outlet } from 'react-router'
import { pageWrapper, navLinkClass, navLinkActiveClass, divider, headingClass } from '../styles/common'

function AdminDashboard() {
  return (
    <div className={pageWrapper}>
      <h1 className={headingClass}>Admin Dashboard</h1>
      
      {/* Admin Navigation */}
      <div className="flex gap-6 mb-6">
        <NavLink
          to="users"
          className={({ isActive }) => (isActive ? navLinkActiveClass : navLinkClass)}
        >
          Users List
        </NavLink>

        <NavLink
          to="authors"
          className={({ isActive }) => (isActive ? navLinkActiveClass : navLinkClass)}
        >
          Authors List
        </NavLink>
      </div>

      <div className={divider}></div>

      {/* Nested route content */}
      <Outlet />
    </div>
  )
}

export default AdminDashboard