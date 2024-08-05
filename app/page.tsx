import Hero from "@/components/_layout/hero";
import { loadJsonData } from "../utils";
import About from "@/components/_layout/about";
import Tokenomics from "@/components/_layout/tokenomics";
import HowToBuy from "@/components/_layout/howToBuy";
import Gallery from "@/components/_layout/gallery";
import Footer from "@/components/_layout/footer";

export default function Home() {
  const jsonData = loadJsonData();

  return (
    <>
      <Hero />
      <main className="flex flex-col items-center bg-[#111] p-5">
        <About />
        <Tokenomics />
        <HowToBuy />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
