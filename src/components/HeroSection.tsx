import heroImage from "@/assets/hero-guitar.png";

const HeroSection = () => {
  return (
   <section
  id="home"
className="relative h-screen flex flex-col items-center justify-center gradient-hero overflow-hidden"

>

     
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, hsl(345 60% 25%) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Artist Image */}
        <div className="relative mb-4 flex justify-center">
  <img
    src={heroImage}
    alt="Aman Riyaz holding a guitar"
    className="h-[58vh] md:h-[85vh] object-contain drop-shadow-2xl hero-reveal"
  />

  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_65%,hsl(345_70%_8%)_100%)]" />
</div>

<h1 className="font-heading 
               text-2xl 
               sm:text-3xl 
               md:text-4xl 
               lg:text-6xl 
               text-gold 
               tracking-[0.2em] 
               sm:tracking-[0.28em] 
               md:tracking-[0.35em] 
               leading-tight 
               hero-reveal-delay">

  A M A N R I Y A Z
</h1>

<h2 className="font-serif text-xs md:text-sm tracking-[0.37em] text-gold-light mt-1 leading-none hero-reveal-delay"
 style={{animationDelay:"0.8s"}}
 >
  INDIAN POP ARTIST
</h2>

      
      </div>

      {/* Bottom fade */}
     
    </section>
  );
};

export default HeroSection;
