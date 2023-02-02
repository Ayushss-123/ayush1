import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Projects.module.css";

const Projects: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer73Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHeaderLinkContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.projects}>
      <div className={styles.background}>
        <div className={styles.frameParent}>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="../ellipse-23.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-21.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-22.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-20.svg" />
            <img className={styles.frameChild} alt="" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="../ellipse-25.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-26.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-24.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-19.svg" />
            <img className={styles.frameChild} alt="" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="../ellipse-29.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-30.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-28.svg" />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-191.svg"
            />
            <img className={styles.frameChild} alt="" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="../ellipse-33.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-34.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-32.svg" />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-192.svg"
            />
            <img className={styles.frameChild} alt="" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="../ellipse-23.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-21.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-22.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-20.svg" />
            <img className={styles.frameChild} alt="" />
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-221.svg"
            />
            <img className={styles.frameChild} alt="" src="../ellipse-20.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-23.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-241.svg"
            />
            <img className={styles.frameChild} alt="" src="../ellipse-19.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-25.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-281.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-191.svg"
            />
            <img className={styles.frameChild} alt="" src="../ellipse-29.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-322.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-192.svg"
            />
            <img className={styles.frameChild} alt="" src="../ellipse-33.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-221.svg"
            />
            <img className={styles.frameChild} alt="" src="../ellipse-20.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-23.svg" />
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
          <div className={styles.projects1}>projects</div>
        </div>
        <div className={styles.listOfMy}>List of my projects</div>
      </div>
      <div className={styles.small}>
        <div className={styles.frameParent2}>
          <div className={styles.projectParent}>
            <div className={styles.project}>
              <img
                className={styles.projectChild}
                alt=""
                src="../rectangle-223@2x.png"
              />
              <div className={styles.htmlParent}>
                <div className={styles.html}>Discord.js</div>
                <div className={styles.html}>TS</div>
                <div className={styles.html}>JS</div>
                <div className={styles.flask}>Flask</div>
                <div className={styles.flask}>Flask</div>
                <div className={styles.flask}>Flask</div>
              </div>
              <div className={styles.htmlGroup}>
                <div className={styles.html}>HTML</div>
                <div className={styles.html}>SCSS</div>
                <div className={styles.html}>Python</div>
                <div className={styles.html}>Flask</div>
                <div className={styles.flask}>Flask</div>
                <div className={styles.flask}>Flask</div>
              </div>
              <div className={styles.chertnodesParent}>
                <div className={styles.chertnodes}>Bot boilerplate</div>
                <div className={styles.minecraftServersHosting}>
                  Start creating scalable discord.js bot with typescript in
                  seconds
                </div>
                <div className={styles.projectParent}>
                  <div className={styles.liveWrapper}>
                    <div className={styles.live}>{`Github <~>`}</div>
                  </div>
                  <div className={styles.demoWrapper}>
                    <div className={styles.live}>{`Cached >=`}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.project}>
              <img
                className={styles.projectChild}
                alt=""
                src="../rectangle-223@2x.png"
              />
              <div className={styles.htmlParent}>
                <div className={styles.html}>VUE</div>
                <div className={styles.html}>CSS</div>
                <div className={styles.html}>JS</div>
                <div className={styles.flask}>Flask</div>
                <div className={styles.flask}>Flask</div>
                <div className={styles.flask}>Flask</div>
              </div>
              <div className={styles.htmlGroup}>
                <div className={styles.html}>HTML</div>
                <div className={styles.html}>SCSS</div>
                <div className={styles.html}>Python</div>
                <div className={styles.html}>Flask</div>
                <div className={styles.flask}>Flask</div>
                <div className={styles.flask}>Flask</div>
              </div>
              <div className={styles.chertnodesParent}>
                <div className={styles.chertnodes}>My blog</div>
                <div className={styles.minecraftServersHosting}>
                  Front-end of my future blog website written in vue
                </div>
                <div className={styles.projectParent}>
                  <div className={styles.liveWrapper}>
                    <div className={styles.live}>{`Github <~>`}</div>
                  </div>
                  <div className={styles.demoWrapper}>
                    <div className={styles.live}>{`Cached >=`}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.project}>
              <img
                className={styles.projectChild}
                alt=""
                src="../rectangle-223@2x.png"
              />
              <div className={styles.htmlParent}>
                <div className={styles.html}>Figma</div>
                <div className={styles.flask}>CSS</div>
                <div className={styles.flask}>JS</div>
                <div className={styles.flask}>Flask</div>
                <div className={styles.flask}>Flask</div>
                <div className={styles.flask}>Flask</div>
              </div>
              <div className={styles.htmlGroup}>
                <div className={styles.html}>HTML</div>
                <div className={styles.html}>SCSS</div>
                <div className={styles.html}>Python</div>
                <div className={styles.html}>Flask</div>
                <div className={styles.flask}>Flask</div>
                <div className={styles.flask}>Flask</div>
              </div>
              <div className={styles.chertnodesParent}>
                <div className={styles.chertnodes}>Chess pro</div>
                <div className={styles.minecraftServersHosting}>
                  Figma landing page about service for viewing chess tournaments
                </div>
                <div className={styles.projectParent}>
                  <div className={styles.liveWrapper}>
                    <div className={styles.live}>{`Figma <~>`}</div>
                  </div>
                  <div className={styles.demoWrapper}>
                    <div className={styles.live}>{`Cached >=`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.projectParent}>
            <div className={styles.project}>
              <img
                className={styles.projectChild}
                alt=""
                src="../rectangle-223@2x.png"
              />
              <div className={styles.htmlParent}>
                <div className={styles.html}>Figma</div>
                <div className={styles.flask}>TS</div>
                <div className={styles.flask}>JS</div>
                <div className={styles.flask}>Flask</div>
                <div className={styles.flask}>Flask</div>
                <div className={styles.flask}>Flask</div>
              </div>
              <div className={styles.htmlGroup}>
                <div className={styles.html}>HTML</div>
                <div className={styles.html}>SCSS</div>
                <div className={styles.html}>Python</div>
                <div className={styles.html}>Flask</div>
                <div className={styles.flask}>Flask</div>
                <div className={styles.flask}>Flask</div>
              </div>
              <div className={styles.chertnodesParent}>
                <div className={styles.chertnodes}>Crash protect website</div>
                <div className={styles.minecraftServersHosting}>
                  Figma template for website about anti-raid, anti-crash discord
                  bot
                </div>
                <div className={styles.projectParent}>
                  <div className={styles.liveWrapper}>
                    <div className={styles.live}>{`Figma <~>`}</div>
                  </div>
                  <div className={styles.demoWrapper}>
                    <div className={styles.live}>{`Cached >=`}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.project}>
              <img
                className={styles.projectChild}
                alt=""
                src="../rectangle-223@2x.png"
              />
              <div className={styles.htmlParent}>
                <div className={styles.html}>HTML</div>
                <div className={styles.html}>CSS</div>
                <div className={styles.flask}>JS</div>
                <div className={styles.flask}>Flask</div>
                <div className={styles.flask}>Flask</div>
                <div className={styles.flask}>Flask</div>
              </div>
              <div className={styles.htmlGroup}>
                <div className={styles.html}>HTML</div>
                <div className={styles.html}>SCSS</div>
                <div className={styles.html}>Python</div>
                <div className={styles.html}>Flask</div>
                <div className={styles.flask}>Flask</div>
                <div className={styles.flask}>Flask</div>
              </div>
              <div className={styles.chertnodesParent}>
                <div className={styles.chertnodes}>CSS expirements</div>
                <div className={styles.minecraftServersHosting}>
                  Collection of my different little projects in css
                </div>
                <div className={styles.projectParent}>
                  <div className={styles.liveWrapper}>
                    <div className={styles.live}>{`Live <~>`}</div>
                  </div>
                  <div className={styles.demoWrapper}>
                    <div className={styles.live}>{`Cached >=`}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.project}>
              <img
                className={styles.projectChild}
                alt=""
                src="../rectangle-223@2x.png"
              />
              <div className={styles.htmlParent}>
                <div className={styles.html}>Lua</div>
                <div className={styles.html}>NeoVim</div>
                <div className={styles.flask}>JS</div>
                <div className={styles.flask}>Flask</div>
                <div className={styles.flask}>Flask</div>
                <div className={styles.flask}>Flask</div>
              </div>
              <div className={styles.htmlGroup}>
                <div className={styles.html}>HTML</div>
                <div className={styles.html}>SCSS</div>
                <div className={styles.html}>Python</div>
                <div className={styles.html}>Flask</div>
                <div className={styles.flask}>Flask</div>
                <div className={styles.flask}>Flask</div>
              </div>
              <div className={styles.chertnodesParent}>
                <div className={styles.chertnodes}>Web Dev nvim config</div>
                <div className={styles.minecraftServersHosting}>
                  Config for neovim perfect for web developer
                </div>
                <div className={styles.projectParent}>
                  <div className={styles.liveWrapper}>
                    <div className={styles.live}>{`Github <~>`}</div>
                  </div>
                  <div className={styles.demoWrapper}>
                    <div className={styles.live}>{`Cached >=`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.projectParent}>
            <div className={styles.project}>
              <img
                className={styles.projectChild}
                alt=""
                src="../rectangle-223@2x.png"
              />
              <div className={styles.htmlParent}>
                <div className={styles.html}>Python</div>
                <div className={styles.html}>Quart</div>
                <div className={styles.html}>HTML</div>
                <div className={styles.flask}>Flask</div>
                <div className={styles.flask}>Flask</div>
                <div className={styles.flask}>Flask</div>
              </div>
              <div className={styles.htmlGroup}>
                <div className={styles.html}>HTML</div>
                <div className={styles.html}>SCSS</div>
                <div className={styles.html}>Python</div>
                <div className={styles.html}>Flask</div>
                <div className={styles.flask}>Flask</div>
                <div className={styles.flask}>Flask</div>
              </div>
              <div className={styles.chertnodesParent}>
                <div className={styles.chertnodes}>Ooku</div>
                <div className={styles.minecraftServersHosting}>
                  Simple link shortener with auth
                </div>
                <div className={styles.projectParent}>
                  <div className={styles.liveWrapper}>
                    <div className={styles.live}>{`Live <~>`}</div>
                  </div>
                  <div className={styles.demoWrapper}>
                    <div className={styles.live}>{`Cached >=`}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.project}>
              <img
                className={styles.projectChild}
                alt=""
                src="../rectangle-223@2x.png"
              />
              <div className={styles.htmlParent}>
                <div className={styles.html}>Figma</div>
                <div className={styles.flask}>Quart</div>
                <div className={styles.flask}>HTML</div>
                <div className={styles.flask}>Flask</div>
                <div className={styles.flask}>Flask</div>
                <div className={styles.flask}>Flask</div>
              </div>
              <div className={styles.htmlGroup}>
                <div className={styles.html}>HTML</div>
                <div className={styles.html}>SCSS</div>
                <div className={styles.html}>Python</div>
                <div className={styles.html}>Flask</div>
                <div className={styles.flask}>Flask</div>
                <div className={styles.flask}>Flask</div>
              </div>
              <div className={styles.chertnodesParent}>
                <div className={styles.chertnodes}>School website</div>
                <div className={styles.minecraftServersHosting}>
                  Figma template website for my school
                </div>
                <div className={styles.projectParent}>
                  <div className={styles.liveWrapper}>
                    <div className={styles.live}>{`Figma <~>`}</div>
                  </div>
                  <div className={styles.demoWrapper}>
                    <div className={styles.live}>{`Cached >=`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.h2}>
          <div className={styles.live}>#</div>
          <div className={styles.smallProjects}>small-projects</div>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.logoParent} onClick={onFrameContainer73Click}>
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
          <b className={styles.html}>Elias</b>
        </div>
        <div className={styles.headerLinkParent}>
          <div
            className={styles.headerLink}
            onClick={onHeaderLinkContainerClick}
          >
            <div className={styles.live}>#</div>
            <div className={styles.smallProjects}>home</div>
          </div>
          <div className={styles.headerLink1}>
            <div className={styles.html}>#</div>
            <div className={styles.copyright2022Made}>works</div>
          </div>
          <div className={styles.headerLink1}>
            <div className={styles.html}>#</div>
            <div className={styles.copyright2022Made}>about-me</div>
          </div>
          <div className={styles.headerLink1}>
            <div className={styles.html}>#</div>
            <div className={styles.copyright2022Made}>contacts</div>
          </div>
          <div className={styles.languageSwitcher}>
            <div className={styles.en}>EN</div>
            <img className={styles.languageSwitcherChild} alt="" />
            <div className={styles.ruParent}>
              <div className={styles.html}>RU</div>
              <div className={styles.html}>UA</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.media1}>
        <img
          className={styles.line10Stroke}
          alt=""
          src="../line-10-stroke1.svg"
        />
        <div className={styles.githubParent}>
          <img className={styles.githubIcon} alt="" src="../github1.svg" />
          <img className={styles.githubIcon} alt="" src="../dribble1.svg" />
          <img className={styles.githubIcon} alt="" src="../figma1.svg" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
