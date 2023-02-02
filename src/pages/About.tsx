import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./About.module.css";

const About: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer86Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHeaderLinkContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.about}>
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
            <img className={styles.frameChild} alt="" src="../ellipse-25.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-26.svg" />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-248.svg"
            />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="../ellipse-29.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-30.svg" />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-288.svg"
            />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="../ellipse-33.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-34.svg" />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-3216.svg"
            />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
          </div>
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
          <div className={styles.aboutMe}>about-me</div>
        </div>
        <div className={styles.whoAmI}>Who am i?</div>
      </div>
      <div className={styles.about1}>
        <div className={styles.jcGellidonE3numcscugoUnsplaParent}>
          <img
            className={styles.jcGellidonE3numcscugoUnsplaIcon}
            alt=""
            src="../jcgellidone3numcscugounsplashremovebgpreview1-1@2x.png"
          />
          <div className={styles.frameParent2}>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-258.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-258.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-258.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-258.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-258.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-298.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-298.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-298.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-298.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-298.svg"
              />
            </div>
            <div className={styles.ellipseParent10}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
          </div>
          <img
            className={styles.line7Stroke}
            alt=""
            src="../line-7-stroke2.svg"
          />
        </div>
        <div className={styles.helloImEliasContainer}>
          <p className={styles.helloImElias}>Hello, i’m Elias!</p>
          <p className={styles.helloImElias}>&nbsp;</p>
          <p
            className={styles.helloImElias}
          >{`I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. `}</p>
          <p className={styles.helloImElias}>&nbsp;</p>
          <p className={styles.transformingMyCreativity}>
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
        </div>
      </div>
      <div className={styles.skills}>
        <div className={styles.parent}>
          <div className={styles.div1}>#</div>
          <div className={styles.smallProjects}>skills</div>
        </div>
        <div className={styles.blockParent}>
          <div className={styles.block}>
            <div className={styles.languagesWrapper}>
              <div className={styles.div}>Languages</div>
            </div>
            <div className={styles.blockChild} />
            <div className={styles.frameParent4}>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>TypeScript</div>
                <div className={styles.typescript}>Lua</div>
                <div className={styles.lua1}>Lua</div>
                <div className={styles.lua1}>Lua</div>
              </div>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>Python</div>
                <div className={styles.typescript}>JavaScript</div>
                <div className={styles.lua1}>JavaScript</div>
              </div>
              <div className={styles.pythonGroup}>
                <div className={styles.typescript}>Python</div>
                <div className={styles.typescript}>JavaScript</div>
              </div>
              <div className={styles.pythonGroup}>
                <div className={styles.typescript}>Python</div>
                <div className={styles.typescript}>JavaScript</div>
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.languagesWrapper}>
              <div className={styles.div}>Other</div>
            </div>
            <div className={styles.blockChild} />
            <div className={styles.frameParent4}>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>HTML</div>
                <div className={styles.typescript}>CSS</div>
                <div className={styles.typescript}>EJS</div>
                <div className={styles.typescript}>SCSS</div>
              </div>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>REST</div>
                <div className={styles.typescript}>Jinja</div>
                <div className={styles.lua1}>JavaScript</div>
              </div>
              <div className={styles.pythonGroup}>
                <div className={styles.typescript}>Jinja</div>
                <div className={styles.lua1}>Express.js</div>
              </div>
              <div className={styles.pythonGroup}>
                <div className={styles.typescript}>Python</div>
                <div className={styles.typescript}>JavaScript</div>
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.languagesWrapper}>
              <div className={styles.div}>Tools</div>
            </div>
            <div className={styles.blockChild} />
            <div className={styles.frameParent4}>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>VSCode</div>
                <div className={styles.typescript}>Neovim</div>
                <div className={styles.lua1}>Lua</div>
                <div className={styles.typescript}>Linux</div>
              </div>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>Figma</div>
                <div className={styles.typescript}>XFCE</div>
                <div className={styles.typescript}>Arch</div>
              </div>
              <div className={styles.pythonParent5}>
                <div className={styles.typescript}>Git</div>
                <div className={styles.typescript}>Font Awesome</div>
              </div>
              <div className={styles.pythonParent5}>
                <div className={styles.typescript}>KDE</div>
                <div className={styles.typescript}>fish</div>
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.languagesWrapper}>
              <div className={styles.div}>Databases</div>
            </div>
            <div className={styles.blockChild} />
            <div className={styles.frameParent4}>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>SQLite</div>
                <div className={styles.typescript}>PostgreSQL</div>
                <div className={styles.lua1}>Lua</div>
                <div className={styles.lua1}>Lua</div>
              </div>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>Mongo</div>
                <div className={styles.lua1}>avaScript</div>
                <div className={styles.lua1}>JavaScript</div>
              </div>
              <div className={styles.pythonGroup}>
                <div className={styles.typescript}>Python</div>
                <div className={styles.typescript}>JavaScript</div>
              </div>
              <div className={styles.pythonGroup}>
                <div className={styles.typescript}>Python</div>
                <div className={styles.typescript}>JavaScript</div>
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.languagesWrapper}>
              <div className={styles.div}>Frameworks</div>
            </div>
            <div className={styles.blockChild} />
            <div className={styles.frameParent4}>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>React</div>
                <div className={styles.typescript}>Vue</div>
                <div className={styles.lua1}>Lua</div>
                <div className={styles.lua1}>Lua</div>
              </div>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>Disnake</div>
                <div className={styles.typescript}>Discord.js</div>
                <div className={styles.lua1}>JavaScript</div>
              </div>
              <div className={styles.pythonParent5}>
                <div className={styles.typescript}>Flask</div>
                <div className={styles.typescript}>Express.js</div>
              </div>
              <div className={styles.pythonGroup}>
                <div className={styles.typescript}>Python</div>
                <div className={styles.typescript}>JavaScript</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.facts}>
        <div className={styles.parent}>
          <div className={styles.div1}>#</div>
          <div className={styles.smallProjects}>my-fun-facts</div>
        </div>
        <div className={styles.frameParent13}>
          <div className={styles.factParent}>
            <div className={styles.fact}>
              <div className={styles.typescript}>
                I like winter more than summer
              </div>
            </div>
            <div className={styles.fact}>
              <div className={styles.typescript}>
                I often bike with my friends
              </div>
            </div>
          </div>
          <div className={styles.factParent}>
            <div className={styles.fact}>
              <div className={styles.typescript}>
                <span>{`I like `}</span>
                <span className={styles.pizza}>pizza</span>
                <span>{` and `}</span>
                <span className={styles.pizza}>pasta</span>
              </div>
            </div>
            <div className={styles.fact}>
              <div className={styles.typescript}>
                <span>{`I was in `}</span>
                <span className={styles.pizza}>Egypt</span>
                <span>{`, `}</span>
                <span className={styles.pizza}>Poland</span>
                <span>{` and `}</span>
                <span className={styles.pizza}>Turkey</span>
              </div>
            </div>
          </div>
          <div className={styles.instanceWrapper}>
            <div className={styles.fact}>
              <div className={styles.typescript}>
                I’m still studing in school
              </div>
            </div>
          </div>
          <div className={styles.factParent}>
            <div className={styles.fact}>
              <div className={styles.typescript}>
                <span>{`My favorite movie is `}</span>
                <span className={styles.pizza}>The Green Mile</span>
              </div>
            </div>
            <div className={styles.fact}>
              <div className={styles.typescript}>I don’t have any siblings</div>
            </div>
          </div>
        </div>
        <div className={styles.instanceContainer}>
          <div className={styles.frameParent14}>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild126}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild126}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild126}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild126}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
            <div className={styles.ellipseParent10}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
          </div>
          <img className={styles.logoIcon} alt="" src="../logo1.svg" />
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.logoParent} onClick={onFrameContainer86Click}>
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
          <b className={styles.typescript}>Elias</b>
        </div>
        <div className={styles.headerLinkParent}>
          <div
            className={styles.headerLink}
            onClick={onHeaderLinkContainerClick}
          >
            <div className={styles.div1}>#</div>
            <div className={styles.smallProjects}>home</div>
          </div>
          <div className={styles.instanceWrapper}>
            <div className={styles.typescript}>#</div>
            <div className={styles.copyright2022Made}>works</div>
          </div>
          <div className={styles.instanceWrapper}>
            <div className={styles.typescript}>#</div>
            <div className={styles.copyright2022Made}>about-me</div>
          </div>
          <div className={styles.instanceWrapper}>
            <div className={styles.typescript}>#</div>
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
              <div className={styles.typescript}>RU</div>
              <div className={styles.typescript}>UA</div>
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

export default About;
