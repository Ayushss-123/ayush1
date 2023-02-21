import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import WhyPolis from "../components/WhyPolis";
import AboutHeroSection from "../components/AboutHeroSection";
import Header from "../components/Header";
import PolisTeamSection from "../components/PolisTeamSection";
import AboutSection from "../components/AboutSection";
import FooterMobile from "../components/FooterMobile";

const About: FunctionComponent = () => {
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

  const onPrimaryBTNContainer2Click = useCallback(() => {
    // Please sync "Contact" to the project
  }, []);

  const onPrimaryBTNContainer3Click = useCallback(() => {
    // Please sync "Contact" to the project
  }, []);

  const onPrimaryBTNContainer4Click = useCallback(() => {
    // Please sync "Educational Integrity Policy" to the project
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center justify-start text-center text-4xl text-neutral-800 font-lato">
      <div className="self-stretch relative bg-neutral-100 h-[5177px] shrink-0 overflow-hidden md:hidden">
        <img
          className="absolute w-[calc(100%_+_1px)] top-[94px] right-[-1px] left-[0px] max-w-full overflow-hidden h-[700px]"
          alt=""
          src="../rectangle-4097.svg"
        />
        <Footer
          vector="../vector.svg"
          maskGroup="../mask-group19.svg"
          footerTop="4638px"
          footerFooterWidth="1466px"
        />
        <WhyPolis />
        <img
          className="absolute h-[2.96%] w-[10.65%] top-[68.94%] right-[83.1%] bottom-[28.1%] left-[6.25%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../group-381261.svg"
        />
        <AboutHeroSection />
        <Header
          polisLogoWebsiteHeader1="../polis-logo-websiteheader-18.svg"
          onMenuItemHomeTextClick={onMenuItemHomeTextClick}
          onMenuItemAboutTextClick={onMenuItemAboutTextClick}
          onMenuItemHowItWorksTextClick={onMenuItemHowItWorksTextClick}
          onMenuItemEducatorsTextClick={onMenuItemEducatorsTextClick}
          onMenuItemsBlogsTextClick={onMenuItemsBlogsTextClick}
          onMenuItemFAQTextClick={onMenuItemFAQTextClick}
        />
        <div className="absolute h-[4.71%] top-[19.63%] bottom-[75.66%] left-[calc(50%_-_371px)] w-[743px]">
          <b className="absolute top-[13.01%] left-[calc(50%_-_371.5px)] leading-[50px]">
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              Polis means “city” in Greek.
            </p>
            <p className="m-0">The word can also mean “a body of citizens.”</p>
          </b>
          <div className="absolute top-[63.11%] left-[calc(50%_-_265.7px)] text-base leading-[30px] font-medium text-neutral-600 inline-block w-[530.4px]">{`We understand Polis to be a community of people — learners, and educators — who engage in productive conversations that can advance academic or career goals. `}</div>
          <b className="absolute top-[0px] left-[calc(50%_-_51.5px)] text-xs tracking-[0.1em] leading-[18px] uppercase font-literata text-primary-color-11">
            OUR NAME
          </b>
        </div>
        <PolisTeamSection />
        <AboutSection />
      </div>
      <div className="self-stretch relative bg-neutral-100 h-[5919px] shrink-0 overflow-hidden hidden text-xs md:flex md:self-stretch md:w-auto">
        <img
          className="absolute w-full top-[calc(50%_-_2886.5px)] right-[0px] left-[0px] max-w-full overflow-hidden h-[667px]"
          alt=""
          src="../rectangle-40982.svg"
        />
        <div className="absolute top-[23px] right-[27px] w-[26px] h-[26px]">
          <div className="absolute top-[0px] right-[12.02px] bg-primary-color-11 w-[1.95px] h-[26px]" />
          <div className="absolute top-[12.02px] right-[-1.95px] bg-primary-color-11 w-[1.95px] h-[26px] [transform:_rotate(90deg)] [transform-origin:0_0]" />
        </div>
        <div className="absolute top-[72.5px] left-[-0.5px] box-border w-[391px] h-px border-t-[1px] border-solid border-neutral-300" />
        <img
          className="absolute top-[18px] left-[calc(50%_-_37px)] w-[79px] h-10 overflow-hidden"
          alt=""
          src="../polis-logo-websiteheader-110.svg"
        />
        <img
          className="absolute top-[149px] right-[33px] w-[151px] h-[152px]"
          alt=""
          src="../ellipse-117.svg"
        />
        <img
          className="absolute top-[548px] left-[198px] w-[192.27px] h-[192.11px]"
          alt=""
          src="../group-39756.svg"
        />
        <img
          className="absolute top-[740px] left-[0px] w-[108px] h-[217px]"
          alt=""
          src="../ellipse-1171.svg"
        />
        <img
          className="absolute top-[517px] left-[calc(50%_-_210px)] w-[416px] h-[300px] object-cover"
          alt=""
          src="../mask-group22@2x.png"
        />
        <div className="absolute h-[3.94%] w-[calc(100%_-_90.23px)] top-[1.88%] right-[45.12px] bottom-[94.19%] left-[45.12px] text-left text-neutral-100">
          <b className="absolute w-[calc(100%_-_31.51px)] top-[17.17%] left-[0px] text-2xl leading-[40px] inline-block">
            One-on-one learning is the oldest form of education.
          </b>
          <b className="absolute w-[calc(100%_-_168.43px)] top-[0%] left-[0px] tracking-[0.1em] leading-[18px] uppercase inline-block font-literata text-neutral-600">
            About US
          </b>
          <div className="absolute w-full top-[79.4%] left-[0px] leading-[24px] font-medium inline-block">
            But new technologies have created opportunities to make this
            approach more accessible. Polis enables students to receive
            personalized advice, feedback , and guidance from educators as they
            navigate complex academic and professional spheres.
          </div>
        </div>
        <div className="absolute h-[4.53%] w-[calc(100%_-_90.23px)] top-[15.07%] right-[45.12px] bottom-[80.4%] left-[45.12px]">
          <b className="absolute w-full top-[11.94%] left-[0px] text-2xl leading-[40px] inline-block">
            Polis means “city” in Greek. The word can also mean “a body of
            citizens.”
          </b>
          <div className="absolute w-full top-[91.04%] left-[0px] leading-[24px] font-medium text-neutral-600 inline-block">{`We understand Polis to be a community of people — students, educators, and experts — who engage in productive conversations that can advance their academic or career goals. `}</div>
          <b className="absolute w-[calc(100%_-_197.77px)] top-[0px] left-[97.88px] tracking-[0.1em] leading-[18px] uppercase inline-block font-literata text-primary-color-11">
            OUR NAME
          </b>
        </div>
        <img
          className="absolute top-[1491.53px] right-[0.95px] w-[195.05px] h-[194.47px]"
          alt=""
          src="../group-392411.svg"
        />
        <img
          className="absolute top-[1686px] left-[91px] w-[91px] h-[183px]"
          alt=""
          src="../ellipse-4201.svg"
        />
        <img
          className="absolute top-[1332px] left-[0px] w-[169px] h-[169px]"
          alt=""
          src="../rectangle-4116.svg"
        />
        <div className="absolute h-[9.97%] top-[25.68%] bottom-[64.35%] left-[calc(50%_-_217px)] w-[432px] text-lg">
          <div className="absolute h-full top-[0%] bottom-[0%] left-[calc(50%_-_184px)] rounded-base shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[368px] overflow-hidden flex flex-col items-center justify-center">
            <img
              className="relative rounded-t-base rounded-b-none w-[368px] h-[358px] shrink-0 object-cover"
              alt=""
              src="../michael3@2x.png"
            />
            <div className="relative w-[368px] h-[232px] shrink-0 overflow-hidden">
              <img
                className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                alt=""
                src="../cardcontent3.svg"
              />
              <div className="absolute h-[calc(100%_-_95px)] w-full top-[43px] right-[0px] bottom-[52px] left-[0px] flex flex-col items-center justify-start gap-[21px]">
                <div className="flex flex-col items-center justify-start gap-[14px]">
                  <div className="relative box-border w-[78.75px] h-0.5 shrink-0 border-t-[2px] border-solid border-primary-color-11" />
                  <b className="relative leading-[28px]">Michael Tworek</b>
                  <div className="relative text-base leading-[30px] font-medium text-neutral-600">
                    Chief Executive Officer
                  </div>
                </div>
                <div className="w-[113.55px] flex flex-row items-center justify-between">
                  <div className="relative w-[29.85px] h-[29.85px] shrink-0">
                    <div className="absolute top-[calc(50%_-_14.93px)] left-[calc(50%_-_14.93px)] rounded-2xxl bg-dodgerblue-200 w-[29.85px] h-[29.85px]" />
                    <img
                      className="absolute top-[calc(50%_-_8.36px)] left-[calc(50%_-_4.48px)] w-[9.12px] h-[16.72px]"
                      alt=""
                      src="../vector13.svg"
                    />
                  </div>
                  <div className="relative w-[29.85px] h-[29.85px] shrink-0">
                    <div className="absolute top-[calc(50%_-_14.93px)] left-[calc(50%_-_14.93px)] w-[29.85px] h-[29.85px]">
                      <div className="absolute top-[calc(50%_-_14.93px)] left-[calc(50%_-_14.93px)] rounded-2xxl bg-dodgerblue-100 w-[29.85px] h-[29.85px]" />
                      <img
                        className="absolute top-[calc(50%_-_6.27px)] left-[calc(50%_-_8.06px)] w-[15.82px] h-[12.84px]"
                        alt=""
                        src="../vector14.svg"
                      />
                    </div>
                  </div>
                  <div className="relative w-[29.85px] h-[29.85px] shrink-0">
                    <div className="absolute top-[calc(50%_-_14.93px)] left-[calc(50%_-_14.93px)] w-[29.85px] h-[29.85px]">
                      <div className="absolute top-[calc(50%_-_14.93px)] left-[calc(50%_-_14.93px)] rounded-2xxl bg-dodgerblue-300 w-[29.85px] h-[29.85px]" />
                      <img
                        className="absolute top-[calc(50%_-_7.31px)] left-[calc(50%_-_7.67px)] w-[15.34px] h-[14.61px]"
                        alt=""
                        src="../vector15.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute top-[205px] left-[calc(50%_+_152px)] w-16 h-16"
            alt=""
            src="../rightarrow1.svg"
          />
          <img
            className="absolute top-[269px] left-[calc(50%_-_152px)] w-16 h-16"
            alt=""
            src="../leftarrow.svg"
          />
        </div>
        <b className="absolute w-[75.9%] top-[24.09%] left-[12.56%] text-2xl leading-[40px] inline-block text-neutral-100">
          Meet the Polis Team
        </b>
        <b className="absolute w-[26.15%] top-[23.45%] left-[36.67%] tracking-[0.1em] leading-[18px] uppercase inline-block font-literata text-neutral-500">
          OUR TEAM
        </b>
        <div className="absolute h-[6.69%] w-[76.67%] top-[36.56%] right-[11.54%] bottom-[56.75%] left-[11.79%] text-left">
          <div className="absolute h-[56.99%] w-full top-[0%] right-[0%] bottom-[43.01%] left-[0%]">
            <b className="absolute h-[15.09%] w-full top-[14.34%] left-[0%] text-2xl leading-[40px] inline-block">
              Polis fosters mutual development and growth for educators and
              learners
            </b>
            <b className="absolute h-[6.79%] w-[43.81%] top-[0%] left-[0%] tracking-[0.1em] leading-[18px] uppercase inline-block font-literata text-primary-color-11">
              OUr mission
            </b>
            <div className="absolute h-[18.11%] w-full top-[81.89%] left-[0%] leading-[24px] font-medium text-neutral-600 inline-block">{`Our online personal education platform provides one-on-one interactions for learners by matching them with the world’s best educators. Learners can find personalized solutions to their academic and career questions. `}</div>
          </div>
          <div
            className="absolute top-[341.5px] left-[calc(50%_-_151.85px)] rounded-3xxs bg-primary-color-11 h-[54.5px] flex flex-col py-[22px] px-10 box-border items-start justify-center cursor-pointer text-center text-base text-neutral-100"
            onClick={onPrimaryBTNContainer2Click}
          >
            <b className="relative leading-[20px]">Join our team</b>
          </div>
        </div>
        <img
          className="absolute h-[5.62%] top-[44.23%] bottom-[50.15%] left-[calc(50%_-_189px)] max-h-full w-[414px] object-cover"
          alt=""
          src="../group-39872@2x.png"
        />
        <div className="absolute w-[calc(100%_+_137.32px)] top-[3045px] right-[-190.32px] left-[53px] h-[539px] text-left text-neutral-600">
          <div className="absolute w-[calc(100%_-_236.32px)] top-[273.5px] right-[236.82px] left-[-0.5px] box-border h-px border-t-[1px] border-solid border-neutral-400" />
          <b className="absolute w-[calc(100%_-_0.14px)] top-[7.13%] left-[0.14px] text-2xl leading-[40px] inline-block text-neutral-800">
            Who We Are
          </b>
          <b className="absolute w-[calc(100%_-_418.04px)] top-[0%] left-[0.14px] tracking-[0.1em] leading-[18px] uppercase inline-block font-literata text-primary-color-11">
            Our story
          </b>
          <div className="absolute w-[calc(100%_-_236.57px)] top-[22.82%] left-[0.14px] leading-[24px] font-medium inline-block">{`We are a team of academics and professionals based in Cambridge, Massachusetts who believe that online personal education can transform higher education. `}</div>
          <div className="absolute w-[calc(100%_-_239.58px)] top-[57.51%] left-[0.14px] leading-[24px] font-medium inline-block">
            We have assembled a roster of personal educators who are professors,
            lecturers, PhD students, advanced graduate students, and
            professionals with degrees from the world’s best universities.
          </div>
          <div
            className="absolute top-[475px] left-[calc(50%_-_270.66px)] rounded-3xxs bg-primary-color-11 flex flex-col py-[22px] px-10 items-start justify-center cursor-pointer text-center text-base text-neutral-100"
            onClick={onPrimaryBTNContainer3Click}
          >
            <b className="relative leading-[20px]">Join our team</b>
          </div>
        </div>
        <img
          className="absolute h-[5.49%] top-[61.53%] bottom-[32.98%] left-[calc(50%_-_214.95px)] max-h-full w-[403.34px] object-cover"
          alt=""
          src="../group-39873@2x.png"
        />
        <div className="absolute w-[calc(100%_-_92.12px)] top-[4111px] right-[46.12px] left-[46px] h-[212px] text-left text-2xl">
          <b className="absolute w-[calc(100%_-_10.88px)] top-[0px] left-[0px] leading-[40px] inline-block">
            Why Polis?
          </b>
          <div className="absolute w-[calc(100%_-_0.12px)] top-[43.4%] left-[0.12px] text-xs leading-[24px] font-medium text-neutral-600 whitespace-pre-wrap inline-block">
            <p className="[margin-block-start:0] [margin-block-end:0px]">{`As educational opportunities increasingly migrate to online platforms, educators and students often lose out on the sense of community and individual advising that education has offered to past generations. `}</p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              &nbsp;
            </p>
            <p className="m-0">
              Modern research has reaffirmed what educators and philosophers in
              antiquity already knew — one-on-one personal learning improves
              educational outcomes dramatically. Using history and technology,
              we seek to create an inclusive, diverse, and dynamic community of
              learning in the digital age.
            </p>
          </div>
        </div>
        <div
          className="absolute w-[calc(100%_-_91px)] top-[4585px] right-[45px] left-[46px] rounded-3xxs bg-primary-color-11 flex flex-col py-[22px] px-10 box-border items-center justify-center cursor-pointer text-base text-neutral-100"
          onClick={onPrimaryBTNContainer4Click}
        >
          <b className="relative leading-[20px]">
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              Read Our Education
            </p>
            <p className="m-0">Integrity Policy</p>
          </b>
        </div>
        <img
          className="absolute top-[4728px] left-[calc(50%_-_265px)] w-[530px] h-[297.53px] object-cover"
          alt=""
          src="../images3@2x.png"
        />
        <FooterMobile
          footerMobileWidth="calc(100% - 585px)"
          footerMobileTop="5088px"
          footerMobileLeft="84px"
          subscribeMobileMask="../subscribemobilemask3.svg"
          group39617="../group-396173.svg"
          footerMobileRight="501px"
          line443Width="85.89%"
          line443Right="14.17%"
          line443Left="-0.06%"
        />
      </div>
    </div>
  );
};

export default About;
