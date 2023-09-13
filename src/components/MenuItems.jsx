import React from "react";

const MenuItems = ({ icon, text, courseCount, studentsCount }) => {
  return (
    <>
      <li className="border border-gray-200 rounded-xl w-full text-black">
        <div className="flex gap-4">
          <span className="text-2xl">{icon}</span>
          <span>
            <span className="text-lg">{text}</span> <br />
            <span className="text-xs">
              {courseCount} courses • {studentsCount}+ Students
            </span>
          </span>
        </div>
      </li>
    </>
  );
};

export default MenuItems;
