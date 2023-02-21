import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const MobileMenu: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSubHeadingsTextClick = useCallback(() => {
    // Please sync "404 Not Found" to the project
  }, []);

  const onGroupContainerClick = useCallback(() => {
    navigate("/faqdesktop");
  }, [navigate]);

  const onPrimaryBTNClick = useCallback(() => {
    // Please sync "Log In" to the project
  }, []);

  const onPrimaryBTN1Click = useCallback(() => {
    // Please sync "Contact" to the project
  }, []);

  const onSubHeadingsText3Click = useCallback(() => {
    navigate("/howitworksdesktop");
  }, [navigate]);

  return (
    <div className="relative bg-neutral-100 w-full h-[844px] overflow-hidden text-center text-xl text-neutral-100 font-lato">
      <div className="absolute top-[73px] left-[0px] bg-secondary-color-3 w-[390px] h-[771px]" />
      <div className="absolute top-[73px] left-[0px] bg-secondary-color-3 w-[390px] h-[771px]" />
      <img
        className="absolute top-[454px] left-[0px] w-[390px] h-[390px]"
        alt=""
        src="../rectangle-4106.svg"
      />
      <div className="absolute top-[72.5px] left-[-0.5px] box-border w-[391px] h-px border-t-[1px] border-solid border-neutral-300" />
      <img
        className="absolute top-[18px] left-[159px] w-[79px] h-10 overflow-hidden"
        alt=""
        src="../polis-logo-websiteheader-18.svg"
      />
      <div
        className="absolute h-[2.61%] w-[31.79%] top-[36.14%] left-[34.36%] leading-[20px] font-medium flex items-center justify-center cursor-pointer"
        onClick={onSubHeadingsTextClick}
      >
        Educators
      </div>
      <div
        className="absolute h-[2.62%] w-[18.72%] top-[53.91%] right-[40.51%] bottom-[43.47%] left-[40.77%] cursor-pointer"
        onClick={onGroupContainerClick}
      >
        <div className="absolute h-full w-full top-[0%] left-[0%] leading-[20px] font-medium flex items-center justify-center">
          FAQ
        </div>
      </div>
      <div className="absolute h-[2.61%] w-[18.72%] top-[45.02%] left-[40.77%] leading-[20px] font-medium flex items-center justify-center">
        Blog
      </div>
      <button
        className="cursor-pointer [border:none] py-3.5 px-6 bg-neutral-300 absolute h-[7.58%] top-[66.59%] bottom-[25.83%] left-[calc(50%_-_159px)] rounded-lg w-[319px] flex flex-col box-border items-center justify-center"
        onClick={onPrimaryBTNClick}
      >
        <b className="relative text-xl leading-[18px] font-lato text-neutral-800 text-center">
          Log In
        </b>
      </button>
      <button
        className="cursor-pointer [border:none] py-3.5 px-6 bg-secondary-color-51 absolute h-[7.35%] top-[76.42%] bottom-[16.23%] left-[calc(50%_-_159px)] rounded-lg w-[319px] flex flex-col box-border items-center justify-center"
        onClick={onPrimaryBTN1Click}
      >
        <b className="relative text-xl leading-[18px] font-lato text-neutral-800 text-center">
          Get in touch
        </b>
      </button>
      <img
        className="absolute h-[3.46%] w-[42.19%] top-[89.57%] right-[28.32%] bottom-[6.96%] left-[29.49%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../group-27931.svg"
      />
      <div className="absolute top-[18px] left-[351px] w-[26px] h-[26px] [transform:_rotate(45deg)] [transform-origin:0_0]">
        <div className="absolute top-[8.5px] left-[8.5px] bg-primary-color-11 w-[1.95px] h-[26px] [transform:_rotate(45deg)] [transform-origin:0_0]" />
        <div className="absolute top-[26.89px] left-[9.88px] bg-primary-color-11 w-[1.95px] h-[26px] [transform:_rotate(135deg)] [transform-origin:0_0]" />
      </div>
      <div className="absolute top-[187px] left-[150px] bg-secondary-color-51 w-[90px] h-1" />
      <div
        className="absolute top-[27.49%] left-[31.28%] leading-[20px] font-medium cursor-pointer"
        onClick={onSubHeadingsText3Click}
      >
        How It Works
      </div>
      <div className="absolute top-[18.84%] left-[41.54%] leading-[20px] font-medium">
        About
      </div>
    </div>
  );
};

export default MobileMenu;
