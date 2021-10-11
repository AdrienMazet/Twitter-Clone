import { ReactChild } from "react";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../styles/layout/layout.css";

type LayoutProps = { children: ReactChild };

const Layout = ({ children }: LayoutProps) => (
  <div className="layout">
    <div className="layout-header ">
      <FaTwitter className="layout-logo" size="2em" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
    {children}
  </div>
);

export default Layout;
