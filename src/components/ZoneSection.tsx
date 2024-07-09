"use client";
import React, { useState } from "react";

import ZoneCard from "./ZoneCard";

const ZoneSection: React.FC = () => {
  const [showSection, setShowSection] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleSection = (zone: string) => {
    setShowSection((prev) => ({ ...prev, [zone]: !prev[zone] }));
  };

  return (
    <section
      className="flex gap-5 flex-wrap justify-center scroll-m-52 md:flex-row flex-col"
      id="zones"
    >
      {/** zone card */}
      {Array.from({ length: 8 }, (_, i) => (
        <ZoneCard
          key={i}
          showSection={showSection}
          toggleSection={toggleSection}
          zone={"zone" + i + 1}
          title={`sector ${i + 1}`}
        />
      ))}
    </section>
  );
};

export default ZoneSection;
