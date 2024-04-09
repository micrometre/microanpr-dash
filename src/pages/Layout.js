import { Outlet, Link } from "react-router-dom";
import ThemeSwitcher from '../components/ThemeSwitcher';

const Layout = () => {
  return (
    <>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <ThemeSwitcher/>

          </li>
          <li>
            <Link to="/dashboard">DashBoard</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;