import { FunctionComponent } from "react";

const Card2: FunctionComponent = () => {
  return (
    <button className="cursor-pointer [border:none] p-[0px_16px] bg-[transparent] w-[25%] shrink-0 flex flex-col box-border items-center justify-center md:p-[16px] md:box-border md:w-[50%] sm:w-full">
      <div className="self-stretch relative rounded-[10px] h-[182px] shrink-0 overflow-hidden">
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="../unsplashyc8qqp50bda@2x.png"
        />
        <div className="absolute w-[calc(100%_-_0.59px)] top-[0px] right-[0.29px] left-[0.29px] flex flex-row p-[8px_12px] box-border items-start justify-start gap-[0px]">
          <b className="flex-1 relative text-2xl tracking-[0.02em] inline-block font-roboto text-white-200 text-left">
            Greece
          </b>
          <div className="relative w-[99.92px] h-[59px] shrink-0">
            <div className="absolute top-[21px] left-[0px] text-8xl leading-[38px] font-baloo-bhai text-white-200 text-right inline-block">
              $1079
            </div>
            <div className="absolute top-[0px] left-[47.39px] text-base tracking-[0.04em] uppercase font-roboto text-white-200 text-right inline-block w-[52.53px]">
              from
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Card2;
