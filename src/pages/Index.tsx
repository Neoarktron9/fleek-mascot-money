import SEO from "@/components/SEO";
import Navbar from "@/components/fleek/Navbar";
import TickerBar from "@/components/fleek/TickerBar";
import MascotHero from "@/components/fleek/MascotHero";
import ContractCard from "@/components/fleek/ContractCard";
import About from "@/components/fleek/About";
import Tokenomics from "@/components/fleek/Tokenomics";
import Roadmap from "@/components/fleek/Roadmap";
import HowToBuy from "@/components/fleek/HowToBuy";
import FAQ from "@/components/fleek/FAQ";
import Footer from "@/components/fleek/Footer";
import StickyBuyBar from "@/components/fleek/StickyBuyBar";

const Index = () => {
  return (
    <div>
      <SEO
        title="Fleekcoin ($FLEEK) — Meet the Mascot, Tokenomics & Roadmap"
        description="$FLEEKCOIN is the most on-fleek meme coin on the internet. Meet Fleeky, explore tokenomics and roadmap, and join the community."
        image="/opengraph-fleekcoin.png"
      />
      <Navbar />
      <TickerBar />
      <main>
        <MascotHero />
        <ContractCard />
        <About />
        <Tokenomics />
        <Roadmap />
        <HowToBuy />
        <FAQ />
      </main>
      <Footer />
      <StickyBuyBar />
    </div>
  );
};

export default Index;
