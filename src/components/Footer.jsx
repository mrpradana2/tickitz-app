import React from "react";
import LogoTIckitz from "/images/logo/logo-Tickitz.svg";

import Cineone21 from "/images/sponsor/CineOne21.svg";
import Ebvid from "/images/sponsor/ebv.id.svg";
import Hiflix from "/images/sponsor/hiflix.svg";

import Facebook from "/icons/social-media/facebook.svg";
import Instagram from "/icons/social-media/instagram.svg";
import Twitter from "/icons/social-media/twitter.svg";
import Youtube from "/icons/social-media/youtube.svg";

export default function Footer() {
  return (
    <>
      <footer className="grid grid-cols-1 gap-8 px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={LogoTIckitz} alt="logo" className="py-4" />
          <p className="text-color-grey">
            Stop waiting in line. Buy tickets conveniently, watch movies
            quietly.
          </p>
        </div>
        <div>
          <h6 className="text-color-dark font-bold pb-4">Explore</h6>
          <ul className="text-color-grey flex flex-wrap gap-x-8 gap-y-4">
            <a href="#">
              <li>Cinemas</li>
            </a>
            <a href="./index2.html">
              <li>Movies List</li>
            </a>
            <a href="./ticket-result.html">
              <li>My Ticket</li>
            </a>
            <a href="#">
              <li>Notification</li>
            </a>
          </ul>
        </div>
        <div>
          <h6 className="text-color-dark font-bold pb-4">Our Sponsor</h6>
          <div className="flex gap-8 flex-wrap">
            <img src={Ebvid} alt="logo-sponsor" />
            <img src={Cineone21} alt="logo-sponsor" />
            <img src={Hiflix} alt="logo-sponsor" />
          </div>
        </div>
        <div>
          <h6 className="text-color-dark font-bold pb-4">Follow us</h6>
          <div className="flex gap-8 flex-wrap lg:flex-col lg:gap-4">
            <a href="#" className="flex gap-4">
              <img src={Facebook} alt="social-media" />
              <p className="text-color-grey hidden lg:block">
                Tickitz Cinema id
              </p>
            </a>
            <a href="#" className="flex gap-4">
              <img src={Instagram} alt="social-media" />
              <p className="text-color-grey hidden lg:block">tickitz.id</p>
            </a>
            <a href="#" className="flex gap-4">
              <img src={Twitter} alt="social-media" />
              <p className="text-color-grey hidden lg:block">tickitz.id</p>
            </a>
            <a href="#" className="flex gap-4">
              <img src={Youtube} alt="social-media" />
              <p className="text-color-grey hidden lg:block">
                Tickitz Cinema id
              </p>
            </a>
          </div>
        </div>
        <div className="text-color-grey pt-8 md:col-span-2 md:text-center lg:col-span-4">
          &copy; 2020 Tickitz. All Rights Reserved
        </div>
      </footer>
    </>
  );
}
