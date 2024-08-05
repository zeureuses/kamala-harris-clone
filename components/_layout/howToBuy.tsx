import Image from "next/image";
import React from "react";
import kamalaAviator from "@/public/kamala-aviator.gif";

const HowToBuy = () => {
  return (
    <section className="shadow-[0 0 10px rgba(0, 0, 0, 0.5)] relative mb-10 w-[80%] max-w-[800px] items-center rounded-xl bg-[#fff] p-5 text-center text-black">
      <div
        className="dancing-gif left absolute left-[-180px] top-1/2"
        style={{ transform: "translateY(-50%)" }}
      >
        <Image width={150} src={kamalaAviator} alt="Kamala Harris Dancing" />
      </div>

      <h2 className="mb-5 text-[2em] font-bold">How to Buy $HARRIS</h2>
      <ol className="mb-5 list-inside list-decimal">
        <li className="my-4">
          <strong>
            Download and Install MetaMask, Trust Wallet, or another wallet:
          </strong>
          MetaMask is a crypto wallet app used for storing and managing Ethereum
          tokens. After creating a wallet, be sure to write down your recovery
          phrase on a piece of paper and store it somewhere safe.
        </li>
        <hr />
        <li className="my-4">
          <strong>
            Purchase Some Ethereum or send Ethereum to your wallet address:
          </strong>
          From inside the MetaMask app, you can purchase Ethereum using PayPal
          by clicking on the buy button.
        </li>
        <hr />
        <li className="my-4">
          <strong>Swap Your ETH for $HARRIS:</strong>
          Connect your wallet to Uniswap, input our contract address{" "}
          <span className="how-to-buy-address">
            0x155788dd4b3ccd955a5b2d461c7d6504f83f71fa
          </span>
          , set your slippage to auto, and click the swap button!
        </li>
      </ol>

      <div
        className="dancing-gif right absolute right-[-180px] top-1/2"
        style={{ transform: "translateY(-50%)" }}
      >
        <Image width={150} src={kamalaAviator} alt="Kamala Harris Dancing" />
      </div>
    </section>
  );
};

export default HowToBuy;
