export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-[#2d3b35] w-full px-10 lg:px-24 py-20 flex flex-col items-center gap-8">
      <h2 className="font-['Cormorant',Helvetica] font-bold text-[#e8ddd0] text-4xl lg:text-5xl text-center leading-snug">
        Ready to begin your journey?
      </h2>
      <div className="flex items-center gap-4 flex-wrap justify-center">
        <button className="bg-[#c4a97d] text-[#2c2114] font-['DM_Sans',Helvetica] font-extralight text-base px-12 py-3.5 rounded-full hover:bg-[#b89868] transition-colors">
          Start free trial
        </button>
        <button className="border border-[#e8ddd0] text-[#e8ddd0] font-['DM_Sans',Helvetica] font-extralight text-base px-12 py-3.5 rounded-full hover:border-[#c4a97d] hover:text-[#c4a97d] transition-colors">
          Explore scents
        </button>
      </div>
      <div className="w-full pt-10 border-t border-[#3d4f48] flex flex-col sm:flex-row items-center justify-center gap-4">
        <span className="font-['DM_Sans',Helvetica] font-extralight text-[#7a6a52] text-base">
          &copy; 2026 Sillage. All rights reserved.
        </span>
        <a href="#" className="font-['DM_Sans',Helvetica] font-extralight text-[#7a6a52] text-base hover:text-[#c4a97d] transition-colors">
          Privacy policy
        </a>
      </div>
    </footer>
  );
};
