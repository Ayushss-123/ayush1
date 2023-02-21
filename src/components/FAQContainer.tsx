import { FunctionComponent } from "react";
import FAQAccordionContainer from "../components/FAQAccordionContainer";

const FAQContainer: FunctionComponent = () => {
  return (
    <div className="absolute top-[1263px] left-[calc(50%_-_712px)] w-[1440px] h-[749px]">
      <img
        className="absolute top-[0px] left-[calc(50%_-_720px)] w-[1440px] h-[749px]"
        alt=""
        src="../rectangle-40541.svg"
      />
      <FAQAccordionContainer propTop="141px" propLeft="151px" />
    </div>
  );
};

export default FAQContainer;
