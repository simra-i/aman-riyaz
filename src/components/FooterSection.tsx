import { Music, Instagram, Youtube, X } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FooterSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <footer className="relative py-16 md:py-24 bg-cosmos border-t border-border">
      <div
        ref={ref}
        className={`container mx-auto px-6 md:px-12 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Name */}
        <h3 className="font-heading text-2xl md:text-4xl text-gold tracking-ultra mb-8">
          A M A N R I Y A Z
        </h3>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-8 mb-10">

          {/* Spotify */}
          <a
            href="https://open.spotify.com/artist/7hDyHVSs1dh6LiShVzCfK5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-gold transition-all duration-300 hover:scale-110 transform"
            aria-label="Spotify"
          >
            <Music className="w-6 h-6" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/amanriyaz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-gold transition-all duration-300 hover:scale-110 transform"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>

          {/* X */}
          <a
            href="https://x.com/iamanriyaz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-gold transition-all duration-300 hover:scale-110 transform"
            aria-label="X"
          >
            <X className="w-6 h-6" />
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@iamanriyaz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-gold transition-all duration-300 hover:scale-110 transform"
            aria-label="YouTube"
          >
            <Youtube className="w-6 h-6" />
          </a>

        </div>

        {/* Copyright */}
        <p className="font-body text-xs text-muted-foreground tracking-wider">
          &copy; {new Date().getFullYear()} AMAN RIYAZ. ALL RIGHTS RESERVED.
        </p>

      </div>
    </footer>
  );
};

export default FooterSection;
