import { FunctionComponent, useMemo } from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Accordion,
  Box,
} from "@chakra-ui/react";
import CSS, { Property } from "csstype";

type FAQAccordionContainerType = {
  /** Style props */
  propTop?: Property.Top;
  propLeft?: Property.Left;
};

const FAQAccordionContainer: FunctionComponent<FAQAccordionContainerType> = ({
  propTop,
  propLeft,
}) => {
  const fAQAccordionStyle: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className="absolute top-[2231px] left-[calc(50%_-_570px)] w-[1149px] h-[467px] text-center text-5xl text-secondary-color-3 font-lato"
      style={fAQAccordionStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-base bg-neutral-100 shadow-[0px_5px_18px_rgba(31,_37,_89,_0.05)] box-border border-[0.5px] border-solid border-neutral-200" />
      <b className="absolute w-[64.47%] top-[69px] left-[17.83%] leading-[61px] inline-block">
        General Questions
      </b>
      <div className="absolute w-[calc(100%_-_142px)] top-[217px] right-[73px] left-[69px] flex flex-col items-center justify-center">
        <Accordion className="self-stretch" allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Section Title
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>Content</AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion className="self-stretch" allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Section Title
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>Content</AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion className="self-stretch" allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Section Title
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>Content</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQAccordionContainer;
