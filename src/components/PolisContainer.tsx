import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const PolisContainer: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPrimaryBTNClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <div className="absolute top-[1244.35px] left-[calc(50%_-_586px)] w-[1184.27px] h-[1535.65px] text-left text-4xl text-neutral-800 font-lato">
      <img
        className="absolute top-[697.65px] left-[calc(50%_-_592.13px)] w-[674px] h-[540.06px] object-cover"
        alt=""
        src="../mask-group1@2x.png"
      />
      <div className="absolute h-[5.52%] top-[0%] bottom-[94.48%] left-[calc(50%_-_587.12px)] w-[425px]">
        <b className="absolute h-[72.46%] top-[27.54%] left-[calc(50%_-_212.5px)] leading-[50px] inline-block w-[425px]">
          The future of education is personal
        </b>
        <b className="absolute h-[13.04%] top-[0%] left-[calc(50%_-_212.5px)] text-xs tracking-[0.1em] leading-[18px] uppercase inline-block font-literata text-primary-color-11 w-[133px]">
          About Polis
        </b>
      </div>
      <div className="absolute h-[3.6%] top-[0.36%] left-[calc(50%_+_67.13px)] text-base leading-[30px] font-medium text-neutral-600 inline-block w-[525px]">
        Polis enables learners to receive personalized advice, feedback, and
        guidance from educators as they navigate complex academic and
        professional spheres.
      </div>
      <button
        className="cursor-pointer [border:none] py-[22px] px-10 bg-primary-color-11 absolute top-[1471.65px] left-[calc(50%_-_106.13px)] rounded-3xxs flex flex-col items-center justify-center"
        onClick={onPrimaryBTNClick}
      >
        <b className="relative text-base leading-[20px] font-lato text-neutral-100 text-center">
          Learn More
        </b>
      </button>
      <img
        className="absolute top-[800.65px] left-[calc(50%_-_173.13px)] w-[768px] h-[612.6px] object-cover"
        alt=""
        src="../mask-group2@2x.png"
      />
    </div>
  );
};

export default PolisContainer;
