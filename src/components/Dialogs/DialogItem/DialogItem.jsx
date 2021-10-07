import { NavLink } from "react-router-dom";
import style from "./../Dialogs.module.css";

const DialogItem = (props) => {
  var path = "/dialogs/" + props.id;
  return (
    <div className={style.dialog}>
      <NavLink className={style.dialog_link} to={path}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;