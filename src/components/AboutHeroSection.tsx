import { FunctionComponent } from "react";

const AboutHeroSection: FunctionComponent = () => {
  return (
    <div className="absolute top-[-70px] left-[calc(50%_-_922px)] w-[1643px] h-[963px] overflow-hidden text-left text-7xl text-neutral-100 font-lato">
      <img
        className="absolute w-[calc(100%_-_202px)] top-[164px] right-[0px] left-[202px] max-w-full overflow-hidden h-[700px]"
        alt=""
        src="../rectangle-40971.svg"
      />
      <img
        className="absolute top-[163.5px] right-[107px] w-[328px] h-[163.5px]"
        alt=""
        src="../ellipse-114.svg"
      />
      <img
        className="absolute top-[164px] left-[202px] w-[201px] h-[402px]"
        alt=""
        src="../ellipse-116.svg"
      />
      <img
        className="absolute top-[727px] right-[670px] w-[275px] h-[137px]"
        alt=""
        src="../ellipse-115.svg"
      />
      <img
        className="absolute top-[530px] right-[0.73px] w-[334.27px] h-[334px]"
        alt=""
        src="../group-39755.svg"
      />
      <div className="absolute top-[316px] left-[calc(50%_+_133.5px)] w-[536px] h-[395px]">
        <b className="absolute top-[40px] left-[calc(50%_-_268px)] leading-[61px] inline-block w-[536px]">
          1:1 learning is the oldest form of education
        </b>
        <b className="absolute top-[0px] left-[calc(50%_-_268px)] text-xs tracking-[0.1em] leading-[18px] uppercase font-literata text-neutral-600">
          About US
        </b>
        <div className="absolute top-[245px] left-[calc(50%_-_268px)] text-base leading-[30px] font-medium inline-block w-[536px]">
          New technologies have created opportunities to make 1:1 learning more
          accessible, connecting learners and educators across the globe. Polis
          enables learners to receive personalized advice, feedback, and
          guidance from educators as they navigate complex academic and
          professional spheres.
        </div>
      </div>
      <img
        className="absolute top-[263px] left-[calc(50%_-_486.5px)] w-[500px] h-[700px] object-cover"
        alt=""
        src="../mask-group20@2x.png"
      />
    </div>
  );
};

export default AboutHeroSection;
