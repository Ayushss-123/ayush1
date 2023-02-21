import { FunctionComponent, useCallback } from "react";

const HeroContainer: FunctionComponent = () => {
  const onPrimaryBTN1Click = useCallback(() => {
    // Please sync "Contact" to the project
  }, []);

  return (
    <div className="absolute top-[94px] left-[calc(50%_-_587.35px)] w-[1307.35px] h-[700px] text-left text-6xl text-neutral-800 font-lato">
      <div className="absolute top-[0px] left-[calc(50%_+_353.67px)] bg-secondary-color-3 w-[300px] h-[696.68px]" />
      <img
        className="absolute top-[391px] left-[calc(50%_+_346.67px)] w-[307px] h-[309px]"
        alt=""
        src="../rectangle-1514.svg"
      />
      <div className="absolute h-[79.04%] top-[10.63%] bottom-[10.33%] left-[calc(50%_-_653.67px)] w-[515.97px]">
        <b className="absolute h-[20.11%] top-[0%] left-[calc(50%_-_256.43px)] leading-[60px] inline-block w-[514.42px]">
          Meet with the world’s best educators — anytime, anywhere
        </b>
        <div className="absolute h-[13.41%] top-[34.85%] left-[calc(50%_-_256.64px)] text-base leading-[30px] text-neutral-600 inline-block w-[436.72px]">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            Polis connects learners with the world’s best educators in 1:1
            office hours sessions to help learners achieve their academic and
            career goals.
          </p>
        </div>
        <div className="absolute top-[488.9px] left-[calc(50%_-_257.98px)] w-[178px]" />
      </div>
      <button
        className="cursor-pointer py-[22px] px-10 bg-primary-color-11 absolute top-[535px] left-[calc(50%_-_653.67px)] rounded-3xxs box-border w-[269px] h-[64.38px] flex flex-col items-center justify-center border-[1px] border-solid border-black"
        onClick={onPrimaryBTN1Click}
      >
        <b className="relative text-base leading-[20px] font-lato text-neutral-100 text-center">
          Request Learner Access
        </b>
      </button>
    </div>
  );
};

export default HeroContainer;
