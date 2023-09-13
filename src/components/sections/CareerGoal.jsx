import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { DiWordpress } from "react-icons/di";
import { HiSpeakerphone } from "react-icons/hi";
import CourseCard from "../CourseCard";

const CareerGoal = () => {
  return (
    <section className="career py-24 bg-[#264C5A]">
      <main>
        <h2 className="text-3xl text-center font-semibold text-[#FFAB00]">
          আপনার পছন্দের কোর্সটি বেছে নিন
        </h2>
        <p className="text-center text-white">
          নিচের অপশনগুলো থেকে আপনার কাঙ্খিত কোর্সটিকে বেছে নিন এবং শেখা শুরু করে
          দিন
        </p>

        <div className="cards mt-10 flex flex-col md:flex-row items-center justify-center gap-5">
          <CourseCard
            icon={<BiCodeAlt />}
            text="Web Design"
            studentsCount="299"
            coursesCount="1"
          />

          <CourseCard
            icon={<DiWordpress />}
            text="Wordpress Design"
            studentsCount="199"
            coursesCount="1"
          />

          <CourseCard
            icon={<HiSpeakerphone />}
            text="Digital Marketing"
            studentsCount="49"
            coursesCount="1"
          />
        </div>
      </main>
    </section>
  );
};

export default CareerGoal;
