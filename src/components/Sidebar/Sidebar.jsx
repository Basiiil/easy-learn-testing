import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import styled from "./Sidebar.module.css";

function Sidebar({ path }) {
  return (
    <div className={styled.sidebar}>
      <ul className={styled.list}>
        {routes.map((route) => (
          <Link key={route.name} className={styled.link} to={route.path}>
            <li
              className={`${styled.item} ${
                path === route.path && styled.active
              }`}
            >
              {" "}
              {route.name}{" "}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
