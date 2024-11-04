"use client";

import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#363839] w-full text-white p-8">
      {/* Logo and Social Media */}
      <div className="flex flex-col items-center">
        {/* Logo */}
        <Image
          src="/tmc-footer-logo.svg"
          alt="The Morning Context Logo"
          width={160}
          height={62}
        />

        {/* Follow Us */}
        <p className="mt-8 text-lg font-medium font-haas">Follow us on</p>
        <div className="flex justify-center mt-6 gap-14 mb-4">
          <Image
            src="/facebook-icon.svg"
            alt="Facebook"
            width={24}
            height={24}
          />
          <Image src="/twitter-icon.svg" alt="Twitter" width={24} height={24} />
          <Image
            src="/linkedin-icon.svg"
            alt="LinkedIn"
            width={24}
            height={24}
          />
          <Image
            src="/instagram-icon.svg"
            alt="Instagram"
            width={24}
            height={24}
          />
          <Image src="/youtube-icon.svg" alt="YouTube" width={24} height={24} />
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 -mx-8 border-t border-gray-600"></div>

      {/* Footer Links */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div>
          <h4 className="font-normal font-haas text-lg  mb-3">Categories</h4>
          <p className="font-normal font-haas text-base mb-3 text-red-500">
            INTERNET
          </p>
          <p className="font-normal font-haas text-base mb-3 text-green-500">
            BUSINESS
          </p>
          <p className="font-normal font-haas text-base mb-3 text-purple-500">
            CHAOS
          </p>
          <p className="font-normal font-haas text-base mb-3 text-yellow-500">
            NEWSLETTERS
          </p>
          <p>All Stories</p>
        </div>

        <div>
          <h4 className="font-normal font-haas text-lg mb-3">Subscription</h4>
          <p className="font-normal font-haas text-base mb-3">
            Individual Plans
          </p>
          <p className="font-normal font-haas text-base mb-3">
            Corporate Plans
          </p>
          <p className="font-normal font-haas text-base mb-3">Student Plans</p>
          <p className="font-normal font-haas text-base mb-3">Gifting</p>
        </div>

        <div>
          <h4 className="font-normal font-haas text-lg mb-3">Company</h4>
          <p className="font-normal font-haas text-base mb-3">About</p>
          <p className="font-normal font-haas text-base mb-3">Leadership</p>
          <p className="font-normal font-haas text-base mb-3">Investors</p>
          <p className="font-normal font-haas text-base mb-3">Team</p>
          <p className="font-normal font-haas text-base mb-3">
            Editorial code of conduct
          </p>
        </div>

        <div>
          {/* <h4 className="font-semibold mb-3">Links</h4> */}
          <p className="font-normal font-haas text-base mb-3">
            The Morning Context Blog - On the record
          </p>
          <p className="font-normal font-haas text-base mb-8">
            TMC Subscriber App
          </p>
          <p className="font-normal font-haas text-base mb-3">Collaborate</p>
          <p className="font-normal font-haas text-base mb-3">Contact Us</p>
          <p className="font-normal font-haas text-base mb-3">FAQs</p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 -mx-8 border-t border-gray-600"></div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-4">
        <p className="font-normal font-haas text-base mb-2">
          ©2020 Slowform Pte Limited
        </p>
        <p className="font-normal font-haas text-sm mb-2">
          68 Circular Road, #02-01, 049422, Singapore
        </p>

        {/* Divider */}
        <div className="my-4 -mx-8 border-t border-gray-600"></div>

        <div className="mt-2">
          <a className="text-gray-400 text-base font-haas hover:text-white underline">
            Terms of service
          </a>
          <span className="mx-2">·</span>
          <a className="text-gray-400 text-base font-haas hover:text-white underline">
            Privacy policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
