import { FunctionComponent } from "react";
import { Input, Textarea } from "@chakra-ui/react";

const ContactFormContainer: FunctionComponent = () => {
  return (
    <div className="absolute top-[100px] right-[135px] rounded-base bg-gray-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[553px] h-[739px] text-left text-base text-neutral-800 font-lato">
      <button className="cursor-pointer [border:none] py-[22px] px-10 bg-primary-color-11 absolute bottom-[30px] left-[40px] rounded-3xxs flex flex-col items-center justify-center">
        <b className="relative text-base leading-[20px] font-lato text-neutral-100 text-center">
          Get in touch
        </b>
      </button>
      <div className="absolute h-[12.72%] w-[39.8%] top-[3.11%] right-[4.37%] bottom-[84.17%] left-[55.83%]">
        <label className="cursor-pointer absolute h-[21.28%] w-[26.01%] top-[0%] left-[0%] leading-[20px] font-bold inline-block">
          Email
        </label>
        <Input
          className="bg-[transparent] absolute h-[65.96%] w-full top-[34.04%] right-[0%] bottom-[0%] left-[0%]"
          variant="outline"
          width="220.07144165039062px"
          placeholder="Email address"
          w="220.07144165039062px"
        />
      </div>
      <div className="absolute h-[12.72%] w-[39.8%] top-[22.19%] right-[54.37%] bottom-[65.09%] left-[5.83%]">
        <label className="cursor-pointer absolute h-[21.28%] w-[53.48%] top-[0%] left-[0%] leading-[20px] font-bold inline-block">
          Phone
        </label>
        <Input
          className="bg-[transparent] absolute h-[65.96%] w-full top-[34.04%] right-[0%] bottom-[0%] left-[0%]"
          variant="outline"
          width="220.07142639160156px"
          placeholder="(414) 449 - 0525"
          w="220.07142639160156px"
        />
      </div>
      <div className="absolute h-[12.72%] w-[39.8%] top-[22.19%] right-[4.37%] bottom-[65.09%] left-[55.83%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <label className="cursor-pointer absolute h-[21.28%] w-[62.27%] top-[0%] left-[0%] leading-[20px] font-bold inline-block">
            Company
          </label>
          <Input
            className="bg-[transparent] absolute h-[65.96%] w-full top-[34.04%] right-[0%] bottom-[0%] left-[0%]"
            variant="outline"
            width="220.07144165039062px"
            placeholder="Company name"
            w="220.07144165039062px"
          />
        </div>
      </div>
      <Textarea
        className="absolute h-[35.99%] w-[calc(100%_-_70px)] top-[41.27%] right-[30px] bottom-[22.73%] left-[40px]"
        variant="outline"
        w="483px"
        placeholder="Describe your project..."
      />
      <div className="absolute h-[12.72%] w-[39.8%] top-[3.11%] right-[54.37%] bottom-[84.17%] left-[5.83%]">
        <label className="cursor-pointer absolute h-[21.28%] w-[27.47%] top-[0%] left-[0%] leading-[20px] font-bold inline-block">
          Name
        </label>
        <Input
          className="bg-[transparent] absolute h-[65.96%] w-full top-[34.04%] right-[0%] bottom-[0%] left-[0%]"
          variant="outline"
          width="220.07142639160156px"
          placeholder="Full name"
          w="220.07142639160156px"
        />
      </div>
    </div>
  );
};

export default ContactFormContainer;
