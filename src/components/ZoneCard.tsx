import React from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const ZoneCard = ({ showSection, toggleSection, zone, title }: any) => {
  return (
    <div
      className={`glassCard border-2 border-gray-500/[0.2] w-full sm:w-[250px] text-white cursor-pointer overflow-hidden transition-[height,opacity] duration-500 ease-in-out ${
        showSection[zone] ? "h-full" : "h-[200px]"
      }`}
      onClick={() => toggleSection(zone)}
    >
      <div className="flex gap-5  flex-col items-center justify-center p-5">
        <h3 className="font-bold text-lg sm:text-xl text-nowrap font-mono text-yellow-400">
          {title}
        </h3>
        <div
          className={`w-full overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
            showSection[zone] ? "max-h-32  opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="list-disc list-inside text-xl leading-10 text-yellow-300 w-full">
            <li>something</li>
            <li>something 1</li>
            <li>something 2</li>
          </ul>
        </div>

        <span className="text-yellow-300  text-sm cursor-pointer hover:underline flex gap-1">
          View
          {showSection.zone1 ? (
            <MdKeyboardArrowUp size={20} />
          ) : (
            <MdKeyboardArrowDown size={25} />
          )}
        </span>
      </div>
    </div>
  );
};

export default ZoneCard;
