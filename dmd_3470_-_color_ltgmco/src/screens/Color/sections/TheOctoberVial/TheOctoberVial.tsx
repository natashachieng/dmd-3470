export const TheOctoberVial = (): JSX.Element => {
  return (
    <section className="bg-[#f5f1eb] w-full px-10 lg:px-24 py-24">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-shrink-0">
          <img
            src="https://c.animaapp.com/moipan2pzKglz8/img/picture---bg.png"
            alt="October Vial"
            className="w-64 lg:w-80 h-auto object-cover rounded-2xl"
          />
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="font-['Cormorant',Helvetica] font-bold text-[#2c2114] text-5xl lg:text-6xl leading-tight">
            The October Vial.
          </h2>
          <div className="font-['Cormorant',Helvetica] font-bold italic text-[#2c2114] text-3xl opacity-80">
            For&ecirc;t de Brocéliande.
          </div>
          <p className="font-['DM_Sans',Helvetica] font-light text-[#c4a97d] text-base leading-relaxed">
            Notes of wet oak, white cedar, and black pepper.<br />
            Inspired by the mythic forests of Brittany. Ancient, mossy, still.
          </p>
          <p className="font-['DM_Sans',Helvetica] font-light text-[#7a6a52] text-base">
            8ml · Eau de Parfum · Limited edition
          </p>
          <button className="self-start bg-[#7a6a52] text-[#d9d9d9] font-['DM_Sans',Helvetica] font-light text-sm px-6 py-3 rounded-lg hover:bg-[#8f7f66] transition-colors">
            Get This Scent
          </button>
        </div>
      </div>
    </section>
  );
};
