import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.drWhoWrapper}>
      <div className={styles.drWho}>- Dr. Who</div>
    </div>
  );
};

export default FrameComponent;
