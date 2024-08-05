import Image from "next/image";
import React from "react";
import kamalaThanks from "@/public/kamala-thanks.gif";

// Import all meme images
import meme1 from "@/public/meme1.jpg";
import meme2 from "@/public/meme2.jpg";
import meme3 from "@/public/meme3.jpg";
import meme4 from "@/public/meme4.jpg";
import meme5 from "@/public/meme5.jpg";
import meme6 from "@/public/meme6.jpg";
import meme7 from "@/public/meme7.jpg";
import meme8 from "@/public/meme8.jpg";
import meme9 from "@/public/meme9.jpg";
import meme10 from "@/public/meme10.jpg";
import meme11 from "@/public/meme11.jpg";
import meme12 from "@/public/meme12.jpg";

const images = [
  meme1,
  meme2,
  meme3,
  meme4,
  meme5,
  meme6,
  meme7,
  meme8,
  meme9,
  meme10,
  meme11,
  meme12,
];

const Gallery = () => {
  return (
    <section
      id="meme-gallery"
      className="shadow-[0 0 10px rgba(0, 0, 0, 0.5)] relative mb-10 w-[80%] max-w-[800px] items-center rounded-xl bg-[#00008b] p-5 text-center text-white"
    >
      <div
        className="dancing-gif left absolute left-[-180px] top-1/2"
        style={{ transform: "translateY(-50%)" }}
      >
        <Image width={150} src={kamalaThanks} alt="Kamala Harris Dancing" />
      </div>
      <h2 className="mb-5 text-[2em] font-bold">Meme Gallery</h2>
      <div className="flex flex-wrap justify-center gap-[10px]">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Meme ${index + 1}`}
            width={200}
            className="w-full max-w-[230px]"
          />
        ))}
      </div>
      <div
        className="dancing-gif right absolute right-[-180px] top-1/2"
        style={{ transform: "translateY(-50%)" }}
      >
        <Image width={150} src={kamalaThanks} alt="Kamala Harris Dancing" />
      </div>
    </section>
  );
};

export default Gallery;
