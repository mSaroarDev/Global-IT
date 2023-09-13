import Link from "next/link";
import React from "react";
import { BsWordpress } from "react-icons/bs";
import { FaBattleNet } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { HiSpeakerphone } from "react-icons/hi";
import MenuItems from "./MenuItems";

const Appnav = () => {
  return (
    <>
      <div className="shadow bg-white fixed top-0 z-50 w-full">
        <div className="w-full max-w-6xl mx-auto">
          <div className="navbar">
            <div className="flex-1">
              <a className="normal-case text-xl flex items-center justify-center gap-3 font-semibold">
                <span className="text-[#ffcd33]">
                  <FaBattleNet />
                </span>{" "}
                গ্লোবাল আইটি
              </a>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal text-sm font-semibold">
                <li className="hidden md:block">
                  <a>হোমপেজ</a>
                </li>
                <li>
                  <details>
                    <summary>কোর্সসমূহ</summary>
                    <ul className="p-2 bg-white w-96 flex flex-col gap-3">
                      <MenuItems
                        icon={<BsWordpress />}
                        text="Wordpress Design Pro"
                        courseCount="1"
                        studentsCount="99"
                      />
                      <MenuItems
                        icon={<BiCodeAlt />}
                        text="Web Design"
                        courseCount="1"
                        studentsCount="49"
                      />
                      <MenuItems
                        icon={<HiSpeakerphone />}
                        text="Digital Marketing"
                        courseCount="1"
                        studentsCount="99"
                      />
                    </ul>
                  </details>
                </li>
                <li className="hidden md:block">
                  <a>ব্লগ</a>
                </li>
                <li className="bg-[#ffcd33] rounded-md text-black ml-2 font-bold">
                  <Link href="/admission">শুরু করুন</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appnav;
