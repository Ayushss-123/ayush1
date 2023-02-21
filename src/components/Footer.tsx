import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type FooterType = {
  vector?: string;
  maskGroup?: string;

  /** Style props */
  footerTop?: Property.Top;
  footerFooterLeft?: Property.Left;
  footerFooterWidth?: Property.Width;
  buttonTextDisplay?: Property.Display;
};

const Footer: FunctionComponent<FooterType> = ({
  vector,
  maskGroup,
  footerTop,
  footerFooterLeft,
  footerFooterWidth,
  buttonTextDisplay,
}) => {
  const footerStyle: CSS.Properties = useMemo(() => {
    return {
      top: footerTop,
      left: footerFooterLeft,
      width: footerFooterWidth,
    };
  }, [footerTop, footerFooterLeft, footerFooterWidth]);

  const buttonTextStyle: CSS.Properties = useMemo(() => {
    return {
      display: buttonTextDisplay,
    };
  }, [buttonTextDisplay]);

  return (
    <div
      className="absolute top-[4963px] left-[calc(50%_-_720px)] w-[1440px] h-[539px] mix-blend-normal text-left text-base text-neutral-600 font-lato"
      style={footerStyle}
    >
      <div className="absolute top-[321px] left-[133px] w-[29.14px] h-[29.09px]">
        <div className="absolute top-[0px] left-[0px] w-[29.14px] h-[29.09px]">
          <div className="absolute top-[0px] left-[0px] w-[29.14px] h-[29.09px]">
            <div className="absolute top-[0px] left-[0px] rounded-xxl bg-dodgerblue-300 w-[29.14px] h-[29.09px]" />
            <img
              className="absolute top-[7.43px] left-[7.08px] w-[14.98px] h-[14.24px]"
              alt=""
              src={vector}
            />
          </div>
        </div>
      </div>
      <form className="absolute h-[62.23%] top-[18.74%] right-[133px] bottom-[19.03%] w-[457px]">
        <div className="absolute h-full top-[0%] right-[0px] bottom-[0%] rounded-2xxs bg-primary-color-11 w-[457px]" />
        <img
          className="absolute h-full top-[0%] right-[0px] bottom-[0%] max-h-full w-[457px]"
          alt=""
          src={maskGroup}
        />
        <div className="absolute h-[66.98%] top-[16.67%] right-[47.62px] bottom-[16.35%] w-[364.34px]">
          <div className="absolute h-[28.48%] top-[71.52%] right-[0px] bottom-[0%] rounded-3xxs bg-neutral-100 w-[364px] flex flex-col py-[22px] px-10 box-border items-center justify-center">
            <b
              className="relative text-base leading-[20px] font-lato text-primary-color-11 text-center"
              style={buttonTextStyle}
            >
              Subscribe
            </b>
          </div>
          <input
            className="[border:none] font-medium font-lato text-base bg-[transparent] absolute h-[27.55%] top-[34.21%] right-[0.26px] bottom-[38.24%] w-[364.08px]"
            type="text"
          />
          <b className="absolute h-[15.11%] top-[0%] right-[70.34px] text-xl leading-[34px] inline-block font-lato text-neutral-100 text-left w-[294px]">
            Subscribe to our newsletter
          </b>
        </div>
      </form>
      <div className="absolute h-[0.19%] w-[100.07%] top-[0.09%] right-[-0.03%] bottom-[99.72%] left-[-0.04%] box-border border-t-[1px] border-solid border-neutral-400" />
      <div className="absolute h-[5.57%] top-[75.88%] left-[133px] leading-[30px] font-medium inline-block w-[517px]">
        Copyright © Polis Educational Solutions, Inc. All Rights Reserved
      </div>
      <div className="absolute h-[29.5%] w-[46.15%] top-[18.74%] right-[44.61%] bottom-[51.76%] left-[9.24%]">
        <div className="absolute h-[62.89%] w-[27.28%] top-[37.11%] right-[72.72%] bottom-[0%] left-[0%]">
          <div className="absolute h-1/5 w-[44.25%] top-[0%] left-[0%] leading-[20px] font-medium inline-block">
            Home
          </div>
          <div className="absolute h-1/5 w-[45.13%] top-[40%] left-[0%] leading-[20px] font-medium inline-block">
            About
          </div>
          <div className="absolute h-1/5 w-full top-[80%] left-[0%] leading-[20px] font-medium inline-block">
            How It Works
          </div>
        </div>
        <div className="absolute h-[62.89%] w-[25.43%] top-[37.11%] right-[45.23%] bottom-[0%] left-[29.34%]">
          <div className="absolute h-1/5 w-full top-[0%] left-[0%] leading-[20px] font-medium inline-block">
            Educators
          </div>
          <div className="absolute h-1/5 w-[50.62%] top-[40%] left-[0%] leading-[20px] font-medium inline-block">
            FAQ
          </div>
          <div className="absolute h-1/5 w-[44.44%] top-[80%] left-[0%] leading-[20px] font-medium inline-block">
            Blog
          </div>
        </div>
        <div className="absolute h-[37.69%] w-[43.45%] top-[37.11%] right-[0%] bottom-[25.2%] left-[56.55%]">
          <div className="absolute h-[33.31%] w-full top-[0%] left-[0%] leading-[20px] font-medium inline-block">
            Get in Touch
          </div>
          <div className="absolute h-[33.31%] w-full top-[66.69%] left-[0%] leading-[20px] font-medium inline-block">
            Legal
          </div>
        </div>
        <b className="absolute h-[12.56%] w-[11.44%] top-[0%] left-[0.02%] text-xs tracking-[0.1em] leading-[18px] inline-block font-literata text-primary-color-11">
          PAGES
        </b>
      </div>
    </div>
  );
};

export default Footer;
