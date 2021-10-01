import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={style.content}>
      <div>
        <img src="https://w0.peakpx.com/wallpaper/35/22/HD-wallpaper-wet-brown-leaves-dark-aesthetic.jpg" />
      </div>
      <div>ava</div>
      <MyPosts/>
    </div>
  );
};

export default Profile;
