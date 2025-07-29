import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.2, delay: progress === 100 ? 0.4 : 0 }}
    >
      {/* Logo Text */}
      <div className="text-5xl sm:text-4xl md:text-5xl font-bold text-white flex items-center gap-1">
        <span className="text-blue-400">vip</span>
        <span>folio</span>
        <span className="text-blue-400 animate-blink">_</span>
      </div>

      {/* Progress Bar */}
      <div className="w-[170px] mt-7">
        <div className="h-[6px] w-full bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-blue-400"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
