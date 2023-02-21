import { FunctionComponent, useCallback } from "react";

const EngagementContainer: FunctionComponent = () => {
  const onPrimaryBTNContainerClick = useCallback(() => {
    // Please sync "Educational Integrity Policy" to the project
  }, []);

  return (
    <div className="absolute top-[1061px] left-[calc(50%_-_586px)] w-[1237px] h-[808.95px] text-left text-base text-neutral-800 font-lato">
      <img
        className="absolute top-[0px] left-[calc(50%_-_618.5px)] w-[573.44px] h-[808.95px] object-cover"
        alt=""
        src="../images@2x.png"
      />
      <div className="absolute top-[21px] left-[calc(50%_+_54.5px)] w-[564px] h-[762px]">
        <div className="absolute top-[0px] left-[calc(50%_-_282px)] w-[526.83px] h-[88.45px] text-4xl">
          <b className="absolute top-[38.45px] left-[calc(50%_-_263.42px)] leading-[50px] inline-block w-[526.83px]">
            A new way to engage
          </b>
          <b className="absolute top-[0px] left-[calc(50%_-_263.42px)] text-xs tracking-[0.1em] leading-[18px] uppercase font-literata text-primary-color-11">
            Educators
          </b>
        </div>
        <div
          className="absolute top-[698px] left-[calc(50%_-_281px)] rounded-3xxs bg-primary-color-11 flex flex-col py-[22px] px-10 items-center justify-center cursor-pointer text-center text-neutral-100"
          onClick={onPrimaryBTNContainerClick}
        >
          <b className="relative leading-[20px]">
            Read Our Education Integrity Policy
          </b>
        </div>
        <div className="absolute top-[139px] left-[calc(50%_-_282px)] w-[564px] h-[493px] text-neutral-600">
          <div className="absolute top-[0px] left-[calc(50%_-_282px)] w-[564px] h-[150px]">
            <div className="absolute top-[0px] left-[calc(50%_-_282px)] leading-[30px] font-medium inline-block w-[564px]">
              As universities rely ever more on adjunct appointments,
              traditional academic positions are hard to come by — and they
              often don’t pay well. Educators need a new way to engage with
              students beyond the university. This crisis has prompted us to
              build a company that could achieve the following:
            </div>
          </div>
          <div className="absolute top-[223px] left-[calc(50%_-_264px)] w-[464.36px] h-[270px]">
            <div className="absolute top-[0px] left-[calc(50%_-_215.6px)] leading-[30px] font-medium inline-block w-[447.78px]">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Enable greater educational opportunities for academics, PhDs,
                lecturers, adjuncts, and graduate students to earn beyond the
                university.
              </p>
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                &nbsp;
              </p>
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Allow adult learners to connect with educators in 1:1 sessions
                that bridge academic and career needs.
              </p>
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                &nbsp;
              </p>
              <p className="m-0">{`Integrate the best insights from educational history and practice into an online marketplace. `}</p>
            </div>
            <img
              className="absolute top-[13px] left-[calc(50%_-_232.18px)] w-1.5 h-1.5"
              alt=""
              src="../ellipse-401.svg"
            />
            <img
              className="absolute top-[132px] left-[calc(50%_-_232.18px)] w-1.5 h-1.5"
              alt=""
              src="../ellipse-401.svg"
            />
            <img
              className="absolute top-[223px] left-[calc(50%_-_232.18px)] w-1.5 h-1.5"
              alt=""
              src="../ellipse-401.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngagementContainer;
