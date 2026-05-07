import React from "react";

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2D2B84]">
      {/* 
        Using simple transform scaling and opacity animations 
        to simulate a pop-up effect.
      */}
      <div className="animate-[scale-up_1s_ease-out_forwards] sm:max-w-md w-full px-8">
        <img
          src="src/assets/doctor-fittings.png"
          alt="Doctor Fittings Logo"
          className="w-full h-auto"
        />
      </div>

      <style>{`
        @keyframes scale-up {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
