import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import ContactFormSection from "../components/ContactFormSection";
import PolisContainer from "../components/PolisContainer";
import AccessContainer from "../components/AccessContainer";
import HeroContainer from "../components/HeroContainer";
import Header from "../components/Header";
import HowItWorksSection from "../components/HowItWorksSection";
import FooterMobile from "../components/FooterMobile";

const Home: FunctionComponent = () => {
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

  const onPrimaryBTN5Click = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <div className="relative w-full flex flex-col items-start justify-start text-left text-2xl text-neutral-600 font-lato">
      <div className="self-stretch relative bg-neutral-100 h-[5426px] shrink-0 md:hidden">
        <img
          className="absolute top-[93px] left-[calc(50%_+_28px)] w-[392px] h-[392px]"
          alt=""
          src="../ellipse-119.svg"
        />
        <Footer
          vector="../vector.svg"
          maskGroup="../mask-group.svg"
          footerFooterLeft="calc(50% - 720px)"
          footerFooterWidth="1440px"
        />
        <ContactFormSection />
        <PolisContainer />
        <AccessContainer />
        <HeroContainer />
        <Header
          polisLogoWebsiteHeader1="../polis-logo-websiteheader-12.svg"
          onMenuItemHomeTextClick={onMenuItemHomeTextClick}
          onMenuItemAboutTextClick={onMenuItemAboutTextClick}
          onMenuItemHowItWorksTextClick={onMenuItemHowItWorksTextClick}
          onMenuItemEducatorsTextClick={onMenuItemEducatorsTextClick}
          onMenuItemsBlogsTextClick={onMenuItemsBlogsTextClick}
          onMenuItemFAQTextClick={onMenuItemFAQTextClick}
        />
        <img
          className="absolute top-[94px] left-[calc(50%_+_436px)] w-[284px] h-[284px]"
          alt=""
          src="../rectangle-4105.svg"
        />
        <img
          className="absolute top-[193px] left-[calc(50%_+_87px)] w-[500px] h-[700px] object-cover"
          alt=""
          src="../mask-group3@2x.png"
        />
        <HowItWorksSection />
      </div>
      <div className="self-stretch relative bg-neutral-100 h-[4959px] shrink-0 overflow-hidden hidden md:flex">
        <div className="absolute top-[23px] right-[26px] w-[26px] h-[26px]">
          <div className="absolute top-[0px] right-[12.02px] bg-primary-color-11 w-[1.95px] h-[26px]" />
          <div className="absolute top-[12.02px] right-[-1.95px] bg-primary-color-11 w-[1.95px] h-[26px] [transform:_rotate(90deg)] [transform-origin:0_0]" />
        </div>
        <div className="absolute top-[72.5px] left-[-0.5px] box-border w-[391px] h-px border-t-[1px] border-solid border-neutral-300" />
        <img
          className="absolute top-[18px] left-[calc(50%_-_36px)] w-[79px] h-10 overflow-hidden"
          alt=""
          src="../polis-logo-websiteheader-11.svg"
        />
        <b className="absolute h-[2.72%] w-[80.51%] top-[1.14%] left-[9.23%] leading-[40px] inline-block text-neutral-800">
          Personalized education with the world’s best educators — anytime,
          anywhere
        </b>
        <div className="absolute h-[1.42%] w-[80.51%] top-[3.25%] left-[9.23%] text-xs leading-[24px] font-medium inline-block">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            Polis connects adult learners with the world’s best professors and
            professionals to find personalized answers to their educational
            questions at key transitions in their lives.
          </p>
        </div>
        <div className="absolute w-[calc(100%_+_3px)] top-[728px] right-[0px] left-[-3px] bg-neutral-200 h-[794px]" />
        <div className="absolute w-[calc(100%_+_8px)] top-[2477px] right-[0px] left-[-8px] bg-neutral-200 h-[1170px]" />
        <div className="absolute h-[4.05%] w-[72.31%] top-[6.39%] right-[13.6%] bottom-[89.56%] left-[14.1%] text-center text-neutral-800">
          <b className="absolute h-[46.5%] w-full top-[0%] left-[0%] leading-[40px] inline-block">
            The future of adult education is personal.
          </b>
          <b className="absolute h-[8.39%] w-[51.77%] top-[91.61%] left-[23.77%] text-xs tracking-[0.1em] leading-[18px] uppercase inline-block font-literata text-neutral-500">
            Key BENEFITS
          </b>
        </div>
        <div className="absolute w-[calc(100%_-_16px)] top-[1070px] right-[7px] left-[9px] h-[324px] text-center text-xs">
          <div className="absolute h-full w-[calc(100%_-_10px)] top-[0%] right-[5px] bottom-[0%] left-[5px]">
            <div className="absolute h-full w-[calc(100%_-_64px)] top-[0%] right-[32px] bottom-[0%] left-[32px]">
              <div className="absolute h-full w-full top-[0%] right-[0px] bottom-[0%] left-[0px] rounded-base bg-neutral-100 shadow-[0px_-3px_8px_rgba(20,_20,_43,_0.1),_0px_4px_22px_rgba(8,_15,_52,_0.1)] box-border border-[1px] border-solid border-neutral-300" />
            </div>
            <img
              className="absolute h-[25.23%] top-[11.73%] bottom-[63.05%] left-[calc(50%_-_43.65px)] max-h-full w-[86px]"
              alt=""
              src="../group-380281.svg"
            />
            <div className="absolute h-[42.82%] w-[64.71%] top-[53.65%] left-[17.71%] leading-[24px] font-medium inline-block">
              <p className="[margin-block-start:0] [margin-block-end:0px]">{`Our proprietary data-driven, human-informed matching system provides each learner with suggested educators based on what the learner needs. `}</p>
              <p className="m-0">&nbsp;</p>
            </div>
            <b className="absolute h-[8.12%] top-[42.82%] left-[calc(50%_-_134px)] text-xl leading-[34px] inline-block text-neutral-800 w-[267px]">
              Educator Matching
            </b>
            <div className="absolute h-[0.62%] top-[90.17%] bottom-[9.22%] left-[calc(50%_-_55.88px)] bg-secondary-color-6 box-border w-28 border-t-[2px] border-solid border-secondary-color-6" />
            <img
              className="absolute h-[18.09%] top-[18.95%] right-[0px] bottom-[62.96%] max-h-full w-16"
              alt=""
              src="../group-37853.svg"
            />
            <img
              className="absolute h-[18.09%] top-[37.04%] bottom-[44.88%] left-[64px] max-h-full w-16"
              alt=""
              src="../group-38029.svg"
            />
          </div>
        </div>
        <div className="absolute h-[1.62%] w-[71.79%] top-[18.62%] right-[16.67%] bottom-[79.76%] left-[11.54%] text-neutral-800">
          <b className="absolute h-[72.46%] w-full top-[27.54%] left-[0%] leading-[40px] inline-block">
            A new approach to one-on-one learning
          </b>
          <b className="absolute h-[13.04%] w-[55%] top-[0%] left-[0%] text-xs tracking-[0.1em] leading-[18px] uppercase inline-block font-literata text-primary-color-11">
            About Polis
          </b>
        </div>
        <div className="absolute h-[1.05%] w-[76.92%] top-[20.52%] left-[11.54%] text-xs leading-[24px] font-medium inline-block">
          Polis enables students to receive personalized advice, feedback , and
          guidance from educators as they navigate complex academic and
          professional spheres.
        </div>
        <img
          className="absolute w-[99.83%] top-[1916px] right-[3.99%] left-[-3.82%] max-w-full overflow-hidden h-[360.1px] object-cover"
          alt=""
          src="../group-39861@2x.png"
        />
        <img
          className="absolute top-[446px] left-[-3px] w-[1444px] h-[349px] object-cover"
          alt=""
          src="../group-39860@2x.png"
        />
        <button
          className="cursor-pointer [border:none] py-[22px] px-10 bg-primary-color-11 absolute top-[2361px] left-[calc(50%_-_76px)] rounded-3xxs flex flex-col items-center justify-center"
          onClick={onPrimaryBTN5Click}
        >
          <b className="relative text-base leading-[20px] font-lato text-neutral-100 text-center">
            Learn More
          </b>
        </button>
        <div className="absolute h-[2.2%] w-[78.72%] top-[30.97%] right-[9.06%] bottom-[66.82%] left-[12.22%] text-neutral-800">
          <b className="absolute h-[79.79%] w-full top-[20.21%] left-[0%] leading-[40px] inline-block">
            Personalizing your education begins with the world’s best educators
            at your fingertips
          </b>
          <b className="absolute h-[9.57%] w-[48.86%] top-[0%] left-[0%] text-xs tracking-[0.1em] leading-[18px] uppercase inline-block font-literata text-primary-color-11">
            How It Works
          </b>
        </div>
        <div className="absolute w-[76.92%] top-[3721px] right-[12.17%] left-[10.9%] h-[422px] text-xs">
          <div className="absolute w-full top-[326px] right-[0%] left-[0%] h-24">
            <img
              className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-small max-w-full overflow-hidden h-24"
              alt=""
              src="../rectangle-14.svg"
            />
            <div className="absolute top-[27px] left-[calc(50%_-_148.4px)] w-[310.81px] h-[42px]">
              <div className="absolute top-[24px] left-[calc(50%_-_88.25px)] leading-[18px] font-medium inline-block w-[243.65px] h-[18px]">
                contact@marketing.com
              </div>
              <b className="absolute top-[0px] left-[calc(50%_-_88.27px)] text-base leading-[20px] inline-block text-neutral-800 w-[126.54px] h-5">
                Email us
              </b>
              <img
                className="absolute top-[7px] left-[calc(50%_-_155.4px)] w-[44.24px] h-7"
                alt=""
                src="../group-39141.svg"
              />
            </div>
          </div>
          <div className="absolute w-[94%] top-[183px] left-[0%] leading-[24px] font-medium inline-block h-[90px]">
            If you need support or assistance, please check out our Support page
            or write to us here. Our general response time is one business day.
          </div>
          <b className="absolute w-[86.67%] top-[38px] left-[0%] text-2xl leading-[40px] inline-block text-neutral-800 h-[200px]">
            Interested in working with us? Send us a message.
          </b>
          <b className="absolute w-[41.67%] top-[0px] left-[0.01%] tracking-[0.1em] leading-[18px] uppercase inline-block font-literata text-primary-color-11 h-[18px]">
            CONTACT US
          </b>
        </div>
        <div className="absolute w-[93.75%] top-[3429px] right-[3.13%] left-[3.13%] h-[186px] text-base">
          <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-base bg-neutral-100 shadow-[0px_2.1541147232055664px_10.77px_rgba(31,_37,_89,_0.08)] box-border h-[186px] border-[1px] border-solid border-whitesmoke" />
          <div className="absolute w-[95.26%] top-[12px] right-[1.63%] left-[3.11%] h-[108px]">
            <div className="absolute w-[92.69%] top-[0px] right-[0%] left-[7.31%] h-[108px]">
              <div className="absolute w-full top-[44px] left-[0%] leading-[24px] font-medium inline-block h-16">
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  <span>
                    Meet with your educator in a 1:1 video conference to address
                    your needs.
                  </span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:0px] text-xs">
                  <span>&nbsp;</span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  <span>&nbsp;</span>
                </p>
                <p className="m-0">
                  <span>&nbsp;</span>
                </p>
              </div>
              <b className="absolute w-[32.02%] top-[0px] left-[0%] leading-[34px] inline-block text-neutral-800 h-[34px]">
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  Meet
                </p>
              </b>
            </div>
            <img
              className="absolute w-[4.67%] top-[44px] right-[95.33%] left-[0%] max-w-full overflow-hidden h-[60px]"
              alt=""
              src="../icon-meet1.svg"
            />
          </div>
        </div>
        <div className="absolute w-[93.75%] top-[3229px] right-[3.13%] left-[3.13%] h-[180px] text-base">
          <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-base bg-neutral-100 shadow-[0px_2.1541147232055664px_10.77px_rgba(31,_37,_89,_0.08)] box-border h-[180px] border-[1px] border-solid border-whitesmoke" />
          <div className="absolute w-[96.15%] top-[16px] right-[0.74%] left-[3.11%] h-[104px]">
            <div className="absolute w-[92.76%] top-[0px] right-[0%] left-[7.24%] h-[104px]">
              <div className="absolute w-full top-[0px] right-[0%] left-[0%] h-[104px]">
                <div className="absolute w-full top-[38px] left-[0%] leading-[30px] font-medium inline-block h-[66px]">
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    Book a 1:1 digital office hours session with an educator.
                  </p>
                  <p className="m-0">&nbsp;</p>
                </div>
                <b className="absolute w-[32.02%] top-[0px] left-[0%] leading-[34px] inline-block text-neutral-800 h-[34px]">
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    Book
                  </p>
                </b>
              </div>
            </div>
            <img
              className="absolute w-[4.62%] top-[39px] right-[95.38%] left-[0%] max-w-full overflow-hidden h-[60px]"
              alt=""
              src="../icon-book1.svg"
            />
          </div>
        </div>
        <div className="absolute w-[93.75%] top-[2830px] right-[3.19%] left-[3.06%] h-[173px] text-base">
          <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-base bg-neutral-100 shadow-[0px_2.1541147232055664px_10.77px_rgba(31,_37,_89,_0.08)] box-border h-[173px] border-[1px] border-solid border-whitesmoke" />
          <div className="absolute w-[96.15%] top-[14px] right-[0.81%] left-[3.04%] h-[133px]">
            <div className="absolute w-[93.45%] top-[0px] right-[0%] left-[6.55%] h-[133px]">
              <div className="absolute w-full top-[34px] left-[0%] leading-[30px] font-medium inline-block h-[99px]">
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  Request access, fill out assessment form, and create a profile
                  page on our platform.
                </p>
                <p className="m-0">&nbsp;</p>
              </div>
              <b className="absolute w-[58.3%] top-[0px] left-[0%] leading-[34px] inline-block text-neutral-800 h-[34px]">
                Sign Up
              </b>
            </div>
            <img
              className="absolute w-[4.62%] top-[36px] right-[95.38%] left-[0%] max-w-full overflow-hidden h-[60px]"
              alt=""
              src="../icon-sign-up1.svg"
            />
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_90px)] top-[3023px] right-[45px] left-[45px] h-[186px] text-base">
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-base bg-neutral-100 shadow-[0px_2.1541147232055664px_10.77px_rgba(31,_37,_89,_0.08)] box-border h-[186px] border-[1px] border-solid border-whitesmoke" />
          <div className="absolute w-[95.41%] top-[26px] right-[1.63%] left-[2.96%] h-[120px]">
            <div className="absolute w-[93.4%] top-[0px] right-[0%] left-[6.6%] h-[120px]">
              <div className="absolute w-full top-[0px] right-[0%] left-[0%] h-[120px]">
                <div className="absolute w-[99.75%] top-[40px] left-[0.25%] leading-[30px] font-medium inline-block h-20">
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    Once approved, choose from recommended educators who have
                    been selected to meet your needs.
                  </p>
                  <p className="m-0">&nbsp;</p>
                </div>
                <b className="absolute w-[6.26%] top-[0px] left-[0%] leading-[34px] inline-block text-neutral-800 h-[44.29px]">
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    Choose
                  </p>
                </b>
              </div>
            </div>
            <img
              className="absolute w-[4.66%] top-[34px] right-[95.34%] left-[0%] max-w-full overflow-hidden h-[60px]"
              alt=""
              src="../icon-search1.svg"
            />
          </div>
        </div>
        <FooterMobile
          subscribeMobileMask="../subscribemobilemask.svg"
          group39617="../group-39617.svg"
        />
      </div>
    </div>
  );
};

export default Home;
