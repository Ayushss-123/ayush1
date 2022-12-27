import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./index.module.css";

const HomePage3: FunctionComponent = () => {
  return (
    <div className={styles.homePage3}>
      <div className={styles.groupParent}>
        <div className={styles.groupContainer}>
          <div className={styles.groupDiv}>
            <div className={styles.ellipseParent}>
              <img
                className={styles.groupChild}
                alt=""
                src="../ellipse-1.svg"
              />
              <b className={styles.in1}>in.</b>
            </div>
            <div className={styles.isaacNatParent}>
              <b className={styles.isaacNat}>Isaac Nat</b>
              <b className={styles.designs}>Designs</b>
            </div>
          </div>
          <div className={styles.homeParent}>
            <div className={styles.home}>Home</div>
            <div className={styles.aboutMe}>About Me</div>
            <div className={styles.myWorks}>My Works</div>
            <div className={styles.myBlogs}>My Blogs</div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupItem} />
            <b className={styles.contactMe}>Contact me</b>
          </div>
        </div>
        <div className={styles.groupParent1}>
          <div className={styles.helloImIsaacParent}>
            <b className={styles.helloImIsaac}>
              <span>{`Hello! `}</span>
              <span className={styles.imIsaac}>I’m Isaac</span>
            </b>
            <div className={styles.imAFullStackDesignerWho}>
              I’m a full-stack designer who specialise in creating beautiful and
              functional designs
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.groupInner} />
              <b className={styles.letsTalk}>Let’s Talk</b>
              <img className={styles.arrowIcon} alt="" src="../arrow.svg" />
            </div>
          </div>
          <img className={styles.groupIcon} alt="" src="../group-48@2x.png" />
        </div>
        <div className={styles.whatIveDoneLatelyParent}>
          <b className={styles.whatIveDoneLately}>What I’ve done lately</b>
          <div className={styles.groupParent2}>
            <div className={styles.rectangleContainer}>
              <img
                className={styles.rectangleIcon}
                alt=""
                src="../rectangle-8@2x.png"
              />
              <div className={styles.rectangleParent1}>
                <div className={styles.rectangleDiv} />
                <div className={styles.groupWrapper}>
                  <div className={styles.letsPeakParent}>
                    <b className={styles.letsPeak}>Let’s Peak!</b>
                    <div className={styles.travelWebsite}>Travel website</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleContainer}>
              <img
                className={styles.rectangleIcon}
                alt=""
                src="../rectangle-9@2x.png"
              />
              <div className={styles.rectangleParent1}>
                <div className={styles.rectangleDiv} />
                <div className={styles.groupFrame}>
                  <div className={styles.letsPeakParent}>
                    <b className={styles.letsPeak}>City Cycles</b>
                    <div className={styles.travelWebsite}>
                      Bicycle sharing website
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleContainer}>
              <img
                className={styles.rectangleIcon}
                alt=""
                src="../rectangle-10@2x.png"
              />
              <div className={styles.rectangleParent1}>
                <div className={styles.rectangleDiv} />
                <div className={styles.groupWrapper1}>
                  <div className={styles.letsPeakParent}>
                    <b className={styles.letsPeak}>Century Cars</b>
                    <div className={styles.travelWebsite}>
                      Car loans website
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent6}>
            <div className={styles.groupInner} />
            <b className={styles.letsTalk}>View all projects</b>
            <img className={styles.arrowIcon1} alt="" src="../arrow.svg" />
          </div>
        </div>
        <div className={styles.myServicesParent}>
          <b className={styles.myServices}>My services</b>
          <div className={styles.hasWidth1Parent}>
            <div className={styles.hasWidth1}>
              <div className={styles.hasWidth2}>
                <img
                  className={styles.hasWidth2Child}
                  alt=""
                  src="../group-23.svg"
                />
                <div className={styles.websiteDesignParent}>
                  <b className={styles.websiteDesign}>Website Design</b>
                  <div className={styles.iHave8YearsOfExperienceI}>
                    I have 8 years of experience in designing responsive
                    websites
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.hasWidth1}>
              <div className={styles.hasWidth2}>
                <img
                  className={styles.hasWidth2Child}
                  alt=""
                  src="../group-23.svg"
                />
                <div className={styles.websiteDesignParent}>
                  <b className={styles.websiteDesign}>Website Design</b>
                  <div className={styles.iHave8YearsOfExperienceI}>
                    I have 8 years of experience in designing responsive
                    websites
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.hasWidth1Group}>
            <div className={styles.hasWidth1}>
              <div className={styles.hasWidth2}>
                <img
                  className={styles.hasWidth2Child}
                  alt=""
                  src="../group-23.svg"
                />
                <div className={styles.websiteDesignParent}>
                  <b className={styles.websiteDesign}>Website Design</b>
                  <div className={styles.iHave8YearsOfExperienceI}>
                    I have 8 years of experience in designing responsive
                    websites
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.hasWidth1}>
              <div className={styles.hasWidth2}>
                <img
                  className={styles.hasWidth2Child}
                  alt=""
                  src="../group-23.svg"
                />
                <div className={styles.websiteDesignParent}>
                  <b className={styles.websiteDesign}>Website Design</b>
                  <div className={styles.iHave8YearsOfExperienceI}>
                    I have 8 years of experience in designing responsive
                    websites
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.whyChooseMeParent}>
          <b className={styles.whyChooseMe}>Why choose me?</b>
          <div className={styles.groupWrapper2}>
            <div className={styles.haveAProjectInMindParent}>
              <b className={styles.haveAProjectInMind}>
                Have a project in mind?
              </b>
              <div className={styles.ifItFallsIntoOneOfTheCa}>
                If it falls into one of the categories above then I’m your guy.
                Feel free to send me a message.
              </div>
              <div className={styles.groupParent3}>
                <input
                  className={styles.groupInput}
                  type="text"
                  placeholder="Full Name"
                />
                <input
                  className={styles.groupInput}
                  type="text"
                  placeholder="Email address"
                />
                <input
                  className={styles.groupChild7}
                  type="text"
                  placeholder="Project type"
                />
                <textarea
                  className={styles.groupTextarea}
                  placeholder="Describe your project"
                />
              </div>
              <div className={styles.submitEnquiryWrapper}>
                <b className={styles.submitEnquiry}>Submit Enquiry</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright2022AllRightsResParent}>
          <div className={styles.copyright2022AllRightsRes}>
            Copyright 2022. All Rights Reserved
          </div>
          <div className={styles.homeGroup}>
            <div className={styles.home1}>Home</div>
            <div className={styles.home1}>About Me</div>
            <div className={styles.works}>Works</div>
            <div className={styles.myBlog}>My Blog</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage3;
