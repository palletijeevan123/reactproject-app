import { NavLink, Outlet } from "react-router-dom";

function Services() {
  return (
    <div className="container py-5">

      {/* Title */}
      <h1 className="text-center mb-4">Our Services</h1>

      {/* Navigation Tabs */}
      <ul className="nav nav-pills justify-content-center mb-4">

        <li className="nav-item">
          <NavLink
            to="online"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            🌐 Online Services
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="offline"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            🏬 Offline Services
          </NavLink>
        </li>

      </ul>

      {/* Content Area */}
      <div className="card shadow p-4">
        <Outlet />
      </div>

    </div>
  );
}

export default Services;