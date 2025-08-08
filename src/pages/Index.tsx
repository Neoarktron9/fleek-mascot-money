import SEO from "@/components/SEO";
import Navbar from "@/components/fleek/Navbar";
import MascotHero from "@/components/fleek/MascotHero";
import About from "@/components/fleek/About";
import Tokenomics from "@/components/fleek/Tokenomics";
import Roadmap from "@/components/fleek/Roadmap";
import HowToBuy from "@/components/fleek/HowToBuy";
import FAQ from "@/components/fleek/FAQ";
import Footer from "@/components/fleek/Footer";

const Index = () => {
  return (
    <div>
      <SEO
        title="Fleekcoin ($FLEEK) — Meet the Mascot, Tokenomics & Roadmap"
        description="$FLEEKCOIN is the most on-fleek meme coin on the internet. Meet Fleeky, explore tokenomics and roadmap, and join the community."
        image="/opengraph-fleekcoin.png"
      />
      <Navbar />
      <main>
        <MascotHero />
        <About />
        <Tokenomics />
        <Roadmap />
        <HowToBuy />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
