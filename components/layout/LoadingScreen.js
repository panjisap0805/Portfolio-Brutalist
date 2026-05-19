import React, { useState, useEffect } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Random increment to simulate loading
    const interval = setInterval(() => {
      setProgress(prev => {
        // randomly increment by 5-15 to simulate natural loading
        const next = prev + Math.floor(Math.random() * 10) + 5;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 600); // Wait slightly at 100% before firing complete
          return 100;
        }
        return next;
      });
    }, 150); // fast loading for better UX

    return () => clearInterval(interval);
  }, [onComplete]);

  // Determine styles for each module based on progress
  const getModuleClasses = (rangeStart, rangeEnd) => {
    if (progress < rangeStart) {
      // Not yet reached
      return {
        boxClasses: "border-2 border-black p-4 bg-white opacity-50 transition-colors cursor-default",
        textClasses: "font-label text-xs font-bold"
      };
    }
    if (progress >= rangeStart && progress <= rangeEnd) {
      // Active (blinking)
      return {
        boxClasses: "border-2 border-black p-4 bg-white transition-colors cursor-default",
        textClasses: "font-label text-xs font-bold animate-pulse text-primary"
      };
    }
    // Completed (> rangeEnd) (green color)
    return {
      boxClasses: "border-2 border-black p-4 bg-[#00FF00] transition-colors cursor-default",
      textClasses: "font-label text-xs font-bold text-black"
    };
  };

  const mod1 = getModuleClasses(0, 10);
  const mod2 = getModuleClasses(11, 30);
  const mod3 = getModuleClasses(31, 98);

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col justify-center items-center p-6 md:p-12">
      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end w-full">
          {/* Progress Diagnostics */}
          <div className="md:col-span-8 md:col-start-3 flex flex-col gap-6">
            <div className="border-2 border-black p-6 bg-white shadow-[8px_8px_0_0_#000]">
              <div className="flex justify-between items-end mb-4">
                <span className="font-label text-lg font-bold">LOADING...</span>
                <span className="font-label text-2xl font-bold text-primary">STATUS: {progress}% COMPLETE</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-12 border-2 border-black p-1 bg-gray-100">
                <div
                  className="h-full bg-primary transition-all duration-200 ease-out relative"
                  style={{ width: `${progress}%` }}
                >
                  <div
                    className="absolute inset-0 bg-white/20"
                    style={{
                      backgroundImage: 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,.2) 25%, rgba(255,255,255,.2) 50%, transparent 50%, transparent 75%, rgba(255,255,255,.2) 75%, rgba(255,255,255,.2))',
                      backgroundSize: '20px 20px'
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Fetch List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* MODULE 01 */}
              <div className={mod1.boxClasses}>
                <span className="font-label text-xs opacity-60 block mb-1">MODULE_01</span>
                <span className={mod1.textClasses}>[LOADED: FONT_SPACE_GROTESK]</span>
              </div>

              {/* MODULE 02 */}
              <div className={mod2.boxClasses}>
                <span className="font-label text-xs opacity-60 block mb-1">MODULE_02</span>
                <span className={mod2.textClasses}>[SCRIPTS: LOAD_JAVA_SCRIPTS]</span>
              </div>

              {/* MODULE 03 */}
              <div className={mod3.boxClasses}>
                <span className="font-label text-xs opacity-60 block mb-1">MODULE_03</span>
                <span className={mod3.textClasses}>[FETCHING: ASSET_PROJECT_IMAGE]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
