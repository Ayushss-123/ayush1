import { FunctionComponent, useCallback } from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Accordion,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import SubscribeForm from "../components/SubscribeForm";
import FAQAccordionContainer from "../components/FAQAccordionContainer";
import QuestionsContainer from "../components/QuestionsContainer";
import Header from "../components/Header";
import FAQContainer from "../components/FAQContainer";

const FAQ: FunctionComponent = () => {
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

  return (
    <div className="relative w-full flex flex-col items-center justify-start text-center text-5xl text-secondary-color-3 font-lato">
      <div className="self-stretch relative bg-neutral-100 h-[3555px] shrink-0 overflow-hidden md:hidden">
        <SubscribeForm />
        <FAQAccordionContainer propTop="2231px" propLeft="calc(50% - 570px)" />
        <QuestionsContainer />
        <div className="absolute w-[calc(100%_-_291px)] top-[542px] right-[136px] left-[155px] h-[467px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-base bg-neutral-100 shadow-[0px_5px_18px_rgba(31,_37,_89,_0.05)] box-border border-[0.5px] border-solid border-neutral-200" />
          <b className="absolute w-[64.47%] top-[69px] left-[17.83%] leading-[61px] inline-block">
            General Questions
          </b>
          <div className="absolute w-[calc(100%_-_142px)] top-[217px] right-[73px] left-[69px] flex flex-col items-center justify-center">
            <Accordion className="self-stretch" allowToggle>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section Title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>Content</AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion className="self-stretch" allowToggle>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section Title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>Content</AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion className="self-stretch" allowToggle>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section Title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>Content</AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
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
          className="absolute top-[65.5px] left-[932px] w-[41px] h-[3px]"
          alt=""
          src="../nav-indicator1.svg"
        />
        <FAQContainer />
      </div>
      <div className="self-stretch relative bg-neutral-100 h-[4362px] shrink-0 overflow-hidden hidden md:flex">
        <img
          className="absolute w-full top-[1480px] right-[0px] left-[0px] max-w-full overflow-hidden h-[1026px]"
          alt=""
          src="../rectangle-4055.svg"
        />
        <div className="absolute top-[23px] left-[338px] w-[26px] h-[26px]">
          <div className="absolute top-[0px] left-[12.03px] bg-primary-color-11 w-[1.95px] h-[26px]" />
          <div className="absolute top-[12.02px] left-[26px] bg-primary-color-11 w-[1.95px] h-[26px] [transform:_rotate(90deg)] [transform-origin:0_0]" />
        </div>
        <div className="absolute top-[72.5px] left-[-0.5px] box-border w-[391px] h-px border-t-[1px] border-solid border-neutral-300" />
        <img
          className="absolute top-[18px] left-[159px] w-[79px] h-10 overflow-hidden"
          alt=""
          src="../polis-logo-websiteheader-17.svg"
        />
        <div className="absolute h-[17.72%] w-full top-[81.09%] right-[0%] bottom-[1.19%] left-[0%] text-left text-base text-primary-color-11">
          <div className="absolute h-[34.41%] w-[76.92%] top-[38.81%] right-[11.54%] bottom-[26.78%] left-[11.54%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xxs bg-primary-color-11" />
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="../mask-group18.svg"
            />
            <div className="absolute h-[80.08%] w-[79.73%] top-[8.65%] right-[10.42%] bottom-[11.28%] left-[9.86%]">
              <div className="absolute h-[30.05%] w-[99.91%] top-[69.95%] right-[0%] bottom-[0%] left-[0.09%] rounded-3xxs bg-neutral-100 flex flex-col py-[22px] px-10 box-border items-center justify-center text-center">
                <b className="relative leading-[20px]">Subscribe</b>
              </div>
              <div className="absolute h-[19.08%] w-[99.93%] top-[42.72%] right-[0.07%] bottom-[38.2%] left-[0%] text-neutral-600">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xxs bg-neutral-100 box-border border-[1px] border-solid border-neutral-400" />
                <div className="absolute h-[49.22%] w-[54.81%] top-[25.93%] left-[6.88%] leading-[20px] font-medium inline-block">
                  Email address
                </div>
              </div>
              <b className="absolute h-[10.46%] w-[80.69%] top-[0%] left-[0%] text-xl leading-[34px] inline-block text-neutral-100">
                Subscribe to our newsletter
              </b>
            </div>
          </div>
          <div className="absolute h-[18.11%] w-[81.46%] top-[13.71%] right-[7%] bottom-[68.18%] left-[11.54%] text-neutral-600">
            <div className="absolute h-[14.29%] w-[15.74%] top-[0%] left-[0%] leading-[20px] font-medium inline-block">
              Home
            </div>
            <div className="absolute h-[14.29%] w-[16.05%] top-[28.57%] left-[0%] leading-[20px] font-medium inline-block">
              About
            </div>
            <div className="absolute h-[14.29%] w-[35.57%] top-[57.14%] left-[0%] leading-[20px] font-medium inline-block">
              How It Works
            </div>
            <div className="absolute h-[14.29%] w-[25.5%] top-[85.71%] left-[0%] leading-[20px] font-medium inline-block">
              Educators
            </div>
            <div className="absolute h-[14.29%] w-[12.91%] top-[0%] left-[55.71%] leading-[20px] font-medium inline-block">
              FAQ
            </div>
            <div className="absolute h-[14.29%] w-[11.33%] top-[28.57%] left-[55.71%] leading-[20px] font-medium inline-block">
              Blog
            </div>
            <div className="absolute h-[14.26%] w-[44.29%] top-[57.14%] left-[55.71%] leading-[20px] font-medium inline-block">
              Get in Touch
            </div>
            <div className="absolute h-[14.26%] w-[44.29%] top-[85.69%] left-[55.71%] leading-[20px] font-medium inline-block">
              Legal
            </div>
          </div>
          <b className="absolute h-[2.58%] w-[19.49%] top-[6.08%] left-[11.57%] text-xs tracking-[0.1em] leading-[18px] inline-block font-literata">
            PAGES
          </b>
          <img
            className="absolute h-[3.79%] w-[65.34%] top-[80.21%] right-[16.71%] bottom-[16%] left-[17.95%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../group-396173.svg"
          />
          <div className="absolute h-[9.06%] top-[90.94%] left-[45px] leading-[30px] font-medium text-neutral-600 inline-block w-[300px]">
            Copyright © Polis Educational Solutions, Inc. All Rights Reserved
          </div>
          <div className="absolute h-[0.13%] w-[100.07%] top-[-0.06%] right-[-0.03%] bottom-[99.94%] left-[-0.03%] box-border border-t-[1px] border-solid border-neutral-400" />
        </div>
        <div className="absolute w-full top-[94px] right-[0px] left-[0px] bg-primary-color-11 h-[574px]" />
        <img
          className="absolute top-[404px] right-[0px] w-[178px] h-[178px]"
          alt=""
          src="../ellipse-421.svg"
        />
        <div className="absolute top-[94px] right-[6.47px] w-[198.53px] h-[198.53px]">
          <div className="absolute top-[0px] right-[0px] bg-secondary-color-3 w-[198.53px] h-[198.53px]" />
          <img
            className="absolute top-[0px] right-[-198.53px] w-[198.53px] h-[198.53px]"
            alt=""
            src="../rectangle-4381.svg"
          />
        </div>
        <img
          className="absolute top-[189px] right-[-211.01px] w-[208.31px] h-[207.7px]"
          alt=""
          src="../group-39243.svg"
        />
        <img
          className="absolute top-[189px] left-[-115px] w-[230px] h-[229.32px]"
          alt=""
          src="../group-392431.svg"
        />
        <img
          className="absolute top-[93px] left-[-1px] w-[207.53px] h-[207.53px]"
          alt=""
          src="../rectangle-4380.svg"
        />
        <b className="absolute top-[261px] left-[calc(50%_-_130px)] text-2xl leading-[40px] text-neutral-200">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            Have questions?
          </p>
          <p className="m-0">We have answers.</p>
        </b>
        <b className="absolute top-[4.68%] left-[calc(50%_-_380.31px)] text-xs tracking-[0.1em] leading-[18px] uppercase inline-block font-literata text-neutral-500 w-[723.69px]">
          Frequently Asked Questions
        </b>
        <div className="absolute top-[355px] left-[calc(50%_-_153px)] text-xs leading-[24px] font-medium text-neutral-300 inline-block w-[270px] h-[67px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolo
        </div>
        <div className="absolute top-[2591px] left-[calc(50%_-_168px)] w-[300px] h-[861px] hidden text-left text-lg text-neutral-800">
          <div className="absolute top-[0px] left-[calc(50%_-_150px)] w-[300px] h-[861px]">
            <div className="absolute top-[0px] left-[calc(50%_-_150px)] rounded-base bg-neutral-100 shadow-[0px_5px_18px_rgba(31,_37,_89,_0.05)] box-border w-[300px] h-[861px] border-[0.5px] border-solid border-neutral-200" />
            <div className="absolute top-[150px] left-[calc(50%_-_122px)] w-[253px] h-[216px] text-xs text-neutral-600">
              <img
                className="absolute top-[0px] left-[calc(50%_+_86.5px)] w-10 h-10"
                alt=""
                src="../group-39115.svg"
              />
              <div className="absolute top-[0px] left-[calc(50%_-_126.5px)] w-[238px] h-[216px]">
                <div className="absolute top-[72px] left-[calc(50%_-_119px)] tracking-[-0.01em] leading-[24px] inline-block w-[238px]">
                  Lorem ipsum dolor sit amet, consecteturor adipiscing elit.
                  Tincidunt donec vulputate ipsum erat urna auctor get phasellus
                  ideirs lorem ipsum dolor sit amet, consecteturor adipiscing
                  elit
                </div>
                <b className="absolute top-[0px] left-[calc(50%_-_118.67px)] text-lg leading-[28px] inline-block text-neutral-800 w-[179.71px]">
                  How big is your marketing team?
                </b>
              </div>
            </div>
            <img
              className="absolute top-[521px] left-[calc(50%_+_90px)] w-10 h-10"
              alt=""
              src="../group-392421.svg"
            />
            <div className="absolute top-[521px] left-[calc(50%_-_123px)] w-[200.08px] h-14">
              <b className="absolute top-[0px] left-[calc(50%_-_100.04px)] leading-[28px] inline-block w-[200.08px]">
                Can I get a quote for a custom package?
              </b>
            </div>
            <div className="absolute top-[417px] left-[calc(50%_-_123px)] w-[200.08px] h-14">
              <b className="absolute top-[0px] left-[calc(50%_-_100.04px)] leading-[28px] inline-block w-[200.08px]">
                What's your typical cost for a campaign?
              </b>
            </div>
            <img
              className="absolute top-[637px] left-[calc(50%_+_90px)] w-10 h-10"
              alt=""
              src="../group-39117.svg"
            />
            <div className="absolute top-[637px] left-[calc(50%_-_123px)] w-[200.08px] h-14">
              <b className="absolute top-[0px] left-[calc(50%_-_100.04px)] leading-[28px] inline-block w-[200.08px]">
                What is the typical timeline?
              </b>
            </div>
            <img
              className="absolute top-[757px] left-[calc(50%_+_90px)] w-10 h-10"
              alt=""
              src="../group-39117.svg"
            />
            <div className="absolute top-[757px] left-[calc(50%_-_123px)] w-[200.08px] h-14">
              <b className="absolute top-[0px] left-[calc(50%_-_100.04px)] leading-[28px] inline-block w-[200.08px]">
                Do you guarantee marketing results?
              </b>
            </div>
            <img
              className="absolute top-[417px] left-[calc(50%_+_90px)] w-10 h-10"
              alt=""
              src="../group-39116.svg"
            />
            <div className="absolute top-[394.5px] left-[calc(50%_-_123.5px)] box-border w-[241px] h-px border-t-[1px] border-solid border-neutral-400" />
            <div className="absolute top-[496.5px] left-[calc(50%_-_123.5px)] box-border w-[239.5px] h-px border-t-[1px] border-solid border-neutral-400" />
            <div className="absolute top-[606.5px] left-[calc(50%_-_123.5px)] box-border w-[239.5px] h-px border-t-[1px] border-solid border-neutral-400" />
            <div className="absolute top-[726.5px] left-[calc(50%_-_123.5px)] box-border w-[239.5px] h-px border-t-[1px] border-solid border-neutral-400" />
          </div>
          <b className="absolute top-[59px] left-[calc(50%_-_94.39px)] text-2xl leading-[40px] inline-block text-secondary-color-3 text-center w-[183.19px]">
            For Educators
          </b>
        </div>
        <div className="absolute w-[calc(100%_-_164px)] top-[555px] right-[74px] left-[90px] h-[467px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-base bg-neutral-100 shadow-[0px_5px_18px_rgba(31,_37,_89,_0.05)] box-border border-[0.5px] border-solid border-neutral-200" />
          <b className="absolute w-[64.47%] top-[69px] left-[17.83%] leading-[61px] inline-block">
            General Questions
          </b>
          <div className="absolute w-[calc(100%_-_142px)] top-[217px] right-[73px] left-[69px] flex flex-col items-center justify-center">
            <Accordion className="self-stretch" allowToggle>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section Title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>Content</AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion className="self-stretch" allowToggle>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section Title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>Content</AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion className="self-stretch" allowToggle>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section Title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>Content</AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_164px)] top-[1649px] right-[62px] left-[102px] h-[467px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-base bg-neutral-100 shadow-[0px_5px_18px_rgba(31,_37,_89,_0.05)] box-border border-[0.5px] border-solid border-neutral-200" />
          <b className="absolute w-[64.47%] top-[69px] left-[17.83%] leading-[61px] inline-block">
            General Questions
          </b>
          <div className="absolute w-[calc(100%_-_142px)] top-[217px] right-[73px] left-[69px] flex flex-col items-center justify-center">
            <Accordion className="self-stretch" allowToggle>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section Title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>Content</AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion className="self-stretch" allowToggle>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section Title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>Content</AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion className="self-stretch" allowToggle>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section Title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>Content</AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_164px)] top-[2699px] right-[82px] left-[82px] h-[467px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-base bg-neutral-100 shadow-[0px_5px_18px_rgba(31,_37,_89,_0.05)] box-border border-[0.5px] border-solid border-neutral-200" />
          <b className="absolute w-[64.47%] top-[69px] left-[17.83%] leading-[61px] inline-block">
            General Questions
          </b>
          <div className="absolute w-[calc(100%_-_142px)] top-[217px] right-[73px] left-[69px] flex flex-col items-center justify-center">
            <Accordion className="self-stretch" allowToggle>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section Title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>Content</AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion className="self-stretch" allowToggle>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section Title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>Content</AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion className="self-stretch" allowToggle>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section Title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>Content</AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
