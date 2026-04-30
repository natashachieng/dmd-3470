export const WhySillage = (): JSX.Element => {
  const reasons = [
    {
      icon: "https://c.animaapp.com/moipan2pzKglz8/img/map-pin.svg",
      title: "Destination-inspired, every time.",
      desc: "Each scent is mapped to a real place — a forest in Kyoto, a souk in Marrakech, a clifftop in Brittany.",
    },
    {
      icon: "https://c.animaapp.com/moipan2pzKglz8/img/front-hand-1.svg",
      title: "Curated by master perfumers.",
      desc: "No algorithms. Every vial is selected by hand, chosen for its ability to transport you somewhere new.",
    },
    {
      icon: "https://c.animaapp.com/moipan2pzKglz8/img/package-1.svg",
      title: "Packaging worth keeping.",
      desc: "Each delivery comes with a wax-sealed card, tissue wrapping, and a scent story written just for that month.",
    },
  ];

  return (
    <section className="bg-[#f5f1eb] w-full px-10 lg:px-24 py-24">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="flex-1">
          <h2 className="font-['Cormorant',Helvetica] font-semibold text-[#2c2114] text-5xl mb-12">Why Sillage</h2>
          <div className="flex flex-col gap-12">
            {reasons.map((r, i) => (
              <div key={i} className="flex items-start gap-6">
                <div className="w-[76px] h-[76px] shrink-0 bg-[#c4a97d] rounded-full flex items-center justify-center">
                  <img src={r.icon} alt={r.title} className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-['Cormorant',Helvetica] font-normal italic text-[#2c2114] text-2xl mb-2">{r.title}</h3>
                  <p className="font-['DM_Sans',Helvetica] font-extralight text-[#7a6a52] text-base leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 mt-14">
            <button className="bg-[#2c2114] text-[#e8ddd0] font-['DM_Sans',Helvetica] font-extralight text-base px-8 py-3.5 rounded-full hover:bg-[#3d2f1e] transition-colors">
              Start Subscribing
            </button>
            <button className="border-2 border-[#7a6a52] text-[#7a6a52] font-['DM_Sans',Helvetica] font-extralight text-base px-8 py-3.5 rounded-full hover:border-[#c4a97d] hover:text-[#c4a97d] transition-colors">
              See Past Scents
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src="https://c.animaapp.com/moipan2pzKglz8/img/mask-group.png"
            alt="Why Sillage"
            className="w-full max-w-sm h-auto object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};
