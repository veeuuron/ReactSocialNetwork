import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

  var postData = [
    {message: "It`s my first post", likesCount: "12"},
    {message: "Hi, i`m from UA", likesCount: "15"}
  ]

  return (
    <div className={style.content}>
      My posts
      <div>New Post</div>
      <Post  message = {postData[0].message} likesCount={postData[0].likesCount} />
      <Post  message = {postData[1].message} likesCount={postData[1].likesCount} />
    </div>
  );
};

export default MyPosts;
