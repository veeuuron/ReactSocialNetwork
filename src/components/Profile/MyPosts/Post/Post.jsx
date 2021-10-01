import style from "./Post.module.css";

const Post = (props) => {
  return ( 
    <div >
    {props.message}
    </div>
  )
};

export default Post;
