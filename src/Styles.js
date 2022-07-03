import React from "react";
import { Title } from "./Components";
import Bootstrap from "./Bootstrap";
import Tailwind from "./Tailwind";
import logo from "./logo.svg";
import styles from "./App.module.css";
import Test from "./Test";

function Styles() {
  return (
    <div className={styles.App}>
      <Title>{process.env.NODE_ENV} git config user.email test</Title>
      <Title theme="dark">{process.env.NODE_ENV} test</Title>
      <p className="env">
        {process.env.REACT_APP_API_URL}
        <span>test</span>
      </p>
      <Test />
      {process.env.NODE_ENV === "production" && (
        <>
          <img src="logo192.png" alt="" />
          <img src={logo} alt="" />
        </>
      )}
      <Bootstrap />
      <Tailwind />
    </div>
  );
}

export default Styles;
