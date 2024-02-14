import { NavLink, Outlet } from "react-router-dom";
import "../styles/index.css";

function RootLayout() {
  return (
    <>
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
        spacing
        to="/"
      >
        Home
      </NavLink>
      |
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
        to="/blog"
      >
        Blog
      </NavLink>
      |
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
        to="/about"
      >
        About
      </NavLink>
      <Outlet />
    </>
  );
}

export default RootLayout;
