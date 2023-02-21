import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CommunityHelpContainer from "../components/CommunityHelpContainer";
import GrowthMarketingPlaybookContain from "../components/GrowthMarketingPlaybookContain";
import RequestLearnerAccessContainer from "../components/RequestLearnerAccessContainer";
import EducatorContainer from "../components/EducatorContainer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterMobile from "../components/FooterMobile";

const HowItWorks: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMenuItemHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMenuItemAboutTextClick = useCallback(() => {
    navigate("/about1");
  }, [navigate]);

  const onMenuItemHowItWorksTextClick = useCallback(() => {
    navigate("/howitworks");
  }, [navigate]);

  const onMenuItemEducatorsTextClick = useCallback(() => {
    navigate("/educators");
  }, [navigate]);

  const onMenuItemsBlogsTextClick = useCallback(() => {
    // Please sync "Blog Overview" to the project
  }, []);

  const onMenuItemFAQTextClick = useCallback(() => {
    navigate("/faq");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    // Please sync "Blog Post" to the project
  }, []);

  const onMaskGroupImage4Click = useCallback(() => {
    // Please sync "Blog Post" to the project
  }, []);

  const onPrimaryBTN6Click = useCallback(() => {
    // Please sync "Contact" to the project
  }, []);

  const onPrimaryBTN7Click = useCallback(() => {
    // Please sync "Contact" to the project
  }, []);

  const onPrimaryBTN8Click = useCallback(() => {
    // Please sync "Contact" to the project
  }, []);

  const onPrimaryBTN9Click = useCallback(() => {
    // Please sync "Contact" to the project
  }, []);

  return (
    <div className="relative w-full flex flex-col items-start justify-start text-left text-2xl text-neutral-800 font-lato">
      <div className="self-stretch relative bg-neutral-100 h-[4570px] shrink-0 overflow-hidden md:hidden">
        <img
          className="absolute w-full top-[94px] right-[0px] left-[0px] max-w-full overflow-hidden h-[698px]"
          alt=""
          src="../group-39255.svg"
        />
        <CommunityHelpContainer />
        <GrowthMarketingPlaybookContain />
        <RequestLearnerAccessContainer />
        <EducatorContainer />
        <Header
          polisLogoWebsiteHeader1="../polis-logo-websiteheader-1.svg"
          primaryBTNBoxSizing="border-box"
          buttonTextDisplay="inline-block"
          primaryBTNBoxSizing1="border-box"
          buttonTextDisplay1="inline-block"
          onMenuItemHomeTextClick={onMenuItemHomeTextClick}
          onMenuItemAboutTextClick={onMenuItemAboutTextClick}
          onMenuItemHowItWorksTextClick={onMenuItemHowItWorksTextClick}
          onMenuItemEducatorsTextClick={onMenuItemEducatorsTextClick}
          onMenuItemsBlogsTextClick={onMenuItemsBlogsTextClick}
          onMenuItemFAQTextClick={onMenuItemFAQTextClick}
        />
        <img
          className="absolute top-[65.5px] left-[693px] w-[116px] h-[3px]"
          alt=""
          src="../nav-indicator.svg"
        />
        <Footer
          vector="../vector.svg"
          maskGroup="mask-group15.svg"
          footerTop="4031px"
          footerFooterWidth="1466px"
        />
      </div>
      <div className="self-stretch relative bg-neutral-100 h-[5626px] shrink-0 overflow-hidden hidden md:flex">
        <div className="absolute w-full top-[3770px] right-[0%] left-[0%] bg-primary-color-11 h-[1032px]" />
        <img
          className="absolute w-[calc(100%_+_1px)] top-[73px] right-[-1px] left-[0px] max-w-full overflow-hidden h-[872px]"
          alt=""
          src="../rectangle-4098.svg"
        />
        <img
          className="absolute w-[calc(100%_+_1px)] top-[649px] right-[-1px] left-[0px] max-w-full overflow-hidden h-[296px]"
          alt=""
          src="../group-39877.svg"
        />
        <div className="absolute top-[23px] right-[26px] w-[26px] h-[26px]">
          <div className="absolute top-[0px] right-[12.02px] bg-primary-color-11 w-[1.95px] h-[26px]" />
          <div className="absolute top-[12.02px] right-[-1.95px] bg-primary-color-11 w-[1.95px] h-[26px] [transform:_rotate(90deg)] [transform-origin:0_0]" />
        </div>
        <div className="absolute top-[72.5px] left-[-0.5px] box-border w-[391px] h-px border-t-[1px] border-solid border-neutral-300" />
        <img
          className="absolute top-[18px] left-[calc(50%_-_36px)] w-[79px] h-10 overflow-hidden"
          alt=""
          src="../polis-logo-websiteheader-13.svg"
        />
        <div className="absolute w-[calc(100%_+_3px)] top-[2906px] right-[0px] left-[-3px] bg-neutral-200 h-[864px]" />
        <div className="absolute top-[5669px] left-[438px] w-[374px] h-[424.54px] text-xl">
          <div className="absolute h-[27.17%] w-[100.66%] top-[65.4%] right-[0%] bottom-[7.43%] left-[-0.66%]">
            <b className="absolute h-[59.22%] w-[99.34%] top-[32.37%] left-[0.66%] leading-[34px] inline-block">
              Why We Founded Polis
            </b>
            <div className="absolute h-[17.34%] w-[35.06%] top-[0%] right-[64.94%] bottom-[82.66%] left-[0%] flex flex-row items-center justify-center text-base text-primary-color-11 font-literata">
              <div className="relative w-[132px] h-5 shrink-0">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                  <b className="absolute top-[0%] left-[0%] leading-[20px]">
                    March 22, 2022
                  </b>
                </div>
              </div>
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[17.34%] w-[29.18%] top-[82.66%] right-[70.16%] bottom-[0%] left-[0.66%] flex flex-row items-center justify-center gap-[13px]"
              onClick={onFrameButtonClick}
            >
              <div className="relative text-base leading-[20px] font-medium font-lato text-primary-color-11 text-left inline-block w-[91.62px] shrink-0">{`Read more `}</div>
              <img
                className="relative w-[5.22px] h-[10.45px] shrink-0"
                alt=""
              />
            </button>
          </div>
          <div className="absolute h-[58.82%] w-full top-[0%] right-[0%] bottom-[41.18%] left-[0%] rounded-xxs bg-silver" />
          <img
            className="absolute h-[58.82%] w-full top-[0%] right-[0%] bottom-[41.18%] left-[0%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
            alt=""
            src="../mask-group9@2x.png"
            onClick={onMaskGroupImage4Click}
          />
        </div>
        <div className="absolute h-[3.82%] w-[calc(100%_-_90px)] top-[1.97%] right-[45px] bottom-[94.21%] left-[45px]">
          <b className="absolute w-[calc(100%_-_31.43px)] top-[18.6%] left-[0px] leading-[40px] inline-block">
            The World’s Best Educators At Your Fingertips
          </b>
          <b className="absolute w-[calc(100%_-_138px)] top-[0%] left-[0px] text-xs tracking-[0.1em] leading-[18px] uppercase inline-block font-literata text-primary-color-11">
            How it Works
          </b>
          <div className="absolute w-full top-[86.05%] left-[0px] text-base leading-[30px] font-medium text-neutral-600 inline-block">{`Lorem ipsum dolor sit amet consectetur adipiscing elit eu ac pulvinar sed facilisis bibendum massa malesuada fermentum platea posuere in tempor nibh sit nec nunc. `}</div>
        </div>
        <FooterMobile
          footerMobileWidth="100%"
          footerMobileTop="4802px"
          footerMobileLeft="0px"
          subscribeMobileMask="../subscribemobilemask2.svg"
          group39617="../group-396172.svg"
        />
        <div className="absolute h-[1.85%] top-[8.59%] bottom-[89.57%] left-[45px] w-[227.82px] text-base">
          <b className="absolute h-[19.24%] top-[2.89%] left-[36.82px] leading-[20px] inline-block w-[152px]">
            Educator Matching
          </b>
          <b className="absolute h-[19.24%] top-[40.38%] left-[36.82px] leading-[20px] inline-block w-[191px]">
            1:1 Virtual Office Hours
          </b>
          <b className="absolute h-[19.24%] top-[79.8%] left-[36.82px] leading-[20px] inline-block w-[179px]">{`Community & Support`}</b>
          <img
            className="absolute h-[23.08%] top-[0%] bottom-[76.92%] left-[0px] max-h-full w-6"
            alt=""
            src="../group.svg"
          />
          <img
            className="absolute h-[23.08%] top-[37.5%] bottom-[39.42%] left-[0px] max-h-full w-6"
            alt=""
            src="../group16.svg"
          />
          <img
            className="absolute h-[23.08%] top-[76.92%] bottom-[0%] left-[0px] max-h-full w-6"
            alt=""
            src="../group17.svg"
          />
        </div>
        <img
          className="absolute h-[5.33%] w-[calc(100%_-_90px)] top-[12.51%] right-[45px] bottom-[82.15%] left-[45px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="../mask-group10@2x.png"
        />
        <b className="absolute h-[2.92%] w-[calc(100%_-_92px)] top-[19.8%] left-[45px] leading-[40px] inline-block text-center">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            Who can access our global community of the world’s best Educators?
          </p>
        </b>
        <b className="absolute h-[0.32%] w-[calc(100%_-_223px)] top-[19.16%] left-[103.75px] text-xs tracking-[0.1em] leading-[18px] uppercase inline-block font-literata text-primary-color-11 text-center">
          Using Polis
        </b>
        <img
          className="absolute h-[5.63%] top-[24.03%] bottom-[70.33%] left-[21px] max-h-full w-[1373.66px] object-cover"
          alt=""
          src="../group-39878@2x.png"
        />
        <div className="absolute h-[5.63%] w-[calc(100%_-_87px)] top-[30.5%] right-[45px] bottom-[63.86%] left-[42px]">
          <button
            className="cursor-pointer py-[22px] px-10 bg-[transparent] absolute h-[20.19%] w-[calc(100%_-_63px)] top-[79.81%] right-[53px] bottom-[0%] left-[10px] rounded-3xxs box-border flex flex-col items-center justify-center border-[3px] border-solid border-primary-color-11"
            onClick={onPrimaryBTN6Click}
          >
            <b className="relative text-base leading-[20px] font-lato text-primary-color-11 text-center">
              Request Learner Access
            </b>
          </button>
          <div className="absolute h-[76.66%] w-full top-[0%] right-[0px] bottom-[23.34%] left-[0px]">
            <b className="absolute h-[20.58%] w-full top-[0%] left-[0px] leading-[50px] inline-block">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Individual Learners
              </p>
            </b>
            <div className="absolute h-[74.07%] w-full top-[25.93%] left-[0px] font-medium text-neutral-600 inline-block text-xs">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                <span className="leading-[24px]">{`We provide individual access to adult learners (18+ years) such as professionals, full and part-time students, lifelong learners, and anyone seeking to reconnect academically to pursue their educational goals. `}</span>
              </p>
              <p className="m-0 text-base">
                <span className="leading-[30px]">&nbsp;</span>
              </p>
            </div>
          </div>
        </div>
        <img
          className="absolute h-[5.93%] top-[37.79%] right-[12px] bottom-[56.28%] max-h-full w-[1383px] object-cover"
          alt=""
          src="../group-39879@2x.png"
        />
        <div className="absolute h-[5.9%] w-[calc(100%_-_90px)] top-[44.21%] right-[45px] bottom-[49.89%] left-[45px]">
          <button
            className="cursor-pointer py-[22px] px-10 bg-[transparent] absolute h-[19.28%] w-[calc(100%_-_88px)] top-[80.72%] right-[78px] bottom-[0%] left-[10px] rounded-3xxs box-border flex flex-col items-center justify-center border-[3px] border-solid border-primary-color-11"
            onClick={onPrimaryBTN7Click}
          >
            <b className="relative text-base leading-[20px] font-lato text-primary-color-11 text-center">
              Request a Demo
            </b>
          </button>
          <div className="absolute h-[86.14%] w-full top-[0%] right-[0px] bottom-[13.86%] left-[0px]">
            <b className="absolute h-[17.48%] w-full top-[0%] left-[0px] leading-[40px] inline-block">
              Higher Education Institutions
            </b>
            <div className="absolute h-[62.94%] w-full top-[37.06%] left-[0px] text-xs leading-[24px] font-medium text-neutral-600 inline-block">
              <p className="[margin-block-start:0] [margin-block-end:0px]">{`We provide universities, colleges, and institutions of higher learning with access to a roster of top educators who can provide a wide range of academic and career services to their students and staff. `}</p>
              <p className="m-0">&nbsp;</p>
            </div>
          </div>
        </div>
        <b className="absolute h-[2.81%] top-[52.86%] left-[45px] leading-[40px] inline-block text-center w-[300px]">
          How Can Our Community of Educators Help You?
        </b>
        <div className="absolute h-[8.25%] top-[55.95%] bottom-[35.8%] left-[45px] w-[324px] text-base">
          <div className="absolute h-[5.17%] top-[0%] bottom-[94.83%] left-[0px] w-[324px]">
            <b className="absolute h-[83.33%] top-[8.33%] left-[44px] leading-[20px] inline-block w-[280px]">
              Interview Prep
            </b>
            <img
              className="absolute h-full top-[0%] bottom-[0%] left-[0px] max-h-full w-6"
              alt=""
              src="../group.svg"
            />
          </div>
          <div className="absolute h-[5.17%] top-[8.62%] bottom-[86.21%] left-[0px] w-[324px]">
            <b className="absolute h-[83.33%] top-[8.33%] left-[44px] leading-[20px] inline-block w-[280px]">
              Cover Letter Review
            </b>
            <img
              className="absolute h-full top-[0%] bottom-[0%] left-[0px] max-h-full w-6"
              alt=""
              src="../group.svg"
            />
          </div>
          <div className="absolute h-[5.17%] top-[17.24%] bottom-[77.59%] left-[0px] w-[324px]">
            <b className="absolute h-[83.33%] top-[8.33%] left-[44px] leading-[20px] inline-block w-[280px]">
              Application Review
            </b>
            <img
              className="absolute h-full top-[0%] bottom-[0%] left-[0px] max-h-full w-6"
              alt=""
              src="../group.svg"
            />
          </div>
          <div className="absolute h-[5.17%] top-[25.86%] bottom-[68.97%] left-[0px] w-[324px]">
            <b className="absolute h-[83.33%] top-[8.33%] left-[44px] leading-[20px] inline-block w-[280px]">
              CV/Resume Review
            </b>
            <img
              className="absolute h-full top-[0%] bottom-[0%] left-[0px] max-h-full w-6"
              alt=""
              src="../group.svg"
            />
          </div>
          <div className="absolute h-[5.17%] top-[34.48%] bottom-[60.34%] left-[0px] w-[324px]">
            <b className="absolute h-[83.33%] top-[8.33%] left-[44px] leading-[20px] inline-block w-[280px]">
              Non-Academic Career Help
            </b>
            <img
              className="absolute h-full top-[0%] bottom-[0%] left-[0px] max-h-full w-6"
              alt=""
              src="../group.svg"
            />
          </div>
          <div className="absolute h-[5.17%] top-[43.1%] bottom-[51.72%] left-[0px] w-[324px]">
            <b className="absolute h-[83.33%] top-[8.33%] left-[44px] leading-[20px] inline-block w-[280px]">
              Personal Statement Review
            </b>
            <img
              className="absolute h-full top-[0%] bottom-[0%] left-[0px] max-h-full w-6"
              alt=""
              src="../group.svg"
            />
          </div>
          <div className="absolute h-[5.17%] top-[51.72%] bottom-[43.1%] left-[0px] w-[324px]">
            <b className="absolute h-[83.33%] top-[8.33%] left-[44px] leading-[20px] inline-block w-[280px]">
              Writing Feedback
            </b>
            <img
              className="absolute h-full top-[0%] bottom-[0%] left-[0px] max-h-full w-6"
              alt=""
              src="../group.svg"
            />
          </div>
          <div className="absolute h-[5.17%] top-[60.34%] bottom-[34.48%] left-[0px] w-[324px]">
            <b className="absolute h-[83.33%] top-[8.33%] left-[44px] leading-[20px] inline-block w-[280px]">
              Guided Reading
            </b>
            <img
              className="absolute h-full top-[0%] bottom-[0%] left-[0px] max-h-full w-6"
              alt=""
              src="../group.svg"
            />
          </div>
          <div className="absolute h-[5.17%] top-[68.97%] bottom-[25.86%] left-[0px] w-[324px]">
            <b className="absolute h-[83.33%] top-[8.33%] left-[44px] leading-[20px] inline-block w-[280px]">
              Proposal Review
            </b>
            <img
              className="absolute h-full top-[0%] bottom-[0%] left-[0px] max-h-full w-6"
              alt=""
              src="../group.svg"
            />
          </div>
          <div className="absolute h-[5.17%] top-[77.59%] bottom-[17.24%] left-[0px] w-[324px]">
            <b className="absolute h-[83.33%] top-[8.33%] left-[44px] leading-[20px] inline-block w-[280px]">
              Research/Thesis Help
            </b>
            <img
              className="absolute h-full top-[0%] bottom-[0%] left-[0px] max-h-full w-6"
              alt=""
              src="../group.svg"
            />
          </div>
          <div className="absolute h-[5.17%] top-[86.21%] bottom-[8.62%] left-[0px] w-[324px]">
            <b className="absolute h-[83.33%] top-[8.33%] left-[44px] leading-[20px] inline-block w-[280px]">
              Subject/Industry Expertise
            </b>
            <img
              className="absolute h-full top-[0%] bottom-[0%] left-[0px] max-h-full w-6"
              alt=""
              src="../group.svg"
            />
          </div>
          <div className="absolute h-[5.17%] top-[94.83%] bottom-[0%] left-[0px] w-[324px]">
            <b className="absolute h-[83.33%] top-[8.33%] left-[44px] leading-[20px] inline-block w-[280px]">
              Informational Interview
            </b>
            <img
              className="absolute h-full top-[0%] bottom-[0%] left-[0px] max-h-full w-6"
              alt=""
              src="../group.svg"
            />
          </div>
        </div>
        <div className="absolute top-[3770px] left-[0px] bg-secondary-color-51 w-[250px] h-[406.12px]" />
        <img
          className="absolute top-[4608px] right-[-580px] w-[388px] h-[388px]"
          alt=""
          src="../ellipse-1192.svg"
        />
        <div className="absolute w-[calc(100%_-_90px)] top-[3692px] right-[45px] left-[45px] shadow-[0px_5.535259246826172px_22.14px_rgba(74,_58,_255,_0.03),_0px_12.915604591369629px_31.37px_rgba(20,_20,_43,_0.05)] h-[419.45px] text-3xl">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-[100.37%] w-[103.11%] top-[-0.48%] right-[-2.59%] bottom-[0.11%] left-[-0.52%]">
              <div className="absolute h-[108.76%] w-[127.21%] top-[0.5%] right-[-28.13%] bottom-[-9.26%] left-[0.93%] bg-neutral-100 hidden" />
              <img
                className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[421px] object-cover"
                alt=""
                src="../mask-group11@2x.png"
              />
              <div className="absolute h-[3.07%] w-[90.27%] top-[26.79%] right-[-0.43%] bottom-[70.15%] left-[10.17%] bg-secondary-color-6 hidden opacity-[0.1]" />
              <div className="absolute h-[30.71%] w-[101.64%] top-[9.4%] right-[-13.42%] bottom-[59.89%] left-[11.78%] hidden">
                <b className="absolute h-[42.98%] w-[99.74%] top-[22.83%] left-[0%] leading-[125%] inline-block">
                  Ultimate Growth Marketing Playbook
                </b>
                <div className="absolute h-[28.65%] w-full top-[71.35%] left-[0%] text-sm tracking-[-0.01em] leading-[160%] font-medium text-neutral-700 inline-block opacity-[0.7]">
                  Lorem ipsum dolor sit amet consectetur dolor sit adipiscing
                  elit sed do eiusmod tempo.
                </div>
                <div className="absolute h-[2.52%] w-[23.54%] top-[0%] right-[76.46%] bottom-[97.48%] left-[0%] bg-secondary-color-6" />
              </div>
              <img
                className="absolute h-[1053.86%] w-[390.71%] top-[66.48%] right-[-0.8%] bottom-[-1020.34%] left-[-289.91%] max-w-full overflow-hidden max-h-full hidden"
                alt=""
                src="../group-379651.svg"
              />
              <div className="absolute h-[70.19%] w-[34.9%] top-[124.03%] right-[40.53%] bottom-[-94.22%] left-[24.57%] rounded-large bg-gray-300 [transform:_rotate(-6.73deg)] [transform-origin:0_0] hidden" />
            </div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_746px)] top-[4232px] right-[701px] left-[45px] h-[494px] text-neutral-100">
          <button
            className="cursor-pointer [border:none] py-[22px] px-10 bg-neutral-100 absolute w-[calc(100%_-_181.23px)] top-[338px] right-[181.23px] left-[0px] rounded-3xxs flex flex-col box-border items-center justify-center"
            onClick={onPrimaryBTN8Click}
          >
            <b className="relative text-base leading-[20px] font-lato text-primary-color-11 text-center">
              Request Access
            </b>
          </button>
          <button
            className="cursor-pointer py-[22px] px-10 bg-[transparent] absolute w-[calc(100%_-_181.23px)] top-[430px] right-[181.23px] left-[0px] rounded-3xxs box-border flex flex-col items-center justify-center border-[3px] border-solid border-neutral-100"
            onClick={onPrimaryBTN9Click}
          >
            <b className="relative text-base leading-[20px] font-lato text-neutral-100 text-center">
              Book a Demo
            </b>
          </button>
          <b className="absolute h-[19.64%] w-full top-[0%] left-[0px] leading-[40px] inline-block">
            Personalize Your Education
          </b>
          <div className="absolute h-[24.29%] w-full top-[24.29%] left-[0px] text-xs leading-[24px] font-medium text-neutral-300 inline-block">{`Having trouble with completing a MOOC or online program? Don’t know what your educational background can do for your career? Need mentoring from academics about going to graduate school? Our Polis educators can help you in online office hours. `}</div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
