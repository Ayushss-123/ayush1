import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type HeaderType = {
  polisLogoWebsiteHeader1?: string;

  /** Style props */
  primaryBTNBoxSizing?: Property.BoxSizing;
  buttonTextDisplay?: Property.Display;
  primaryBTNBoxSizing1?: Property.BoxSizing;
  buttonTextDisplay1?: Property.Display;

  /** Action props */
  onMenuItemHomeTextClick?: () => void;
  onMenuItemAboutTextClick?: () => void;
  onMenuItemHowItWorksTextClick?: () => void;
  onMenuItemEducatorsTextClick?: () => void;
  onMenuItemsBlogsTextClick?: () => void;
  onMenuItemFAQTextClick?: () => void;
};

const Header: FunctionComponent<HeaderType> = ({
  polisLogoWebsiteHeader1,
  primaryBTNBoxSizing,
  buttonTextDisplay,
  primaryBTNBoxSizing1,
  buttonTextDisplay1,
  onMenuItemHomeTextClick,
  onMenuItemAboutTextClick,
  onMenuItemHowItWorksTextClick,
  onMenuItemEducatorsTextClick,
  onMenuItemsBlogsTextClick,
  onMenuItemFAQTextClick,
}) => {
  const primaryBTNStyle: CSS.Properties = useMemo(() => {
    return {
      boxSizing: primaryBTNBoxSizing,
    };
  }, [primaryBTNBoxSizing]);

  const buttonText1Style: CSS.Properties = useMemo(() => {
    return {
      display: buttonTextDisplay,
    };
  }, [buttonTextDisplay]);

  const primaryBTN1Style: CSS.Properties = useMemo(() => {
    return {
      boxSizing: primaryBTNBoxSizing1,
    };
  }, [primaryBTNBoxSizing1]);

  const buttonText2Style: CSS.Properties = useMemo(() => {
    return {
      display: buttonTextDisplay1,
    };
  }, [buttonTextDisplay1]);

  return (
    <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-[93px] text-left text-base text-neutral-600 font-lato">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-neutral-100" />
      <div className="absolute top-[24px] right-[37px] flex flex-row items-center justify-end gap-[24px]">
        <div
          className="relative leading-[20px] font-medium inline-block w-[49px] shrink-0 cursor-pointer"
          onClick={onMenuItemHomeTextClick}
        >
          Home
        </div>
        <div
          className="relative leading-[20px] font-medium cursor-pointer"
          onClick={onMenuItemAboutTextClick}
        >
          About
        </div>
        <div
          className="relative leading-[20px] font-medium cursor-pointer"
          onClick={onMenuItemHowItWorksTextClick}
        >
          How It Works
        </div>
        <div
          className="relative leading-[20px] font-medium cursor-pointer"
          onClick={onMenuItemEducatorsTextClick}
        >
          Educators
        </div>
        <div
          className="relative leading-[20px] font-medium cursor-pointer"
          onClick={onMenuItemsBlogsTextClick}
        >
          Blog
        </div>
        <div
          className="relative leading-[20px] font-medium inline-block w-9 h-[19px] shrink-0 cursor-pointer"
          onClick={onMenuItemFAQTextClick}
        >
          FAQ
        </div>
        <button
          className="cursor-pointer [border:none] py-3.5 px-6 bg-neutral-300 rounded-lg flex flex-col items-center justify-center"
          style={primaryBTNStyle}
        >
          <b
            className="relative text-xs leading-[18px] font-lato text-neutral-800 text-center"
            style={buttonText1Style}
          >
            Log In
          </b>
        </button>
        <button
          className="cursor-pointer [border:none] py-3.5 px-6 bg-secondary-color-51 rounded-lg flex flex-col items-center justify-center"
          style={primaryBTN1Style}
        >
          <b
            className="relative text-xs leading-[18px] font-lato text-neutral-800 text-center"
            style={buttonText2Style}
          >
            Get in touch
          </b>
        </button>
      </div>
      <div className="absolute top-[93.5px] left-[-0.5px] box-border w-[1441px] h-px border-t-[1px] border-solid border-neutral-300" />
      <img
        className="absolute top-[18px] left-[133px] w-[116px] h-[59px] overflow-hidden"
        alt=""
        src={polisLogoWebsiteHeader1}
      />
    </div>
  );
};

export default Header;
