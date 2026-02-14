import { useScrollReveal } from "@/hooks/useScrollReveal";

const LatestReleaseSection = () => {
  const { ref: btnRef, isVisible: btnVisible } = useScrollReveal(0.3);

  return (
    <section
      id="music"
      className="relative py-16 md:py-20 bg-cosmos"
    >
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

     <div className="max-w-6xl mx-auto space-y-15 px-6">


        {/* YouTube Video */}
        <div className="text-center mb-8">
  <h2 className="font-heading text-3xl md:text-4xl text-gold tracking-[0.3em]">
    LATEST RELEASE
  </h2>
  <p className="font-body text-muted-foreground mt-3 text-sm md:text-base">
    For the moments when you need to disappear
  </p>
</div>

        <div className="aspect-video shadow-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/434O8aggl2M"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

       {/* Streaming Buttons */}
<div className="flex justify-center gap-6 mt-8">

  {/* YouTube Button */}
  <a
    href="https://www.youtube.com/@iamanriyaz"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-9 py-5 border border-gold text-gold text-sm font-heading tracking-cinematic hover:bg-gold hover:text-black transition-all duration-300"
  >
    WATCH ON YOUTUBE
  </a>

{/* Apple Music Button */}
<a
  href="https://music.apple.com/in/artist/aman-riyaz/1690065435"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center px-8 py-3 border border-gold text-gold text-sm font-heading tracking-cinematic hover:bg-gold hover:text-black transition-all duration-300"
>
  LISTEN ON APPLE MUSIC
</a>


</div>


        {/* Spotify Embed */}
       <div className="w-full mt-8">
  <iframe
    src="https://open.spotify.com/embed/artist/7hDyHVSs1dh6LiShVzCfK5?theme=0"
    width="100%"
    height="380"
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>
</div>


        {/* Spotify Main CTA */}
        <div
          ref={btnRef}
          className={`text-center transition-all duration-700 delay-300 ${
            btnVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
         
        </div>

      </div>
    </section>
  );
};

export default LatestReleaseSection;
