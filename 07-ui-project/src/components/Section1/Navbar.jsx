import React from "react";
import "../Section1/index.css"; // 👈 to use the shine effect CSS

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-8 px-20 bg-gradient-to-r from-[#141E30] to-[#243B55] shadow-xl backdrop-blur-lg">
      {/* Glass Text with Shine */}
      <h4
        className="uppercase font-semibold text-lg glass-text px-6 py-2 rounded-full 
                     bg-white/10 backdrop-blur-md border border-white/20 
                     shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
      >
        Target Audience
      </h4>

      {/* Glass Button */}
      <button
        className="uppercase tracking-widest text-sm font-semibold 
                         text-white px-8 py-3 rounded-full 
                         bg-white/20 border border-white/30 backdrop-blur-xl 
                         shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] 
                         hover:bg-white/30 hover:scale-105 transition-all duration-300"
      >
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
