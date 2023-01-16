import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.ellipseParent}>
      <img className={styles.frameChild} alt="" src="../ellipse-1.svg" />
    </div>
  );
};

export default FrameComponent;
