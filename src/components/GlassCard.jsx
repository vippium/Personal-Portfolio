import React from "react";
import clsx from "clsx";

const GlassCard = ({ children, className = "" }) => {
  return (
    <div
      className={clsx(
        "bg-white/10 border border-white/20 backdrop-blur-lg rounded-3xl shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
