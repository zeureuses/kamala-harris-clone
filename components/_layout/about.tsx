import Image from "next/image";
import React from "react";
import kamalaDancing from "@/public/kamala-dancing.gif";

const About = () => {
  return (
    <section
      id="about"
      className="shadow-[0 0 10px rgba(0, 0, 0, 0.5)] relative mb-10 w-[80%] max-w-[800px] items-center rounded-xl bg-[#00008b] p-5 text-center text-white"
    >
      <div
        className="dancing-gif left absolute left-[-180px] top-1/2"
        style={{ transform: "translateY(-50%)" }}
      >
        <Image width={150} src={kamalaDancing} alt="Kamala Harris Dancing" />
      </div>
      <h2 className="mb-5 text-[2em] font-bold">About Kamala Harris</h2>
      <p>
        Kamala Harris is the Vice President of the United States, making history
        as the first woman, the first Black woman, and the first person of South
        Asian descent to hold the office. Her career is marked by a steadfast
        commitment to justice, equality, and the betterment of society. Harris
        was born in Oakland, California, and graduated from Howard University
        and the University of California, Hastings College of the Law. She
        served as the District Attorney of San Francisco and as the Attorney
        General of California before being elected to the U.S. Senate in 2016.
        As a senator, Harris championed issues such as criminal justice reform,
        healthcare, and environmental justice.
      </p>
      <p>
        As Vice President, Kamala Harris continues to work on critical issues,
        including the COVID-19 pandemic response, immigration reform, and
        efforts to address systemic inequalities. Her leadership style is
        characterized by her ability to connect with people, her advocacy for
        marginalized communities, and her pursuit of innovative solutions to
        complex problems.
      </p>
      <p>
        Kamala Harris is now the official Democratic candidate for the 2024
        presidential election. With her extensive experience and dedication to
        public service, she has the potential to become the next President of
        the United States.
      </p>
      <div
        className="dancing-gif right absolute right-[-180px] top-1/2"
        style={{ transform: "translateY(-50%)" }}
      >
        <Image width={150} src={kamalaDancing} alt="Kamala Harris Dancing" />
      </div>
    </section>
  );
};

export default About;
