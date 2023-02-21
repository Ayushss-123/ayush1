import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import EngagementContainer from "../components/EngagementContainer";
import TransformingSection from "../components/TransformingSection";
import Header from "../components/Header";
import MissionContainer from "../components/MissionContainer";
import DiversitySection from "../components/DiversitySection";
import Footer from "../components/Footer";
import RealTimeSessionsContainer from "../components/RealTimeSessionsContainer";
import FooterMobile from "../components/FooterMobile";

const Educators: FunctionComponent = () => {
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

  const onFrameContainer1Click = useCallback(() => {
    // Please sync "Blog Post" to the project
  }, []);

  const onMaskGroupImage2Click = useCallback(() => {
    // Please sync "Blog Post" to the project
  }, []);

  const onPrimaryBTNContainer3Click = useCallback(() => {
    // Please sync "Contact" to the project
  }, []);

  const onPrimaryBTNContainer4Click = useCallback(() => {
    // Please sync "Educational Integrity Policy" to the project
  }, []);

  return (
    <div className="relative w-full h-[6308px] flex flex-col items-start justify-start text-left text-4xl text-neutral-800 font-lato">
      <div className="self-stretch relative bg-neutral-100 h-[6308px] shrink-0 overflow-hidden md:hidden">
        <b className="absolute top-[3447px] left-[calc(50%_-_436px)] leading-[50px] inline-block text-center w-[879px] h-[100px]">
          Offers guidance on a variety of topics
        </b>
        <b className="absolute top-[3399px] left-[calc(50%_-_79px)] text-xs tracking-[0.1em] leading-[18px] uppercase font-literata text-primary-color-11">
          Office Hours
        </b>
        <div className="absolute top-[3577px] left-[calc(50%_-_503px)] w-[1052px] h-[143px] text-base">
          <div className="absolute top-[0px] left-[calc(50%_-_526px)] w-[324px] h-6">
            <b className="absolute top-[2px] left-[calc(50%_-_118px)] leading-[20px] inline-block w-[280px] h-5">
              Interview Prep
            </b>
            <img
              className="absolute top-[0px] left-[calc(50%_-_162px)] w-6 h-6"
              alt=""
              src="../group.svg"
            />
          </div>
          <div className="absolute top-[39px] left-[calc(50%_-_526px)] w-[324px] h-6">
            <b className="absolute top-[2px] left-[calc(50%_-_118px)] leading-[20px] inline-block w-[280px] h-5">
              Cover Letter Review
            </b>
            <img
              className="absolute top-[0px] left-[calc(50%_-_162px)] w-6 h-6"
              alt=""
              src="../group.svg"
            />
          </div>
          <div className="absolute top-[80px] left-[calc(50%_-_526px)] w-[324px] h-6">
            <b className="absolute top-[2px] left-[calc(50%_-_118px)] leading-[20px] inline-block w-[280px] h-5">
              Application Review
            </b>
            <img
              className="absolute top-[0px] left-[calc(50%_-_162px)] w-6 h-6"
              alt=""
              src="../group.svg"
            />
          </div>
          <div className="absolute top-[0px] left-[calc(50%_-_162px)] w-[324px] h-6">
            <b className="absolute top-[2px] left-[calc(50%_-_118px)] leading-[20px] inline-block w-[280px] h-5">
              Non-Academic Career Assistance
            </b>
            <img
              className="absolute top-[0px] left-[calc(50%_-_162px)] w-6 h-6"
              alt=""
              src="../group.svg"
            />
          </div>
          <div className="absolute top-[39px] left-[calc(50%_-_162px)] w-[324px] h-6">
            <b className="absolute top-[2px] left-[calc(50%_-_118px)] leading-[20px] inline-block w-[280px] h-5">
              Personal Statement Review
            </b>
            <img
              className="absolute top-[0px] left-[calc(50%_-_162px)] w-6 h-6"
              alt=""
              src="../group.svg"
            />
          </div>
          <div className="absolute top-[80px] left-[calc(50%_-_162px)] w-[324px] h-6">
            <b className="absolute top-[2px] left-[calc(50%_-_118px)] leading-[20px] inline-block w-[280px] h-5">
              Writing Feedback
            </b>
            <img
              className="absolute top-[0px] left-[calc(50%_-_162px)] w-6 h-6"
              alt=""
              src="../group.svg"
            />
          </div>
          <div className="absolute top-[0px] left-[calc(50%_+_202px)] w-[324px] h-6">
            <b className="absolute top-[2px] left-[calc(50%_-_118px)] leading-[20px] inline-block w-[280px] h-5">
              Proposal Review
            </b>
            <img
              className="absolute top-[0px] left-[calc(50%_-_162px)] w-6 h-6"
              alt=""
              src="../group.svg"
            />
          </div>
          <div className="absolute top-[39px] left-[calc(50%_+_202px)] w-[324px] h-6">
            <b className="absolute top-[2px] left-[calc(50%_-_118px)] leading-[20px] inline-block w-[280px] h-5">
              Research/Thesis Help
            </b>
            <img
              className="absolute top-[0px] left-[calc(50%_-_162px)] w-6 h-6"
              alt=""
              src="../group.svg"
            />
          </div>
          <div className="absolute top-[80px] left-[calc(50%_+_202px)] w-[324px] h-6">
            <b className="absolute top-[2px] left-[calc(50%_-_118px)] leading-[20px] inline-block w-[280px] h-5">
              Subject/Industry Expertise
            </b>
            <img
              className="absolute top-[0px] left-[calc(50%_-_162px)] w-6 h-6"
              alt=""
              src="../group.svg"
            />
          </div>
          <div className="absolute top-[119px] left-[calc(50%_-_526px)] w-[324px] h-6">
            <b className="absolute top-[2px] left-[calc(50%_-_118px)] leading-[20px] inline-block w-[280px] h-5">
              CV/Resume Review
            </b>
            <img
              className="absolute top-[0px] left-[calc(50%_-_162px)] w-6 h-6"
              alt=""
              src="../group.svg"
            />
          </div>
          <div className="absolute top-[119px] left-[calc(50%_-_162px)] w-[324px] h-6">
            <b className="absolute top-[2px] left-[calc(50%_-_118px)] leading-[20px] inline-block w-[280px] h-5">
              Guided Reading
            </b>
            <img
              className="absolute top-[0px] left-[calc(50%_-_162px)] w-6 h-6"
              alt=""
              src="../group.svg"
            />
          </div>
          <div className="absolute top-[119px] left-[calc(50%_+_202px)] w-[324px] h-6">
            <b className="absolute top-[2px] left-[calc(50%_-_118px)] leading-[20px] inline-block w-[280px] h-5">
              Informational Interview
            </b>
            <img
              className="absolute top-[0px] left-[calc(50%_-_162px)] w-6 h-6"
              alt=""
              src="../group.svg"
            />
          </div>
        </div>
        <img
          className="absolute w-full top-[1968px] right-[0px] left-[0px] max-w-full overflow-hidden h-[610px]"
          alt=""
          src="../rectangle-40511.svg"
        />
        <EngagementContainer />
        <TransformingSection />
        <Header
          polisLogoWebsiteHeader1="../polis-logo-websiteheader-14.svg"
          onMenuItemHomeTextClick={onMenuItemHomeTextClick}
          onMenuItemAboutTextClick={onMenuItemAboutTextClick}
          onMenuItemHowItWorksTextClick={onMenuItemHowItWorksTextClick}
          onMenuItemEducatorsTextClick={onMenuItemEducatorsTextClick}
          onMenuItemsBlogsTextClick={onMenuItemsBlogsTextClick}
          onMenuItemFAQTextClick={onMenuItemFAQTextClick}
        />
        <img
          className="absolute top-[64.5px] left-[829px] w-[84px] h-[3px]"
          alt=""
          src="../vector-21.svg"
        />
        <img
          className="absolute top-[94px] left-[calc(50%_+_242px)] w-[481.7px] h-[693.17px]"
          alt=""
          src="../group-39747.svg"
        />
        <img
          className="absolute top-[193px] left-[calc(50%_+_86px)] w-[500px] h-[700px] object-cover"
          alt=""
          src="../mask-group12@2x.png"
        />
        <MissionContainer />
        <div className="absolute top-[3980px] left-[calc(50%_+_87px)] w-[527px] h-[518px]">
          <b className="absolute top-[38px] left-[calc(50%_-_263.5px)] leading-[50px] inline-block w-[527px] h-[97px]">
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              A global learning community for the 21st century
            </p>
          </b>
          <b className="absolute top-[0px] left-[calc(50%_-_263.5px)] text-xs tracking-[0.1em] leading-[18px] uppercase font-literata text-primary-color-11">
            OUr Community
          </b>
          <div className="absolute top-[188px] left-[calc(50%_-_263.5px)] text-base leading-[30px] font-medium text-neutral-600 inline-block w-[526.83px]">
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              We’re building a community for the world’s best educators who want
              to create value and impact for their expertise and experience
              outside of traditional higher ed institutions.
            </p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              &nbsp;
            </p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">{`Our educators include professors, consultants, lecturers, entrepreneurs, graduate students, and professionals from a wide range of academic and non-academic backgrounds. `}</p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              &nbsp;
            </p>
            <p className="m-0">
              Our educators have prior experience at top universities and
              organizations around the world along with a demonstrated record of
              excellence in teaching, advising, and mentoring.
            </p>
          </div>
        </div>
        <div className="absolute top-[3880px] left-[calc(50%_-_586px)] shadow-[0px_5.535259246826172px_22.14px_rgba(74,_58,_255,_0.03),_0px_12.915604591369629px_31.37px_rgba(20,_20,_43,_0.05)] w-[500px] h-[700px] text-3xl">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-[100.58%] w-[114.4%] top-[-0.29%] right-[-13%] bottom-[-0.3%] left-[-1.4%]">
              <div className="absolute h-[108.53%] w-[114.65%] top-[0.31%] right-[-16.26%] bottom-[-8.84%] left-[1.61%] bg-neutral-100 hidden" />
              <img
                className="absolute top-[2px] left-[7px] w-[572px] h-[704.08px] object-cover"
                alt=""
                src="../mask-group13@2x.png"
              />
              <div className="absolute h-[3.06%] w-[81.36%] top-[26.54%] right-[8.71%] bottom-[70.4%] left-[9.93%] bg-secondary-color-6 hidden opacity-[0.1]" />
              <div className="absolute h-[30.64%] w-[91.61%] top-[9.19%] right-[-3%] bottom-[60.17%] left-[11.39%] hidden">
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
                className="absolute h-[130.02%] w-[164.95%] top-[68.1%] right-[14.29%] bottom-[-98.12%] left-[-79.24%] max-w-full overflow-hidden max-h-full hidden"
                alt=""
                src="../group-379652.svg"
              />
              <div className="absolute h-[27.58%] w-[35.38%] top-[123.58%] right-[41.71%] bottom-[-51.16%] left-[22.92%] rounded-large bg-gray-300 [transform:_rotate(-27.99deg)] [transform-origin:0_0] hidden" />
            </div>
          </div>
        </div>
        <DiversitySection />
        <Footer
          vector="vector1.svg"
          maskGroup="mask-group15.svg"
          footerTop="5813px"
          footerFooterLeft="calc(50% - 731px)"
          footerFooterWidth="1466px"
          buttonTextDisplay="inline-block"
        />
        <img
          className="absolute w-full top-[4704px] right-[0px] left-[0px] max-w-full overflow-hidden h-[1109px]"
          alt=""
          src="../rectangle-4052.svg"
        />
        <RealTimeSessionsContainer />
      </div>
      <div className="self-stretch relative bg-neutral-100 h-[8294px] shrink-0 overflow-hidden hidden text-xs md:flex">
        <img
          className="absolute w-full top-[5662px] right-[0px] left-[0px] max-w-full overflow-hidden h-[628px]"
          alt=""
          src="../rectangle-4053.svg"
        />
        <div className="absolute w-full top-[3118px] right-[0px] left-[0px] bg-primary-color-11 h-[678px]" />
        <img
          className="absolute top-[3118px] left-[-119px] w-[393px] h-[678.02px]"
          alt=""
          src="../group-39888.svg"
        />
        <img
          className="absolute w-[calc(100%_+_1px)] top-[73px] right-[-1px] left-[0px] max-w-full overflow-hidden h-[497px]"
          alt=""
          src="../rectangle-40981.svg"
        />
        <div className="absolute top-[23px] left-[338px] w-[26px] h-[26px]">
          <div className="absolute top-[0px] left-[12.03px] bg-primary-color-11 w-[1.95px] h-[26px]" />
          <div className="absolute top-[12.02px] left-[26px] bg-primary-color-11 w-[1.95px] h-[26px] [transform:_rotate(90deg)] [transform-origin:0_0]" />
        </div>
        <div className="absolute top-[72.5px] left-[-0.5px] box-border w-[391px] h-px border-t-[1px] border-solid border-neutral-300" />
        <img
          className="absolute top-[18px] left-[159px] w-[79px] h-10 overflow-hidden"
          alt=""
          src="../polis-logo-websiteheader-15.svg"
        />
        <div className="absolute w-[calc(100%_+_3px)] top-[2195px] right-[0px] left-[-3px] bg-neutral-200 h-[923px]" />
        <div className="absolute top-[5669px] left-[438px] w-[374px] h-[424.54px] text-base text-primary-color-11">
          <div className="absolute h-[27.17%] w-[100.66%] top-[65.4%] right-[0%] bottom-[7.43%] left-[-0.66%]">
            <b className="absolute h-[59.22%] w-[99.34%] top-[32.37%] left-[0.66%] text-xl leading-[34px] inline-block text-neutral-800">
              Why We Founded Polis
            </b>
            <div className="absolute h-[17.34%] w-[35.06%] top-[0%] right-[64.94%] bottom-[82.66%] left-[0%] flex flex-row items-center justify-center font-literata">
              <div className="relative w-[132px] h-5 shrink-0">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                  <b className="absolute top-[0%] left-[0%] leading-[20px]">
                    March 22, 2022
                  </b>
                </div>
              </div>
            </div>
            <div
              className="absolute h-[17.34%] w-[29.18%] top-[82.66%] right-[70.16%] bottom-[0%] left-[0.66%] flex flex-row items-center justify-center gap-[13px] cursor-pointer"
              onClick={onFrameContainer1Click}
            >
              <div className="relative leading-[20px] font-medium inline-block w-[91.62px] shrink-0">{`Read more `}</div>
              <img
                className="relative w-[5.22px] h-[10.45px] shrink-0"
                alt=""
                src="../group48.svg"
              />
            </div>
          </div>
          <div className="absolute h-[58.82%] w-full top-[0%] right-[0%] bottom-[41.18%] left-[0%] rounded-xxs bg-silver" />
          <img
            className="absolute h-[58.82%] w-full top-[0%] right-[0%] bottom-[41.18%] left-[0%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
            alt=""
            src="../mask-group15@2x.png"
            onClick={onMaskGroupImage2Click}
          />
        </div>
        <div className="absolute h-[3.26%] w-[76.92%] top-[1.34%] right-[11.54%] bottom-[95.41%] left-[11.54%] text-2xl">
          <b className="absolute w-[89.52%] top-[14.81%] left-[0%] leading-[40px] inline-block">
            Transforming Higher Ed Begins With You
          </b>
          <b className="absolute w-[54%] top-[0%] left-[0%] text-xs tracking-[0.1em] leading-[18px] uppercase inline-block font-literata text-primary-color-11">
            Educators
          </b>
          <div className="absolute w-full top-[58.89%] left-[0%] text-base font-medium text-neutral-600 inline-block">
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              <span className="leading-[24px]">
                Join our global community of the world’s best educators who are
                creating impact with their expertise and experience for adult
                learners around the world.
              </span>
            </p>
            <p className="m-0">
              <span className="leading-[30px]">&nbsp;</span>
            </p>
          </div>
        </div>
        <FooterMobile
          footerMobileWidth="100%"
          footerMobileTop="7481px"
          footerMobileLeft="0px"
          subscribeMobileMask="../subscribemobilemask1.svg"
          group39617="../group-396171.svg"
        />
        <img
          className="absolute w-[calc(100%_+_83.99px)] top-[570px] right-[-83.99px] left-[0px] max-w-full overflow-hidden h-[355px] object-cover"
          alt=""
          src="../group-39881@2x.png"
        />
        <div
          className="absolute top-[444px] left-[45px] rounded-3xxs bg-primary-color-11 flex flex-col py-[22px] px-10 items-center justify-center cursor-pointer text-center text-base text-neutral-100"
          onClick={onPrimaryBTNContainer3Click}
        >
          <b className="relative leading-[20px]">Contact Us</b>
        </div>
        <div className="absolute h-[0.94%] w-[76.92%] top-[11.9%] right-[11.28%] bottom-[87.16%] left-[11.79%] text-2xl">
          <b className="absolute w-full top-[48.72%] left-[0%] leading-[40px] inline-block">
            A New Way to Engage
          </b>
          <b className="absolute w-[38.67%] top-[0%] left-[0%] text-xs tracking-[0.1em] leading-[18px] uppercase inline-block font-literata text-primary-color-11">
            Educators
          </b>
        </div>
        <div className="absolute h-[0.94%] w-[76.92%] top-[27.38%] right-[11.28%] bottom-[71.68%] left-[11.79%] text-2xl">
          <b className="absolute w-full top-[48.72%] left-[0%] leading-[40px] inline-block">
            Helping Adult Learners
          </b>
          <b className="absolute w-[43.67%] top-[0%] left-[0%] text-xs tracking-[0.1em] leading-[18px] uppercase inline-block font-literata text-primary-color-11">
            Our Mission
          </b>
        </div>
        <div
          className="absolute top-[1689px] left-[47px] rounded-3xxs bg-primary-color-11 w-[299px] flex flex-col py-[22px] px-10 box-border items-center justify-center cursor-pointer text-center text-base text-neutral-100"
          onClick={onPrimaryBTNContainer4Click}
        >
          <b className="relative leading-[20px]">
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              Read Our Education
            </p>
            <p className="m-0">Integrity Policy</p>
          </b>
        </div>
        <div className="absolute h-[5.82%] w-[85.52%] top-[13.24%] right-[11.28%] bottom-[80.94%] left-[3.19%] text-neutral-600">
          <div className="absolute h-[14.91%] w-[89.94%] top-[0%] right-[0%] bottom-[85.09%] left-[10.06%]">
            <div className="absolute w-full top-[0%] left-[0%] leading-[24px] font-medium inline-block">
              As universities rely ever more on adjunct appointments,
              traditional academic positions are hard to come by — and they
              often don’t pay well. The pandemic has accelerated this shift,
              making it clear that educators need a new way to engage with
              students beyond the university. This crisis has prompted us to
              build a new company that could achieve the following:
            </div>
          </div>
          <div className="absolute h-[48.03%] w-full top-[51.97%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute w-[84.85%] top-[0%] left-[15.15%] leading-[24px] font-medium inline-block">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Enable greater educational opportunities for academics, PhDs,
                lecturers, adjuncts, and graduate students to earn beyond the
                university.
              </p>
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                &nbsp;
              </p>
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Allow adult learners to connect with educators in one-on-one
                sessions that bridge academic and career needs.
              </p>
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                &nbsp;
              </p>
              <p className="m-0">{`Integrate the best insights from educational history and practice into an online marketplace. `}</p>
            </div>
            <img
              className="absolute top-[11px] left-[0px] w-1.5 h-1.5"
              alt=""
              src="../ellipse-401.svg"
            />
            <img
              className="absolute top-[130px] left-[0px] w-1.5 h-1.5"
              alt=""
              src="../ellipse-401.svg"
            />
            <img
              className="absolute top-[226px] left-[0px] w-1.5 h-1.5"
              alt=""
              src="../ellipse-401.svg"
            />
          </div>
        </div>
        <img
          className="absolute top-[1835px] left-[-41px] w-[1512px] h-[297.53px] object-cover"
          alt=""
          src="../images1@2x.png"
        />
        <div className="absolute w-[76.92%] top-[29.07%] left-[11.79%] leading-[24px] font-medium text-neutral-600 inline-block">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            Adult learners are the fasting growing segment in higher education
            around world today, yet are one of the most underserved segments in
            higher and continuing education when it comes to personalized
            options. Our educators want to change that.
          </p>
        </div>
        <div className="absolute w-[77.18%] top-[31.46%] left-[11.79%] leading-[24px] font-medium text-neutral-600 inline-block">
          Though they may come from different backgrounds, adult learners are
          looking for educational support in the form of advising, guidance, and
          mentoring at key transitions in their personal and professional lives.
        </div>
        <div className="absolute h-[2.7%] top-[33.86%] bottom-[63.44%] left-[46px] w-[250px] text-base">
          <div className="absolute h-[10.71%] top-[0%] bottom-[89.29%] left-[0px] w-[250px]">
            <b className="absolute h-[83.33%] top-[8.33%] left-[37px] leading-[20px] inline-block w-[213px]">
              Advanced undergraduates
            </b>
            <img
              className="absolute h-full top-[0%] bottom-[0%] left-[0px] max-h-full w-6"
              alt=""
              src="../group.svg"
            />
          </div>
          <div className="absolute h-[10.71%] top-[17.86%] bottom-[71.43%] left-[0px] w-[227.82px]">
            <b className="absolute h-[83.33%] top-[8.33%] left-[36.82px] leading-[20px] inline-block w-[191px]">
              Young professionals
            </b>
            <img
              className="absolute h-full top-[0%] bottom-[0%] left-[0px] max-h-full w-6"
              alt=""
              src="../group.svg"
            />
          </div>
          <div className="absolute h-[10.71%] top-[35.71%] bottom-[53.57%] left-[0px] w-[215.82px]">
            <b className="absolute h-[83.33%] top-[8.33%] left-[36.82px] leading-[20px] inline-block w-[179px]">
              Part-time students
            </b>
            <img
              className="absolute h-full top-[0%] bottom-[0%] left-[0px] max-h-full w-6"
              alt=""
              src="../group.svg"
            />
          </div>
          <div className="absolute h-[10.71%] top-[53.57%] bottom-[35.71%] left-[0px] w-[216px]">
            <b className="absolute h-[83.33%] top-[8.33%] left-[37px] leading-[20px] inline-block w-[179px]">
              Stay-at-home parents
            </b>
            <img
              className="absolute h-full top-[0%] bottom-[0%] left-[0px] max-h-full w-6"
              alt=""
              src="../group.svg"
            />
          </div>
          <div className="absolute h-[10.71%] top-[71.43%] bottom-[17.86%] left-[0px] w-[227.82px]">
            <b className="absolute h-[83.33%] top-[8.33%] left-[36.82px] leading-[20px] inline-block w-[191px]">
              International students
            </b>
            <img
              className="absolute h-full top-[0%] bottom-[0%] left-[0px] max-h-full w-6"
              alt=""
              src="../group.svg"
            />
          </div>
          <div className="absolute h-[10.71%] top-[89.29%] bottom-[0%] left-[0px] w-[246px]">
            <b className="absolute h-[83.33%] top-[8.33%] left-[37px] leading-[20px] inline-block w-[209px]">
              And many others
            </b>
            <img
              className="absolute h-full top-[0%] bottom-[0%] left-[0px] max-h-full w-6"
              alt=""
              src="../group.svg"
            />
          </div>
        </div>
        <div className="absolute h-[2.44%] w-[76.92%] top-[38.74%] right-[11.54%] bottom-[58.83%] left-[11.54%] text-center text-secondary-color-2">
          <b className="absolute w-full top-[18.81%] left-[0%] text-2xl leading-[40px] inline-block">{`Committed to Diversity, Equity & Inclusion`}</b>
          <div className="absolute w-full top-[76.24%] left-[0%] leading-[24px] font-medium inline-block">
            Polis is an equal opportunity employer committed to equity,
            diversity, and inclusion in all forms. Polis does not discriminate
            on the basis of race, religion, color, national origin, gender
            identity, sexual orientation, age, marital status, veteran status,
            disability status, or any other protected category.
          </div>
          <b className="absolute w-[43.67%] top-[0%] left-[28.33%] tracking-[0.1em] leading-[18px] uppercase inline-block font-literata text-secondary-color-6">
            Core Values
          </b>
        </div>
        <img
          className="absolute top-[3606px] right-[-566px] w-[381px] h-[381px]"
          alt=""
          src="../ellipse-1194.svg"
        />
        <div className="absolute h-[5.59%] top-[49.04%] bottom-[45.37%] left-[45px] w-[324px] text-base">
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
        <img
          className="absolute h-[0.38%] w-[13.57%] top-[71.7%] right-[43.27%] bottom-[27.91%] left-[43.15%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../group-395241.svg"
        />
        <div className="absolute top-[4614px] left-[44px] shadow-[0px_5.535259246826172px_22.14px_rgba(74,_58,_255,_0.03),_0px_12.915604591369629px_31.37px_rgba(20,_20,_43,_0.05)] w-[300px] h-[300px] text-3xl">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-[125%] w-[101.55%] top-[-9.33%] right-[-0.88%] bottom-[-15.67%] left-[-0.67%]">
              <div className="absolute h-[47.58%] w-[70.38%] top-[1.16%] right-[57.24%] bottom-[51.26%] left-[-27.62%] bg-neutral-100 hidden" />
              <img
                className="absolute top-[0px] left-[0px] w-[304.65px] h-[375px] object-cover"
                alt=""
                src="../mask-group16@2x.png"
              />
              <div className="absolute h-[1.34%] w-[49.94%] top-[12.66%] right-[72.57%] bottom-[86%] left-[-22.51%] bg-secondary-color-6 hidden opacity-[0.1]" />
              <div className="absolute h-[13.44%] w-[56.23%] top-[5.05%] right-[65.38%] bottom-[81.52%] left-[-21.62%] hidden">
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
                className="absolute h-[161.47%] w-[180.11%] top-[58.8%] right-[69.26%] bottom-[-120.28%] left-[-149.36%] max-w-full overflow-hidden max-h-full hidden"
                alt=""
                src="../group-379653.svg"
              />
              <div className="absolute h-[25.02%] w-[37.64%] top-[100.66%] right-[67.39%] bottom-[-25.68%] left-[-5.04%] rounded-large bg-gray-300 [transform:_rotate(-20.79deg)] [transform-origin:0_0] hidden" />
            </div>
          </div>
        </div>
        <div className="absolute h-[4.73%] w-[76.92%] top-[60.09%] right-[11.79%] bottom-[35.18%] left-[11.28%]">
          <b className="absolute h-[24.74%] w-[96.67%] top-[10.2%] left-[0%] text-2xl leading-[40px] inline-block">
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              A Global Learning Community for the 21st Century
            </p>
          </b>
          <b className="absolute w-[57%] top-[0%] left-[0%] tracking-[0.1em] leading-[18px] uppercase inline-block font-literata text-primary-color-11">
            OUr Community
          </b>
          <div className="absolute w-full top-[51.02%] left-[0%] leading-[24px] font-medium text-neutral-600 whitespace-pre-wrap inline-block">
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              We’re building a community for the world’s best educators who want
              to create value and impact for their expertise and experience
              outside of traditional higher ed institutions.
            </p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              &nbsp;
            </p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">{`Our educators include professors, consultants, lecturers, entrepreneurs,  graduate students, and  professionals from a wide range of academic and non-academic backgrounds. `}</p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              &nbsp;
            </p>
            <p className="m-0">
              Our educators have prior experience at top universities and
              organizations around the world along with a demonstrated record of
              excellence in teaching, advising, and mentoring.
            </p>
          </div>
        </div>
        <b className="absolute w-[44.62%] top-[69.58%] left-[27.44%] text-2xl leading-[40px] inline-block text-center">
          Polis Features
        </b>
        <b className="absolute w-[25.64%] top-[69.1%] left-[36.92%] tracking-[0.1em] leading-[18px] uppercase inline-block font-literata text-primary-color-11">
          Features
        </b>
        <div className="absolute h-[4.2%] top-[70.61%] bottom-[25.2%] left-[calc(50%_-_182px)] w-[364px] text-center text-base text-neutral-600">
          <div className="absolute h-full top-[0%] bottom-[0%] left-[calc(50%_-_150px)] w-[300px]">
            <div className="absolute h-full top-[0%] bottom-[0%] left-[calc(50%_-_150px)] rounded-base bg-neutral-100 shadow-[0px_-3px_8px_rgba(20,_20,_43,_0.1),_0px_4px_22px_rgba(8,_15,_52,_0.1)] box-border w-[300px] border-[1px] border-solid border-neutral-300" />
          </div>
          <div className="absolute h-[0.57%] top-[83.91%] bottom-[15.52%] left-[calc(50%_-_55px)] bg-secondary-color-6 box-border w-28 border-t-[2px] border-solid border-secondary-color-6" />
          <div className="absolute h-[54.6%] top-[17.24%] bottom-[28.16%] left-[calc(50%_-_106px)] w-[213px]">
            <img
              className="absolute h-[45.26%] top-[0%] bottom-[54.74%] left-[calc(50%_-_43.5px)] max-h-full w-[86px]"
              alt=""
              src="../group-380288.svg"
            />
            <div className="absolute w-[556.17%] top-[91.7%] left-[-228.74%] leading-[30px] font-medium hidden">
              Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus
            </div>
            <b className="absolute top-[62.11%] left-[calc(50%_-_106.5px)] text-xl leading-[24px] inline-block text-neutral-800 w-[213px]">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Real-Time Sessions.
              </p>
              <p className="m-0">No Lectures. No Grading.</p>
            </b>
          </div>
          <img
            className="absolute h-[18.39%] top-[20.69%] bottom-[60.92%] left-[calc(50%_+_118px)] max-h-full w-16"
            alt=""
            src="../group-39133.svg"
          />
          <img
            className="absolute h-[18.39%] top-[39.08%] bottom-[42.53%] left-[calc(50%_-_118px)] max-h-full w-16"
            alt=""
            src="../group-39525.svg"
          />
        </div>
        <div className="absolute h-[0.77%] w-[57.44%] top-[80.96%] right-[31.03%] bottom-[18.27%] left-[11.54%] rounded-3xxs bg-primary-color-11 flex flex-col py-[22px] px-10 box-border items-center justify-center text-center text-base text-neutral-100">
          <b className="relative leading-[20px]">Join our team</b>
        </div>
        <div className="absolute top-[6771px] left-[calc(50%_-_166px)] w-[355px] h-[608px] text-neutral-600">
          <div className="absolute top-[0px] left-[calc(50%_-_124.5px)] w-[238px] h-[339px]">
            <div className="absolute top-[23px] left-[-21px] rounded-3xl bg-secondary-color-6 w-[280px] h-[316.4px]" />
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="../handsomeconfidentsmilingmanwithhandscrossedchest4removebg-2@2x.png"
            />
          </div>
          <img
            className="absolute top-[138px] left-[calc(50%_+_113.5px)] w-16 h-16"
            alt=""
            src="../group-39133.svg"
          />
          <img
            className="absolute top-[202px] left-[calc(50%_-_113.5px)] w-16 h-16"
            alt=""
            src="../group-39892.svg"
          />
          <div className="absolute h-[40.63%] top-[59.38%] bottom-[0%] left-[calc(50%_-_151.5px)] w-[301px]">
            <div className="absolute h-full top-[0%] bottom-[0%] left-[calc(50%_-_150.5px)] w-[301px]">
              <img
                className="absolute h-[9.3%] top-[0%] bottom-[90.7%] left-[calc(50%_-_144.39px)] max-h-full w-[143.89px]"
                alt=""
                src="../group-39129.svg"
              />
              <div className="absolute top-[20.24%] left-[calc(50%_-_150.5px)] leading-[24px] font-medium inline-block w-[301px]">
                “Lorem ipsum dolor sit amet consectetur adipiscing elit cursus
                pellentesque morbi a proin a ornare ornare pellentesque massa Id
                vitae mi pellentesque.”
              </div>
              <div className="absolute h-[20.24%] top-[79.76%] bottom-[0%] left-[calc(50%_-_150.5px)] w-[220.31px] text-base text-neutral-800">
                <b className="absolute top-[0%] left-[calc(50%_-_110.15px)] leading-[20px] inline-block w-[120.4px]">
                  John Carter
                </b>
                <div className="absolute top-[60%] left-[calc(50%_-_110.15px)] leading-[20px] font-medium text-neutral-600 inline-block w-[220.31px]">
                  CEO at Marketingly X
                </div>
              </div>
            </div>
          </div>
        </div>
        <b className="absolute w-[36.67%] top-[46.82%] left-[31.79%] tracking-[0.1em] leading-[18px] uppercase inline-block font-literata text-primary-color-11 text-center">
          Office Hours
        </b>
        <b className="absolute h-[1.21%] w-[76.92%] top-[47.4%] left-[11.54%] text-2xl leading-[40px] inline-block text-center">
          Offer Guidance on a Variety of Topics
        </b>
        <div className="absolute h-[2.4%] w-[76.92%] top-[76.85%] right-[11.54%] bottom-[20.75%] left-[11.54%]">
          <b className="absolute h-[24.62%] w-full top-[19.1%] left-[0%] text-2xl leading-[40px] inline-block">
            Become a Polis Educator
          </b>
          <b className="absolute w-[38.67%] top-[0%] left-[0%] tracking-[0.1em] leading-[18px] uppercase inline-block font-literata text-primary-color-11">
            Educators
          </b>
          <div className="absolute w-full top-[75.88%] left-[0%] leading-[24px] font-medium text-neutral-600 inline-block">
            We are always looking for talented educators to join our diverse and
            global community of learning. To streamline the intake process, have
            your current resume or CV ready. We review all applications in
            detail and aim to respond within 48 hours.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Educators;
