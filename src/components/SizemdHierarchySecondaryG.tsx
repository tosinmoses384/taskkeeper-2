import { FunctionComponent } from "react";

type SizemdHierarchySecondaryGType = {
  iconTrailing?: boolean;
  iconLeading?: boolean;
};

const SizemdHierarchySecondaryG: FunctionComponent<
  SizemdHierarchySecondaryGType
> = ({ iconTrailing = true, iconLeading = true }) => {
  return (
    <div className="rounded-lg bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row py-2.5 px-4 items-center justify-center gap-[8px] text-left text-sm text-gray-700 font-text-sm-semibold border-[1px] border-solid border-gray-300">
      {iconLeading && (
        <img
          className="relative w-5 h-5 overflow-hidden shrink-0"
          alt=""
          src="/placeholder.svg"
        />
      )}
      <div className="relative leading-[20px] font-semibold">Button CTA</div>
      {iconTrailing && (
        <img
          className="relative w-5 h-5 overflow-hidden shrink-0"
          alt=""
          src="/placeholder1.svg"
        />
      )}
    </div>
  );
};

export default SizemdHierarchySecondaryG;
