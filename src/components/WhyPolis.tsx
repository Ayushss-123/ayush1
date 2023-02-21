import { FunctionComponent } from "react";

const WhyPolis: FunctionComponent = () => {
  return (
    <div className="absolute top-[3637px] left-[calc(50%_-_720px)] bg-neutral-100 w-[1441px] h-[1000px] overflow-hidden text-left text-4xl text-neutral-800 font-lato">
      <img
        className="absolute top-[100px] right-[82.56px] w-[573.44px] h-[799.54px] object-cover"
        alt=""
        src="../images2@2x.png"
      />
      <button className="cursor-pointer [border:none] py-[22px] px-10 bg-primary-color-11 absolute top-[622px] left-[92px] rounded-3xxs w-[317px] h-[72px] flex flex-col box-border items-center justify-center">
        <b className="relative text-base leading-[20px] font-lato text-neutral-100 text-center">
          Read our education integrity policy
        </b>
      </button>
      <div className="absolute top-[133px] left-[92px] flex flex-col items-start justify-start gap-[31px]">
        <b className="relative leading-[61px] inline-block w-[414.91px]">
          Why Polis?
        </b>
        <div className="relative text-base leading-[30px] font-medium text-neutral-600 inline-block w-[592px]">
          <p className="[margin-block-start:0] [margin-block-end:0px]">{`As educational opportunities increasingly migrate to online platforms, educators and students often lose out on the sense of community and individual advising that education has offered to past generations. `}</p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            &nbsp;
          </p>
          <p className="m-0">
            Modern research has reaffirmed what educators and philosophers in
            the past already knew — 1:1 personal learning improves educational
            outcomes dramatically. Using proven teaching methods and technology,
            we seek to create an inclusive, diverse, and dynamic community of
            learning in the digital age.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyPolis;
