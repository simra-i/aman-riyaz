
import { Music, Instagram, Youtube, Twitter } from "lucide-react";

const ConnectSection = () => {
  return (
   <section className="relative py-16 md:py-20 bg-cosmos
 text-center">
      <div className="container mx-auto px-6">

        {/* Title */}
        <h2 className="font-heading text-3xl md:text-4xl text-gold tracking-[0.3em]">
          CONNECT
        </h2>

        {/* Subtext */}
        <p className="font-body text-muted-foreground mt-6 text-base md:text-lg max-w-xl mx-auto">
          No algorithms. Just art. Join the conversation.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mt-10">
<a
    href="https://open.spotify.com/artist/7hDyHVSs1dh6LiShVzCfK5"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gold hover:text-gold-light hover:scale-110 transition duration-300"
  >
    <Music className="w-7 h-7" />
  </a>
  <a
    href="https://www.instagram.com/amanriyaz"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gold hover:scale-110 transition duration-300"
  >
    <Instagram className="w-6 h-6" />
  </a>


  <a
    href="https://x.com/iamanriyaz"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gold hover:scale-110 transition duration-300"
  >
    <Twitter className="w-6 h-6" />
  </a>

  <a
    href="https://www.youtube.com/@iamanriyaz"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gold hover:scale-110 transition duration-300"
  >
    <Youtube className="w-6 h-6" />
  </a>

</div>

      </div>
    </section>
  );
};

export default ConnectSection;
