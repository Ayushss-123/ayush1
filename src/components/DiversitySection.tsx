import { FunctionComponent } from "react";

const DiversitySection: FunctionComponent = () => {
  return (
    <div className="absolute top-[2572px] left-[calc(50%_-_726px)] w-[1620px] h-[955px] text-center text-4xl text-secondary-color-2 font-lato">
      <div className="absolute top-[0px] left-[calc(50%_-_804px)] w-[1614px] h-[955px]">
        <div className="absolute top-[0px] left-[calc(50%_-_807px)] bg-primary-color-11 w-[1440px] h-[678px]" />
        <img
          className="absolute top-[401px] left-[calc(50%_+_253px)] w-[380px] h-[277px]"
          alt=""
          src="../ellipse-1181.svg"
        />
      </div>
      <div className="absolute top-[159px] left-[calc(50%_-_459px)] w-[800px] h-[372px]">
        <b className="absolute top-[38px] left-[calc(50%_-_400px)] leading-[50px] inline-block w-[800px]">{`Committed to diversity, equity & inclusion`}</b>
        <div className="absolute top-[222px] left-[calc(50%_-_299.8px)] text-base leading-[30px] font-medium inline-block w-[598.48px]">
          Polis is an equal opportunity employer committed to equity, diversity,
          and inclusion in all forms. Polis does not discriminate on the basis
          of race, religion, color, national origin, gender identity, sexual
          orientation, age, marital status, veteran status, disability status,
          or any other protected category.
        </div>
        <b className="absolute top-[0px] left-[calc(50%_-_81.81px)] text-xs tracking-[0.1em] leading-[18px] uppercase inline-block font-literata text-secondary-color-6 w-[147.81px]">
          Core Values
        </b>
      </div>
      <img
        className="absolute top-[258px] left-[6px] w-[338px] h-[344px]"
        alt=""
        src="../ellipse-1193.svg"
      />
      <img
        className="absolute top-[6px] left-[6px] w-[424px] h-[424px]"
        alt=""
        src="../rectangle-15142.svg"
      />
    </div>
  );
};

export default DiversitySection;
