import { FunctionComponent } from "react";

type MatterhornPopupType = {
  onClose?: () => void;
};

const MatterhornPopup: FunctionComponent<MatterhornPopupType> = ({
  onClose,
}) => {
  return (
    <div className="relative w-[900px] h-[600px] max-w-[90%] max-h-[90%] overflow-auto">
      <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_20px_rgba(0,_0,_0,_0.06)] w-[900px] h-[600px]">
        <div className="absolute top-[0px] left-[0px] rounded-[8px] bg-white-200 w-[900px] h-[600px]" />
        <iframe
          className="absolute top-[20px] left-[20px] w-[860px] h-[560px]"
          src={`https://www.youtube.com/embed/DJImX19wyLY?rel=0&autoplay=1&mute=1`}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default MatterhornPopup;
