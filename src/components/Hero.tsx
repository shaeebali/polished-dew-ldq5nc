export const Hero = () => {
  return (
    <section
      className="h-dvh 2xl:h-[70vh] bg-slate-800"
      id="hero"
      aria-labelledby="hero-heading"
    >
      <div
        className="w-full h-full px-8 pt-6 pb-6 md:pt-9 flex flex-col items-center
          justify-center"
      >
        <h1
          id="hero-heading"
          className="font-fraunces text-center text-h1 font-bold max-w-4xl"
        >
          Welcome To The User Management Portal
        </h1>
        <p className="text-center my-6 max-w-[60ch] text-red-500">
          Providing Real Time Results!
        </p>        
      </div>
    </section>
  );
};
