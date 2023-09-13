import React from "react";

const ScrollingCard = ({
  icon,
  text,
  courseCount,
  studentsCount,
  iconColor,
}) => {
  return (
    <div>
      <div className="w-60 flex items-center justify-start drop-shadow-xl bg-white rounded-md px-4 py-3">
        <span style={{ color: iconColor }} className="text-2xl">
          {icon}
        </span>
        <span className="ml-4 flex flex-col">
          <span className="text-lg font-semibold">{text}</span>
          <span className="text-xs">
            {courseCount} courses • {studentsCount}+ Students
          </span>
        </span>
      </div>
    </div>
  );
};

export default ScrollingCard;
