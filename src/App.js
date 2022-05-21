import { useEffect } from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import Test from "./Test";
import { Title } from "./Components";
import Bootstrap from "./Bootstrap";
import Tailwind from "./Tailwind";

function App() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      // analytici bilgilendir
    }
  }, []);

  return (
    <div className={styles.App}>
      <Title>{process.env.NODE_ENV} test</Title>
      <Title theme="dark">{process.env.NODE_ENV} test</Title>
      <p>{process.env.REACT_APP_API_URL}</p>
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

export default App;
