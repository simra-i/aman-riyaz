import heroImage from "@/assets/hero-guitar.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative  min-h-[100svh] flex flex-col items-center justify-center gradient-hero overflow-hidden"
    >

      <div className="relative z-10 flex flex-col items-center text-center px-4">

        {/* Artist Image */}
        <div className="relative mb-6 flex justify-center">
          <img
            src={heroImage}
            alt="Aman Riyaz holding a guitar"
            className="h-[58vh] md:h-[85vh] object-contain drop-shadow-2xl hero-reveal"
          />
        </div>

        {/* Name */}
        <h1
          className="font-heading 
                     text-2xl 
                     sm:text-3xl 
                     md:text-4xl 
                     lg:text-6xl 
                     text-gold 
                     tracking-[0.2em] 
                     sm:tracking-[0.28em] 
                     md:tracking-[0.35em] 
                     leading-tight 
                     hero-reveal-delay"
        >
          A M A N R I Y A Z
        </h1>

        {/* Subtitle */}
        <h2
          className="font-serif text-xs md:text-sm tracking-[0.37em] text-gold-light mt-2 leading-none hero-reveal-delay"
          style={{ animationDelay: "0.8s" }}
        >
          INDIAN POP ARTIST
        </h2>

      </div>
    </section>
  );
};

export default HeroSection;
