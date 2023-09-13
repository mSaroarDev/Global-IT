import Image from "next/image";
import React from "react";
import HeroImg from "../../public/heromain.png";
import ScrollingCard from "./ScrollingCard";
import { TiHtml5 } from "react-icons/ti";
import { BiLogoTailwindCss, BiLogoCss3, BiLogoUpwork } from "react-icons/bi";
import {
  FaBootstrap,
  FaReact,
  FaWordpressSimple,
  FaStore,
  FaElementor,
} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiFiverr, SiFreelancer } from "react-icons/si";

const Hero = () => {
  return (
    <section className="hero">
      <main className="px-2 mt-28 lg:mt-0">
        <div className="h-screen lg:h-screen md:h-auto pb-0 md:pb-10 lg:pb-0 w-full items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between">
            <div className="left-col">
              <h1 className="text-6xl font-bold">
                ফ্রিল্যান্সিং শিখুন <br />
                <span className="text-red-600 mt-3 inline-flex">মাতৃভাষায়</span>
              </h1>
              <p className="my-6 font-semibold">
                Discover 28 Live course & 100 types of skill <br /> tests to
                start your career & get promotion
              </p>
              <div className="flex items-center justify-start gap-x-4">
                <button className="btn btn-warning">শেখা শুরু করুন</button>
                <button className="btn btn-outline btn-warning bg-[#fffbee]">
                  অ্যাপ্লাই করুন
                </button>
              </div>
            </div>
            <div>
              <div className="img right-col">
                <Image src={HeroImg} alt="hero img" height={600} width={600} />
              </div>
            </div>
          </div>
          <div>
            <marquee scrollamount="6" loop="infinite">
              <div className="cards flex gap-14 py-5">
                <ScrollingCard
                  icon={<TiHtml5 />}
                  text="HTML 5"
                  courseCount="1"
                  studentsCount="99"
                  iconColor="#DD4B24"
                />
                <ScrollingCard
                  icon={<BiLogoCss3 />}
                  text="CSS"
                  courseCount="1"
                  studentsCount="99"
                  iconColor="#254BDD"
                />
                <ScrollingCard
                  icon={<BiLogoTailwindCss />}
                  text="Tailwind CSS"
                  courseCount="1"
                  studentsCount="99"
                  iconColor="#15B8C5"
                />
                <ScrollingCard
                  icon={<FaBootstrap />}
                  text="Bootstrap"
                  courseCount="1"
                  studentsCount="99"
                  iconColor="#8311F6"
                />
                <ScrollingCard
                  icon={<RiJavascriptFill />}
                  text="JavaScript"
                  courseCount="1"
                  studentsCount="99"
                  iconColor="#EFD81D"
                />
                <ScrollingCard
                  icon={<FaReact />}
                  text="React"
                  courseCount="1"
                  studentsCount="49"
                  iconColor="#5ED3F3"
                />
                <ScrollingCard
                  icon={<FaWordpressSimple />}
                  text="Wordpress"
                  courseCount="1"
                  studentsCount="199"
                  iconColor="#207196"
                />
                <ScrollingCard
                  icon={<FaElementor />}
                  text="Elementor"
                  courseCount="1"
                  studentsCount="199"
                  iconColor="#8D0039"
                />
                <ScrollingCard
                  icon={<FaStore />}
                  text="WooCommerce"
                  courseCount="1"
                  studentsCount="99"
                  iconColor="#9B5C8F"
                />
                <ScrollingCard
                  icon={<SiFiverr />}
                  text="Fiverr"
                  courseCount="1"
                  studentsCount="99"
                  iconColor="#00B12B"
                />
                <ScrollingCard
                  icon={<BiLogoUpwork />}
                  text="Upwork"
                  courseCount="1"
                  studentsCount="29"
                  iconColor="#13A300"
                />
                <ScrollingCard
                  icon={<SiFreelancer />}
                  text="Freelancer"
                  courseCount="1"
                  studentsCount="29"
                  iconColor="#28ACF6"
                />
              </div>
            </marquee>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Hero;
