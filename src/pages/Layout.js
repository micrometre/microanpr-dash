import { Outlet, Link } from "react-router-dom";
import ThemeSwitcher from '../components/ThemeSwitcher';

const Layout = () => {
  return (
    <>

      <nav>
        <ul>
          <li>
            <Link to="/">DashBoard</Link>
          </li>
          <li>
            <Link to="/dashboard">home</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;