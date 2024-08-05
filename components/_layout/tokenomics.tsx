import Image from "next/image";
import React from "react";
import kamalaReaction from "@/public/kamala-reaction.gif";

const Tokenomics = () => {
  return (
    <section
      id="tokenomics"
      className="shadow-[0 0 10px rgba(0, 0, 0, 0.5)] relative mb-10 w-[80%] max-w-[800px] items-center rounded-xl bg-[#ff0000] p-5 text-center text-white"
    >
      <div
        className="dancing-gif left absolute left-[-180px] top-1/2"
        style={{ transform: "translateY(-50%)" }}
      >
        <Image width={150} src={kamalaReaction} alt="Kamala Harris Reaction" />
      </div>
      <h2 className="mb-5 text-[2em] font-bold">$HARRIS Tokenomics</h2>
      <p className="w-full">
        <strong>CA:</strong>{" "}
        <span className="contract-address">
          0x155788dd4b3ccd955a5b2d461c7d6504f83f71fa
        </span>
      </p>
      <p>
        <strong>0/0 TAX:</strong> Enjoy trading with zero taxes on transactions.
      </p>
      <p>
        <strong>LP BURNED:</strong> Liquidity Pool is permanently burned,
        ensuring stability and security.
      </p>
      <p>
        <strong>Total Supply:</strong> 420.69 trillion tokens.
      </p>
      <div
        className="dancing-gif right absolute right-[-180px] top-1/2"
        style={{ transform: "translateY(-50%)" }}
      >
        <Image width={150} src={kamalaReaction} alt="Kamala Harris Reaction" />
      </div>
    </section>
  );
};

export default Tokenomics;
