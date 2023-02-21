import { FunctionComponent, useCallback } from "react";

const TransformingSection: FunctionComponent = () => {
  const onPrimaryBTNContainer1Click = useCallback(() => {
    // Please sync "Contact" to the project
  }, []);

  return (
    <div className="absolute top-[94px] left-[calc(50%_-_720px)] w-[1440px] h-[691px] text-left text-base text-neutral-800 font-lato">
      <img
        className="absolute top-[0px] left-[calc(50%_-_720px)] w-[1440px] h-[691px]"
        alt=""
        src="../rectangle-4054.svg"
      />
      <div className="absolute w-[36.36%] top-[150px] right-[54.4%] left-[9.24%] h-[417px]">
        <b className="absolute w-[99.89%] top-[36.79px] left-[0.11%] text-7xl leading-[61px] inline-block h-[183px]">
          Transforming higher education begins with you
        </b>
        <b className="absolute w-[28.65%] top-[0px] left-[0.04%] text-xs tracking-[0.1em] leading-[18px] uppercase inline-block font-literata text-primary-color-11 h-[18px]">
          Educators
        </b>
        <div className="absolute w-[99.89%] top-[231px] left-[0.11%] leading-[30px] font-medium text-neutral-600 inline-block h-[90px]">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            Join our global community of the world’s best educators who are
            creating impact with their expertise for learners around the world.
          </p>
          <p className="m-0">&nbsp;</p>
        </div>
        <div
          className="absolute top-[353px] left-[0px] rounded-3xxs bg-primary-color-11 flex flex-col py-[22px] px-10 items-center justify-center cursor-pointer text-center text-neutral-100"
          onClick={onPrimaryBTNContainer1Click}
        >
          <b className="relative leading-[20px]">Contact Us</b>
        </div>
      </div>
    </div>
  );
};

export default TransformingSection;
