import { FunctionComponent, useState, useCallback } from "react";
import {
  FormControlLabel,
  Radio,
  Autocomplete,
  TextField,
  Icon,
  Checkbox,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";

const ResultsPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [inputDateTimePickerValue, setInputDateTimePickerValue] = useState<
    string | null
  >(null);

  const onWebLogo1ButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="relative bg-white-200 w-full overflow-hidden flex flex-col items-start justify-start gap-[0px] text-left text-10xl text-white-200 font-roboto">
        <header className="self-stretch bg-white-200 h-[77px] shrink-0 flex flex-row p-[22px_80px] box-border items-center justify-center text-left text-xs text-gray-1700 font-roboto lg:pl-[40px] lg:pr-[40px] lg:box-border md:pl-[24px] md:pr-[24px] md:box-border">
          <div className="flex-1 flex flex-row items-center justify-between">
            <button
              className="cursor-pointer [border:none] p-[0] bg-[transparent] relative w-[174px] h-[33px] shrink-0 overflow-hidden"
              onClick={onWebLogo1ButtonClick}
            >
              <img
                className="absolute h-[96.97%] w-[99.82%] top-[1.59%] right-[0.18%] bottom-[1.44%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="../symbols.svg"
              />
            </button>
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
        <div className="self-stretch [background:linear-gradient(100.3deg,_#114f8b,_#2a9ad7)] flex flex-col items-start justify-start font-baloo-bhai">
          <div className="self-stretch relative h-[362px] shrink-0 sm:h-[563px]">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)]" />
            <img
              className="absolute h-full w-full top-[0.4px] right-[0px] bottom-[-0.4px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="../unsplashe8e4yy65sok1@2x.png"
            />
            <div className="absolute w-full top-[calc(50%_-_122.5px)] right-[0px] left-[0px] flex flex-col p-[0px_80px] box-border items-center justify-center gap-[20px] md:pl-[30px] md:pr-[30px] md:box-border md:w-full md:top-[calc(44%_-_96.5px_-_0px)] sm:w-full sm:top-[calc(26%_-_96.5px_-_0px)]">
              <div className="self-stretch flex flex-col items-center justify-start">
                <div className="self-stretch relative leading-[67px] inline-block md:text-9xl md:leading-[48px] sm:text-[31px] sm:leading-[40px]">
                  Where are you off too?
                </div>
              </div>
              <div className="self-stretch rounded-[10px] bg-white-200 flex flex-col p-[20px] box-border items-start justify-start gap-[4px] text-2xl text-gray-1800 font-roboto md:flex-col sm:mt-[20px]">
                <div className="self-stretch overflow-hidden flex flex-row p-[5px] box-border items-center justify-start gap-[5px] sm:flex-col sm:items-start">
                  <b className="flex-1 relative tracking-[0.04em] uppercase inline-block sm:w-full sm:pb-[10px] sm:mb-[6px] sm:border-b-[1px] sm:[border-bottom-style:solid] sm:border-b-gray-300 sm:flex-[unset] sm:self-stretch">
                    Search flights
                  </b>
                  <div className="flex flex-row items-center justify-start sm:w-full">
                    <div className="relative w-[216.53px] h-[38px] shrink-0 sm:w-[100%!important]">
                      <FormControlLabel
                        className="absolute top-[0px] left-[0px]"
                        label="Return"
                        labelPlacement="end"
                        control={<Radio color="info" size="medium" />}
                      />
                      <FormControlLabel
                        className="absolute top-[0px] left-[106px]"
                        label="One-way"
                        labelPlacement="end"
                        control={<Radio checked size="medium" />}
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[0px] md:flex-col">
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
                        options={[] as any}
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
                        <div className="self-stretch">
                          <DatePicker
                            label="Date"
                            value={inputDateTimePickerValue}
                            onChange={(newValue: any) => {
                              setInputDateTimePickerValue(newValue);
                            }}
                            renderInput={(params: any) => (
                              <TextField
                                {...params}
                                color="primary"
                                variant="standard"
                                size="medium"
                                renderInput={{ placeholder: "01/05/2022" }}
                                helperText=""
                              />
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col p-[5px] box-border items-center justify-center md:w-full md:text-left">
                    <button className="cursor-pointer [border:none] p-[0] bg-orange-300 rounded-[4px] w-[164px] h-[56px] shrink-0 overflow-hidden flex flex-col items-center justify-center transition-[0.3s] hover:bg-orange-300 md:mr-[auto] sm:w-[100%!important]">
                      <div className="relative text-sm tracking-[0.46px] leading-[26px] uppercase font-medium font-roboto text-white-200 text-center inline-block w-[146.98px]">
                        Search flights
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row p-[50px_80px] box-border items-start justify-center gap-[39px] text-lg text-gray-1300 lg:p-[40px] lg:box-border md:p-[20px_24px] md:box-border">
          <div className="relative w-[311.5px] h-[667px] shrink-0 lg:hidden">
            <div className="absolute top-[0px] left-[0px] w-[311.5px] h-[47px] text-2xl">
              <div className="absolute top-[0px] left-[0px] tracking-[0.26px] inline-block">
                10 out of 177 Results
              </div>
              <img
                className="absolute top-[46.5px] left-[0px] w-[311.5px] h-[1px]"
                alt=""
                src="../vector-2.svg"
              />
            </div>
            <div className="absolute top-[231.4px] left-[0px] w-[221px] h-[106px]">
              <b className="absolute top-[0px] left-[0px] text-4xl tracking-[0.26px] inline-block">
                Booking Options
              </b>
              <div className="absolute top-[50px] left-[0px] flex flex-row items-start justify-start gap-[16px]">
                <FormControlLabel
                  className="relative"
                  label=""
                  control={<Checkbox color="primary" size="medium" />}
                />
                <div className="relative tracking-[0.26px] inline-block">
                  Book on Fickleflight
                </div>
              </div>
              <div className="absolute top-[86px] left-[0px] flex flex-row items-start justify-start gap-[16px]">
                <FormControlLabel
                  className="relative"
                  label=""
                  control={
                    <Checkbox color="primary" defaultChecked size="medium" />
                  }
                />
                <div className="relative tracking-[0.26px] inline-block">
                  Official Airline Websites
                </div>
              </div>
            </div>
            <div className="absolute top-[376.6px] left-[0px] w-[310.8px] h-[106px]">
              <b className="absolute top-[0px] left-[0px] text-4xl tracking-[0.26px] inline-block">
                Flight Experience
              </b>
              <div className="absolute top-[50px] left-[0px] flex flex-row items-start justify-start gap-[16px]">
                <FormControlLabel
                  className="relative"
                  label=""
                  control={<Checkbox color="primary" size="medium" />}
                />
                <div className="relative tracking-[0.26px] inline-block w-[266.49px] h-[20px] shrink-0">
                  No overnight flights
                </div>
              </div>
              <div className="absolute top-[86px] left-[0px] flex flex-row items-start justify-start gap-[16px]">
                <div className="relative w-[20px] h-[20px] shrink-0">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[3px] bg-white-200 [border:1px_solid_#adb2b7] box-border" />
                </div>
                <div className="relative tracking-[0.26px] inline-block w-[274.8px] shrink-0">
                  No long stop-overs
                </div>
              </div>
            </div>
            <div className="absolute top-[561px] left-[0px] w-[178px] h-[106px]">
              <b className="absolute top-[0px] left-[0px] text-4xl tracking-[0.26px] inline-block">
                Airlines
              </b>
              <div className="absolute top-[50px] left-[0px] flex flex-row items-start justify-start gap-[16px]">
                <div className="relative w-[20px] h-[20px] shrink-0">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[3px] bg-white-200 [border:1px_solid_#adb2b7] box-border" />
                </div>
                <div className="relative tracking-[0.26px] inline-block">
                  Singapore Airlines
                </div>
              </div>
              <div className="absolute top-[86px] left-[0px] flex flex-row items-start justify-start gap-[16px]">
                <div className="relative w-[20px] h-[20px] shrink-0">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[3px] bg-white-200 [border:1px_solid_#adb2b7] box-border" />
                </div>
                <div className="relative tracking-[0.26px] inline-block">
                  Qatar Airways
                </div>
              </div>
            </div>
            <div className="absolute top-[86.2px] left-[0px] w-[296.62px] h-[106px]">
              <b className="absolute top-[0px] left-[0px] text-4xl tracking-[0.26px] inline-block">
                Stops
              </b>
              <div className="absolute top-[50px] left-[0px]">
                <div className="relative w-[20px] h-[20px] shrink-0">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[3px] bg-white-200 [border:1px_solid_#adb2b7] box-border" />
                </div>
                <div className="relative tracking-[0.26px] inline-block">
                  1 Stop
                </div>
              </div>
              <div className="absolute top-[86px] left-[0px] flex flex-row items-start justify-start gap-[16px]">
                <div className="relative w-[20px] h-[20px] shrink-0">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[3px] bg-white-200 [border:1px_solid_#adb2b7] box-border" />
                </div>
                <div className="relative tracking-[0.26px] inline-block w-[260.62px] shrink-0">
                  2 Stops
                </div>
              </div>
            </div>
            <img
              className="absolute top-[521.3px] left-[0px] w-[311.5px] h-[1px]"
              alt=""
              src="../vector-5.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[9px] text-base lg:ml-[0] mq310small:w-full">
            <div className="self-stretch rounded-[6px] bg-white-200 [border:0.7px_solid_#cecece] box-border flex flex-row p-[0px_25px] items-center justify-center gap-[50px] sm:flex-col sm:p-[15px_0px] sm:box-border sm:gap-[20px] mq310small:flex mq310small:flex-col mq310small:p-[25px] mq310small:box-border mq310small:w-full">
              <div className="w-[20%] shrink-0 flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important] sm:mr-[0!important] mq310small:flex-row mq310small:pb-[10px] mq310small:box-border mq310small:w-full mq310small:mr-[0] mq310small:border-b-[1px_solid_#EAEAEA] mq310small:mb-[16px]">
                <img
                  className="relative w-[34.77px] h-[46px] shrink-0 sm:[transform:scale(0.8)]"
                  alt=""
                  src="../turkish.svg"
                />
                <div className="relative tracking-[0.26px] inline-block">
                  Turkish Airlines
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-between w-[64%] text-3xl text-gray-1400 md:flex-row md:gap-[84px] sm:flex-row sm:gap-[84px] sm:p-[0px] sm:box-border sm:flex-[unset] sm:self-stretch mq350small:w-full mq310small:w-full mq310small:mr-[0] mq310small:flex-[unset] mq310small:self-stretch">
                <div className="relative w-[93px] h-[52px] shrink-0">
                  <div className="absolute top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block">
                    11:35 PM
                  </div>
                  <div className="absolute w-[79.51%] top-[63.46%] left-[0%] text-base tracking-[0.26px] text-gray-1000 inline-block">
                    SIN
                  </div>
                </div>
                <div className="relative w-[121px] h-[55px] shrink-0 text-center text-base text-gray-900 sm:[transform:scale(0.8)]">
                  <img
                    className="absolute h-[27.46%] w-[88.52%] top-[0%] right-[5.5%] bottom-[72.54%] left-[5.98%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="../group-675.svg"
                  />
                  <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] inline-block">
                    33H 10M, 1-stop
                  </div>
                </div>
                <div className="relative w-[90px] h-[51.57px] shrink-0 text-right sm:[transform:scale(0.8)]">
                  <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] uppercase font-medium inline-block">
                    4:45 PM
                  </div>
                  <div className="absolute w-[37.04%] top-[63.16%] left-[60.38%] text-base tracking-[0.26px] text-gray-1000 inline-block">
                    LAX
                  </div>
                </div>
              </div>
              <div className="w-[128px] shrink-0 flex flex-row items-center justify-center gap-[0px] text-center text-5xl text-orange-200 mq310small:p-[6px] mq310small:box-border mq310small:w-full mq310small:bg-gray-100 mq310small:mt-[16px]">
                <img
                  className="relative w-[1px] h-[100px] shrink-0 sm:hidden mq310small:hidden"
                  alt=""
                  src="../vector-1.svg"
                />
                <b className="flex-1 relative tracking-[0.34px] inline-block">
                  S$ 723
                </b>
              </div>
            </div>
            <div className="self-stretch rounded-[6px] bg-white-200 [border:0.7px_solid_#cecece] box-border flex flex-row p-[0px_25px] items-center justify-center gap-[50px] sm:flex-col sm:p-[15px_0px] sm:box-border sm:gap-[20px] mq310small:flex-col mq310small:p-[25px] mq310small:box-border">
              <div className="w-[20%] shrink-0 flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important] sm:mr-[0!important] mq310small:flex-row mq310small:pb-[10px] mq310small:box-border mq310small:w-full mq310small:mr-[0] mq310small:border-b-[1px_solid_#EAEAEA] mq310small:mb-[16px]">
                <img
                  className="relative w-[34.77px] h-[46px] shrink-0 sm:[transform:scale(0.8)]"
                  alt=""
                  src="../sia.svg"
                />
                <div className="relative tracking-[0.26px] inline-block">
                  Singapore Airlines
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-between w-[64%] text-3xl text-gray-1400 md:flex-row md:gap-[84px] sm:flex-row sm:gap-[84px] sm:p-[0px] sm:box-border sm:flex-[unset] sm:self-stretch mq310small:w-full mq310small:mr-[0] mq310small:flex-[unset] mq310small:self-stretch">
                <div className="relative w-[81px] h-[52px] shrink-0">
                  <div className="absolute top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block">
                    8:45 PM
                  </div>
                  <div className="absolute w-[91.28%] top-[63.46%] left-[0%] text-base tracking-[0.26px] text-gray-1000 inline-block">
                    SIN
                  </div>
                </div>
                <div className="relative w-[148.79px] h-[55px] shrink-0 text-center text-base text-gray-900 sm:[transform:scale(0.8)]">
                  <img
                    className="absolute h-[27.46%] w-[75.84%] top-[0%] right-[11.93%] bottom-[72.54%] left-[12.22%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="../group-6751.svg"
                  />
                  <div className="absolute w-full top-[65.45%] left-[0%] tracking-[0.21px] inline-block">
                    15H 10M, Non-stop
                  </div>
                </div>
                <div className="relative w-[90px] h-[51.57px] shrink-0 text-right">
                  <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] uppercase font-medium inline-block">
                    7:55 PM
                  </div>
                  <div className="absolute w-[37.04%] top-[63.16%] left-[60.38%] text-base tracking-[0.26px] text-gray-1000 inline-block">
                    LAX
                  </div>
                </div>
              </div>
              <div className="w-[128px] shrink-0 flex flex-row items-center justify-center gap-[0px] text-center text-5xl text-orange-200 mq310small:p-[6px] mq310small:box-border mq310small:w-full mq310small:bg-gray-100 mq310small:mt-[16px]">
                <img
                  className="relative w-[1px] h-[100px] shrink-0 sm:hidden mq310small:hidden"
                  alt=""
                  src="../vector-1.svg"
                />
                <b className="flex-1 relative tracking-[0.34px] inline-block mq310small:w-full">
                  S$ 900
                </b>
              </div>
            </div>
            <div className="self-stretch rounded-[6px] bg-white-200 [border:0.7px_solid_#cecece] box-border flex flex-row p-[0px_25px] items-center justify-center gap-[50px] sm:flex-col sm:p-[15px_0px] sm:box-border sm:gap-[20px] mq310small:flex-col mq310small:p-[25px] mq310small:box-border">
              <div className="w-[20%] shrink-0 flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important] sm:mr-[0!important] mq310small:flex-row mq310small:pb-[10px] mq310small:box-border mq310small:w-full mq310small:mr-[0] mq310small:border-b-[1px_solid_#EAEAEA] mq310small:mb-[16px]">
                <img
                  className="relative w-[34.77px] h-[46px] shrink-0 [transform:scale(0.8)]"
                  alt=""
                  src="../japan.svg"
                />
                <div className="relative tracking-[0.26px] inline-block">
                  Japan Airlines
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-between w-[64%] text-3xl text-gray-1400 md:flex-row md:gap-[84px] sm:flex-row sm:gap-[84px] sm:p-[0px] sm:box-border sm:flex-[unset] sm:self-stretch mq310small:w-full mq310small:mr-[0] mq310small:flex-[unset] mq310small:self-stretch">
                <div className="relative w-[81px] h-[52px] shrink-0">
                  <div className="absolute top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block">
                    8:20 PM
                  </div>
                  <div className="absolute w-[91.28%] top-[63.46%] left-[0%] text-base tracking-[0.26px] text-gray-1000 inline-block">
                    SIN
                  </div>
                </div>
                <div className="relative w-[156.44px] h-[55px] shrink-0 text-center text-base text-gray-900 sm:[transform:scale(0.8)]">
                  <img
                    className="absolute h-[27.46%] w-[75.55%] top-[0%] right-[12.23%] bottom-[72.54%] left-[12.22%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="../group-6752.svg"
                  />
                  <div className="absolute w-full top-[65.45%] left-[0%] tracking-[0.21px] inline-block">
                    17H 30M, Non-stop
                  </div>
                </div>
                <div className="relative w-[90px] h-[51.57px] shrink-0 text-right">
                  <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] uppercase font-medium inline-block">
                    9:50 AM
                  </div>
                  <div className="absolute w-[37.04%] top-[63.16%] left-[60.38%] text-base tracking-[0.26px] text-gray-1000 inline-block">
                    LAX
                  </div>
                </div>
              </div>
              <div className="w-[128px] shrink-0 flex flex-row items-center justify-center gap-[0px] text-center text-5xl text-orange-200 mq310small:p-[6px] mq310small:box-border mq310small:w-full mq310small:bg-gray-100 mq310small:mt-[16px]">
                <img
                  className="relative w-[1px] h-[100px] shrink-0 sm:hidden mq310small:hidden"
                  alt=""
                  src="../vector-1.svg"
                />
                <b className="flex-1 relative tracking-[0.34px] inline-block">
                  S$ 859
                </b>
              </div>
            </div>
            <div className="self-stretch rounded-[6px] bg-white-200 [border:0.7px_solid_#cecece] box-border flex flex-row p-[0px_25px] items-center justify-center gap-[50px] sm:flex-col sm:p-[15px_0px] sm:box-border sm:gap-[20px] mq310small:flex-col mq310small:p-[25px] mq310small:box-border">
              <div className="w-[20%] shrink-0 flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important] sm:mr-[0!important] mq310small:flex-row mq310small:pb-[10px] mq310small:box-border mq310small:w-full mq310small:mr-[0] mq310small:border-b-[1px_solid_#EAEAEA] mq310small:mb-[16px]">
                <img
                  className="relative w-[34.77px] h-[46px] shrink-0 [transform:scale(0.8)]"
                  alt=""
                  src="../ana.svg"
                />
                <div className="relative tracking-[0.26px] inline-block">
                  ANA
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-between w-[64%] text-3xl text-gray-1400 md:flex-row md:gap-[84px] sm:flex-row sm:gap-[84px] sm:p-[0px] sm:box-border sm:flex-[unset] sm:self-stretch mq310small:w-full mq310small:mr-[0] mq310small:flex-[unset] mq310small:self-stretch">
                <div className="relative w-[81px] h-[52px] shrink-0">
                  <div className="absolute top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block">
                    6:35 PM
                  </div>
                  <div className="absolute w-[91.28%] top-[63.46%] left-[0%] text-base tracking-[0.26px] text-gray-1000 inline-block">
                    SIN
                  </div>
                </div>
                <div className="relative w-[156.44px] h-[55px] shrink-0 text-center text-base text-gray-900 sm:[transform:scale(0.8)]">
                  <img
                    className="absolute h-[27.46%] w-[75.55%] top-[0%] right-[12.23%] bottom-[72.54%] left-[12.22%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="../group-6752.svg"
                  />
                  <div className="absolute w-full top-[65.45%] left-[0%] tracking-[0.21px] inline-block">
                    19H 15M, Non-stop
                  </div>
                </div>
                <div className="relative w-[90px] h-[51.57px] shrink-0 text-right">
                  <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] uppercase font-medium inline-block">
                    9:50 AM
                  </div>
                  <div className="absolute w-[37.04%] top-[63.16%] left-[60.38%] text-base tracking-[0.26px] text-gray-1000 inline-block">
                    LAX
                  </div>
                </div>
              </div>
              <div className="w-[128px] shrink-0 flex flex-row items-center justify-center gap-[0px] text-center text-5xl text-orange-200 mq310small:p-[6px] mq310small:box-border mq310small:w-full mq310small:bg-gray-100 mq310small:mt-[16px]">
                <img
                  className="relative w-[1px] h-[100px] shrink-0 sm:hidden mq310small:hidden"
                  alt=""
                  src="../vector-1.svg"
                />
                <b className="flex-1 relative tracking-[0.34px] inline-block">
                  S$ 936
                </b>
              </div>
            </div>
            <div className="self-stretch rounded-[6px] bg-white-200 [border:0.7px_solid_#cecece] box-border flex flex-row p-[0px_25px] items-center justify-center gap-[50px] sm:flex-col sm:p-[15px_0px] sm:box-border sm:gap-[20px] mq310small:flex-col mq310small:p-[25px] mq310small:box-border">
              <div className="w-[20%] shrink-0 flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important] sm:mr-[0!important] mq310small:flex-row mq310small:pb-[10px] mq310small:box-border mq310small:w-full mq310small:mr-[0] mq310small:border-b-[1px_solid_#EAEAEA] mq310small:mb-[16px]">
                <img
                  className="relative w-[34.77px] h-[46px] shrink-0"
                  alt=""
                  src="../americanairlines.svg"
                />
                <div className="relative tracking-[0.26px] inline-block">
                  American Airlines
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-between w-[64%] text-3xl text-gray-1400 md:flex-row md:gap-[84px] sm:flex-row sm:gap-[84px] sm:p-[0px] sm:box-border sm:flex-[unset] sm:self-stretch mq310small:w-full mq310small:mr-[0] mq310small:flex-[unset] mq310small:self-stretch">
                <div className="relative w-[81px] h-[52px] shrink-0">
                  <div className="absolute top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block">
                    8:20 PM
                  </div>
                  <div className="absolute w-[91.28%] top-[63.46%] left-[0%] text-base tracking-[0.26px] text-gray-1000 inline-block">
                    SIN
                  </div>
                </div>
                <div className="relative w-[156.44px] h-[55px] shrink-0 text-center text-base text-gray-900 sm:[transform:scale(0.8)]">
                  <img
                    className="absolute h-[27.46%] w-[75.55%] top-[0%] right-[12.23%] bottom-[72.54%] left-[12.22%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="../group-6752.svg"
                  />
                  <div className="absolute w-full top-[65.45%] left-[0%] tracking-[0.21px] inline-block">
                    17H 30M, 1-stop
                  </div>
                </div>
                <div className="relative w-[90px] h-[51.57px] shrink-0 text-right">
                  <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] uppercase font-medium inline-block">
                    9:50 AM
                  </div>
                  <div className="absolute w-[37.04%] top-[63.16%] left-[60.38%] text-base tracking-[0.26px] text-gray-1000 inline-block">
                    LAX
                  </div>
                </div>
              </div>
              <div className="w-[128px] shrink-0 flex flex-row items-center justify-center gap-[0px] text-center text-5xl text-orange-200 mq310small:p-[6px] mq310small:box-border mq310small:w-full mq310small:bg-gray-100 mq310small:mt-[16px]">
                <img
                  className="relative w-[1px] h-[100px] shrink-0 sm:hidden mq310small:hidden"
                  alt=""
                  src="../vector-1.svg"
                />
                <b className="flex-1 relative tracking-[0.34px] inline-block">
                  S$ 939
                </b>
              </div>
            </div>
            <div className="self-stretch rounded-[6px] bg-white-200 [border:0.7px_solid_#cecece] box-border flex flex-row p-[0px_25px] items-center justify-center gap-[50px] sm:flex-col sm:p-[15px_0px] sm:box-border sm:gap-[20px] mq310small:flex-col mq310small:p-[25px] mq310small:box-border">
              <div className="w-[20%] shrink-0 flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important] sm:mr-[0!important] mq310small:flex-row mq310small:pb-[10px] mq310small:box-border mq310small:w-full mq310small:mr-[0] mq310small:border-b-[1px_solid_#EAEAEA] mq310small:mb-[16px]">
                <img
                  className="relative w-[34.77px] h-[46px] shrink-0"
                  alt=""
                  src="../turkish.svg"
                />
                <div className="relative tracking-[0.26px] inline-block">
                  Turkish Airlines
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-between w-[64%] text-3xl text-gray-1400 md:flex-row md:gap-[84px] sm:flex-row sm:gap-[84px] sm:p-[0px] sm:box-border sm:flex-[unset] sm:self-stretch mq310small:w-full mq310small:mr-[0] mq310small:flex-[unset] mq310small:self-stretch">
                <div className="relative w-[93px] h-[52px] shrink-0">
                  <div className="absolute top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block">
                    11:35 PM
                  </div>
                  <div className="absolute w-[79.51%] top-[63.46%] left-[0%] text-base tracking-[0.26px] text-gray-1000 inline-block">
                    SIN
                  </div>
                </div>
                <div className="relative w-[156.44px] h-[55px] shrink-0 text-center text-base text-gray-900 sm:[transform:scale(0.8)]">
                  <img
                    className="absolute h-[27.46%] w-[75.55%] top-[0%] right-[12.23%] bottom-[72.54%] left-[12.22%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="../group-6752.svg"
                  />
                  <div className="absolute w-full top-[65.45%] left-[0%] tracking-[0.21px] inline-block">
                    33H 10M, 1-stop
                  </div>
                </div>
                <div className="relative w-[90px] h-[51.57px] shrink-0 text-right">
                  <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] uppercase font-medium inline-block">
                    4:45 PM
                  </div>
                  <div className="absolute w-[37.04%] top-[63.16%] left-[60.38%] text-base tracking-[0.26px] text-gray-1000 inline-block">
                    LAX
                  </div>
                </div>
              </div>
              <div className="w-[128px] shrink-0 flex flex-row items-center justify-center gap-[0px] text-center text-5xl text-orange-200 mq310small:p-[6px] mq310small:box-border mq310small:w-full mq310small:bg-gray-100 mq310small:mt-[16px]">
                <img
                  className="relative w-[1px] h-[100px] shrink-0 sm:hidden mq310small:hidden"
                  alt=""
                  src="../vector-1.svg"
                />
                <b className="flex-1 relative tracking-[0.34px] inline-block">
                  S$ 673
                </b>
              </div>
            </div>
            <div className="self-stretch rounded-[6px] bg-white-200 [border:0.7px_solid_#cecece] box-border flex flex-row p-[0px_25px] items-center justify-center gap-[50px] sm:flex-col sm:p-[15px_0px] sm:box-border sm:gap-[20px] mq310small:flex-col mq310small:p-[25px] mq310small:box-border">
              <div className="w-[20%] shrink-0 flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important] sm:mr-[0!important] mq310small:flex-row mq310small:pb-[10px] mq310small:box-border mq310small:w-full mq310small:mr-[0] mq310small:border-b-[1px_solid_#EAEAEA] mq310small:mb-[16px]">
                <img
                  className="relative w-[34.77px] h-[46px] shrink-0"
                  alt=""
                  src="../japan.svg"
                />
                <div className="relative tracking-[0.26px] inline-block">
                  Japan Airlines
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-between w-[64%] text-3xl text-gray-1400 md:flex-row md:gap-[84px] sm:flex-row sm:gap-[84px] sm:p-[0px] sm:box-border sm:flex-[unset] sm:self-stretch mq310small:w-full mq310small:mr-[0] mq310small:flex-[unset] mq310small:self-stretch">
                <div className="relative w-[93px] h-[52px] shrink-0">
                  <div className="absolute top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block">
                    10:25 PM
                  </div>
                  <div className="absolute w-[79.51%] top-[63.46%] left-[0%] text-base tracking-[0.26px] text-gray-1000 inline-block">
                    SIN
                  </div>
                </div>
                <div className="relative w-[156.44px] h-[55px] shrink-0 text-center text-base text-gray-900 sm:[transform:scale(0.8)]">
                  <img
                    className="absolute h-[27.46%] w-[75.55%] top-[0%] right-[12.23%] bottom-[72.54%] left-[12.22%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="../group-6752.svg"
                  />
                  <div className="absolute w-full top-[65.45%] left-[0%] tracking-[0.21px] inline-block">
                    26H 45M, 1-stop
                  </div>
                </div>
                <div className="relative w-[90px] h-[51.57px] shrink-0 text-right">
                  <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] uppercase font-medium inline-block">
                    9:10 AM
                  </div>
                  <div className="absolute w-[37.04%] top-[63.16%] left-[60.38%] text-base tracking-[0.26px] text-gray-1000 inline-block">
                    LAX
                  </div>
                </div>
              </div>
              <div className="w-[128px] shrink-0 flex flex-row items-center justify-center gap-[0px] text-center text-5xl text-orange-200 mq310small:p-[6px] mq310small:box-border mq310small:w-full mq310small:bg-gray-100 mq310small:mt-[16px]">
                <img
                  className="relative w-[1px] h-[100px] shrink-0 sm:hidden mq310small:hidden"
                  alt=""
                  src="../vector-1.svg"
                />
                <b className="flex-1 relative tracking-[0.34px] inline-block">
                  S$ 859
                </b>
              </div>
            </div>
            <div className="self-stretch rounded-[6px] bg-white-200 [border:0.7px_solid_#cecece] box-border flex flex-row p-[0px_25px] items-center justify-center gap-[50px] sm:flex-col sm:p-[15px_0px] sm:box-border sm:gap-[20px] mq310small:flex-col mq310small:p-[25px] mq310small:box-border">
              <div className="w-[20%] shrink-0 flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important] sm:mr-[0!important] mq310small:flex-row mq310small:pb-[10px] mq310small:box-border mq310small:w-full mq310small:mr-[0] mq310small:border-b-[1px_solid_#EAEAEA] mq310small:mb-[16px]">
                <img
                  className="relative w-[34.77px] h-[46px] shrink-0"
                  alt=""
                  src="../americanairlines1.svg"
                />
                <div className="relative tracking-[0.26px] inline-block">
                  American Airlines
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-between w-[64%] text-3xl text-gray-1400 md:flex-row md:gap-[84px] sm:flex-row sm:gap-[84px] sm:p-[0px] sm:box-border sm:flex-[unset] sm:self-stretch mq310small:w-full mq310small:mr-[0] mq310small:flex-[unset] mq310small:self-stretch">
                <div className="relative w-[93px] h-[52px] shrink-0">
                  <div className="absolute top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block">
                    10:25 PM
                  </div>
                  <div className="absolute w-[79.51%] top-[63.46%] left-[0%] text-base tracking-[0.26px] text-gray-1000 inline-block">
                    SIN
                  </div>
                </div>
                <div className="relative w-[156.44px] h-[55px] shrink-0 text-center text-base text-gray-900 sm:[transform:scale(0.8)]">
                  <img
                    className="absolute h-[27.46%] w-[75.55%] top-[0%] right-[12.23%] bottom-[72.54%] left-[12.22%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="../group-6752.svg"
                  />
                  <div className="absolute w-full top-[65.45%] left-[0%] tracking-[0.21px] inline-block">
                    26H 45M, 1-stop
                  </div>
                </div>
                <div className="relative w-[90px] h-[51.57px] shrink-0 text-right">
                  <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] uppercase font-medium inline-block">
                    9:10 AM
                  </div>
                  <div className="absolute w-[37.04%] top-[63.16%] left-[60.38%] text-base tracking-[0.26px] text-gray-1000 inline-block">
                    LAX
                  </div>
                </div>
              </div>
              <div className="w-[128px] shrink-0 flex flex-row items-center justify-center gap-[0px] text-center text-5xl text-orange-200 mq310small:p-[6px] mq310small:box-border mq310small:w-full mq310small:bg-gray-100 mq310small:mt-[16px]">
                <img
                  className="relative w-[1px] h-[100px] shrink-0 sm:hidden mq310small:hidden"
                  alt=""
                  src="../vector-1.svg"
                />
                <b className="flex-1 relative tracking-[0.34px] inline-block">
                  S$ 859
                </b>
              </div>
            </div>
            <div className="relative w-[220px] h-[72px] shrink-0 text-center text-xl text-white-200">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[6px] bg-gray-1400" />
              <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_81.5px)] tracking-[0.04em] font-medium inline-block">
                Show more results
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[0px] text-center text-xl text-gray-1500">
          <div className="self-stretch relative bg-gray-200 h-[529px] shrink-0 overflow-hidden">
            <img
              className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[530px] object-cover"
              alt=""
              src="../rectangle-1862@2x.png"
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
              <div className="self-stretch rounded-[12px] bg-white-200 shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] [border:1px_solid_#eaeaea] box-border flex flex-col p-[28px_30px] items-start justify-start gap-[17px] text-left text-gray-1200">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[34px] inline-block">
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
              </div>
            </div>
          </div>
          <footer className="self-stretch [background:linear-gradient(91.74deg,_#0b5ba8_25.38%,_#299bd8)] flex flex-row p-[33px_84px] box-border items-start justify-start gap-[44px] text-left text-xl text-white-200 font-roboto lg:p-[40px] lg:box-border md:flex-col md:p-[40px_24px_30px] md:box-border sm:p-[30px_24px] sm:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[14px] mb-[40px!important] md:flex-[unset] md:self-stretch">
              <img
                className="relative w-[174px] h-[33px] shrink-0 overflow-hidden"
                alt=""
                src="../logo2.svg"
              />
              <div className="self-stretch relative leading-[27px] inline-block">
                Fickle Flight is your one-stop travel portal. We offer hassle
                free flight and hotel bookings. We also have all your flight
                needs in you online shop.
              </div>
              <img
                className="relative w-[130px] h-[30px] shrink-0"
                alt=""
                src="../social-icons2.svg"
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
    </LocalizationProvider>
  );
};

export default ResultsPage;
