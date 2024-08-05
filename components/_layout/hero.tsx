import Image from "next/image";
import React from "react";
import Logo from "@/public/logo.png";
import Dextools from "@/public/dextools-icon.png";
import Dexscreener from "@/public/dexscreener-icon.png";
import Twitter from "@/public/twitter-icon.png";
import Telegram from "@/public/telegram-icon.png";

const Hero = () => {
  const videoSrc = "/us-flag.mp4";
  return (
    <header className="relative flex h-screen items-center justify-center overflow-hidden text-center">
      <video
        autoPlay
        muted
        loop
        id="bg-video"
        className="absolute left-[50%] top-[50%] z-[-1] h-full w-full object-cover"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="bg-customBlue absolute left-0 top-0 h-full w-full"></div>
      <div className="relative z-[1] flex flex-col items-center p-5">
        <Image
          src={Logo}
          width={250}
          height={100}
          alt="PolitiFi Memecoin Logo"
          className="logo"
        />
        <h1 className="py-4 text-[2em] font-bold text-white">
          Kamala Harris Token
        </h1>
        <div className="flex justify-center gap-5">
          <a
            href="https://www.dextools.io/app/en/ether/pair-explorer/0xd726e3b6858d81ab6ad5b7cbb7a62ea00c5c25bd?t=1720214805461"
            target="_blank"
          >
            <Image width={40} src={Dextools} alt="Dextools" />
          </a>
          <a
            href="https://dexscreener.com/ethereum/0xd726e3b6858d81ab6ad5b7cbb7a62ea00c5c25bd"
            target="_blank"
          >
            <Image src={Dexscreener} width={40} alt="Dexscreener" />
          </a>
          <a href="https://twitter.com/KamalaHarrisERC" target="_blank">
            <Image width={40} src={Twitter} alt="Twitter" />
          </a>
          <a href="https://t.me/KamalaHarrisERC" target="_blank">
            <Image width={40} src={Telegram} alt="Telegram" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
