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
      <div className={styles.eliasIsAWebDesignerAndFr}>
        <span>{`Elias is a `}</span>
        <span className={styles.webDesigner}>web designer</span>
        <span>{` and `}</span>
        <span className={styles.webDesigner}>front-end developer</span>
      </div>
      <div className={styles.heCraftsResponsiveWebsites}>
        He crafts responsive websites where technologies meet creativity
      </div>
      <div className={styles.button}>
        <div className={styles.live}>Contact me!!</div>
      </div>
      <div className={styles.logoGroup}>
        <img className={styles.logoIcon} alt="" src="../logo3.svg" />
        <img
          className={styles.imageRemovebgPreview2Icon}
          alt=""
          src="../imageremovebgpreview-21@2x.png"
        />
        <div className={styles.dots}>
          <div className={styles.ellipseParent}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-2315.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-2115.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-2219.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-2019.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3695.svg"
            />
          </div>
          <div className={styles.ellipseParent}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-2515.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-2615.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-2419.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-1976.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3696.svg"
            />
          </div>
          <div className={styles.ellipseParent}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-2915.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3015.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-2819.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-1977.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3697.svg"
            />
          </div>
          <div className={styles.ellipseParent}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3330.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3430.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3238.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-1978.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3698.svg"
            />
          </div>
          <div className={styles.ellipseParent}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3331.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3431.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3239.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-1979.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3699.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameChild25} />
        <div className={styles.currentlyWorkingOnPortfolio}>
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
