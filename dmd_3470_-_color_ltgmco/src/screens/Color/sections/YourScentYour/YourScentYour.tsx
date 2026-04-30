export const YourScentYour = (): JSX.Element => {
  return (
    <section className="bg-[#e8ddd0] w-full px-10 lg:px-24 py-24">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="font-['Cormorant',Helvetica] font-bold text-[#2c2114] text-5xl lg:text-6xl leading-tight">
            Your scent. Your story.
          </h2>
          <div className="font-['Cormorant',Helvetica] font-semibold italic text-[#c4a97d] text-4xl">
            Built for the curious.
          </div>
          <p className="font-['DM_Sans',Helvetica] font-light text-[#2c2114] text-xl leading-relaxed">
            Sillage is for people who travel with intention, collect experiences, and believe a scent is the shortest distance between here and somewhere else.
          </p>
          <p className="font-['DM_Sans',Helvetica] font-light text-[#2c2114] text-xl leading-relaxed">
            Every subscription includes free shipping, a handwritten destination card, and access to our archive of past vials.
          </p>
          <button className="self-start bg-[#c4a97d] text-[#f5f1eb] font-['DM_Sans',Helvetica] font-light text-sm px-6 py-3 rounded-lg hover:bg-[#b89868] transition-colors">
            Start Your Journey
          </button>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src="https://c.animaapp.com/moipan2pzKglz8/img/mask-group-1.png"
            alt="Your Scent Your Story"
            className="w-full max-w-sm h-auto object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};
