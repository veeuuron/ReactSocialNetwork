import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

var posts = [
  { message: "It`s my first post", likesCount: "12" },
  { message: "Hi, i`m from UA", likesCount: "15" },
];
var dialogs = [
  { id: "1", name: "Sasha" },
  { id: "2", name: "Tony" },
  { id: "3", name: "Sashka" },
  { id: "4", name: "Annetta" },
  { id: "5", name: "Vasya" },
];
var messages = [
  { message: "Hi" },
  { message: "How are you?" },
  { message: "bye" },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
