import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Group1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onComponent5Click = useCallback(() => {
    navigate("/to-do-view-task");
  }, [navigate]);

  const onComponent6Click = useCallback(() => {
    navigate("/to-do-view-task");
  }, [navigate]);

  const onComponent7Click = useCallback(() => {
    navigate("/to-do-view-task");
  }, [navigate]);

  const onComponent8Click = useCallback(() => {
    navigate("/to-do-view-task");
  }, [navigate]);

  const onComponent9Click = useCallback(() => {
    navigate("/to-do-view-task");
  }, [navigate]);

  const onComponent10Click = useCallback(() => {
    navigate("/to-do-view-task");
  }, [navigate]);

  const onButton14Click = useCallback(() => {
    navigate("/to-do");
  }, [navigate]);

  return (
    <div className="relative w-full h-[1186px] text-left text-sm text-gray-600 font-text-sm-semibold">
      <div className="absolute top-[0px] left-[0px] bg-base-white w-[1440px] flex flex-col items-start justify-start">
        <nav className="m-0 self-stretch bg-base-white overflow-hidden flex flex-col items-center justify-start text-left text-5xl text-black font-text-sm-semibold border-b-[1px] border-solid border-gray-200">
          <div className="self-stretch flex flex-col items-center justify-start border-b-[1px] border-solid border-gray-200">
            <div className="self-stretch h-[72px] flex flex-row py-0 px-8 box-border items-center justify-between">
              <h1 className="m-0 flex flex-row items-center justify-start text-inherit font-inherit">
                <div className="flex flex-row items-start justify-start">
                  <div className="relative w-[142px] h-8">
                    <div className="absolute h-full top-[0%] bottom-[0%] left-[0px] w-[100px]">
                      <b className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_45px)] leading-[24px]">{`ToDo `}</b>
                    </div>
                  </div>
                </div>
              </h1>
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <div className="flex flex-row items-start justify-start gap-[4px]">
                  <img
                    className="rounded-md max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/-nav-item-button@2x.png"
                  />
                  <div className="rounded-md bg-base-white overflow-hidden flex flex-row p-2.5 items-start justify-start">
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/bell011.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <img
                    className="rounded-181xl w-10 h-10 object-cover"
                    alt=""
                    src="/avatar@3x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="self-stretch rounded-tl-21xl rounded-tr-none rounded-br-none rounded-bl-21xl bg-base-white flex flex-col pt-12 px-0 pb-24 items-start justify-start gap-[32px]">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-col py-0 px-8 items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <div className="hidden flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-between">
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
                      <div className="relative leading-[20px] font-medium">
                        Settings
                      </div>
                    </div>
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/chevronright.svg"
                    />
                    <div className="rounded-md flex flex-row py-1 px-2 items-center justify-center">
                      <div className="relative leading-[20px] font-medium">
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
                      src="/chevronright.svg"
                    />
                    <div className="rounded-md bg-gray-50 flex flex-row py-1 px-2 items-center justify-center text-gray-700">
                      <div className="relative leading-[20px] font-semibold">
                        Team
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-11xl text-gray-900 font-work-sans">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <h2 className="m-0 self-stretch relative text-inherit leading-[38px] font-semibold font-inherit">
                      Good morning!
                    </h2>
                    <h4 className="m-0 self-stretch relative text-base leading-[24px] font-normal font-inherit text-gray-600">{`You got some task to do. `}</h4>
                  </div>
                  <div />
                  <button className="cursor-pointer py-2.5 px-4 bg-mediumslateblue rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-mediumslateblue">
                    <div className="relative w-5 h-5 overflow-hidden shrink-0">
                      <img
                        className="absolute h-[66.67%] w-[66.67%] top-[16.67%] right-[16.67%] bottom-[16.67%] left-[16.67%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/icon.svg"
                      />
                    </div>
                    <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-base-white text-left">
                      Create New Task
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
          <div className="self-stretch flex flex-col items-center justify-start">
            <main className="self-stretch flex flex-row py-0 px-8 items-start justify-between text-left text-sm text-gray-900 font-work-sans">
              <div className="flex flex-col items-start justify-start gap-[32px]">
                <div className="flex flex-col items-start justify-start gap-[16px] text-base">
                  <h5 className="m-0 relative text-inherit leading-[24px] font-semibold font-inherit">
                    January 2023
                  </h5>
                  <div className="w-[842px] flex flex-row items-center justify-start gap-[16px]">
                    <button className="cursor-pointer py-2.5 px-4 bg-base-white flex-1 rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-col items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                      <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-gray-700 text-left">
                        Mon
                      </div>
                      <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-gray-700 text-left">
                        1
                      </div>
                    </button>
                    <button className="cursor-pointer py-2.5 px-4 bg-mediumslateblue flex-1 rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-col items-center justify-center gap-[8px] border-[1px] border-solid border-mediumslateblue">
                      <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-base-white text-left">
                        Tue
                      </div>
                      <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-base-white text-left">
                        2
                      </div>
                    </button>
                    <button className="cursor-pointer py-2.5 px-4 bg-base-white flex-1 rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-col items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                      <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-gray-700 text-left">
                        Wed
                      </div>
                      <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-gray-700 text-left">
                        3
                      </div>
                    </button>
                    <button className="cursor-pointer py-2.5 px-4 bg-base-white flex-1 rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-col items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                      <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-gray-700 text-left">
                        Thur
                      </div>
                      <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-gray-700 text-left">
                        4
                      </div>
                    </button>
                    <button className="cursor-pointer py-2.5 px-4 bg-base-white flex-1 rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-col items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                      <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-gray-700 text-left">
                        Fri
                      </div>
                      <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-gray-700 text-left">
                        5
                      </div>
                    </button>
                    <button className="cursor-pointer py-2.5 px-4 bg-base-white flex-1 rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-col items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                      <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-gray-700 text-left">
                        Sat
                      </div>
                      <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-gray-700 text-left">
                        6
                      </div>
                    </button>
                    <button className="cursor-pointer py-2.5 px-4 bg-base-white flex-1 rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-col items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                      <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-gray-700 text-left">
                        Sun
                      </div>
                      <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-gray-700 text-left">
                        7
                      </div>
                    </button>
                    <button className="cursor-pointer py-2.5 px-4 bg-base-white flex-1 rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-col items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                      <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-gray-700 text-left">
                        Mon
                      </div>
                      <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-gray-700 text-left">
                        8
                      </div>
                    </button>
                    <button className="cursor-pointer py-2.5 px-4 bg-base-white flex-1 rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-col items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                      <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-gray-700 text-left">
                        Tue
                      </div>
                      <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-gray-700 text-left">
                        9
                      </div>
                    </button>
                    <button className="cursor-pointer py-2.5 px-4 bg-base-white flex-1 rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-col items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                      <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-gray-700 text-left">
                        Wed
                      </div>
                      <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-gray-700 text-left">
                        10
                      </div>
                    </button>
                    <button className="cursor-pointer py-2.5 px-4 bg-base-white flex-1 rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-col items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                      <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-gray-700 text-left">
                        Thur
                      </div>
                      <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-gray-700 text-left">
                        11
                      </div>
                    </button>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                  <h6 className="m-0 relative text-base leading-[24px] font-semibold font-inherit">
                    My Tasks
                  </h6>
                  <div
                    className="self-stretch bg-gray-50 box-border h-[72px] flex flex-row py-4 px-6 items-center justify-between cursor-pointer border-b-[1px] border-solid border-gray-200"
                    onClick={onComponent5Click}
                  >
                    <div className="flex flex-row items-center justify-start gap-[12px]">
                      <img
                        className="max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/checkbox@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <h6 className="m-0 relative text-inherit leading-[20px] font-medium font-inherit">
                          Create Wireframe
                        </h6>
                        <h6 className="m-0 relative text-inherit leading-[20px] font-normal font-inherit text-gray-600">
                          10:30 am - 11:30 am
                        </h6>
                      </div>
                    </div>
                    <h6 className="m-0 relative text-inherit leading-[20px] font-normal font-inherit text-gray-600">
                      Today
                    </h6>
                  </div>
                  <div
                    className="self-stretch bg-gray-50 box-border h-[72px] flex flex-row py-4 px-6 items-center justify-between cursor-pointer border-b-[1px] border-solid border-gray-200"
                    onClick={onComponent6Click}
                  >
                    <div className="flex flex-row items-center justify-start gap-[12px]">
                      <img
                        className="max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/checkbox@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <h6 className="m-0 relative text-inherit leading-[20px] font-medium font-inherit">
                          Design Landingpage
                        </h6>
                        <h6 className="m-0 relative text-inherit leading-[20px] font-normal font-inherit text-gray-600">
                          11:30 am - 12:00 pm
                        </h6>
                      </div>
                    </div>
                    <h6 className="m-0 relative text-inherit leading-[20px] font-normal font-inherit text-gray-600">
                      Today
                    </h6>
                  </div>
                  <div
                    className="self-stretch bg-gray-50 box-border h-[72px] flex flex-row py-4 px-6 items-center justify-between cursor-pointer border-b-[1px] border-solid border-gray-200"
                    onClick={onComponent7Click}
                  >
                    <div className="flex flex-row items-center justify-start gap-[12px]">
                      <img
                        className="max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/checkbox@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <h6 className="m-0 relative text-inherit leading-[20px] font-medium font-inherit">
                          Go shopping
                        </h6>
                        <h6 className="m-0 relative text-inherit leading-[20px] font-normal font-inherit text-gray-600">
                          12:30 pm - 1:30 pm
                        </h6>
                      </div>
                    </div>
                    <h6 className="m-0 relative text-inherit leading-[20px] font-normal font-inherit text-gray-600">
                      Today
                    </h6>
                  </div>
                  <div
                    className="self-stretch bg-gray-50 box-border h-[72px] flex flex-row py-4 px-6 items-center justify-between cursor-pointer border-b-[1px] border-solid border-gray-200"
                    onClick={onComponent8Click}
                  >
                    <div className="flex flex-row items-center justify-start gap-[12px]">
                      <img
                        className="max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/checkbox@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <h6 className="m-0 relative text-inherit leading-[20px] font-medium font-inherit">
                          Do my laundry
                        </h6>
                        <h6 className="m-0 relative text-inherit leading-[20px] font-normal font-inherit text-gray-600">
                          1:30 pm - 2:10 pm
                        </h6>
                      </div>
                    </div>
                    <h6 className="m-0 relative text-inherit leading-[20px] font-normal font-inherit text-gray-600">
                      Today
                    </h6>
                  </div>
                  <div
                    className="self-stretch bg-gray-50 box-border h-[72px] flex flex-row py-4 px-6 items-center justify-between cursor-pointer border-b-[1px] border-solid border-gray-200"
                    onClick={onComponent9Click}
                  >
                    <div className="flex flex-row items-center justify-start gap-[12px]">
                      <img
                        className="max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/checkbox@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <h6 className="m-0 relative text-inherit leading-[20px] font-medium font-inherit">{`Meeting with Product Manager `}</h6>
                        <h6 className="m-0 relative text-inherit leading-[20px] font-normal font-inherit text-gray-600">
                          2:15 pm - 4:30 pm
                        </h6>
                      </div>
                    </div>
                    <h6 className="m-0 relative text-inherit leading-[20px] font-normal font-inherit text-gray-600">
                      Today
                    </h6>
                  </div>
                  <div
                    className="self-stretch bg-gray-50 box-border h-[72px] flex flex-row py-4 px-6 items-center justify-between cursor-pointer border-b-[1px] border-solid border-gray-200"
                    onClick={onComponent10Click}
                  >
                    <div className="flex flex-row items-center justify-start gap-[12px]">
                      <img
                        className="max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/checkbox@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <h6 className="m-0 relative text-inherit leading-[20px] font-medium font-inherit">
                          Meeting with stakeholder
                        </h6>
                        <h6 className="m-0 relative text-inherit leading-[20px] font-normal font-inherit text-gray-600">
                          5:30 pm
                        </h6>
                      </div>
                    </div>
                    <h6 className="m-0 relative text-inherit leading-[20px] font-normal font-inherit text-gray-600">
                      Today
                    </h6>
                  </div>
                  <div className="self-stretch bg-gray-50 box-border h-[72px] flex flex-row py-4 px-6 items-center justify-between text-gray-300 font-text-sm-semibold border-b-[1px] border-solid border-gray-200">
                    <div className="flex flex-row items-center justify-start gap-[12px]">
                      <img
                        className="max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/checkbox1@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <h6 className="m-0 relative text-inherit [text-decoration:line-through] leading-[20px] font-medium font-inherit">
                          Create Wireframe
                        </h6>
                        <h6 className="m-0 relative text-inherit [text-decoration:line-through] leading-[20px] font-normal font-inherit">
                          9:00 am - 10:00 am
                        </h6>
                      </div>
                    </div>
                    <h6 className="m-0 relative text-inherit leading-[20px] font-normal font-work-sans text-gray-600">
                      Today
                    </h6>
                  </div>
                </div>
                <div className="self-stretch flex flex-row pt-5 px-0 pb-0 items-center justify-between text-gray-600 border-t-[1px] border-solid border-gray-200">
                  <div className="overflow-hidden flex flex-row items-center justify-center gap-[8px]">
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/arrowleft1.svg"
                    />
                    <div className="relative leading-[20px] font-semibold">
                      Previous
                    </div>
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder7.svg"
                    />
                  </div>
                  <div className="w-[292px] flex flex-row items-start justify-start gap-[2px] text-center">
                    <div className="flex-1 relative rounded-xl bg-gray-50 h-10 overflow-hidden text-gray-800">
                      <div className="absolute top-[0px] left-[0px] rounded-xl w-10 h-10 flex flex-row p-3 box-border items-center justify-center">
                        <div className="relative leading-[20px] font-medium">
                          1
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 relative rounded-xl h-10 overflow-hidden">
                      <div className="absolute top-[0px] left-[0px] rounded-xl w-10 h-10 flex flex-row p-3 box-border items-center justify-center">
                        <div className="relative leading-[20px] font-medium">
                          2
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 relative rounded-xl h-10 overflow-hidden">
                      <div className="absolute top-[0px] left-[0px] rounded-xl w-10 h-10 flex flex-row p-3 box-border items-center justify-center">
                        <div className="relative leading-[20px] font-medium">
                          3
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 relative rounded-xl h-10 overflow-hidden">
                      <div className="absolute top-[0px] left-[0px] rounded-xl w-10 h-10 flex flex-row p-3 box-border items-center justify-center">
                        <div className="relative leading-[20px] font-medium">
                          ...
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 relative rounded-xl h-10 overflow-hidden">
                      <div className="absolute top-[0px] left-[0px] rounded-xl w-10 h-10 flex flex-row p-3 box-border items-center justify-center">
                        <div className="relative leading-[20px] font-medium">
                          8
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 relative rounded-xl h-10 overflow-hidden">
                      <div className="absolute top-[0px] left-[0px] rounded-xl w-10 h-10 flex flex-row p-3 box-border items-center justify-center">
                        <div className="relative leading-[20px] font-medium">
                          9
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 relative rounded-xl h-10 overflow-hidden">
                      <div className="absolute top-[0px] left-[0px] rounded-xl w-10 h-10 flex flex-row p-3 box-border items-center justify-center">
                        <div className="relative leading-[20px] font-medium">
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
                    <div className="relative leading-[20px] font-semibold">
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
                          <h3 className="m-0 flex-1 relative text-inherit leading-[28px] font-semibold font-inherit">
                            Add Task
                          </h3>
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0"
                            alt=""
                            src="/xclose.svg"
                          />
                        </div>
                        <textarea className="bg-gray-50 self-stretch rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border h-[140px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-300" />
                        <div className="self-stretch flex flex-row items-start justify-between">
                          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start">
                            <div className="rounded-lg bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row py-2.5 px-4 items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                              <img
                                className="relative w-5 h-5 overflow-hidden shrink-0"
                                alt=""
                                src="/calendar2.svg"
                              />
                              <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-gray-500 text-left">
                                Today
                              </div>
                              <img
                                className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                                alt=""
                                src="/placeholder8.svg"
                              />
                            </div>
                          </button>
                          <div className="w-[216px] flex flex-row items-start justify-start gap-[16px]">
                            <button className="cursor-pointer py-2.5 px-4 bg-base-white flex-1 rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                              <img
                                className="relative w-5 h-5 overflow-hidden shrink-0"
                                alt=""
                                src="/clock1.svg"
                              />
                              <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-gray-500 text-left">
                                00:00
                              </div>
                              <img
                                className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                                alt=""
                                src="/placeholder8.svg"
                              />
                            </button>
                            <button className="cursor-pointer py-2.5 px-4 bg-base-white flex-1 rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300">
                              <img
                                className="relative w-5 h-5 overflow-hidden shrink-0"
                                alt=""
                                src="/clock1.svg"
                              />
                              <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-gray-500 text-left">
                                00:00
                              </div>
                              <img
                                className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                                alt=""
                                src="/placeholder8.svg"
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
                            <h6 className="m-0 relative text-inherit font-medium font-inherit">
                              10 Minute before
                            </h6>
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
                          onClick={onButton14Click}
                        >
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                            alt=""
                            src="/placeholder10.svg"
                          />
                          <div className="relative text-base font-semibold font-text-sm-semibold text-gray-700 text-left">
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
                          <div className="relative text-sm leading-[20px] font-semibold font-work-sans text-base-white text-left">
                            Add
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
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group1;
