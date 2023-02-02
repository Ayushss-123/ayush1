import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BurgerOpen.module.css";

const BurgerOpen: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/burger");
  }, [navigate]);

  const onNavLinkContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNavLinkContainer1Click = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  const onNavLinkContainer2Click = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <div className={styles.burgerOpen}>
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
      <div className={styles.navLinkParent}>
        <div className={styles.navLink} onClick={onNavLinkContainerClick}>
          <div className={styles.div}>#</div>
          <div className={styles.home}>home</div>
        </div>
        <div className={styles.navLink} onClick={onNavLinkContainer1Click}>
          <div className={styles.elias}>#</div>
          <div className={styles.works}>works</div>
        </div>
        <div className={styles.navLink} onClick={onNavLinkContainer2Click}>
          <div className={styles.elias}>#</div>
          <div className={styles.works}>about-me</div>
        </div>
        <div className={styles.navLink3}>
          <div className={styles.elias}>#</div>
          <div className={styles.works}>contacts</div>
        </div>
        <div className={styles.languageSwitcher}>
          <div className={styles.en}>EN</div>
          <img
            className={styles.languageSwitcherChild}
            alt=""
            src="../group-583.svg"
          />
          <div className={styles.ruParent}>
            <div className={styles.elias}>RU</div>
            <div className={styles.elias}>UA</div>
          </div>
        </div>
      </div>
      <div className={styles.githubParent}>
        <img className={styles.githubIcon} alt="" src="../github4.svg" />
        <img className={styles.githubIcon} alt="" src="../dribble4.svg" />
        <img className={styles.githubIcon} alt="" src="../figma4.svg" />
      </div>
    </div>
  );
};

export default BurgerOpen;
