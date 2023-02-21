import { FunctionComponent, useCallback } from "react";

const RequestLearnerAccessContainer: FunctionComponent = () => {
  const onPrimaryBTN2Click = useCallback(() => {
    // Please sync "Contact" to the project
  }, []);

  const onPrimaryBTN3Click = useCallback(() => {
    // Please sync "Contact" to the project
  }, []);

  return (
    <div className="absolute h-[34.47%] top-[21.75%] bottom-[43.78%] left-[calc(50%_-_642px)] w-[1284.35px] text-left text-4xl text-neutral-800 font-lato">
      <img
        className="absolute h-[9.73%] top-[12.06%] bottom-[78.21%] left-[calc(50%_-_642.18px)] max-h-full w-[153.3px]"
        alt=""
        src="../group-38126.svg"
      />
      <img
        className="absolute h-[15.83%] top-[84.17%] bottom-[0%] left-[calc(50%_+_392.8px)] max-h-full w-[249.37px] opacity-[0.08]"
        alt=""
        src="../ellipse-110.svg"
      />
      <div className="absolute h-[20.47%] top-[22.72%] bottom-[56.81%] left-[calc(50%_+_102.82px)] w-[474px]">
        <button
          className="cursor-pointer py-[22px] px-10 bg-[transparent] absolute h-[19.85%] top-[80.15%] bottom-[0%] left-[calc(50%_-_237px)] rounded-3xxs box-border w-[268.75px] flex flex-col items-center justify-center border-[3px] border-solid border-primary-color-11"
          onClick={onPrimaryBTN2Click}
        >
          <b className="relative text-base leading-[20px] font-lato text-primary-color-11 text-center">
            Request Learner Access
          </b>
        </button>
        <div className="absolute h-[80.29%] top-[0%] bottom-[19.71%] left-[calc(50%_-_236.56px)] w-[473.56px]">
          <b className="absolute h-[38.63%] top-[0%] left-[calc(50%_-_236.78px)] leading-[50px] inline-block w-[473.56px]">
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              Individual Learners
            </p>
          </b>
          <div className="absolute h-[69.53%] top-[30.47%] left-[calc(50%_-_236.78px)] text-base leading-[30px] font-medium text-neutral-600 inline-block w-[473.56px]">
            <p className="[margin-block-start:0] [margin-block-end:0px]">{`We provide individual access to adult learners (18+ years) such as professionals, full- and part-time students, lifelong learners, and anyone seeking to reconnect academically to pursue their educational goals. `}</p>
            <p className="m-0">&nbsp;</p>
          </div>
        </div>
      </div>
      <div className="absolute h-[21.31%] top-[67.38%] bottom-[11.3%] left-[calc(50%_-_597.18px)] w-[526.83px]">
        <button
          className="cursor-pointer py-[22px] px-10 bg-[transparent] absolute h-[19.06%] top-[80.94%] bottom-[0%] left-[calc(50%_-_263.42px)] rounded-3xxs box-border flex flex-col items-center justify-center border-[3px] border-solid border-primary-color-11"
          onClick={onPrimaryBTN3Click}
        >
          <b className="relative text-base leading-[20px] font-lato text-primary-color-11 text-center">
            Request a Demo
          </b>
        </button>
        <div className="absolute h-[84.58%] top-[0%] bottom-[15.42%] left-[calc(50%_-_263.42px)] w-[526.83px]">
          <b className="absolute h-[17.61%] top-[0%] left-[calc(50%_-_263.42px)] leading-[50px] inline-block w-[526.83px]">
            Higher Education Institutions
          </b>
          <div className="absolute h-[63.38%] top-[36.62%] left-[calc(50%_-_263.01px)] text-base leading-[30px] font-medium text-neutral-600 inline-block w-[518px]">
            <p className="[margin-block-start:0] [margin-block-end:0px]">{`We provide universities, colleges, and institutions of higher learning with access to a roster of top educators who can provide a wide range of academic and career services to their students and staff. `}</p>
            <p className="m-0">&nbsp;</p>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[228px] left-[calc(50%_-_596.16px)] w-[587px] h-[582px] object-cover"
        alt=""
        src="../mask-group5@2x.png"
      />
      <img
        className="absolute top-[922px] left-[calc(50%_-_10.04px)] w-[587px] h-[582px] object-cover"
        alt=""
        src="../mask-group6@2x.png"
      />
      <b className="absolute h-[10.41%] top-[2.29%] left-[calc(50%_-_340.18px)] leading-[50px] inline-block text-center w-[681px]">
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          Who can access our global community of the world’s best educators?
        </p>
      </b>
      <b className="absolute h-[1.14%] top-[0%] left-[calc(50%_-_83.43px)] text-xs tracking-[0.1em] leading-[18px] uppercase inline-block font-literata text-primary-color-11 text-center w-[167px]">
        Using Polis
      </b>
    </div>
  );
};

export default RequestLearnerAccessContainer;
