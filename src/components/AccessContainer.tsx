import { FunctionComponent } from "react";

const AccessContainer: FunctionComponent = () => {
  return (
    <div className="absolute top-[794px] left-[calc(50%_-_720px)] w-[1440px] h-[1031px] overflow-hidden text-center text-4xl text-neutral-800 font-lato">
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-neutral-200 h-[1031px]" />
      <div className="absolute h-[12.92%] top-[19.38%] bottom-[67.7%] left-[calc(50%_-_242px)] w-[484px]">
        <b className="absolute h-[72.83%] top-[27.17%] left-[calc(50%_-_242px)] leading-[50px] inline-block w-[484px]">
          Democratizing access to the world’s best educators
        </b>
        <b className="absolute h-[13.07%] top-[0%] left-[calc(50%_-_84px)] text-xs tracking-[0.1em] leading-[18px] uppercase inline-block font-literata text-neutral-500 w-[167px]">
          Key BENEFITS
        </b>
      </div>
      <div className="absolute w-[calc(100%_-_92px)] top-[444px] right-[46px] left-[46px] h-[432px] flex flex-row items-center justify-between text-xl">
        <div className="relative w-[400px] h-[400px] shrink-0">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-base bg-neutral-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border border-[1px] border-solid border-neutral-300" />
          <b className="absolute h-[8.1%] w-[54.08%] top-[42.89%] left-[22.83%] leading-[34px] inline-block">
            Educator Matching
          </b>
          <div className="absolute h-[0.5%] w-[29.95%] top-[90.23%] right-[34.93%] bottom-[9.27%] left-[35.12%] bg-secondary-color-6 box-border border-t-[2px] border-solid border-secondary-color-6" />
          <img
            className="absolute h-[21.17%] w-[23.02%] top-[13%] right-[38.48%] bottom-[65.83%] left-[38.5%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../icon.svg"
          />
          <div className="absolute h-[40.25%] w-[85.75%] top-[54.5%] left-[8.5%] text-base leading-[30px] font-medium text-neutral-600 inline-block">
            <p className="[margin-block-start:0] [margin-block-end:0px]">{`Our proprietary data-driven, human-informed matching system provides each learner with suggested educators based on what the learner needs. `}</p>
            <p className="m-0">&nbsp;</p>
          </div>
        </div>
        <div className="relative w-[400px] h-[396px] shrink-0">
          <div className="absolute h-[calc(100%_+_4px)] w-full top-[0px] right-[0px] bottom-[-4px] left-[0px] rounded-base bg-neutral-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border border-[1px] border-solid border-neutral-300" />
          <img
            className="absolute h-[21.17%] top-[16.29%] bottom-[62.54%] left-[calc(50%_-_46px)] max-h-full w-[91.98px]"
            alt=""
            src="../icongroup.svg"
          />
          <b className="absolute h-[16.74%] top-[41.48%] left-[calc(50%_-_133px)] leading-[34px] inline-block w-[272.73px]">
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              1:1 Virtual Office Hours
            </p>
          </b>
          <div className="absolute h-[44.31%] top-[53.94%] left-[calc(50%_-_169px)] text-base leading-[30px] font-medium text-neutral-600 inline-block w-[343.15px]">
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              This is where personal education takes place. Learners meet with
              educators in curated 1:1 semi-structured sessions on our own
              secure virtual space.
            </p>
            <p className="m-0">&nbsp;</p>
          </div>
          <div className="absolute h-[0.51%] top-[91.86%] bottom-[7.63%] left-[calc(50%_-_59px)] bg-secondary-color-51 box-border w-[119.65px] border-t-[2px] border-solid border-secondary-color-51" />
        </div>
        <div className="relative w-[400px] h-[396px] shrink-0">
          <div className="absolute h-[calc(100%_+_4px)] w-full top-[0px] right-[0px] bottom-[-4px] left-[0px] rounded-base bg-neutral-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border border-[1px] border-solid border-neutral-300" />
          <img
            className="absolute h-[21.01%] w-[21.5%] top-[16.27%] right-[39.17%] bottom-[62.72%] left-[39.33%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../group-38028.svg"
          />
          <b className="absolute h-[16.61%] top-[41.51%] left-[calc(50%_-_115.74px)] leading-[34px] inline-block w-[239px]">
            <p className="[margin-block-start:0] [margin-block-end:0px]">{`Community & Support`}</p>
          </b>
          <div className="absolute h-[43.97%] top-[54.03%] left-[calc(50%_-_157.66px)] text-base leading-[30px] font-medium text-neutral-600 inline-block w-[320.84px]">
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              We provide continuous support, personalized suggestions, and
              resources to help our learners achieve their goals in our
              community.
            </p>
            <p className="m-0">&nbsp;</p>
          </div>
          <div className="absolute h-[0.51%] top-[91.82%] bottom-[7.67%] left-[calc(50%_-_54.88px)] bg-primary-color-11 box-border w-28 border-t-[2px] border-solid border-primary-color-11" />
        </div>
      </div>
    </div>
  );
};

export default AccessContainer;
