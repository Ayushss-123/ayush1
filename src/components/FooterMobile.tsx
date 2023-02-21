import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type FooterMobileType = {
  subscribeMobileMask?: string;
  group39617?: string;

  /** Style props */
  footerMobileWidth?: Property.Width;
  footerMobileTop?: Property.Top;
  footerMobileLeft?: Property.Left;
  footerMobileRight?: Property.Right;
  line443Width?: Property.Width;
  line443Right?: Property.Right;
  line443Left?: Property.Left;
};

const FooterMobile: FunctionComponent<FooterMobileType> = ({
  footerMobileWidth,
  footerMobileTop,
  footerMobileLeft,
  subscribeMobileMask,
  group39617,
  footerMobileRight,
  line443Width,
  line443Right,
  line443Left,
}) => {
  const footerMobileStyle: CSS.Properties = useMemo(() => {
    return {
      width: footerMobileWidth,
      top: footerMobileTop,
      left: footerMobileLeft,
      right: footerMobileRight,
    };
  }, [footerMobileWidth, footerMobileTop, footerMobileLeft, footerMobileRight]);

  const lineDivStyle: CSS.Properties = useMemo(() => {
    return {
      width: line443Width,
      right: line443Right,
      left: line443Left,
    };
  }, [line443Width, line443Right, line443Left]);

  return (
    <div
      className="absolute w-[calc(100%_+_1px)] top-[4186px] right-[-1px] left-[0px] bg-neutral-100 h-[773px] overflow-hidden text-left text-base text-primary-color-11 font-lato"
      style={footerMobileStyle}
    >
      <div className="absolute h-[34.41%] w-[77.98%] top-[38.81%] right-[12.12%] bottom-[26.78%] left-[9.9%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xxs bg-primary-color-11" />
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={subscribeMobileMask}
        />
        <div className="absolute h-[80.08%] w-[79.78%] top-[8.65%] right-[10.37%] bottom-[11.28%] left-[9.86%]">
          <div className="absolute h-[30.05%] w-[99.84%] top-[69.95%] right-[0.06%] bottom-[0%] left-[0.09%] rounded-3xxs bg-neutral-100 flex flex-col py-[22px] px-10 box-border items-center justify-center text-center">
            <b className="relative leading-[20px]">Subscribe</b>
          </div>
          <div className="absolute h-[19.08%] w-[99.86%] top-[42.72%] right-[0.14%] bottom-[38.2%] left-[0%] text-neutral-600">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xxs bg-neutral-100 box-border border-[1px] border-solid border-neutral-400" />
            <div className="absolute h-[49.22%] w-[54.81%] top-[25.93%] left-[6.88%] leading-[20px] font-medium inline-block">
              Email address
            </div>
          </div>
          <b className="absolute h-[28.64%] w-[99.96%] top-[0%] left-[0.04%] text-xl leading-[34px] inline-block text-neutral-100">
            Subscribe to our newsletter
          </b>
        </div>
      </div>
      <div className="absolute h-[18.11%] w-[69.87%] top-[13.71%] right-[20.23%] bottom-[68.18%] left-[9.9%] text-neutral-600">
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
      <b className="absolute h-[2.58%] w-[16.72%] top-[6.08%] left-[9.92%] text-xs tracking-[0.1em] leading-[18px] inline-block font-literata">
        PAGES
      </b>
      <img
        className="absolute h-[3.79%] top-[80.08%] bottom-[16.13%] left-[47px] max-h-full w-[267.88px]"
        alt=""
        src={group39617}
      />
      <div className="absolute h-[9.06%] top-[90.94%] left-[14px] leading-[30px] font-medium text-neutral-600 inline-block w-[464px]">
        Copyright © Polis Educational Solutions, Inc. All Rights Reserved
      </div>
      <div
        className="absolute h-[0.13%] w-[85.84%] top-[-0.06%] right-[14.19%] bottom-[99.94%] left-[-0.03%] box-border border-t-[1px] border-solid border-neutral-400"
        style={lineDivStyle}
      />
    </div>
  );
};

export default FooterMobile;
