import { Link, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Link to="/">Home</Link> | <Link to="/">Blog</Link> |{""}
      <Link to="/about">About</Link>
      <Outlet />
    </>
  );
}

export default RootLayout;
