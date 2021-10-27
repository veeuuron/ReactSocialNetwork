import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

var  postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> );

var newPostElement = React.createRef();

var addPost = () =>{
  var text = newPostElement.current.value;
  props.addPost(text);
  text = newPostElement.current.value = '';
}
  return (
    <div className={style.content}>
      My posts
      <div>New Post</div>
        <div className={style.new_post}>
        <div className={style.new_post_text}>
        <textarea ref={newPostElement}></textarea>
        </div>
      
        <button onClick= { addPost }>Add Post</button>
        </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
