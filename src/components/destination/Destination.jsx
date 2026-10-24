import { useState } from "react";
import data from "../../data.json";

import DestinationImage from "./DestinationImage";
import TabList from "./TabList";
import DestinationInfo from "./DestinationInfo";
import DestinationStats from "./DestinationStats";

export default function Destination() {
  const [current, setCurrent] = useState(0);

  const destinationData = data.destinations[current];

  function handleCurrent(value) {
    setCurrent(value);
  }

  return (
    <section className="relative min-h-screen pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-44 lg:pb-24 px-6 md:px-16 lg:px-24 overflow-hidden flex flex-col">
      {/* Background */}
      <picture className="absolute inset-0 -z-10 w-full h-full object-cover">
        <source
          media="(min-width: 1024px)"
          srcSet="/destination/background-destination-desktop.jpg"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/destination/background-destination-tablet.jpg"
        />
        <img
          src="/destination/background-destination-mobile.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </picture>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto w-full flex flex-col flex-grow justify-center">
        {/* Page Title */}
        <h2 className="text-white font-nav text-base md:text-xl lg:text-[28px] tracking-nav uppercase mb-8 md:mb-12 lg:mb-14 text-center md:text-left">
          <span className="text-white/25 font-bold mr-4">01</span>
          Pick your destination
        </h2>

        {/* Content Grid/Flex */}
        <article className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          {/* Left: Image */}
          <div className="w-full flex justify-center lg:justify-start">
            <DestinationImage
              img={destinationData.images.webp}
              name={destinationData.name}
            />
          </div>

          {/* Right: Details */}
          <div className="w-full max-w-lg flex flex-col text-center lg:text-left">
            <TabList handleCurrent={handleCurrent} current={current} />

            <DestinationInfo
              data={{
                name: destinationData.name,
                desc: destinationData.description,
              }}
            />

            <div className="w-full h-[1px] bg-[#383B4B] my-6 md:my-8"></div>

            <DestinationStats
              stats={{
                distance: destinationData.distance,
                travel: destinationData.travel,
              }}
            />
          </div>
        </article>
      </div>
    </section>
  );
}
