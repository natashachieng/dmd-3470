export const Review = (): JSX.Element => {
  return (
    <section className="bg-[#f5f0ea] w-full px-6 lg:px-24 py-20">
      {/* Section heading */}
      <h2 className="font-['DM_Sans',Helvetica] font-light text-[#2c2114] text-2xl text-center mb-16">
        What our subscribers say
      </h2>

      {/* Card wrapper — avatar overlaps top of card */}
      <div className="max-w-3xl mx-auto relative flex flex-col items-center">
        {/* Avatar floats above the card */}
        <div className="relative z-10 mb-[-40px]">
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#f5f0ea] shadow-sm">
            <img
              src="https://c.animaapp.com/moipan2pzKglz8/img/reveiw.png"
              alt="Margaux D."
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Card */}
        <div className="w-full bg-[#e8dfd6] rounded-2xl px-12 pt-16 pb-10 flex flex-col items-center gap-4 shadow-sm">
          <blockquote className="font-['Cormorant',Helvetica] font-semibold italic text-[#1a1a1a] text-xl md:text-2xl text-center leading-relaxed">
            &#34;I&#39;ve never been to Kyoto. Now I feel like I have.&#34;
          </blockquote>
          <p className="font-['DM_Sans',Helvetica] font-light text-[#373737] text-base text-center leading-relaxed max-w-xl">
            The October vial stopped me in my tracks. I wore it every day until it ran out.
          </p>
          <div className="flex flex-col items-center gap-0.5 mt-2">
            <span className="font-['DM_Sans',Helvetica] font-light text-[#2c2114] text-sm tracking-wide">
              &#8211;&nbsp; Margaux D.
            </span>
            <span className="font-['DM_Sans',Helvetica] font-extralight text-[#2c2114] text-sm">
              Voyager subscriber · Paris
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
