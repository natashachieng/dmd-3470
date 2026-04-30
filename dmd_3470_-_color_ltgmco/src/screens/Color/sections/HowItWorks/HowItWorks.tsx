export const HowItWorks = (): JSX.Element => {
  const steps = [
    {
      icon: "https://c.animaapp.com/moipan2pzKglz8/img/front-hand.svg",
      title: "We Curate.",
      desc: "Our perfumers select a destination-inspired scent each month — places you've been, or dream of going.",
    },
    {
      icon: "https://c.animaapp.com/moipan2pzKglz8/img/package.svg",
      title: "We Deliver.",
      desc: "An 8ml travel vial arrives at your door, with a card telling the story of where this scent takes you.",
    },
    {
      icon: "https://c.animaapp.com/moipan2pzKglz8/img/search.svg",
      title: "You Discover.",
      desc: "Wear it, keep it, or swap it. Build a collection of places, one scent at a time.",
    },
  ];

  return (
    <section className="bg-[#f5f1eb] w-full px-10 lg:px-24 py-24">
      <div className="text-center mb-14">
        <h2 className="font-['Cormorant',Helvetica] font-semibold text-[#2c2114] text-5xl mb-2">How it Works</h2>
        <div className="font-['Cormorant',Helvetica] font-light italic text-[#7a6a52] text-3xl tracking-wide mb-2">
          A scent ritual, simplified.
        </div>
        <p className="font-['DM_Sans',Helvetica] font-extralight text-[#827562] text-xl">
          Three steps. One monthly surprise.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="bg-[#e8ddd0] rounded-2xl p-8 flex flex-col items-center text-center gap-4">
            <div className="w-12 h-12 bg-[#c4a97d] rounded-xl flex items-center justify-center">
              <img src={step.icon} alt={step.title} className="w-7 h-7" />
            </div>
            <h3 className="font-['Cormorant',Helvetica] font-normal text-[#2c2114] text-3xl">{step.title}</h3>
            <p className="font-['DM_Sans',Helvetica] font-normal text-[#7a6a52] text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
