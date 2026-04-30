import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { HowItWorks } from "./sections/HowItWorks";
import { Review } from "./sections/Review";
import { TheOctoberVial } from "./sections/TheOctoberVial";
import { WhySillage } from "./sections/WhySillage";
import { YourScentYour } from "./sections/YourScentYour";
import { Pricing } from "./sections/Pricing";
import { VideoTeaser } from "./sections/VideoTeaser";

export const Color = (): JSX.Element => {
  return (
    <div className="bg-[#f5f1eb] overflow-x-hidden w-full font-sans">
      {/* Navbar */}
      <nav className="w-full bg-[#2d3b35] px-10 py-6 flex items-center justify-between sticky top-0 z-50">
        <span className="font-['Cormorant_Unicase',Helvetica] text-[#e8ddd0] text-3xl">Sillage</span>
        <div className="flex items-center gap-8">
          <a href="#home" className="font-['DM_Sans',Helvetica] font-light text-[#8f7f66] text-sm hover:text-[#c4a97d] transition-colors">Home</a>
          <a href="#how-it-works" className="font-['DM_Sans',Helvetica] font-light text-[#8f7f66] text-sm hover:text-[#c4a97d] transition-colors">How It Works</a>
          <a href="#why-sillage" className="font-['DM_Sans',Helvetica] font-light text-[#8f7f66] text-sm hover:text-[#c4a97d] transition-colors">Why Sillage</a>
          <a href="#pricing" className="font-['DM_Sans',Helvetica] font-light text-[#8f7f66] text-sm hover:text-[#c4a97d] transition-colors">Pricing</a>
          <a href="#reviews" className="font-['DM_Sans',Helvetica] font-light text-[#8f7f66] text-sm hover:text-[#c4a97d] transition-colors">Reviews</a>
        </div>
      </nav>

      <div id="home"><Hero /></div>
      <div id="how-it-works"><HowItWorks /></div>
      <div id="why-sillage"><WhySillage /></div>
      <TheOctoberVial />
      <YourScentYour />
      <VideoTeaser />
      <div id="pricing"><Pricing /></div>
      <div id="reviews"><Review /></div>
      <Footer />
    </div>
  );
};
