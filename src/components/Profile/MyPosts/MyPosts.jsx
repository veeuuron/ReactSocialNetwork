import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>New Post</div>
      <Post  message = "It`s my first post"/>
      <Post  message = "Hi, i`m from UA"/>
    </div>
  );
};

export default MyPosts;
