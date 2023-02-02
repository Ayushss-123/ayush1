import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Contacts.module.css";

const Contacts: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer24Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHeaderLinkContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.contacts}>
      <div className={styles.background}>
        <div className={styles.frameParent}>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="../ellipse-23.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-21.svg" />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-226.svg"
            />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" src="../ellipse-22.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-21.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-23.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" src="../ellipse-22.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-21.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-23.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" src="../ellipse-22.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-21.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-23.svg" />
          </div>
          <div className={styles.ellipseParent10}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" src="../ellipse-24.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-26.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-25.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" src="../ellipse-22.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-21.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-23.svg" />
          </div>
        </div>
        <div className={styles.backgroundChild} />
        <div className={styles.backgroundItem} />
      </div>
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.frameParent1}>
          <div className={styles.groupParent}>
            <div className={styles.groupContainer}>
              <div className={styles.eliasParent}>
                <b className={styles.elias}>Elias</b>
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
              </div>
              <div className={styles.webDesignerAnd}>
                Web designer and front-end developer based in Ukraine
              </div>
              <div className={styles.eliaseliasml}>elias@elias.ml</div>
            </div>
            <div className={styles.mediaParent}>
              <div className={styles.media}>Media</div>
              <img
                className={styles.groupChild}
                alt=""
                src="../group-221.svg"
              />
            </div>
          </div>
          <div className={styles.copyright2022Made}>
            © Copyright 2022. Made by Elias
          </div>
        </div>
      </div>
      <div className={styles.title}>
        <div className={styles.parent}>
          <div className={styles.div}>/</div>
          <div className={styles.contacts1}>contacts</div>
        </div>
        <div className={styles.whoAmI}>Who am i?</div>
      </div>
      <div className={styles.h2}>
        <div className={styles.supportMeHere}>#</div>
        <div className={styles.smallProjects}>all-media</div>
      </div>
      <div className={styles.media1}>
        <img className={styles.twitterIcon} alt="" src="../twitter.svg" />
        <div className={styles.ru}>@elias</div>
      </div>
      <div className={styles.media2}>
        <img className={styles.twitterIcon} alt="" src="../twitter.svg" />
        <div className={styles.ru}>@elias</div>
      </div>
      <div className={styles.contact}>
        <div className={styles.imInterestedInFreelanceOpWrapper}>
          <div className={styles.imInterestedIn}>
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.messageMeHereParent}>
            <div className={styles.div}>Message me here</div>
            <div className={styles.instanceParent}>
              <div className={styles.discordParent}>
                <img
                  className={styles.twitterIcon}
                  alt=""
                  src="../discord1.svg"
                />
                <div className={styles.ru}>Elias#1234</div>
              </div>
              <div className={styles.discordParent}>
                <img
                  className={styles.twitterIcon}
                  alt=""
                  src="../email1.svg"
                />
                <div className={styles.ru}>elias@elias.me</div>
              </div>
            </div>
          </div>
          <div className={styles.supportMeHereParent}>
            <div className={styles.supportMeHere}>Support me here</div>
            <div className={styles.copyright2022Made}>4149500120690030</div>
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.logoParent} onClick={onFrameContainer24Click}>
          <div className={styles.logo1}>
            <div className={styles.union1}>
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
          <b className={styles.ru}>Elias</b>
        </div>
        <div className={styles.headerLinkParent}>
          <div
            className={styles.headerLink}
            onClick={onHeaderLinkContainerClick}
          >
            <div className={styles.supportMeHere}>#</div>
            <div className={styles.smallProjects}>home</div>
          </div>
          <div className={styles.headerLink1}>
            <div className={styles.ru}>#</div>
            <div className={styles.copyright2022Made}>works</div>
          </div>
          <div className={styles.headerLink1}>
            <div className={styles.ru}>#</div>
            <div className={styles.copyright2022Made}>about-me</div>
          </div>
          <div className={styles.headerLink1}>
            <div className={styles.ru}>#</div>
            <div className={styles.copyright2022Made}>contacts</div>
          </div>
          <div className={styles.languageSwitcher}>
            <div className={styles.en}>EN</div>
            <img
              className={styles.languageSwitcherChild}
              alt=""
              src="../group-58.svg"
            />
            <div className={styles.ruParent}>
              <div className={styles.ru}>RU</div>
              <div className={styles.ru}>UA</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.media3}>
        <img
          className={styles.line10Stroke}
          alt=""
          src="../line-10-stroke1.svg"
        />
        <div className={styles.githubParent}>
          <img className={styles.twitterIcon} alt="" src="../github1.svg" />
          <img className={styles.twitterIcon} alt="" src="../dribble1.svg" />
          <img className={styles.twitterIcon} alt="" src="../figma1.svg" />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
