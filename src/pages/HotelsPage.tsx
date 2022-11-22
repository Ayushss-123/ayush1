import { FunctionComponent, useState, useCallback } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MatterhornPopup from "../components/MatterhornPopup";
import PortalPopup from "../components/PortalPopup";

const HotelsPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);

  const onWebLogo1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <>
      <div className="relative bg-white-200 w-full overflow-hidden flex flex-col items-start justify-start gap-[0px] text-left text-xl text-white-200 font-roboto">
        <div className="self-stretch flex flex-col items-start justify-start gap-[0px] text-9xl font-baloo-bhai">
          <header className="self-stretch bg-white-200 shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.01)] h-[77px] shrink-0 flex flex-row p-[22px_80px] box-border items-center justify-center text-left text-xs text-gray-1700 font-roboto lg:pl-[40px] lg:pr-[40px] lg:box-border md:pl-[24px] md:pr-[24px] md:box-border">
            <div className="flex-1 flex flex-row items-center justify-between">
              <img
                className="relative w-[174px] h-[33px] shrink-0 overflow-hidden cursor-pointer"
                alt=""
                src="../weblogo-1.svg"
                onClick={onWebLogo1Click}
              />
              <div className="flex flex-row items-center justify-end gap-[36px] sm:flex">
                <div className="flex flex-row items-center justify-end gap-[30px] md:hidden">
                  <div className="relative text-gray-1400 inline-block [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)]">
                    Explore
                  </div>
                  <div className="relative inline-block [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)]">
                    Search
                  </div>
                  <div className="relative inline-block [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)]">
                    Hotels
                  </div>
                  <div className="relative inline-block [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)]">
                    Offers
                  </div>
                </div>
                <div className="shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.01)] flex flex-row items-center justify-center gap-[12px]">
                  <img
                    className="relative w-[24px] h-[24px] shrink-0 overflow-hidden hidden md:flex"
                    alt=""
                    src="../notification.svg"
                  />
                  <img
                    className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                    alt=""
                    src="../notification1.svg"
                  />
                  <img
                    className="rounded-[38px] w-[36px] h-[36px] shrink-0 object-cover"
                    alt=""
                    src="../top_avatar@2x.png"
                  />
                </div>
              </div>
            </div>
          </header>
          <div className="self-stretch relative [background:linear-gradient(100.3deg,_#0b5ba8,_#299bd8)] h-[193px] shrink-0 lg:p-[21px_40px_21px_41px] lg:box-border md:p-[21px_24px] md:box-border">
            <img
              className="absolute h-[calc(100%_-_0.4px)] w-full top-[0.4px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="../unsplashe8e4yy65sok@2x.png"
            />
            <div className="absolute top-[50px] left-[0px] w-[1440px] flex flex-col p-[0px_80px] box-border items-start justify-start gap-[8px] lg:pl-[40px] lg:pr-[40px] lg:box-border md:pl-[24px] md:pr-[24px] md:box-border">
              <div className="relative tracking-[0.02em] leading-[48px] inline-block w-[1280px] sm:text-7xl">
                Stays in Los Angeles
              </div>
              <div className="shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.01)] flex flex-row items-start justify-start gap-[8px] text-center text-base font-roboto">
                <div className="rounded-[27px] bg-white-200 shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.01)] [border:1px_solid_#fff] box-border flex flex-row p-[11px_21px] items-center justify-center text-gray-1400">
                  <div className="relative tracking-[0.04em] capitalize font-medium inline-block [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)]">
                    Recommended
                  </div>
                </div>
                <div className="rounded-[27px] shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.01)] [border:1px_solid_#fff] box-border flex flex-row p-[11px_21px] items-center justify-center">
                  <div className="relative tracking-[0.04em] capitalize font-medium inline-block [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)]">
                    Price
                  </div>
                </div>
                <div className="rounded-[27px] shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.01)] [border:1px_solid_#fff] box-border flex flex-row p-[11px_21px] items-center justify-center">
                  <div className="relative tracking-[0.04em] capitalize font-medium inline-block [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)]">
                    Rating
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col p-[50px_80px] box-border items-start justify-start gap-[20px] text-gray-1800 lg:p-[40px] lg:box-border md:p-[30px_24px] md:box-border">
          <div className="self-stretch flex flex-row items-start justify-start gap-[0px]">
            <div className="flex-1 relative tracking-[0.04em] uppercase font-medium inline-block">
              200+ results
            </div>
            <div className="relative shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.01)] w-[86px] h-[24px] shrink-0 text-base">
              <img
                className="absolute top-[0px] left-[62px] w-[24px] h-[24px] overflow-hidden"
                alt=""
                src="../filters.svg"
              />
              <div className="absolute top-[2.5px] left-[0px] tracking-[0.04em] inline-block [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)]">
                Filters
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[23px] text-base text-gray-900">
            <div className="shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.01)] w-[561.87px] shrink-0 flex flex-col items-start justify-start gap-[12px] md:w-[100%!important] sm:gap-[20px]">
              <div className="self-stretch rounded-[10px] bg-gray-1900 shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.01)] flex flex-row items-start justify-start gap-[16px] sm:flex-col">
                <img
                  className="relative rounded-[10px_0px_0px_10px] w-[268px] h-[228px] shrink-0 object-cover sm:w-[100%!important] sm:rounded-[10px!important]"
                  alt=""
                  src="../unsplashs6ch7n3eoqy@2x.png"
                />
                <div className="flex-1 shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.01)] flex flex-col p-[15px_12px_15px_0px] box-border items-start justify-start gap-[31px] sm:p-[15px] sm:box-border sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.01)] flex flex-row items-start justify-start gap-[0px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                      <div className="relative tracking-[0.02em] inline-block w-[146.92px]">
                        1 king bed standard
                      </div>
                      <b className="relative text-4xl tracking-[0.04em] capitalize inline-block text-gray-1800 w-[232.87px]">
                        Holiday Inn Expre...
                      </b>
                      <div className="relative w-[173.91px] h-[19px] shrink-0 text-gray-1400">
                        <div className="absolute top-[0px] left-[55.97px] tracking-[0.04em] inline-block w-[117.94px]">
                          (1,136 reviews)
                        </div>
                        <div className="absolute top-[0px] left-[0px] w-[45.98px] h-[19px] text-gray-1800">
                          <div className="absolute top-[0px] left-[21.99px] tracking-[0.04em] font-medium inline-block w-[23.99px]">
                            4.7
                          </div>
                          <img
                            className="absolute h-[84.21%] w-[34.78%] top-[0%] right-[65.22%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="../vector7.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      className="relative w-[24px] h-[24px] shrink-0 overflow-hidden cursor-pointer"
                      alt=""
                      src="../video2.svg"
                      onClick={openMatterhornPopup}
                    />
                  </div>
                  <div className="relative w-[164.49px] h-[83.58px] shrink-0 text-4xl text-gray-1800">
                    <div className="absolute top-[0px] left-[0px] w-[112px] h-[26px]">
                      <b className="absolute top-[0px] left-[0px] tracking-[0.02em] capitalize inline-block">
                        $S 286
                      </b>
                      <div className="absolute top-[8px] left-[73px] text-xs tracking-[0.02em] inline-block">
                        /night
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute top-[37.58px] left-[0.49px] w-[164px] h-[46px]">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[6px] bg-gray-1400" />
                      <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_54.5px)] text-xl tracking-[0.04em] font-medium font-roboto text-white-200 text-center inline-block">
                        View Details
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-[10px] bg-gray-1900 flex flex-row items-start justify-start gap-[16px] text-gray-1800 sm:flex-col">
                <img
                  className="relative rounded-[10px_0px_0px_10px] w-[260px] h-[220px] shrink-0 object-cover sm:w-[100%!important] sm:rounded-[10px!important]"
                  alt=""
                  src="../unsplashs6ch7n3eoqy1@2x.png"
                />
                <div className="flex-1 flex flex-col p-[15px_12px_15px_0px] box-border items-start justify-start gap-[31px] sm:p-[15px] sm:box-border sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 relative h-[76px]">
                      <b className="absolute top-[25px] left-[0px] text-4xl tracking-[0.04em] capitalize inline-block w-[273.87px]">
                        Freehand Los Angeles
                      </b>
                      <div className="absolute top-[0px] left-[0px] tracking-[0.02em] text-gray-900 inline-block w-[172.79px]">
                        Bed in Quad
                      </div>
                      <div className="absolute top-[57px] left-[0px] w-[202.77px] h-[19px] text-gray-1400">
                        <div className="absolute top-[0px] left-[64.07px] tracking-[0.04em] inline-block w-[138.7px]">
                          (1,941 reviews)
                        </div>
                        <div className="absolute top-[0px] left-[0px] w-[54.07px] h-[19px] text-gray-1800">
                          <div className="absolute top-[0px] left-[25.86px] tracking-[0.04em] font-medium inline-block w-[28.21px]">
                            4.2
                          </div>
                          <img
                            className="absolute h-[84.21%] w-[34.78%] top-[0%] right-[65.22%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="../vector8.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-[164.49px] h-[83.58px] shrink-0 text-4xl">
                    <div className="absolute top-[0px] left-[0px] w-[112px] h-[26px]">
                      <b className="absolute top-[0px] left-[0px] tracking-[0.02em] capitalize inline-block">
                        $S 198
                      </b>
                      <div className="absolute top-[8px] left-[73px] text-xs tracking-[0.02em] inline-block">
                        /night
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute top-[37.58px] left-[0.49px] w-[164px] h-[46px]">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[6px] bg-gray-1400" />
                      <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_54.5px)] text-xl tracking-[0.04em] font-medium font-roboto text-white-200 text-center inline-block">
                        View Details
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-[10px] bg-gray-1900 flex flex-row items-start justify-start gap-[16px] text-gray-1800 sm:flex-col">
                <img
                  className="relative rounded-[10px_0px_0px_10px] w-[260px] h-[220px] shrink-0 object-cover sm:w-[100%!important] sm:rounded-[10px!important]"
                  alt=""
                  src="../unsplashs6ch7n3eoqy2@2x.png"
                />
                <div className="flex-1 flex flex-col p-[15px_12px_15px_0px] box-border items-start justify-start gap-[31px] sm:p-[15px] sm:box-border sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 relative h-[76px]">
                      <b className="absolute top-[25px] left-[0px] text-4xl tracking-[0.04em] capitalize inline-block w-[273.87px]">
                        The Westin Bonavent...
                      </b>
                      <div className="absolute top-[0px] left-[0px] tracking-[0.02em] text-gray-900 inline-block w-[172.79px]">
                        1 King, City view
                      </div>
                      <div className="absolute top-[57px] left-[0px] w-[202.77px] h-[19px] text-gray-1400">
                        <div className="absolute top-[0px] left-[64.07px] tracking-[0.04em] inline-block w-[138.7px]">
                          (1,002 reviews)
                        </div>
                        <div className="absolute top-[0px] left-[0px] w-[54.07px] h-[19px] text-gray-1800">
                          <div className="absolute top-[0px] left-[25.86px] tracking-[0.04em] font-medium inline-block w-[28.21px]">
                            4.1
                          </div>
                          <img
                            className="absolute h-[84.21%] w-[34.78%] top-[0%] right-[65.22%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="../vector9.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-[164.49px] h-[83.58px] shrink-0 text-4xl">
                    <div className="absolute top-[0px] left-[0px] w-[112px] h-[26px]">
                      <b className="absolute top-[0px] left-[0px] tracking-[0.02em] capitalize inline-block">
                        $S 289
                      </b>
                      <div className="absolute top-[8px] left-[73px] text-xs tracking-[0.02em] inline-block">
                        /night
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute top-[37.58px] left-[0.49px] w-[164px] h-[46px]">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[6px] bg-gray-1400" />
                      <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_54.5px)] text-xl tracking-[0.04em] font-medium font-roboto text-white-200 text-center inline-block">
                        View Details
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-[10px] bg-gray-1900 flex flex-row items-start justify-start gap-[16px] sm:flex-col">
                <img
                  className="relative rounded-[10px_0px_0px_10px] w-[260px] h-[220px] shrink-0 object-cover sm:w-[100%!important] sm:rounded-[10px!important]"
                  alt=""
                  src="../unsplashs6ch7n3eoqy3@2x.png"
                />
                <div className="flex-1 flex flex-col p-[15px_12px_15px_0px] box-border items-start justify-start gap-[31px] sm:p-[15px] sm:box-border sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[0px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                      <div className="relative tracking-[0.02em] inline-block w-[146.92px]">
                        Deluxe King
                      </div>
                      <b className="relative text-4xl tracking-[0.04em] capitalize inline-block text-gray-1800 w-[232.87px]">
                        The Ritz-Carlton, L...
                      </b>
                      <div className="relative w-[173.91px] h-[19px] shrink-0 text-gray-1400">
                        <div className="absolute top-[0px] left-[55.97px] tracking-[0.04em] inline-block w-[117.94px]">
                          (1,136 reviews)
                        </div>
                        <div className="absolute top-[0px] left-[0px] w-[45.98px] h-[19px] text-gray-1800">
                          <div className="absolute top-[0px] left-[21.99px] tracking-[0.04em] font-medium inline-block w-[23.99px]">
                            4.7
                          </div>
                          <img
                            className="absolute h-[84.21%] w-[34.78%] top-[0%] right-[65.22%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="../vector10.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                      alt=""
                      src="../video3.svg"
                    />
                  </div>
                  <div className="relative w-[164.49px] h-[83.58px] shrink-0 text-4xl text-gray-1800">
                    <div className="absolute top-[0px] left-[0px] w-[112px] h-[26px]">
                      <b className="absolute top-[0px] left-[0px] tracking-[0.02em] capitalize inline-block">
                        $S 286
                      </b>
                      <div className="absolute top-[8px] left-[73px] text-xs tracking-[0.02em] inline-block">
                        /night
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute top-[37.58px] left-[0.49px] w-[164px] h-[46px]">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[6px] bg-gray-1400" />
                      <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_54.5px)] text-xl tracking-[0.04em] font-medium font-roboto text-white-200 text-center inline-block">
                        View Details
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <iframe
              className="[border:none] self-stretch flex-1 relative md:hidden"
              src="https://www.bing.com/"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[0px] text-center text-gray-1500">
          <div className="self-stretch relative bg-gray-200 h-[529px] shrink-0 overflow-hidden">
            <img
              className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[530px] object-cover"
              alt=""
              src="../rectangle-1861@2x.png"
            />
            <div className="[position:relative!important] top-[52px] left-[auto!important] w-[549px] flex flex-col p-[20px] box-border items-center justify-start gap-[30px] ml-[auto] mr-[auto] md:p-[24px_0px] md:box-border sm:pl-[24px] sm:pr-[24px] sm:box-border sm:ml-[auto] sm:mr-[auto] sm:[position:relative!important] sm:left-[auto!important] sm:w-full">
              <div className="self-stretch flex flex-col items-center justify-start gap-[7px]">
                <b className="self-stretch relative tracking-[0.04em] uppercase inline-block">
                  subscribe to our newsletter
                </b>
                <b className="self-stretch relative text-6xl inline-block text-gray-1600">
                  Get weekly updates
                </b>
              </div>
              <form className="self-stretch rounded-[12px] bg-white-200 shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] [border:1px_solid_#eaeaea] box-border flex flex-col p-[28px_30px] items-start justify-start gap-[17px]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative text-xl leading-[34px] font-roboto text-gray-1200 text-left inline-block">
                    Fill in your details to join the party!
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch"
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Your name"
                      size="medium"
                      margin="none"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch"
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Email address"
                      size="medium"
                      margin="none"
                    />
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-[0] bg-orange-300 rounded-[4px] w-[164px] h-[56px] shrink-0 overflow-hidden flex flex-col items-center justify-center hover:bg-brown sm:w-full sm:hover:bg-orange-300">
                  <div className="overflow-hidden flex flex-col p-[8px_22px] box-border items-start justify-start">
                    <div className="relative text-sm tracking-[0.46px] leading-[26px] uppercase font-medium font-roboto text-white-200 text-left inline-block">
                      submit
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <footer className="self-stretch [background:linear-gradient(91.74deg,_#0b5ba8_25.38%,_#299bd8)] flex flex-row p-[33px_84px] box-border items-start justify-start gap-[44px] text-left text-xl text-white-200 font-roboto lg:p-[40px] lg:box-border md:flex-col md:p-[40px_24px_30px] md:box-border sm:p-[30px_24px] sm:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[14px] mb-[40px!important] md:flex-[unset] md:self-stretch">
              <img
                className="relative w-[174px] h-[33px] shrink-0 overflow-hidden"
                alt=""
                src="../logo1.svg"
              />
              <div className="self-stretch relative leading-[27px] inline-block">
                Fickle Flight is your one-stop travel portal. We offer hassle
                free flight and hotel bookings. We also have all your flight
                needs in you online shop.
              </div>
              <img
                className="relative w-[130px] h-[30px] shrink-0"
                alt=""
                src="../social-icons1.svg"
              />
            </div>
            <div className="relative border-r-[1px_solid_rgba(255,_255,_255,_0.2)] box-border w-[1px] h-[157.87px] shrink-0 md:hidden" />
            <div className="flex-1 flex flex-row items-start justify-between text-base md:flex-[unset] md:self-stretch sm:flex-col sm:gap-[0px]">
              <div className="relative w-[197.33px] h-[159.76px] shrink-0 sm:mb-[40px!important]">
                <a className="[text-decoration:none] absolute top-[47.76px] left-[0px] text-[inherit] inline-block w-[135.67px]">
                  About Us
                </a>
                <div className="absolute top-[0px] left-[0px] text-2xl leading-[27px] font-medium inline-block w-[174.72px]">
                  Company
                </div>
                <div className="absolute top-[78.76px] left-[0px] inline-block w-[84.28px]">
                  News
                </div>
                <div className="absolute top-[109.76px] left-[0px] inline-block w-[115.11px]">
                  Careers
                </div>
                <div className="absolute top-[140.76px] left-[0px] inline-block w-[197.33px]">
                  How we work
                </div>
              </div>
              <div className="relative w-[197.33px] h-[159.76px] shrink-0 sm:mb-[40px!important]">
                <div className="absolute top-[47.76px] left-[0px] inline-block w-[109.63px]">
                  Account
                </div>
                <div className="absolute top-[0px] left-[0px] text-2xl leading-[27px] font-medium inline-block w-[131.56px]">
                  Support
                </div>
                <div className="absolute top-[78.76px] left-[0px] inline-block w-[197.33px]">
                  Support Center
                </div>
                <div className="absolute top-[109.76px] left-[0px] inline-block w-[52.99px]">
                  FAQ
                </div>
                <div className="absolute top-[140.76px] left-[0px] inline-block w-[164.44px]">
                  Accessibility
                </div>
              </div>
              <div className="relative w-[197.33px] h-[159.76px] shrink-0">
                <div className="absolute top-[47.76px] left-[0px] inline-block w-[172.87px]">
                  Covid Advisory
                </div>
                <div className="absolute top-[0px] left-[0px] text-2xl leading-[27px] font-medium inline-block w-[76.65px]">
                  More
                </div>
                <div className="absolute top-[78.76px] left-[0px] inline-block w-[135.36px]">
                  Airline Fees
                </div>
                <div className="absolute top-[109.76px] left-[0px] inline-block w-[50.56px]">
                  Tips
                </div>
                <div className="absolute top-[140.76px] left-[0px] inline-block w-[197.33px]">
                  Quarantine Rules
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default HotelsPage;
