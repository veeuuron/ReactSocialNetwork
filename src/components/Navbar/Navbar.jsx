import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.nav_item}>
        <NavLink className={style.nav_link} activeClassName={style.active} to="/profile">Profile</NavLink>
      </div>
      <div className={style.nav_item}>
        <NavLink className={style.nav_link} activeClassName={style.active} to="/dialogs">Messages</NavLink>
      </div>
      <div className={style.nav_item}>
        <NavLink className={style.nav_link} activeClassName={style.active} to="/news">News</NavLink>
      </div>
      <div className={style.nav_item}>
        <NavLink className={style.nav_link} activeClassName={style.active} to="/music">Music</NavLink>
      </div>
      <div className={style.nav_settings}>
        <NavLink className={style.nav_link} activeClassName={style.active} to="/settings">Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
