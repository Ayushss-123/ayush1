import { FunctionComponent } from "react";

const AboutSection: FunctionComponent = () => {
  return (
    <div className="absolute top-[2302px] left-[calc(50%_-_720px)] bg-neutral-100 w-[1440px] h-[1335px] overflow-hidden text-left text-4xl text-neutral-800 font-lato">
      <div className="absolute top-[93.44px] left-[122px] flex flex-col items-start justify-start">
        <div className="relative w-[527px] h-[410.71px] shrink-0">
          <b className="absolute h-[26.79%] top-[6.87%] left-[0px] leading-[50px] inline-block w-[526.83px]">
            Polis fosters mutual development and growth for educators and
            learners
          </b>
          <b className="absolute h-[3.22%] top-[0%] left-[0px] text-xs tracking-[0.1em] leading-[18px] uppercase inline-block font-literata text-primary-color-11 w-[131px]">
            OUr mission
          </b>
          <div className="absolute h-[49%] top-[51%] left-[0px] text-base leading-[30px] font-medium text-neutral-600 inline-block w-[527px]">{`Our online personal education platform provides 1:1 interactions for learners by matching them with the world’s best educators. Learners can find personalized solutions to their academic and career questions. `}</div>
        </div>
        <div className="rounded-3xxs bg-primary-color-11 w-[206px] hidden flex-col py-[22px] px-10 box-border items-center justify-start text-center text-base text-neutral-100">
          <b className="relative leading-[20px] hidden">Join our team</b>
        </div>
      </div>
      <img
        className="absolute top-[97px] right-[102px] w-[500px] h-[500px] object-cover"
        alt=""
        src="../frame-39544@2x.png"
      />
      <img
        className="absolute top-[809px] left-[116.77px] w-[516px] h-[512.92px] object-cover"
        alt=""
        src="../mask-group21@2x.png"
      />
      <div className="absolute top-[763px] left-[826px] h-[546px] flex flex-col items-start justify-start gap-[40px] text-base text-neutral-600">
        <b className="relative text-xs tracking-[0.1em] leading-[18px] uppercase inline-block font-literata text-primary-color-11 w-[110px] h-[16.8px] shrink-0">
          Our story
        </b>
        <b className="relative text-4xl leading-[50px] inline-block text-neutral-800 w-[526.83px] h-[46.67px] shrink-0">
          Who we are
        </b>
        <div className="relative leading-[30px] font-medium inline-block w-[526.83px] h-[84px] shrink-0">{`We are a team of academics and professionals based in Cambridge, Massachusetts who believe that online personal education can transform higher education. `}</div>
        <div className="relative box-border w-[528px] h-px shrink-0 border-t-[1px] border-solid border-neutral-400" />
        <div className="relative leading-[30px] font-medium inline-block w-[526.83px] h-[84px] shrink-0">
          We have assembled a roster of personal educators who are professors,
          lecturers, PhD students, advanced graduate students, and professionals
          with degrees from the world’s best universities.
        </div>
        <div className="rounded-3xxs bg-primary-color-11 hidden flex-col py-[22px] px-10 items-center justify-center text-center text-neutral-100">
          <b className="relative leading-[20px]">Join our team</b>
        </div>
      </div>
      <img
        className="absolute top-[2px] right-[0.05px] w-[233.95px] h-[230px] opacity-[0.08]"
        alt=""
        src="../ellipse-111.svg"
      />
    </div>
  );
};

export default AboutSection;
