import React from "react";

const ZoneCard = ({ title, content }: any) => {
  return (
    <div
      className={`glassCard border-2 border-gray-500/[0.2] w-full sm:w-[250px] text-white cursor-pointer overflow-hidden transition-[height,opacity] duration-500 ease-in-out `}
    >
      <div className="flex gap-5  flex-col items-center justify-center p-5">
        <h3 className="font-bold text-lg sm:text-xl text-nowrap font-mono text-yellow-400">
          {title}
        </h3>
        <div
          className={`w-full overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out `}
        >
          <p className="text-[15px] text-[400] mt-3 text-center text-yellow-400">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZoneCard;
