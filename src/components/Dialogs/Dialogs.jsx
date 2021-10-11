import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  var dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem id={d.id} name={d.name} />
  ));

  var messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialog_items}>
        <div className={style.dialogs_title}>DIALOGS</div>
        {dialogsElements}
      </div>
      <div className={style.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
