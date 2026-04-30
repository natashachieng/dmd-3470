export const VideoTeaser = (): JSX.Element => {
  return (
    <section className="bg-[#6c6868] w-full py-24 px-10 lg:px-24 flex flex-col items-center justify-center gap-10">
      <p className="font-['Cormorant',Helvetica] font-normal italic text-[#2c2114] text-4xl lg:text-5xl text-center leading-tight">
        See what arrives at your door...
      </p>
      <button className="w-20 h-20 bg-[#7a6a52] rounded-full flex items-center justify-center hover:bg-[#8f7f66] transition-colors shadow-lg">
        <img
          src="https://c.animaapp.com/moipan2pzKglz8/img/play-arrow-filled.svg"
          alt="Play"
          className="w-10 h-10"
        />
      </button>
    </section>
  );
};
