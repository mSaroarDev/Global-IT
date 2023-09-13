import React from "react";
import IncludedItems from "../IncludedItems";

const Included = () => {
  const texts = [
    {
      id: 1,
      text: "২ মাসের সাজানো গোছানো সিলেবাস।",
    },
    {
      id: 2,
      text: "সাবজেক্ট একপার্ট দ্বারা লাইভ ক্লাস",
    },
    {
      id: 3,
      text: "সপ্তাহে ২ দিন লাইভ ক্লাস",
    },
    {
      id: 4,
      text: "দিনে ১টি সাপোর্ট ক্লাস",
    },
    {
      id: 5,
      text: "সমস্যায় পড়লে স্ক্রিন শেয়ার করে সমাধানের সুব্যবস্থা",
    },
    {
      id: 6,
      text: "২৪/৭ সাপোর্ট",
    },
  ];

  return (
    <section className="included py-24 px-2 text-center">
      <main>
        <div className="heading">
          <h2 className="text-3xl text-center font-semibold text-black">
            কি কি থাকছে আমাদের লাইভ কোর্সে
          </h2>
          <p className="text-center text-gray-800">
            দেখে নিন কেন এবং কিভাবে আমাদের কোর্সটি আপনার করা উচিত
          </p>
        </div>
        <div className="content mt-4 max-w-3xl mx-auto">
          {texts.map((text) => (
            <IncludedItems key={text.id} text={text.text} />
          ))}
        </div>
      </main>
    </section>
  );
};

export default Included;
