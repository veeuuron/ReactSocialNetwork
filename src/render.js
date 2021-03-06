import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { addMessage, addPost } from "./redux/state";


export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} addMessage={addMessage} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}


