import { FunctionComponent } from "react";
import styles from "./Button.module.css";

const Button: FunctionComponent = () => {
  return (
    <div className={styles.button}>
      <div className={styles.live}>Contact me!!</div>
    </div>
  );
};

export default Button;
