import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <a href="#!">LOGO</a>
      </div>
    </header>
  );
};

export default Header;
