import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

var  postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> );

  return (
    <div className={style.content}>
      My posts
      <div>New Post</div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
