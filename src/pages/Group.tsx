import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Group: FunctionComponent = () => {
  const navigate = useNavigate();

  const onComponent5ContainerClick = useCallback(() => {
    navigate("/to-do-view-task");
  }, [navigate]);

  const onComponent6ContainerClick = useCallback(() => {
    navigate("/to-do-view-task");
  }, [navigate]);

  const onComponent7ContainerClick = useCallback(() => {
    navigate("/to-do-view-task");
  }, [navigate]);

  const onComponent8ContainerClick = useCallback(() => {
    navigate("/to-do-view-task");
  }, [navigate]);

  const onComponent9ContainerClick = useCallback(() => {
    navigate("/to-do-view-task");
  }, [navigate]);

  const onComponent10ContainerClick = useCallback(() => {
    navigate("/to-do-view-task");
  }, [navigate]);

  const onButton2Click = useCallback(() => {
    navigate("/to-do-view-task");
  }, [navigate]);

  return (
    <div className="relative w-full h-[1160px] text-left text-5xl text-black font-text-sm-semibold">
      <div className="absolute top-[0px] left-[0px] bg-base-white w-[1440px] flex flex-col items-start justify-start">
        <nav className="m-0 self-stretch bg-base-white overflow-hidden border-b-[1px] border-solid border-gray-200" />
      </div>
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[1160px]">
        <div className="absolute top-[0px] left-[0px] box-border w-[1440px] flex flex-col items-center justify-start border-b-[1px] border-solid border-gray-200">
          <div className="self-stretch h-[72px] flex flex-row py-0 px-8 box-border items-center justify-between">
            <div className="flex flex-row items-center justify-start">
              <div className="flex flex-row items-start justify-start">
                <div className="relative w-[142px] h-8">
                  <div className="absolute h-full top-[0%] bottom-[0%] left-[0px] w-[100px]">
                    <b className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_45px)] [text-decoration:underline] leading-[24px]">{`ToDo `}</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="rounded-md bg-base-white overflow-hidden flex flex-row p-2.5 items-start justify-start">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/settings01.svg"
                  />
                </div>
                <div className="rounded-md bg-base-white overflow-hidden flex flex-row p-2.5 items-start justify-start">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/bell011.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="rounded-181xl w-10 h-10 flex flex-col items-center justify-center bg-[url('/public/avatar1@3x.png')] bg-cover bg-no-repeat bg-[top]">
                  <div className="self-stretch flex-1 relative rounded-181xl overflow-hidden opacity-[0.08] border-[0.8px] border-solid border-gray-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <main className="absolute top-[46px] left-[0px] rounded-tl-21xl rounded-tr-none rounded-br-none rounded-bl-21xl bg-base-white w-[1440px] flex flex-col pt-12 px-0 pb-24 box-border items-start justify-start gap-[32px] text-left text-sm text-gray-600 font-text-sm-semibold">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-col py-0 px-8 items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <div className="w-[278px] hidden flex-row items-center justify-start">
                  <div className="flex-1 flex flex-row items-center justify-between">
                    <div className="rounded-md flex flex-row p-1 items-start justify-start">
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/homeline.svg"
                      />
                    </div>
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/chevronright.svg"
                    />
                    <div className="rounded-md flex flex-row py-1 px-2 items-center justify-center">
                      <div className="relative [text-decoration:underline] leading-[20px] font-medium">
                        Settings
                      </div>
                    </div>
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/chevronright.svg"
                    />
                    <div className="rounded-md flex flex-row py-1 px-2 items-center justify-center">
                      <div className="relative [text-decoration:underline] leading-[20px] font-medium">
                        ...
                      </div>
                    </div>
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/chevronright.svg"
                    />
                    <div className="rounded-md hidden flex-row py-1 px-2 items-center justify-center">
                      <div className="relative leading-[20px] font-medium">
                        Another link
                      </div>
                    </div>
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/chevronright1.svg"
                    />
                    <div className="rounded-md bg-gray-50 flex flex-row py-1 px-2 items-center justify-center text-gray-700">
                      <div className="relative [text-decoration:underline] leading-[20px] font-semibold">
                        Team
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-11xl text-gray-900 font-work-sans">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch relative [text-decoration:underline] leading-[38px] font-semibold">
                      Good morning!
                    </div>
                    <div className="self-stretch relative text-base [text-decoration:underline] leading-[24px] text-gray-600">{`You got some task to do. `}</div>
                  </div>
                  <div />
                  <div className="rounded-lg bg-mediumslateblue shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row py-2.5 px-4 items-center justify-center gap-[8px] text-sm text-base-white border-[1px] border-solid border-mediumslateblue">
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/plus1.svg"
                    />
                    <div className="relative [text-decoration:underline] leading-[20px] font-semibold">
                      Create New Task
                    </div>
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder6.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start text-gray-900 font-work-sans">
            <div className="self-stretch flex flex-row py-0 px-8 items-start justify-between">
              <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base">
                  <div className="relative [text-decoration:underline] leading-[24px] font-semibold">
                    January 2023
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between text-sm text-gray-700">
                    <div className="rounded-lg bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border w-[62px] overflow-hidden shrink-0 flex flex-col py-2.5 px-4 items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                      <div className="relative [text-decoration:underline] leading-[20px] font-semibold">
                        Mon
                      </div>
                      <div className="relative [text-decoration:underline] leading-[20px] font-semibold">
                        1
                      </div>
                    </div>
                    <div className="rounded-lg bg-mediumslateblue shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border w-[62px] overflow-hidden shrink-0 flex flex-col py-2.5 px-4 items-center justify-center gap-[8px] text-base-white border-[1px] border-solid border-mediumslateblue">
                      <div className="relative [text-decoration:underline] leading-[20px] font-semibold">
                        Tue
                      </div>
                      <div className="relative [text-decoration:underline] leading-[20px] font-semibold">
                        2
                      </div>
                    </div>
                    <div className="rounded-lg bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border w-[62px] overflow-hidden shrink-0 flex flex-col py-2.5 px-4 items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                      <div className="relative [text-decoration:underline] leading-[20px] font-semibold">
                        Wed
                      </div>
                      <div className="relative [text-decoration:underline] leading-[20px] font-semibold">
                        3
                      </div>
                    </div>
                    <div className="rounded-lg bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border w-[62px] overflow-hidden shrink-0 flex flex-col py-2.5 px-4 items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                      <div className="relative [text-decoration:underline] leading-[20px] font-semibold">
                        Thur
                      </div>
                      <div className="relative [text-decoration:underline] leading-[20px] font-semibold">
                        4
                      </div>
                    </div>
                    <div className="rounded-lg bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border w-[62px] overflow-hidden shrink-0 flex flex-col py-2.5 px-4 items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                      <div className="relative [text-decoration:underline] leading-[20px] font-semibold">
                        Fri
                      </div>
                      <div className="relative [text-decoration:underline] leading-[20px] font-semibold">
                        5
                      </div>
                    </div>
                    <div className="rounded-lg bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border w-[62px] overflow-hidden shrink-0 flex flex-col py-2.5 px-4 items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                      <div className="relative [text-decoration:underline] leading-[20px] font-semibold">
                        Sat
                      </div>
                      <div className="relative [text-decoration:underline] leading-[20px] font-semibold">
                        6
                      </div>
                    </div>
                    <div className="rounded-lg bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border w-[62px] overflow-hidden shrink-0 flex flex-col py-2.5 px-4 items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                      <div className="relative [text-decoration:underline] leading-[20px] font-semibold">
                        Sun
                      </div>
                      <div className="relative [text-decoration:underline] leading-[20px] font-semibold">
                        7
                      </div>
                    </div>
                    <div className="rounded-lg bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border w-[62px] overflow-hidden shrink-0 flex flex-col py-2.5 px-4 items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                      <div className="relative [text-decoration:underline] leading-[20px] font-semibold">
                        Mon
                      </div>
                      <div className="relative [text-decoration:underline] leading-[20px] font-semibold">
                        8
                      </div>
                    </div>
                    <div className="rounded-lg bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border w-[62px] overflow-hidden shrink-0 flex flex-col py-2.5 px-4 items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                      <div className="relative [text-decoration:underline] leading-[20px] font-semibold">
                        Tue
                      </div>
                      <div className="relative [text-decoration:underline] leading-[20px] font-semibold">
                        9
                      </div>
                    </div>
                    <div className="rounded-lg bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border w-[62px] overflow-hidden shrink-0 flex flex-col py-2.5 px-4 items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                      <div className="relative [text-decoration:underline] leading-[20px] font-semibold">
                        Wed
                      </div>
                      <div className="relative [text-decoration:underline] leading-[20px] font-semibold">
                        10
                      </div>
                    </div>
                    <div className="rounded-lg bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border w-[62px] overflow-hidden shrink-0 flex flex-col py-2.5 px-4 items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                      <div className="relative [text-decoration:underline] leading-[20px] font-semibold">
                        Thur
                      </div>
                      <div className="relative [text-decoration:underline] leading-[20px] font-semibold">
                        11
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[842px] flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative text-base [text-decoration:underline] leading-[24px] font-semibold">
                    My Tasks
                  </div>
                  <div
                    className="self-stretch bg-lavender box-border h-[72px] flex flex-row py-4 px-6 items-center justify-between cursor-pointer border-b-[1px] border-solid border-gray-200"
                    onClick={onComponent5ContainerClick}
                  >
                    <div className="flex flex-row items-center justify-start gap-[12px]">
                      <div className="flex flex-row items-center justify-center">
                        <div className="relative rounded-md bg-base-white box-border w-5 h-5 overflow-hidden shrink-0 border-[1px] border-solid border-gray-300" />
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="relative [text-decoration:underline] leading-[20px] font-medium">
                          Create Wireframe
                        </div>
                        <div className="relative [text-decoration:underline] leading-[20px] text-gray-600">
                          10:30 am - 11:30 am
                        </div>
                      </div>
                    </div>
                    <div className="relative [text-decoration:underline] leading-[20px] text-gray-600">
                      Today
                    </div>
                  </div>
                  <div
                    className="self-stretch bg-gray-50 box-border h-[72px] flex flex-row py-4 px-6 items-center justify-between cursor-pointer border-b-[1px] border-solid border-gray-200"
                    onClick={onComponent6ContainerClick}
                  >
                    <div className="flex flex-row items-center justify-start gap-[12px]">
                      <div className="flex flex-row items-center justify-center">
                        <div className="relative rounded-md bg-base-white box-border w-5 h-5 overflow-hidden shrink-0 border-[1px] border-solid border-gray-300" />
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="relative [text-decoration:underline] leading-[20px] font-medium">
                          Design Landingpage
                        </div>
                        <div className="relative [text-decoration:underline] leading-[20px] text-gray-600">
                          11:30 am - 12:00 pm
                        </div>
                      </div>
                    </div>
                    <div className="relative [text-decoration:underline] leading-[20px] text-gray-600">
                      Today
                    </div>
                  </div>
                  <div
                    className="self-stretch bg-gray-50 box-border h-[72px] flex flex-row py-4 px-6 items-center justify-between cursor-pointer border-b-[1px] border-solid border-gray-200"
                    onClick={onComponent7ContainerClick}
                  >
                    <div className="flex flex-row items-center justify-start gap-[12px]">
                      <div className="flex flex-row items-center justify-center">
                        <div className="relative rounded-md bg-base-white box-border w-5 h-5 overflow-hidden shrink-0 border-[1px] border-solid border-gray-300" />
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="relative [text-decoration:underline] leading-[20px] font-medium">
                          Go shopping
                        </div>
                        <div className="relative [text-decoration:underline] leading-[20px] text-gray-600">
                          12:30 pm - 1:30 pm
                        </div>
                      </div>
                    </div>
                    <div className="relative [text-decoration:underline] leading-[20px] text-gray-600">
                      Today
                    </div>
                  </div>
                  <div
                    className="self-stretch bg-gray-50 box-border h-[72px] flex flex-row py-4 px-6 items-center justify-between cursor-pointer border-b-[1px] border-solid border-gray-200"
                    onClick={onComponent8ContainerClick}
                  >
                    <div className="flex flex-row items-center justify-start gap-[12px]">
                      <div className="flex flex-row items-center justify-center">
                        <div className="relative rounded-md bg-base-white box-border w-5 h-5 overflow-hidden shrink-0 border-[1px] border-solid border-gray-300" />
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="relative [text-decoration:underline] leading-[20px] font-medium">
                          Do my laundry
                        </div>
                        <div className="relative [text-decoration:underline] leading-[20px] text-gray-600">
                          1:30 pm - 2:10 pm
                        </div>
                      </div>
                    </div>
                    <div className="relative [text-decoration:underline] leading-[20px] text-gray-600">
                      Today
                    </div>
                  </div>
                  <div
                    className="self-stretch bg-gray-50 box-border h-[72px] flex flex-row py-4 px-6 items-center justify-between cursor-pointer border-b-[1px] border-solid border-gray-200"
                    onClick={onComponent9ContainerClick}
                  >
                    <div className="flex flex-row items-center justify-start gap-[12px]">
                      <div className="flex flex-row items-center justify-center">
                        <div className="relative rounded-md bg-base-white box-border w-5 h-5 overflow-hidden shrink-0 border-[1px] border-solid border-gray-300" />
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="relative [text-decoration:underline] leading-[20px] font-medium">{`Meeting with Product Manager `}</div>
                        <div className="relative [text-decoration:underline] leading-[20px] text-gray-600">
                          2:15 pm - 4:30 pm
                        </div>
                      </div>
                    </div>
                    <div className="relative [text-decoration:underline] leading-[20px] text-gray-600">
                      Today
                    </div>
                  </div>
                  <div
                    className="self-stretch bg-gray-50 box-border h-[72px] flex flex-row py-4 px-6 items-center justify-between cursor-pointer border-b-[1px] border-solid border-gray-200"
                    onClick={onComponent10ContainerClick}
                  >
                    <div className="flex flex-row items-center justify-start gap-[12px]">
                      <div className="flex flex-row items-center justify-center">
                        <div className="relative rounded-md bg-base-white box-border w-5 h-5 overflow-hidden shrink-0 border-[1px] border-solid border-gray-300" />
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="relative [text-decoration:underline] leading-[20px] font-medium">
                          Meeting with stakeholder
                        </div>
                        <div className="relative [text-decoration:underline] leading-[20px] text-gray-600">
                          5:30 pm
                        </div>
                      </div>
                    </div>
                    <div className="relative [text-decoration:underline] leading-[20px] text-gray-600">
                      Today
                    </div>
                  </div>
                  <div className="self-stretch bg-gray-50 box-border h-[72px] flex flex-row py-4 px-6 items-center justify-between text-gray-300 font-text-sm-semibold border-b-[1px] border-solid border-gray-200">
                    <div className="flex flex-row items-center justify-start gap-[12px]">
                      <div className="flex flex-row items-center justify-center">
                        <img
                          className="relative rounded-md w-5 h-5 overflow-hidden shrink-0"
                          alt=""
                          src="/-checkbox-base.svg"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="relative [text-decoration:underline] leading-[20px] font-medium">
                          Create Wireframe
                        </div>
                        <div className="relative [text-decoration:underline] leading-[20px]">
                          9:00 am - 10:00 am
                        </div>
                      </div>
                    </div>
                    <div className="relative [text-decoration:underline] leading-[20px] font-work-sans text-gray-600">
                      Today
                    </div>
                  </div>
                </div>
                <div className="box-border w-[842px] flex flex-row pt-5 px-0 pb-0 items-center justify-between text-gray-600 border-t-[1px] border-solid border-gray-200">
                  <div className="overflow-hidden flex flex-row items-center justify-center gap-[8px]">
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/arrowleft1.svg"
                    />
                    <div className="relative [text-decoration:underline] leading-[20px] font-semibold">
                      Previous
                    </div>
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder7.svg"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-between text-center">
                    <div className="relative rounded-xl bg-gray-50 w-10 h-10 overflow-hidden shrink-0 text-gray-800">
                      <div className="absolute top-[0px] left-[0px] rounded-xl w-10 h-10 flex flex-row p-3 box-border items-center justify-center">
                        <div className="relative [text-decoration:underline] leading-[20px] font-medium">
                          1
                        </div>
                      </div>
                    </div>
                    <div className="relative rounded-xl w-10 h-10 overflow-hidden shrink-0">
                      <div className="absolute top-[0px] left-[0px] rounded-xl w-10 h-10 flex flex-row p-3 box-border items-center justify-center">
                        <div className="relative [text-decoration:underline] leading-[20px] font-medium">
                          2
                        </div>
                      </div>
                    </div>
                    <div className="relative rounded-xl w-10 h-10 overflow-hidden shrink-0">
                      <div className="absolute top-[0px] left-[0px] rounded-xl w-10 h-10 flex flex-row p-3 box-border items-center justify-center">
                        <div className="relative [text-decoration:underline] leading-[20px] font-medium">
                          3
                        </div>
                      </div>
                    </div>
                    <div className="relative rounded-xl w-10 h-10 overflow-hidden shrink-0">
                      <div className="absolute top-[0px] left-[0px] rounded-xl w-10 h-10 flex flex-row p-3 box-border items-center justify-center">
                        <div className="relative [text-decoration:underline] leading-[20px] font-medium">
                          ...
                        </div>
                      </div>
                    </div>
                    <div className="relative rounded-xl w-10 h-10 overflow-hidden shrink-0">
                      <div className="absolute top-[0px] left-[0px] rounded-xl w-10 h-10 flex flex-row p-3 box-border items-center justify-center">
                        <div className="relative [text-decoration:underline] leading-[20px] font-medium">
                          8
                        </div>
                      </div>
                    </div>
                    <div className="relative rounded-xl w-10 h-10 overflow-hidden shrink-0">
                      <div className="absolute top-[0px] left-[0px] rounded-xl w-10 h-10 flex flex-row p-3 box-border items-center justify-center">
                        <div className="relative [text-decoration:underline] leading-[20px] font-medium">
                          9
                        </div>
                      </div>
                    </div>
                    <div className="relative rounded-xl w-10 h-10 overflow-hidden shrink-0">
                      <div className="absolute top-[0px] left-[0px] rounded-xl w-10 h-10 flex flex-row p-3 box-border items-center justify-center">
                        <div className="relative [text-decoration:underline] leading-[20px] font-medium">
                          10
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="overflow-hidden flex flex-row items-center justify-center gap-[8px]">
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder7.svg"
                    />
                    <div className="relative [text-decoration:underline] leading-[20px] font-semibold">
                      Next
                    </div>
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/arrowright1.svg"
                    />
                  </div>
                </div>
              </div>
              <aside className="self-stretch box-border w-[418px] flex flex-row py-0 pr-0 pl-6 items-start justify-start text-left text-lg text-gray-900 font-work-sans border-l-[1px] border-solid border-gray-200">
                <div className="flex-1 rounded-lg bg-base-white shadow-[0px_20px_24px_-4px_rgba(16,_24,_40,_0.08),_0px_8px_8px_-4px_rgba(16,_24,_40,_0.03)] flex flex-row items-start justify-start border-[1px] border-solid border-gray-100">
                  <div className="flex-1 overflow-hidden flex flex-col items-center justify-start">
                    <div className="self-stretch bg-base-white flex flex-col items-center justify-start">
                      <div className="self-stretch bg-base-white flex flex-col pt-6 px-6 pb-0 items-start justify-start gap-[16px]">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                          <h5 className="m-0 flex-1 relative text-inherit [text-decoration:underline] leading-[28px] font-semibold font-inherit">
                            Edit Task
                          </h5>
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0"
                            alt=""
                            src="/xclose.svg"
                          />
                        </div>
                        <textarea
                          className="bg-gray-50 font-work-sans text-base self-stretch rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border h-[140px] overflow-hidden shrink-0 flex flex-row py-3 px-3.5 items-start justify-start border-[1px] border-solid border-gray-300"
                          placeholder="Create wireframe"
                        />
                        <div className="self-stretch flex flex-row items-start justify-between">
                          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start">
                            <div className="rounded-lg bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row py-2.5 px-2 items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                              <img
                                className="relative w-5 h-5 overflow-hidden shrink-0"
                                alt=""
                                src="/calendar2.svg"
                              />
                              <div className="relative text-sm [text-decoration:underline] leading-[20px] font-semibold font-work-sans text-gray-500 text-left">
                                Today
                              </div>
                              <img
                                className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                                alt=""
                                src="/placeholder8.svg"
                              />
                            </div>
                          </button>
                          <div className="w-[225px] flex flex-row items-start justify-start gap-[16px]">
                            <button className="cursor-pointer py-2.5 px-2 bg-base-white flex-1 rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                              <img
                                className="relative w-5 h-5 overflow-hidden shrink-0"
                                alt=""
                                src="/clock.svg"
                              />
                              <div className="relative text-sm [text-decoration:underline] leading-[20px] font-semibold font-work-sans text-gray-500 text-left">
                                10:30 am
                              </div>
                              <img
                                className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                                alt=""
                                src="/placeholder9.svg"
                              />
                            </button>
                            <button className="cursor-pointer py-2.5 px-2 bg-base-white flex-1 rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                              <img
                                className="relative w-5 h-5 overflow-hidden shrink-0"
                                alt=""
                                src="/clock.svg"
                              />
                              <div className="relative text-sm [text-decoration:underline] leading-[20px] font-semibold font-work-sans text-gray-500 text-left">
                                11:30 am
                              </div>
                              <img
                                className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                                alt=""
                                src="/placeholder9.svg"
                              />
                            </button>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-between text-base text-gray-500 font-text-sm-semibold">
                          <div className="flex flex-row items-center justify-start gap-[8px]">
                            <img
                              className="relative w-4 h-4 overflow-hidden shrink-0"
                              alt=""
                              src="/bell03.svg"
                            />
                            <div className="relative [text-decoration:underline] font-medium">
                              10 Minute before
                            </div>
                          </div>
                          <img
                            className="relative w-4 h-4 overflow-hidden shrink-0"
                            alt=""
                            src="/xclose1.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col pt-8 px-0 pb-0 items-start justify-start">
                      <div className="self-stretch hidden flex-col pt-0 px-0 pb-6 items-start justify-start">
                        <img
                          className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
                          alt=""
                          src="/divider.svg"
                        />
                      </div>
                      <div className="self-stretch flex flex-row pt-0 px-6 pb-6 items-start justify-start gap-[12px]">
                        <button
                          className="cursor-pointer py-2.5 px-[18px] bg-base-white flex-1 rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300"
                          onClick={onButton2Click}
                        >
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                            alt=""
                            src="/placeholder10.svg"
                          />
                          <div className="relative text-base [text-decoration:underline] font-semibold font-text-sm-semibold text-gray-700 text-left">
                            Cancel
                          </div>
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                            alt=""
                            src="/placeholder10.svg"
                          />
                        </button>
                        <button className="cursor-pointer py-2.5 px-4 bg-mediumslateblue flex-1 rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-mediumslateblue">
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                            alt=""
                            src="/plus1.svg"
                          />
                          <div className="relative text-sm [text-decoration:underline] leading-[20px] font-semibold font-work-sans text-base-white text-left">
                            Save
                          </div>
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                            alt=""
                            src="/placeholder6.svg"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Group;
