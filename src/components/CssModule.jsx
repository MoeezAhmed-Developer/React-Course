import style from "../css/css-module.module.css";

const CssModule = () => {
  return (
    <div>
      <h1>Style with Css Module in React js</h1>
      <div className={style.profile}>
        <h4>Hasan Raza</h4>
        <p>Sells Man</p>
        <p>hasan@test.com</p>
        <p>Karachi Pakistan</p>
        <a href="#" className={style.anchor}>
          Learn more
        </a>
      </div>
    </div>
  );
};

export default CssModule;
