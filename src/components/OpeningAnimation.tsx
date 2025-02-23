import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OpeningAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1121]"
        >
          {/* Background gradients */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent opacity-50" />
            <div className="absolute inset-0 bg-gradient-conic from-blue-500/10 via-cyan-500/10 to-blue-500/10 animate-spin-slow" style={{ animationDuration: '20s' }} />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          </div>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-64 h-64 md:w-96 md:h-96"
          >
            {/* Animated background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '-2s' }} />
            
            {/* Video container */}
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-[#0B1121] mix-blend-multiply" />
              <video
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover mix-blend-screen opacity-90"
                onEnded={() => setIsVisible(false)}
                style={{
                  filter: 'contrast(1.2) brightness(1.1)',
                }}
              >
                <source src="/opening video.mp4" type="video/mp4" />
              </video>
              
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1121] via-transparent to-[#0B1121] mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0B1121] via-transparent to-[#0B1121] mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#0B1121] opacity-60" />
            </div>
            
            {/* Shine effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-shine" />
            <div className="absolute inset-0 rounded-full border border-blue-500/20" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpeningAnimation;
