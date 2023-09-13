import React from "react";

const CourseCard = ({ icon, text, studentsCount, coursesCount }) => {
  return (
    <div>
      <div className="w-52 bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center mt-5">
        <span className="text-5xl mb-5">{icon}</span>
        <h1 className="text-lg font-semibold">{text}</h1>
        <p className="text-xs">
          {coursesCount} courses • {studentsCount}+ Students
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
