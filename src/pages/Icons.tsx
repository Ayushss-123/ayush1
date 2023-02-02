import { FunctionComponent } from "react";
import styles from "./Icons.module.css";

const Icons: FunctionComponent = () => {
  return (
    <div className={styles.icons}>
      <img className={styles.githubIcon} alt="" src="../github.svg" />
      <img className={styles.githubIcon} alt="" src="../twitter2.svg" />
      <img className={styles.githubIcon} alt="" src="../linkedin.svg" />
      <img className={styles.githubIcon} alt="" src="../discord.svg" />
      <img className={styles.githubIcon} alt="" src="../telegram.svg" />
      <img className={styles.githubIcon} alt="" src="../email.svg" />
      <img className={styles.githubIcon} alt="" src="../figma.svg" />
      <img className={styles.githubIcon} alt="" src="../dribble.svg" />
      <img className={styles.githubIcon} alt="" src="../card.svg" />
      <img className={styles.githubIcon} alt="" src="../bitcoin.svg" />
    </div>
  );
};

export default Icons;
