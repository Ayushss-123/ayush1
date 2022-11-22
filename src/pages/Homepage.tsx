import { FunctionComponent, useState, useCallback } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MatterhornPopup from "../components/MatterhornPopup";
import PortalPopup from "../components/PortalPopup";
import Card2 from "../components/Card2";

const Homepage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);

  const onSearchFlightsButtonClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onGroup1Click = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  const onHotelButtonClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='popularStaysForm']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <>
      <div className="relative bg-white-200 w-full overflow-hidden flex flex-col items-center justify-start gap-[69px] text-center text-xl text-white-200 font-roboto hover:[background:linear-gradient(#fff,_#fff),_#87550a] sm:w-full sm:hover:bg-orange-300">
        <div className="self-stretch flex flex-col items-center justify-start gap-[0px] text-10xl font-baloo-bhai">
          <header className="self-stretch bg-white-200 h-[77px] shrink-0 flex flex-row p-[22px_80px] box-border items-center justify-center sticky w-full top-[0] [background:white-100] text-left text-xs text-gray-1700 font-roboto lg:pl-[40px] lg:pr-[40px] lg:box-border md:pl-[24px] md:pr-[24px] md:box-border">
            <div className="flex-1 flex flex-row items-center justify-between">
              <img
                className="relative w-[174px] h-[33px] shrink-0 overflow-hidden"
                alt=""
                src="../fickleflight-logo.svg"
              />
              <div className="flex flex-row items-center justify-end gap-[36px] sm:flex">
                <div className="flex flex-row items-center justify-end gap-[30px] md:hidden">
                  <div className="relative text-gray-1400 inline-block">
                    Explore
                  </div>
                  <div className="relative inline-block">Search</div>
                  <div className="relative inline-block">Hotels</div>
                  <div className="relative inline-block">Offers</div>
                </div>
                <div className="flex flex-row items-center justify-center gap-[12px]">
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
          <div className="self-stretch relative h-[640px] shrink-0">
            <div className="absolute w-full top-[0px] right-[0px] left-[0px] [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] h-[639.91px]" />
            <img
              className="absolute w-full top-[0.4px] right-[0px] left-[0px] max-w-full overflow-hidden h-[640px] object-cover"
              alt=""
              src="../banner--background@2x.png"
            />
            <div className="absolute top-[0px] left-[0px] w-full h-[640px] flex flex-col p-[0px_140px] box-border items-center justify-center gap-[43px] md:pl-[30px] md:pr-[30px] md:box-border">
              <div className="self-stretch flex flex-col items-center justify-start gap-[5px]">
                <div className="self-stretch relative leading-[67px] inline-block sm:text-9xl sm:leading-[48px]">{`Let’s explore & travel the world`}</div>
                <div className="self-stretch relative text-5xl leading-[32px] font-roboto inline-block">
                  Find the best destinations and the most popular stays!
                </div>
              </div>
              <div className="self-stretch rounded-[10px] bg-white-200 flex flex-row p-[20px] box-border items-start justify-start gap-[0px] text-left text-3xs text-gray-2000 font-roboto md:flex-col">
                <div className="flex-1 flex flex-row items-start justify-start gap-[0px] md:w-full md:flex-[unset] md:self-stretch sm:flex-col">
                  <div className="flex-1 flex flex-col p-[5px] box-border items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
                    <Autocomplete
                      className="self-stretch"
                      disablePortal
                      options={[
                        "Singapore (SIN)",
                        "Sydney (SYD)",
                        "Siem Reap (REP)",
                        "Shanghai (PVG)Sanya (SYX)",
                      ]}
                      renderInput={(params: any) => (
                        <TextField
                          {...params}
                          color="primary"
                          label="Departure"
                          variant="outlined"
                          placeholder=""
                          helperText=""
                        />
                      )}
                      defaultValue="Singapore -  Changi (SIN)"
                      size="medium"
                    />
                  </div>
                  <div className="flex-1 flex flex-col p-[5px] box-border items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
                    <Autocomplete
                      className="self-stretch"
                      disablePortal
                      options={[
                        "Clark (CRK)",
                        "Launceston (LST)",
                        "Kalibo (KLO)",
                        "Colombo CMB",
                        "Melbourne (AVV)",
                        "Los Angeles (LA)",
                      ]}
                      renderInput={(params: any) => (
                        <TextField
                          {...params}
                          color="primary"
                          label="Arrival"
                          variant="outlined"
                          placeholder=""
                          helperText=""
                        />
                      )}
                      defaultValue="Los Angeles (LA)"
                      size="medium"
                    />
                  </div>
                  <div className="flex-1 flex flex-col p-[5px] box-border items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
                    <div className="self-stretch h-[56px] shrink-0 flex flex-col items-start justify-start">
                      <div className="self-stretch rounded-[4px] [border:1px_solid_rgba(0,_0,_0,_0.23)] box-border h-[56px] shrink-0 flex flex-col p-[0px_12px] items-start justify-start gap-[0px]">
                        <div className="bg-white-200 h-[2px] shrink-0 flex flex-row p-[0px_4px] box-border items-center justify-start">
                          <div className="relative tracking-[0.15px] leading-[12px] inline-block">
                            Date
                          </div>
                        </div>
                        <div className="self-stretch overflow-hidden flex flex-row p-[15px_0px] box-border items-center justify-start gap-[8px] text-center text-gray-1100">
                          <div className="hidden flex-row items-start justify-start gap-[8px]">
                            <div className="flex flex-col items-start justify-start">
                              <div className="rounded-[16px] bg-gray-400 flex flex-row p-[4px] box-border items-center justify-start gap-[0px]">
                                <div className="rounded-[64px] bg-gray-600 w-[24px] h-[24px] shrink-0 overflow-hidden hidden flex-row items-center justify-center">
                                  <div className="self-stretch flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                                    F
                                  </div>
                                </div>
                                <div className="flex flex-col p-[3px_6px] box-border items-start justify-start text-left text-2xs text-gray-2100">
                                  <div className="relative tracking-[0.16px] leading-[18px] inline-block">
                                    Chip
                                  </div>
                                </div>
                                <img
                                  className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                                  alt=""
                                  src="../cancel.svg"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start">
                              <div className="rounded-[16px] bg-gray-400 flex flex-row p-[4px] box-border items-center justify-start gap-[0px]">
                                <div className="rounded-[64px] bg-gray-600 w-[24px] h-[24px] shrink-0 overflow-hidden hidden flex-row items-center justify-center">
                                  <div className="self-stretch flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                                    F
                                  </div>
                                </div>
                                <div className="flex flex-col p-[3px_6px] box-border items-start justify-start text-left text-2xs text-gray-2100">
                                  <div className="relative tracking-[0.16px] leading-[18px] inline-block">
                                    Chip
                                  </div>
                                </div>
                                <img
                                  className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                                  alt=""
                                  src="../cancel.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 relative text-base tracking-[0.15px] leading-[24px] text-gray-2100 text-left inline-block">
                            01/05/2022
                          </div>
                          <img
                            className="relative w-[24px] h-[24px] shrink-0 overflow-hidden opacity-[0.5]"
                            alt=""
                            src="../date.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-[5px] box-border items-center justify-center md:w-full md:text-left">
                  <button
                    className="cursor-pointer [border:none] p-[0] bg-orange-300 rounded-[4px] w-[164px] h-[56px] shrink-0 overflow-hidden flex flex-col items-center justify-center transition-[0.3s] hover:bg-orange-300 md:mr-[auto] sm:w-[100%!important]"
                    onClick={onSearchFlightsButtonClick}
                  >
                    <div className="relative text-sm tracking-[0.46px] leading-[26px] uppercase font-medium font-roboto text-white-200 text-center inline-block w-[146.98px]">
                      Search flights
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col p-[0px_80px] box-border items-center justify-start gap-[80px] max-w-[1280px] text-left text-gray-1800 md:pl-[30px] md:pr-[30px] md:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] md:block">
            <b className="relative tracking-[0.04em] uppercase inline-block w-[1268.05px]">
              Upcoming Flight
            </b>
            <div className="self-stretch flex flex-row items-start justify-start gap-[36px] text-5xl text-gray-1500 md:flex-col">
              <div className="rounded-[8px] [border:1px_solid_#eaeaea] box-border w-[520.13px] shrink-0 flex flex-col p-[20px] items-start justify-start gap-[21px] lg:w-[520px] md:w-full md:block md:mb-[30px]">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="relative w-[72px] h-[46px] shrink-0">
                    <b className="absolute top-[0px] left-[0px] tracking-[0.04em] capitalize inline-block w-[44.73px]">
                      SIN
                    </b>
                    <div className="absolute top-[30px] left-[0px] text-xs tracking-[0.02em] capitalize text-gray-900 inline-block w-[72px]">
                      Singapore
                    </div>
                  </div>
                  <div className="relative w-[117.35px] h-[44.09px] shrink-0 text-xs text-gray-900">
                    <b className="absolute top-[28.09px] left-[23.69px] tracking-[0.02em] capitalize inline-block w-[65.66px]">
                      15H 55M
                    </b>
                    <img
                      className="absolute top-[0px] left-[0px] w-[117.35px] h-[24px]"
                      alt=""
                      src="../group-17.svg"
                    />
                  </div>
                  <div className="relative w-[87.27px] h-[46px] shrink-0 text-right">
                    <b className="absolute top-[0px] left-[36px] tracking-[0.04em] capitalize inline-block w-[51.27px]">
                      LAX
                    </b>
                    <div className="absolute top-[30px] left-[0px] text-xs tracking-[0.02em] capitalize text-gray-900 inline-block w-[87.27px]">
                      Los Angeles
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative border-t-[1px_solid_#eaeaea] box-border h-[1px] shrink-0 md:w-full" />
                <div className="self-stretch flex flex-row items-center justify-between text-xs text-gray-900">
                  <div className="relative tracking-[0.02em] capitalize inline-block w-[203.9px] shrink-0">
                    Departs on: 1 May, 08:00 AM
                  </div>
                  <div className="relative tracking-[0.02em] text-right inline-block w-[87.23px] shrink-0">
                    <b>4 days</b>
                    <span> to go</span>
                  </div>
                </div>
              </div>
              <div className="relative border-r-[1px_solid_#eaeaea] box-border w-[1px] h-[145.99px] shrink-0 md:hidden" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[20px] text-xl text-gray-500 md:w-full md:flex-[unset] md:self-stretch">
                <div className="self-stretch relative tracking-[0.04em] uppercase inline-block">
                  Prepare for your trip
                </div>
                <div className="self-stretch flex flex-row items-start justify-between sm:flex-row sm:gap-[56px] sm:text-center sm:flex-wrap sm:justify-between sm:ml-[-28px] sm:mr-[-28px]">
                  <button
                    className="cursor-pointer [border:none] p-[0] bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-[20px] sm:box-border sm:w-[33.33%] sm:text-center"
                    onClick={onHotelButtonClick}
                  >
                    <img
                      className="relative w-[65.39px] h-[65.39px] shrink-0 cursor-pointer"
                      alt=""
                      src="../group-21.svg"
                      onClick={onGroup1Click}
                    />
                    <div className="relative text-sm tracking-[0.04em] font-roboto text-gray-900 text-left inline-block">
                      Hotel
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] p-[0] bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-[20px] sm:box-border sm:w-[33.33%] sm:text-center">
                    <div
                      className="relative w-[65.39px] h-[65.39px] shrink-0 cursor-pointer"
                      onClick={onGroupContainerClick}
                    >
                      <div className="absolute top-[0px] left-[0px] rounded-[16px] bg-orange-100 w-[65.39px] h-[65.39px]" />
                      <img
                        className="absolute h-[47.93%] w-[48.38%] top-[26.03%] right-[25.81%] bottom-[26.04%] left-[25.81%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="../group.svg"
                      />
                    </div>
                    <div className="relative text-sm tracking-[0.04em] font-roboto text-gray-900 text-center inline-block">
                      Attractions
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] p-[0] bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-[20px] sm:box-border sm:w-[33.33%] sm:text-center">
                    <img
                      className="relative w-[65.39px] h-[65.39px] shrink-0"
                      alt=""
                      src="../group-211.svg"
                    />
                    <div className="relative text-sm tracking-[0.04em] font-roboto text-gray-900 text-center inline-block">
                      Eats
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] p-[0] bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-[20px] sm:box-border sm:w-[33.33%] sm:text-center">
                    <div className="relative w-[65.39px] h-[65.39px] shrink-0">
                      <div className="absolute top-[0px] left-[0px] rounded-[16px] bg-gold w-[65.39px] h-[65.39px]" />
                      <img
                        className="absolute h-[48.43%] w-[41.17%] top-[26.51%] right-[29.42%] bottom-[25.06%] left-[29.42%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="../vector.svg"
                      />
                    </div>
                    <div className="relative text-sm tracking-[0.04em] font-roboto text-gray-900 text-center inline-block">
                      Commute
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] p-[0] bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-[20px] sm:box-border sm:w-[33.33%] sm:text-center">
                    <div className="relative w-[70px] h-[65.39px] shrink-0">
                      <div className="absolute top-[0px] left-[0px] rounded-[16px] bg-gray-700 w-[70px] h-[65.39px]" />
                      <img
                        className="absolute h-[40.15%] w-[40.52%] top-[29.63%] right-[29.74%] bottom-[30.22%] left-[29.74%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="../vector1.svg"
                      />
                    </div>
                    <div className="relative text-sm tracking-[0.04em] font-roboto text-gray-900 text-center inline-block w-[32.12px]">
                      Taxi
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] p-[0] bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-[20px] sm:box-border sm:w-[33.33%] sm:text-center">
                    <div className="relative w-[65.39px] h-[65.39px] shrink-0">
                      <div className="absolute top-[0px] left-[0px] rounded-[16px] bg-green w-[65.39px] h-[65.39px]" />
                      <img
                        className="absolute h-[35.6%] w-[39.93%] top-[32.2%] right-[30.03%] bottom-[32.2%] left-[30.03%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="../vector2.svg"
                      />
                    </div>
                    <div className="relative text-sm tracking-[0.04em] font-roboto text-gray-900 text-center inline-block">
                      Movies
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-gray-1500">
            <div className="self-stretch flex flex-row items-center justify-start gap-[0px] sm:flex-col sm:self-start">
              <div className="flex-1 flex flex-col items-start justify-start gap-[6px] sm:flex-[unset] sm:self-stretch">
                <b className="self-stretch relative tracking-[0.04em] uppercase inline-block">
                  Plan your next trip
                </b>
                <b className="self-stretch relative text-6xl tracking-[0.04em] capitalize inline-block text-gray-1800 sm:text-4xl">
                  Most Popular Destinations
                </b>
              </div>
              <a
                className="[text-decoration:none] rounded-[31px] bg-white-200 w-[231.38px] shrink-0 flex flex-row items-start justify-start gap-[10px] text-right text-[inherit] md:hidden"
                href="#"
              >
                <div className="relative tracking-[0.04em] font-medium inline-block w-[197.33px] shrink-0">
                  View all destinations
                </div>
                <img
                  className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                  alt=""
                  src="../arrowright.svg"
                />
              </a>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[0px] ml-[-16px] mr-[-16px] md:ml-[-16px] md:mr-[-16px] md:flex-wrap md:mt-[-16px] md:mb-[-16px]">
              <button className="cursor-pointer [border:none] p-[0px_16px] bg-[transparent] w-[25%] shrink-0 flex flex-col box-border items-center justify-center md:p-[16px] md:box-border md:w-[50%] sm:w-full">
                <div className="self-stretch relative rounded-[10px] h-[182px] shrink-0 overflow-hidden">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="../unsplashnnzkznywhau@2x.png"
                  />
                  <div className="absolute w-[calc(100%_-_0.59px)] top-[0px] right-[0.29px] left-[0.29px] flex flex-row p-[8px_12px] box-border items-start justify-start gap-[0px]">
                    <b className="flex-1 relative text-2xl tracking-[0.02em] inline-block font-roboto text-white-200 text-left">
                      Paris
                    </b>
                    <div className="relative w-[90.92px] h-[59px] shrink-0">
                      <div className="absolute top-[21px] left-[0px] text-8xl leading-[38px] font-baloo-bhai text-white-200 text-right inline-block w-[90.92px]">
                        $699
                      </div>
                      <div className="absolute top-[0px] left-[38.39px] text-base tracking-[0.04em] uppercase font-roboto text-white-200 text-right inline-block w-[52.53px]">
                        from
                      </div>
                    </div>
                  </div>
                </div>
              </button>
              <Card2 />
              <button className="cursor-pointer [border:none] p-[0px_16px] bg-[transparent] w-[25%] shrink-0 flex flex-col box-border items-center justify-center md:p-[16px] md:box-border md:w-[50%] sm:w-full">
                <div className="self-stretch relative rounded-[10px] h-[182px] shrink-0 overflow-hidden">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="../unsplashltnpejwdsay@2x.png"
                  />
                  <div className="absolute w-[calc(100%_-_0.59px)] top-[0px] right-[0.29px] left-[0.29px] flex flex-row p-[8px_12px] box-border items-start justify-start gap-[0px]">
                    <b className="flex-1 relative text-2xl tracking-[0.02em] inline-block font-roboto text-white-200 text-left">
                      Norway
                    </b>
                    <div className="relative w-[90.92px] h-[59px] shrink-0">
                      <div className="absolute top-[21px] left-[0px] text-8xl leading-[38px] font-baloo-bhai text-white-200 text-right inline-block w-[90.92px]">
                        $895
                      </div>
                      <div className="absolute top-[0px] left-[38.39px] text-base tracking-[0.04em] uppercase font-roboto text-white-200 text-right inline-block w-[52.53px]">
                        from
                      </div>
                    </div>
                  </div>
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-[0px_16px] bg-[transparent] w-[25%] shrink-0 flex flex-col box-border items-center justify-center md:p-[16px] md:box-border md:w-[50%] sm:w-full">
                <div className="self-stretch relative rounded-[10px] h-[182px] shrink-0 overflow-hidden">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="../unsplashm0oiyn5u8zm@2x.png"
                  />
                  <div className="absolute w-[calc(100%_-_0.59px)] top-[0px] right-[0.29px] left-[0.29px] flex flex-row p-[8px_12px] box-border items-start justify-start gap-[0px]">
                    <b className="flex-1 relative text-2xl tracking-[0.02em] inline-block font-roboto text-white-200 text-left">
                      Tuscany
                    </b>
                    <div className="relative w-[100.62px] h-[59px] shrink-0">
                      <div className="absolute top-[21px] left-[0px] text-8xl leading-[38px] font-baloo-bhai text-white-200 text-right inline-block w-[100.62px]">
                        $1245
                      </div>
                      <div className="absolute top-[0px] left-[48.09px] text-base tracking-[0.04em] uppercase font-roboto text-white-200 text-right inline-block w-[52.53px]">
                        from
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div className="rounded-[31px] bg-white-200 w-[231.38px] hidden flex-row items-start justify-start gap-[10px] text-right md:flex md:mt-[16px]">
              <div className="relative tracking-[0.04em] font-medium inline-block w-[197.33px] shrink-0 md:w-[auto]">
                View all destinations
              </div>
              <img
                className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                alt=""
                src="../arrowright1.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-center gap-[24px] text-6xl">
            <div className="self-stretch flex flex-row items-center justify-start gap-[0px]">
              <b className="flex-1 relative tracking-[0.04em] capitalize inline-block sm:text-4xl">
                Recommended Holidays
              </b>
              <a
                className="[text-decoration:none] rounded-[31px] bg-white-200 w-[199.89px] shrink-0 flex flex-row items-start justify-start gap-[10px] text-right text-xl text-gray-1500 md:hidden"
                href="#"
              >
                <div className="relative tracking-[0.04em] font-medium inline-block w-[165.89px] shrink-0">
                  View all holidays
                </div>
                <img
                  className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                  alt=""
                  src="../arrowright2.svg"
                />
              </a>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[0px] ml-[-16px] mr-[-16px] md:ml-[-16px] md:mr-[-16px] md:flex-wrap">
              <button className="cursor-pointer [border:none] p-[0px_16px] bg-[transparent] flex-1 flex flex-col box-border items-center justify-start gap-[0px] w-[25%] md:w-[50%] md:mb-[32px] sm:w-full sm:mb-[32px]">
                <img
                  className="self-stretch relative rounded-[10px_10px_0px_0px] max-w-full overflow-hidden h-[242px] shrink-0 object-cover"
                  alt=""
                  src="../unsplash5mv818tzxeo@2x.png"
                />
                <div className="self-stretch rounded-[0px_0px_10px_10px] bg-white-200 [border:1px_solid_#eaeaea] box-border flex flex-col p-[20px_16px] items-center justify-center">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[0px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
                      <div className="self-stretch relative text-2xl tracking-[0.02em] font-medium font-roboto text-gray-1700 text-left inline-block">
                        Bali
                      </div>
                      <div className="self-stretch relative text-base tracking-[0.02em] font-roboto text-gray-800 text-left inline-block">
                        4D3N
                      </div>
                    </div>
                    <div className="relative text-7xl leading-[34px] font-baloo-bhai text-gray-1400 text-right inline-block">
                      $899
                    </div>
                  </div>
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-[0px_16px] bg-[transparent] flex-1 flex flex-col box-border items-center justify-start gap-[0px] w-[25%] md:w-[50%] md:mb-[32px] sm:w-full sm:mb-[32px]">
                <img
                  className="self-stretch relative rounded-[10px_10px_0px_0px] max-w-full overflow-hidden h-[242px] shrink-0 object-cover"
                  alt=""
                  src="../unsplashj82dskoxvy8@2x.png"
                />
                <div className="self-stretch rounded-[0px_0px_10px_10px] bg-white-200 [border:1px_solid_#eaeaea] box-border flex flex-col p-[20px_16px] items-center justify-center">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[0px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
                      <div className="self-stretch relative text-2xl tracking-[0.02em] font-medium font-roboto text-gray-1700 text-left inline-block">
                        Switzerland
                      </div>
                      <div className="self-stretch relative text-base tracking-[0.02em] font-roboto text-gray-800 text-left inline-block">
                        6D5N
                      </div>
                    </div>
                    <div className="relative text-7xl leading-[34px] font-baloo-bhai text-gray-1400 text-right inline-block">
                      $900
                    </div>
                  </div>
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-[0px_16px] bg-[transparent] flex-1 flex flex-col box-border items-center justify-start gap-[0px] w-[25%] md:w-[50%] sm:w-full sm:mb-[32px]">
                <img
                  className="self-stretch relative rounded-[10px_10px_0px_0px] max-w-full overflow-hidden h-[242px] shrink-0 object-cover"
                  alt=""
                  src="../unsplash4ezkckxolre@2x.png"
                />
                <div className="self-stretch rounded-[0px_0px_10px_10px] bg-white-200 [border:1px_solid_#eaeaea] box-border flex flex-col p-[20px_16px] items-center justify-center">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[0px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
                      <div className="self-stretch relative text-2xl tracking-[0.02em] font-medium font-roboto text-gray-1700 text-left inline-block">
                        Boracay
                      </div>
                      <div className="self-stretch relative text-base tracking-[0.02em] font-roboto text-gray-800 text-left inline-block">
                        5D4N
                      </div>
                    </div>
                    <div className="relative text-7xl leading-[34px] font-baloo-bhai text-gray-1400 text-right inline-block">
                      $699
                    </div>
                  </div>
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-[0px_16px] bg-[transparent] flex-1 flex flex-col box-border items-center justify-start gap-[0px] w-[25%] md:w-[50%] sm:w-full">
                <img
                  className="self-stretch relative rounded-[10px_10px_0px_0px] max-w-full overflow-hidden h-[242px] shrink-0 object-cover"
                  alt=""
                  src="../unsplashuyqmxhjr3ne@2x.png"
                />
                <div className="self-stretch rounded-[0px_0px_10px_10px] bg-white-200 [border:1px_solid_#eaeaea] box-border flex flex-col p-[20px_16px] items-center justify-center">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[0px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
                      <div className="self-stretch relative text-2xl tracking-[0.02em] font-medium font-roboto text-gray-1700 text-left inline-block">
                        Palawan
                      </div>
                      <div className="self-stretch relative text-base tracking-[0.02em] font-roboto text-gray-800 text-left inline-block">
                        4D3N
                      </div>
                    </div>
                    <div className="relative text-7xl leading-[34px] font-baloo-bhai text-gray-1400 text-right inline-block">
                      $789
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div className="rounded-[31px] bg-white-200 w-[199.89px] hidden flex-row items-start justify-start gap-[10px] text-right text-xl text-gray-1500 md:flex md:[mrgin-top:16px]">
              <div className="relative tracking-[0.04em] font-medium inline-block w-[165.89px] shrink-0 md:w-[auto]">
                View all holidays
              </div>
              <img
                className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                alt=""
                src="../arrowright3.svg"
              />
            </div>
          </div>
          <form
            className="self-stretch flex flex-col items-start justify-start gap-[20px]"
            data-scroll-to="popularStaysForm"
          >
            <div className="self-stretch flex flex-row items-center justify-center gap-[0px]">
              <div className="flex-1 relative h-[35px]">
                <b className="absolute top-[0px] left-[0px] text-6xl tracking-[0.04em] capitalize inline-block font-roboto text-gray-1800 text-left w-[1105.34px] sm:text-4xl">
                  Popular Stays
                </b>
              </div>
              <a
                className="[text-decoration:none] rounded-[31px] bg-white-200 flex flex-row items-start justify-start gap-[10px] md:hidden"
                href="#"
              >
                <div className="relative text-xl tracking-[0.04em] font-medium font-roboto text-gray-1500 text-right inline-block w-[140.66px] shrink-0">
                  View all stays
                </div>
                <img
                  className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                  alt=""
                  src="../arrowright2.svg"
                />
              </a>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[0px] ml-[-12px] mr-[-12px] lg:pr-[40px] lg:box-border lg:ml-[-12px] lg:mr-[-50px] md:mr-[-50px] md:ml-[-12px] sm:flex-col sm:pr-[0px] sm:box-border sm:mr-[-12px] sm:ml-[-12px]">
              <div className="flex-1 h-[442px] flex flex-row p-[0px_12px] box-border items-start justify-center w-[25%] md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
                <div
                  className="self-stretch flex-1 rounded-[10px] bg-white-200 [border:1px_solid_#eaeaea] box-border flex flex-col p-[15px_13px] items-start justify-start gap-[23px] w-[25%] cursor-pointer hover:bg-gray-2200 lg:w-[25%!important] md:w-full sm:w-[100%!important] sm:mb-[20px]"
                  onClick={openMatterhornPopup}
                >
                  <img
                    className="self-stretch relative rounded-[10px] max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                    alt=""
                    src="../unsplashrlwe8f8anoc@2x.png"
                  />
                  <div className="self-stretch flex flex-row items-start justify-start gap-[11px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                      <div className="self-stretch relative text-base tracking-[0.02em] font-roboto text-gray-900 text-left inline-block">
                        Entire bungalow
                      </div>
                      <b className="self-stretch relative text-4xl tracking-[0.04em] capitalize inline-block font-roboto text-gray-1800 text-left sm:text-2xl">
                        Matterhorn Suites
                      </b>
                      <div className="self-stretch relative text-xl tracking-[0.04em] font-roboto text-gray-1800 text-left inline-block">
                        $575/night
                      </div>
                    </div>
                    <img
                      className="relative w-[25px] h-[25px] shrink-0 overflow-hidden"
                      alt=""
                      src="../video.svg"
                    />
                  </div>
                  <div className="self-stretch relative h-[19px] shrink-0">
                    <div className="absolute top-[0px] left-[53.63px] text-base tracking-[0.04em] font-roboto text-gray-1400 text-left inline-block w-[216.37px]">
                      (60 reviews)
                    </div>
                    <div className="absolute top-[0px] left-[0px] w-[44.34px] h-[19px]">
                      <div className="absolute top-[0px] left-[20.34px] text-base tracking-[0.04em] font-medium font-roboto text-gray-1800 text-left inline-block">
                        4.9
                      </div>
                      <img
                        className="absolute h-[90.47%] w-[37.54%] top-[0%] right-[62.46%] bottom-[9.53%] left-[0%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="../vector3.svg"
                      />
                    </div>
                  </div>
                  <button className="cursor-pointer [border:1px_solid_#ccdcec] p-[0] bg-[transparent] self-stretch rounded-[4px] box-border h-[46px] shrink-0 overflow-hidden flex flex-col items-center justify-center sm:w-[100%!important]">
                    <div className="relative text-sm tracking-[0.46px] leading-[26px] uppercase font-medium font-roboto text-gray-1400 text-left inline-block">
                      More details
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex-1 h-[442px] flex flex-row p-[0px_12px] box-border items-start justify-center w-[25%] md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
                <a
                  className="[text-decoration:none] self-stretch flex-1 rounded-[10px] bg-white-200 [border:1px_solid_#eaeaea] box-border flex flex-col p-[15px_13px] items-start justify-start gap-[23px] w-[25%] hover:bg-gray-2200 lg:w-[25%!important] md:w-full sm:w-[100%!important] sm:mb-[20px]"
                  href="#"
                >
                  <img
                    className="self-stretch relative rounded-[10px] max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                    alt=""
                    src="../unsplashtsn8bpopveo@2x.png"
                  />
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                      <div className="self-stretch relative text-base tracking-[0.02em] font-roboto text-gray-900 text-left inline-block">
                        2-Story beachfront suite
                      </div>
                      <b className="self-stretch relative text-4xl tracking-[0.04em] capitalize inline-block font-roboto text-gray-1800 text-left sm:text-2xl">
                        Discovery Shores
                      </b>
                      <div className="self-stretch relative text-xl tracking-[0.04em] font-roboto text-gray-1800 text-left inline-block">
                        $360/night
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative h-[19px] shrink-0">
                    <div className="absolute top-[0px] left-[53.63px] text-base tracking-[0.04em] font-roboto text-gray-1400 text-left inline-block w-[216.37px]">
                      (116 reviews)
                    </div>
                    <div className="absolute top-[0px] left-[0px] w-[44.34px] h-[19px]">
                      <div className="absolute top-[0px] left-[20.34px] text-base tracking-[0.04em] font-medium font-roboto text-gray-1800 text-left inline-block">
                        4.8
                      </div>
                      <img
                        className="absolute h-[90.47%] w-[37.54%] top-[0%] right-[62.46%] bottom-[9.53%] left-[0%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="../vector4.svg"
                      />
                    </div>
                  </div>
                  <button className="cursor-pointer [border:1px_solid_#ccdcec] p-[0] bg-[transparent] self-stretch rounded-[4px] box-border h-[46px] shrink-0 overflow-hidden flex flex-col items-center justify-center sm:w-[100%!important]">
                    <div className="relative text-sm tracking-[0.46px] leading-[26px] uppercase font-medium font-roboto text-gray-1400 text-left inline-block">
                      More details
                    </div>
                  </button>
                </a>
              </div>
              <div className="flex-1 h-[442px] flex flex-row p-[0px_12px] box-border items-start justify-center w-[25%] md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
                <a
                  className="[text-decoration:none] self-stretch flex-1 rounded-[10px] bg-white-200 [border:1px_solid_#eaeaea] box-border flex flex-col p-[15px_13px] items-start justify-start gap-[23px] w-[25%] hover:bg-gray-2200 lg:w-[25%!important] md:w-full sm:flex sm:w-[100%!important]"
                  href="#"
                >
                  <img
                    className="self-stretch relative rounded-[10px] max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                    alt=""
                    src="../unsplashrlwe8f8anoc1@2x.png"
                  />
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                      <div className="self-stretch relative text-base tracking-[0.02em] font-roboto text-gray-900 text-left inline-block">
                        Single deluxe hut
                      </div>
                      <b className="self-stretch relative text-4xl tracking-[0.04em] capitalize inline-block font-roboto text-gray-1800 text-left">{`Arctic Hut `}</b>
                      <div className="self-stretch relative text-xl tracking-[0.04em] font-roboto text-gray-1800 text-left inline-block">
                        $420/night
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative h-[19px] shrink-0">
                    <div className="absolute top-[0px] left-[53.73px] text-base tracking-[0.04em] font-roboto text-gray-1400 text-left inline-block w-[216.27px]">
                      (78 reviews)
                    </div>
                    <div className="absolute top-[0px] left-[0px] w-[44.38px] h-[19px]">
                      <div className="absolute top-[0px] left-[20.38px] text-base tracking-[0.04em] font-medium font-roboto text-gray-1800 text-left inline-block">
                        4.7
                      </div>
                      <img
                        className="absolute h-[90.47%] w-[37.58%] top-[0%] right-[62.42%] bottom-[9.53%] left-[0%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="../vector5.svg"
                      />
                    </div>
                  </div>
                  <button className="cursor-pointer [border:1px_solid_#ccdcec] p-[0] bg-[transparent] self-stretch rounded-[4px] box-border h-[46px] shrink-0 overflow-hidden flex flex-col items-center justify-center sm:w-[100%!important]">
                    <div className="relative text-sm tracking-[0.46px] leading-[26px] uppercase font-medium font-roboto text-gray-1400 text-left inline-block">
                      More details
                    </div>
                  </button>
                </a>
              </div>
              <div className="flex-1 h-[442px] flex flex-row p-[0px_12px] box-border items-start justify-center w-[25%] md:hidden md:w-[33.33%] sm:flex-[unset] sm:self-stretch">
                <a
                  className="[text-decoration:none] self-stretch flex-1 rounded-[10px] bg-white-200 [border:1px_solid_#eaeaea] box-border flex flex-col p-[15px_13px] items-start justify-start gap-[23px] w-[25%] hover:bg-gray-2200 lg:w-[25%!important] md:w-[33.33%!important] sm:flex sm:w-[100%!important]"
                  href="#"
                >
                  <img
                    className="self-stretch relative rounded-[10px] max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                    alt=""
                    src="../unsplashyqrybvxug5q@2x.png"
                  />
                  <div className="self-stretch flex flex-row items-start justify-start gap-[11px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                      <div className="self-stretch relative text-base tracking-[0.02em] font-roboto text-gray-900 text-left inline-block">
                        Deluxe King Room
                      </div>
                      <b className="self-stretch relative text-4xl tracking-[0.04em] capitalize inline-block font-roboto text-gray-1800 text-left">
                        Lake Louise Inn
                      </b>
                      <div className="self-stretch relative text-xl tracking-[0.04em] font-roboto text-gray-1800 text-left inline-block">
                        $244/night
                      </div>
                    </div>
                    <img
                      className="relative w-[25px] h-[25px] shrink-0 overflow-hidden"
                      alt=""
                      src="../video1.svg"
                    />
                  </div>
                  <div className="self-stretch relative h-[19px] shrink-0">
                    <div className="absolute top-[0px] left-[53.63px] text-base tracking-[0.04em] font-roboto text-gray-1400 text-left inline-block w-[216.37px]">
                      (63 reviews)
                    </div>
                    <div className="absolute top-[0px] left-[0px] w-[44.34px] h-[19px]">
                      <div className="absolute top-[0px] left-[20.34px] text-base tracking-[0.04em] font-medium font-roboto text-gray-1800 text-left inline-block">
                        4.6
                      </div>
                      <img
                        className="absolute h-[90.47%] w-[37.54%] top-[0%] right-[62.46%] bottom-[9.53%] left-[0%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="../vector6.svg"
                      />
                    </div>
                  </div>
                  <button className="cursor-pointer [border:1px_solid_#ccdcec] p-[0] bg-[transparent] self-stretch rounded-[4px] box-border h-[46px] shrink-0 overflow-hidden flex flex-col items-center justify-center sm:w-[100%!important]">
                    <div className="relative text-sm tracking-[0.46px] leading-[26px] uppercase font-medium font-roboto text-gray-1400 text-left inline-block">
                      More details
                    </div>
                  </button>
                </a>
              </div>
            </div>
            <div className="rounded-[31px] bg-white-200 hidden flex-row items-start justify-start gap-[10px] md:flex md:mt-[16px]">
              <div className="relative text-xl tracking-[0.04em] font-medium font-roboto text-gray-1500 text-right inline-block w-[140.66px] shrink-0 md:w-[auto]">
                View all stays
              </div>
              <img
                className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                alt=""
                src="../arrowright5.svg"
              />
            </div>
          </form>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[0px] text-gray-1500">
          <div className="self-stretch relative bg-gray-200 h-[529px] shrink-0 overflow-hidden">
            <img
              className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[530px] object-cover"
              alt=""
              src="../rectangle-186@2x.png"
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
                <button className="cursor-pointer [border:none] p-[0] bg-orange-300 rounded-[4px] w-[164px] h-[56px] shrink-0 overflow-hidden flex flex-col items-center justify-center hover:bg-brown sm:w-full">
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
                src="../logo.svg"
              />
              <div className="self-stretch relative leading-[27px] inline-block">
                Fickle Flight is your one-stop travel portal. We offer hassle
                free flight and hotel bookings. We also have all your flight
                needs in you online shop.
              </div>
              <img
                className="relative w-[130px] h-[30px] shrink-0"
                alt=""
                src="../social-icons.svg"
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

export default Homepage;
