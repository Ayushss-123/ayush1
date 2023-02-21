import { FunctionComponent } from "react";

const Typography: FunctionComponent = () => {
  return (
    <div className="relative bg-neutral-100 w-full h-[552px] overflow-hidden text-left text-base text-primary-color-11 font-lato">
      <div className="absolute top-[35px] left-[27px] w-[126px] h-5 font-literata">
        <b className="absolute top-[0%] left-[0%] leading-[20px]">
          March 11, 2021
        </b>
      </div>
      <div className="absolute top-[118px] left-[27px] w-[500px] h-16 text-4xl text-neutral-800">
        <b className="absolute h-full w-full top-[0%] left-[0%] leading-[50px] inline-block">
          What Is Personal Education?
        </b>
      </div>
      <div className="absolute top-[245px] left-[27px] w-[485.82px] h-[75.48px] text-neutral-600">
        <div className="absolute h-full w-full top-[0%] left-[0%] leading-[30px] font-medium inline-block">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            We need to figure out why attempts to personalize learning have
            often ultimately led to a de-personalized educational experience in
            practice.
          </p>
          <p className="m-0">&nbsp;</p>
        </div>
      </div>
    </div>
  );
};

export default Typography;
