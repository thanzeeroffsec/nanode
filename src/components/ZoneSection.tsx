"use client";
import React, { useState } from "react";
import { dataContent } from "../data";
import ZoneCard from "./ZoneCard";

const ZoneSection: React.FC = () => {
  return (
    <section
      className="flex gap-5 flex-wrap justify-center scroll-m-52 md:flex-row flex-col"
      id="zones"
    >
      {/** zone card */}

      <ZoneCard
        zone={"zone1"}
        title={`sector 1 & 2`}
        content={dataContent[0].content}
      />
      <ZoneCard
        zone={"zone2"}
        title={`sector 3`}
        content={dataContent[1].content}
      />
      <ZoneCard
        zone={"zone3"}
        title={`sector 4`}
        content={dataContent[2].content}
      />
      <ZoneCard
        zone={"zone4"}
        title={`sector 5`}
        content={dataContent[3].content}
      />
      <ZoneCard
        zone={"zone5"}
        title={`sector 6`}
        content={dataContent[4].content}
      />
      <ZoneCard
        zone={"zone6"}
        title={`sector 7`}
        content={dataContent[5].content}
      />
    </section>
  );
};

export default ZoneSection;
