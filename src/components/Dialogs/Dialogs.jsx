import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css";

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

const Message = (props) => {
  return <div className={style.message}>{props.message}</div>;
};

const Dialogs = () => {
  
  var dialogsData = [
    {id: "1", name: "Sasha"},
    {id: "2", name: "Tony"},
    {id: "3", name: "Sashka"},
    {id: "4", name: "Annetta"},
    {id: "5", name: "Vasya"},
  ]

var messagesData = [
  {message: "Hi"},
  {message: "How are you?"},
  {message: "bye"}
]

  return (
    <div className={style.dialogs}>
      <div className={style.dialog_items}>
        <div className={style.dialogs_title}>DIALOGS</div>
        <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
        <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
        <DialogItem id={dialogsData[2].id} name={dialogsData[2].name} />
        <DialogItem id={dialogsData[3].id} name={dialogsData[3].name} />
        <DialogItem id={dialogsData[4].id} name={dialogsData[4].name} />
      </div>
      <div className={style.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
      </div>
    </div>
  );
};

export default Dialogs;
