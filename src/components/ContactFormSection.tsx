import { FunctionComponent } from "react";
import ContactUsContainer from "../components/ContactUsContainer";
import ContactFormContainer from "../components/ContactFormContainer";

const ContactFormSection: FunctionComponent = () => {
  return (
    <div className="absolute top-[4024px] left-[calc(50%_-_720px)] w-[1440px] h-[939px] overflow-hidden text-left text-xs text-neutral-600 font-lato">
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-neutral-200 h-[939px]" />
      <ContactUsContainer />
      <div className="absolute top-[0px] right-[0px] bg-primary-color-11 shadow-[0px_-3px_8px_rgba(20,_20,_43,_0.1),_0px_4px_22px_rgba(8,_15,_52,_0.1)] w-[461px] h-[939px]" />
      <img
        className="absolute top-[0px] right-[4px] w-[318px] h-[318px]"
        alt=""
        src="../ellipse-407.svg"
      />
      <img
        className="absolute top-[501px] right-[0px] w-[455px] h-[438px]"
        alt=""
        src="../rectangle-4032.svg"
      />
      <ContactFormContainer />
    </div>
  );
};

export default ContactFormSection;
