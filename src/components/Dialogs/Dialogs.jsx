import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialog_items}>
        <div className={style.dialogs_title}>DIALOGS</div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/1" >Sasha</NavLink>
          </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/2">Tony</NavLink>
          </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/3">Oleg</NavLink>
          </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/4">Olexandra</NavLink>
          </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/5">Anetta</NavLink> 
          </div>
      </div>
      <div className={style.messages}>
        <div className={style.message}>
          Hi
        </div>
        <div className={style.message}>
          How are you?
        </div>
        <div className={style.message}>
          bye
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
