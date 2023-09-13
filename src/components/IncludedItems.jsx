import React from "react";
import { HiMiniCursorArrowRipple } from "react-icons/hi2";

const IncludedItems = ({ text }) => {
  return (
    <div>
      <div className="rounded-md border border-[#ffc000] bg-[#fffbee] p-4 flex gap-4 items-center justify-start mb-2">
        <span className="text-lg">
          <HiMiniCursorArrowRipple />
        </span>{" "}
        <span className="font-semibold text-lg">{text}</span>
      </div>
    </div>
  );
};

export default IncludedItems;
