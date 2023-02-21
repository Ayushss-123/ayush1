import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type HourlyRateContainerType = {
  groupImageUrl?: string;
  groupText?: string;
  rateAvailabilityText?: string;

  /** Style props */
  propTop?: Property.Top;
  propLeft?: Property.Left;
  propBackgroundColor?: Property.BackgroundColor;
};

const HourlyRateContainer: FunctionComponent<HourlyRateContainerType> = ({
  groupImageUrl,
  groupText,
  rateAvailabilityText,
  propTop,
  propLeft,
  propBackgroundColor,
}) => {
  const subHeadingsStyle: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const lineDiv1Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] text-center text-base text-neutral-600 font-lato">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xl bg-neutral-100 shadow-[0px_-3px_8px_rgba(20,_20,_43,_0.1),_0px_4px_22px_rgba(8,_15,_52,_0.1)] box-border border-[1px] border-solid border-gray-200" />
        </div>
        <img
          className="absolute h-[23.1%] w-[23.02%] top-[17.19%] right-[38.49%] bottom-[59.72%] left-[38.49%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={groupImageUrl}
        />
        <div className="absolute w-[85.9%] top-[58.6%] left-[7.05%] leading-[30px] font-medium hidden">
          Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus
        </div>
        <b
          className="absolute top-[52.6%] left-[21.49%] text-xl leading-[34px] text-neutral-800"
          style={subHeadingsStyle}
        >
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            {groupText}
          </p>
          <p className="m-0">{rateAvailabilityText}</p>
        </b>
        <div
          className="absolute h-[0.54%] w-[29.79%] top-[83.04%] right-[35.1%] bottom-[16.42%] left-[35.1%] box-border border-t-[2px] border-solid border-primary-color-11"
          style={lineDiv1Style}
        />
      </div>
    </div>
  );
};

export default HourlyRateContainer;
