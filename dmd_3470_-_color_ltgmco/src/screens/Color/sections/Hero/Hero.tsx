export const Hero = (): JSX.Element => {
  return (
    <section className="bg-[#2d3b35] w-full px-10 lg:px-24 py-20 flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 flex flex-col gap-6 max-w-xl">
        <span className="font-['DM_Sans',Helvetica] font-extralight text-[#c4a97d] text-base">est. 26</span>
        <h1 className="font-['Cormorant_Unicase',Helvetica] font-semibold text-[#e8ddd0] text-5xl lg:text-6xl leading-tight [text-shadow:0px_4px_4px_#2c2114]">
          Wear A Memory<br />You Haven&#39;t Made Yet.
        </h1>
        <p className="font-['DM_Sans',Helvetica] font-light text-[#7a6a52] text-xl leading-relaxed">
          A new scent destination, delivered to your door every month.
        </p>
        <div className="flex items-center gap-8 mt-2">
          <button className="bg-[#c4a97d] text-[#2c2114] font-['DM_Sans',Helvetica] font-light text-sm px-6 py-3 rounded-md hover:bg-[#b89868] transition-colors">
            Start Your Journey
          </button>
          <button className="font-['DM_Sans',Helvetica] font-light text-[#c4a97d] text-sm hover:text-[#e8ddd0] transition-colors">
            Explore Scents →
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center lg:justify-end">
        <img
          className="w-full max-w-lg h-auto object-cover rounded-lg"
          alt="Perfume"
          src="https://c.animaapp.com/moipan2pzKglz8/img/perf-1.png"
        />
      </div>
    </section>
  );
};
