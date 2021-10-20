import style from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
  return (
    <div>
      <div >
        <img className={style.image} src="https://w0.peakpx.com/wallpaper/35/22/HD-wallpaper-wet-brown-leaves-dark-aesthetic.jpg" />
      </div>
      <div className={style.content}>
      <div>ava</div>
      <div>
        description
      </div>
      </div>
    </div>
  );
};

export default ProfileInfo; 