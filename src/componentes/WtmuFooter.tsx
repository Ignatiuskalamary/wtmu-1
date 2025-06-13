import React from "react";
import { assets, footer_data } from "../assets/assets";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

interface FooterLink {
  title: string;
  links: string[];
}

const WtmuFooter: React.FC = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-white">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        <div>
          <img src={assets.logo} alt="logo" className="w-32 sm:w-44" />
          <p className="max-w-[410px] mt-6">
            Transform your passion into profession. World-class training,
            inspiring mentors, endless opportunities. Your musical journey
            starts here. Enroll today! 🎶
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {footer_data.map((section: FooterLink, index: number) => (
            <div key={index}>
              <h3 className="font-bold text-base text-green-700  md:mb-5 mb-2">
                {section.title}
              </h3>
              {/* <ul className="text-sm space-y-1">
                {section.links.map((link: string, i: number) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover: transition font-bold text-black"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul> */}
              {section.title === "Quick Links" ? (
                // Special layout for Quick Links (2 rows)
                <ul className="text-sm">
                  {/* First Row (6 items) */}
                  <div className=" gap-x-4 gap-y-1 mb-2">
                    {section.links.slice(0, 6).map((link, i) => (
                      <li key={i}>
                        <a href="#" className=" font-bold text-black">
                          {link}
                        </a>
                      </li>
                    ))}
                  </div>
                  {/* Second Row (remaining items) */}
                  <div className="flex flex-wrap pt-34 gap-x-4 gap-y-1">
                    {section.links.slice(6).map((link, i) => (
                      <li key={i + 6}>
                        <a href="#" className=" font-bold text-black">
                          {link}
                        </a>
                      </li>
                    ))}
                  </div>
                </ul>
              ) : (
                // Default layout for other sections (single column)
                <ul className="text-sm space-y-1">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className=" font-bold text-black">
                        {link === "Facebook" ? (
                          <BsFacebook
                            className="text-green-700 rounded-full shadow-[0_0_10px_3px_rgba(24,119,242,0.3)] p-2"
                            size={32}
                          />
                        ) : link === "X" || link === "Twitter" ? (
                          <BsTwitter
                            className="text-green-700 rounded-full shadow-[0_0_10px_3px_rgba(0,0,0,0.2)] p-2"
                            size={32}
                          />
                        ) : link === "LinkedIn" ? (
                          <BsLinkedin
                            className="text-green-700 rounded-full shadow-[0_0_10px_3px_rgba(10,102,194,0.3)] p-2"
                            size={32}
                          />
                        ) : link === "YouTube" ? (
                          <BsYoutube
                            className="text-green-700 rounded-full shadow-[0_0_10px_3px_rgba(10,102,194,0.3)] p-2"
                            size={32}
                          />
                        ) : link === "Instagram" ? (
                          <BsInstagram
                            className="text-green-700 rounded-full shadow-[0_0_10px_3px_rgba(10,102,194,0.3)] p-2"
                            size={32}
                          />
                        ) : (
                          link
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Copyright 2025 © WTMU All Right Reserved.
      </p>
    </div>
  );
};

export default WtmuFooter;
