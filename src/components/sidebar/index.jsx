import { RiHome7Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { MdListAlt, MdOutlineLogout } from "react-icons/md";
import { TbShoppingBagCheck } from "react-icons/tb";
import "./index.css";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <aside>
      <div className="logo-info">
        <p>
          Get <span className="primary">Sorted</span>
        </p>
      </div>
      <div className="nav-links">
        <NavLink exact="true" to="/" activeclassname="active">
          <div className="nav-link ">
            <RiHome7Line className="nav-icon" />
            <p>Dashboard</p>
          </div>
        </NavLink>

        <NavLink to={"blog"} activeclassname="active">
          <div className="nav-link">
            <MdListAlt className="nav-icon" />
            <p>Blogs</p>
          </div>
        </NavLink>

        <NavLink to={"users"} activeclassname="active">
          <div className="nav-link">
            <FaUsers className="nav-icon" />
            <p>Users</p>
          </div>
        </NavLink>

        {/* <Link to={"/products"}> */}
        <div className="nav-link">
          <TbShoppingBagCheck className="nav-icon" />
          <p>Products</p>
        </div>
        {/* </Link> */}
        <div className="nav-link last-item">
          <MdOutlineLogout className="nav-icon" />
          <p>Logout</p>
        </div>
      </div>
    </aside>
  );
};

export default Index;
