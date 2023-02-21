import { FunctionComponent, useCallback } from "react";

const GrowthMarketingPlaybookContain: FunctionComponent = () => {
  const onPrimaryBTNClick = useCallback(() => {
    // Please sync "Contact" to the project
  }, []);

  const onPrimaryBTN1Click = useCallback(() => {
    // Please sync "Contact" to the project
  }, []);

  return (
    <div className="absolute top-[3230px] left-[calc(50%_-_719px)] w-[1614px] h-[1117px] text-left text-3xl text-neutral-800 font-lato">
      <div className="absolute top-[84px] left-[calc(50%_-_807px)] bg-primary-color-11 w-[1440px] h-[717px]" />
      <img
        className="absolute top-[484px] left-[calc(50%_+_174px)] w-[458px] h-[316.5px]"
        alt=""
        src="../ellipse-118.svg"
      />
      <div className="absolute top-[84px] left-[calc(50%_-_807px)] bg-secondary-color-51 w-[508px] h-[717px]" />
      <div className="absolute top-[0px] left-[calc(50%_-_675px)] shadow-[0px_5.535259246826172px_22.14px_rgba(74,_58,_255,_0.03),_0px_12.915604591369629px_31.37px_rgba(20,_20,_43,_0.05)] w-[500px] h-[700px]">
        <div className="absolute h-[100.58%] w-full top-[-0.29%] right-[0%] bottom-[-0.3%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-[108.53%] w-[114.65%] top-[0.31%] right-[-16.26%] bottom-[-8.84%] left-[1.61%] bg-neutral-100 hidden" />
            <img
              className="absolute top-[0px] left-[0px] w-[500px] h-[704.08px] object-cover"
              alt=""
              src="../mask-group4@2x.png"
            />
            <div className="absolute h-[3.06%] w-[81.36%] top-[26.54%] right-[8.71%] bottom-[70.4%] left-[9.93%] bg-secondary-color-6 hidden opacity-[0.1]" />
            <div className="absolute h-[30.64%] w-[91.61%] top-[9.19%] right-[-3%] bottom-[60.17%] left-[11.39%] hidden">
              <b className="absolute h-[42.98%] w-[99.74%] top-[22.83%] left-[0%] leading-[125%] inline-block">
                Ultimate Growth Marketing Playbook
              </b>
              <div className="absolute h-[28.65%] w-full top-[71.35%] left-[0%] text-sm tracking-[-0.01em] leading-[160%] font-medium text-neutral-700 inline-block opacity-[0.7]">
                Lorem ipsum dolor sit amet consectetur dolor sit adipiscing elit
                sed do eiusmod tempo.
              </div>
              <div className="absolute h-[2.52%] w-[23.54%] top-[0%] right-[76.46%] bottom-[97.48%] left-[0%] bg-secondary-color-6" />
            </div>
            <img
              className="absolute h-[121.8%] w-[171.7%] top-[68.1%] right-[6.31%] bottom-[-89.9%] left-[-78.02%] max-w-full overflow-hidden max-h-full hidden"
              alt=""
              src="../group-37965.svg"
            />
            <div className="absolute h-[27.58%] w-[40.47%] top-[123.58%] right-[33.31%] bottom-[-51.16%] left-[26.22%] rounded-large bg-gray-300 [transform:_rotate(-27.99deg)] [transform-origin:0_0] hidden" />
          </div>
        </div>
      </div>
      <div className="absolute top-[225px] left-[calc(50%_-_100px)] w-[590px] h-[326px] text-4xl text-neutral-100">
        <button
          className="cursor-pointer [border:none] py-[22px] px-10 bg-neutral-100 absolute top-[262px] left-[calc(50%_-_295px)] rounded-3xxs w-[221.66px] flex flex-col box-border items-center justify-center"
          onClick={onPrimaryBTNClick}
        >
          <b className="relative text-base leading-[20px] font-lato text-primary-color-11 text-center">
            Contact Us
          </b>
        </button>
        <button
          className="cursor-pointer py-[22px] px-10 bg-[transparent] absolute top-[354px] left-[calc(50%_-_295px)] rounded-3xxs box-border w-[221.66px] hidden flex-col items-center justify-center border-[3px] border-solid border-neutral-100"
          onClick={onPrimaryBTN1Click}
        >
          <b className="relative text-base leading-[20px] font-lato text-neutral-100 text-center">
            Book a Demo
          </b>
        </button>
        <b className="absolute top-[0px] left-[calc(50%_-_295px)] leading-[50px] inline-block w-[590px] h-[150px]">
          Personalize your education
        </b>
        <div className="absolute top-[75px] left-[calc(50%_-_295px)] text-base leading-[30px] font-medium text-neutral-300 inline-block w-[572.43px] h-[120px]">{`Having trouble with completing a MOOC or online program? Don’t know what your educational background can do for your career? Need mentoring from academics about going to graduate school? Our Polis educators can help you in online office hours. `}</div>
      </div>
    </div>
  );
};

export default GrowthMarketingPlaybookContain;
