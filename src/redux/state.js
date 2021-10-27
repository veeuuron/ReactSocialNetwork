import { rerenderEntireTree } from "../render";

var state = {
  profilePage: {
    posts: [
      { message: "It`s my first post", likesCount: "12" },
      { message: "Hi, i`m from UA", likesCount: "15" },
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: "1", name: "Sasha" },
      { id: "2", name: "Tony" },
      { id: "3", name: "Sashka" },
      { id: "4", name: "Annetta" },
      { id: "5", name: "Vasya" },
    ],
    messages: [
      { message: "Hi" },
      { message: "How are you?" },
      { message: "bye" },
    ]
  }
};

export let addPost = (postPost) => {
  let newPost = {
    id:5,
    message:postPost,
    likesCount: 10
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export let addMessage = (postMessage) => {
  let newMessage = {
    message:postMessage
  };
  state.dialogsPage.messages.push(newMessage);
}

export default state;
