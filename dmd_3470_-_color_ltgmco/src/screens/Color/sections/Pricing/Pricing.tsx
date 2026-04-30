const plans = [
  {
    name: "Wanderer",
    price: "$18/mo",
    tagline: "For the curious.",
    featured: false,
    features: [
      "1 vial per month (8ml)",
      "Destination card included",
      "Free shipping",
      "Scent archive access",
      "Cancel anytime",
    ],
  },
  {
    name: "Voyager",
    price: "$28/mo",
    tagline: "For the devoted.",
    featured: true,
    features: [
      "2 vials per month (8ml each)",
      "Destination card included",
      "Free shipping",
      "Swap any vial once",
      "Early access to limited editions",
    ],
  },
  {
    name: "Connoisseur",
    price: "$45/mo",
    tagline: "For the collector.",
    featured: false,
    features: [
      "3 vials per month (8ml each)",
      "Handwritten destination card",
      "Free express shipping",
      "Unlimited swaps",
      "Exclusive annual gift",
    ],
  },
];

export const Pricing = (): JSX.Element => {
  return (
    <section className="bg-[#f5f1eb] w-full px-10 lg:px-24 py-24">
      <h2 className="font-['Cormorant',Helvetica] font-normal text-[#2c2114] text-5xl text-center mb-16">
        Choose your plan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`relative rounded-2xl p-8 flex flex-col gap-6 ${
              plan.featured
                ? "bg-[#e8ddd0] shadow-xl ring-2 ring-[#c4a97d] -translate-y-2"
                : "bg-[#e8ddd0]"
            }`}
          >
            <div className="flex flex-col gap-1">
              <span className="font-['DM_Sans',Helvetica] font-normal text-[#7a6a52] text-base">{plan.name}</span>
              <span className="font-['DM_Sans',Helvetica] font-bold text-[#2c2114] text-3xl tracking-wide">{plan.price}</span>
              <span className="font-['DM_Sans',Helvetica] font-light text-[#2c2114] text-sm">{plan.tagline}</span>
            </div>
            <ul className="flex flex-col gap-3">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#c4a97d] shrink-0" />
                  <span className="font-['DM_Sans',Helvetica] font-normal text-[#2c2114] text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-md font-['DM_Sans',Helvetica] font-normal text-sm transition-colors ${
                plan.featured
                  ? "bg-[#c4a97d] text-[#2c2114] shadow-md hover:bg-[#b89868]"
                  : "bg-[#c4a97d] text-[#2c2114] hover:bg-[#b89868]"
              }`}
            >
              Start free trial
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
