import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import styles from "./Quote.module.css";

const Quote: FunctionComponent = () => {
  return (
    <div className={styles.quote}>
      <div className={styles.withGreatPowerComesGreatE}>
        With great power comes great electricity bill
      </div>
      <div className={styles.wrapper}>
        <img className={styles.icon} alt="" src="../.svg" />
      </div>
      <FrameComponent />
      <div className={styles.container}>
        <img className={styles.icon} alt="" src="../.svg" />
      </div>
    </div>
  );
};

export default Quote;
