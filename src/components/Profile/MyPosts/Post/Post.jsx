import style from "./Post.module.css";

const Post = (props) => {
  return ( 
    <div>
     <div>
       
    {props.message}
    </div>
    <div>
      {props.likesCount} likes
    </div>

    </div>
  )
};

export default Post;
