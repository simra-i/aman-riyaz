import { Music, Instagram, Youtube, X } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FooterSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <footer className="relative py-10 md:py-15 bg-cosmos border-t border-border">
      <div
        ref={ref}
        className={`container mx-auto px-6 md:px-12 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Name */}
        <h3 className="
  font-heading
  text-lg
  sm:text-xl
  md:text-4xl
  text-gold
  tracking-[0.25em]
  md:tracking-ultra
  mb-6
">
  A M A N R I Y A Z
</h3>


       
        {/* Copyright */}
        <p className="font-body text-xs text-muted-foreground tracking-wider">
          &copy; {new Date().getFullYear()} AMAN RIYAZ. ALL RIGHTS RESERVED.
        </p>

      </div>
    </footer>
  );
};

export default FooterSection;
