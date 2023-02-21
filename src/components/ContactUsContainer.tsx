import { FunctionComponent } from "react";

const ContactUsContainer: FunctionComponent = () => {
  return (
    <div className="absolute h-[42.39%] top-[21.3%] bottom-[36.32%] left-[132.98px] w-[474.02px] text-left text-xs text-neutral-600 font-lato">
      <img
        className="absolute h-[35.43%] top-[71.11%] bottom-[-6.53%] left-[-21.98px] rounded-small max-h-full w-[344px]"
        alt=""
        src="../emailusrectangle.svg"
      />
      <div className="absolute h-[10.55%] top-[82.41%] bottom-[7.04%] left-[22px] w-[238.02px]">
        <div className="absolute h-[42.86%] top-[57.14%] left-[57.02px] leading-[18px] font-medium inline-block w-[181px]">
          polis@polis.ac
        </div>
        <b className="absolute h-[47.62%] top-[0%] left-[57.02px] text-base leading-[20px] inline-block text-neutral-800 w-[181px]">
          Email us
        </b>
        <img
          className="absolute h-[66.67%] top-[16.67%] bottom-[16.67%] left-[0px] max-h-full w-[35px]"
          alt=""
          src="../mailicon.svg"
        />
      </div>
      <div className="absolute h-[22.61%] top-[43.72%] left-[0px] text-base leading-[30px] font-medium inline-block w-[444.28px]">
        If you need support or assistance, please check out our Support page or
        write to us here. Our general response time is one business day.
      </div>
      <b className="absolute h-[26.13%] top-[9.55%] left-[0.02px] text-4xl leading-[50px] inline-block text-neutral-800 w-[474px]">
        Interested to learn more? Send us a message.
      </b>
      <b className="absolute h-[4.52%] top-[0%] left-[0.02px] tracking-[0.1em] leading-[18px] uppercase inline-block font-literata text-primary-color-11 w-[125px]">
        CONTACT US
      </b>
    </div>
  );
};

export default ContactUsContainer;
