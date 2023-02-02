import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Burger.module.css";

const Burger: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/burger-open");
  }, [navigate]);

  return (
    <div className={styles.burger}>
      <div className={styles.header}>
        <div className={styles.logoParent} onClick={onFrameContainerClick}>
          <div className={styles.logo}>
            <div className={styles.union}>
              <div className={styles.unionChild} />
              <div className={styles.unionItem} />
              <div className={styles.unionInner} />
              <div className={styles.rectangleDiv} />
              <div className={styles.unionChild1} />
              <div className={styles.unionChild2} />
              <div className={styles.unionChild3} />
              <div className={styles.unionChild4} />
              <div className={styles.unionChild5} />
              <div className={styles.unionChild6} />
            </div>
          </div>
          <b className={styles.elias}>Elias</b>
        </div>
        <div
          className={styles.rectangleParent}
          onClick={onFrameContainer1Click}
        >
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <div className={styles.frameInner} />
        </div>
      </div>
      <div className={styles.eliasIsAContainer}>
        <span>{`Elias is a `}</span>
        <span className={styles.webDesigner}>web designer</span>
        <span>{` and `}</span>
        <span className={styles.webDesigner}>front-end developer</span>
      </div>
      <div className={styles.heCraftsResponsive}>
        He crafts responsive websites where technologies meet creativity
      </div>
      <div className={styles.button}>
        <div className={styles.live}>Contact me!!</div>
      </div>
      <div className={styles.logoGroup}>
        <img className={styles.logoIcon} alt="" src="../logo2.svg" />
        <img
          className={styles.imageRemovebgPreview2Icon}
          alt=""
          src="../imageremovebgpreview-2@2x.png"
        />
        <div className={styles.dots}>
          <div className={styles.ellipseParent}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-2312.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-2112.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-2217.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-2016.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3670.svg"
            />
          </div>
          <div className={styles.ellipseParent}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-2511.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-2611.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-2416.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-1964.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3671.svg"
            />
          </div>
          <div className={styles.ellipseParent}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-2911.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3011.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-2816.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-1965.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3672.svg"
            />
          </div>
          <div className={styles.ellipseParent}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3322.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3422.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3232.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-1966.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3673.svg"
            />
          </div>
          <div className={styles.ellipseParent}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3323.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3423.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3233.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-1967.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3674.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameChild25} />
        <div className={styles.currentlyWorkingOnContainer}>
          <span
            className={styles.currentlyWorkingOn}
          >{`Currently working on `}</span>
          <span className={styles.portfolio}>Portfolio</span>
        </div>
      </div>
    </div>
  );
};

export default Burger;
