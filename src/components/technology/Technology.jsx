import data from "../../data.json";
import { publicAsset } from "../../utils/publicAsset";

import TechnologyImage from "./TechnologyImage";
import NumberPagination from "./NumberPagination";
import TechnologyInfo from "./TechnologyInfo";
import { useState } from "react";

export default function Technology() {
  const [current, setCurrent] = useState(0);

  const techData = data.technology[current];

  function handleCurrent(value) {
    setCurrent(value);
  }

  return (
    <section className="relative min-h-screen pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-44 lg:pb-24 px-0 lg:pl-24 overflow-hidde flex flex-col justify-between">
      {/* Background */}
      <picture className="absolute inset-0 -z-10 w-full h-full object-cover">
        <source
          media="(min-width: 1024px)"
          srcSet={publicAsset("/technology/background-technology-desktop.jpg")}
        />
        <source
          media="(min-width: 768px)"
          srcSet={publicAsset("/technology/background-technology-tablet.jpg")}
        />
        <img
          src={publicAsset("/technology/background-technology-mobile.jpg")}
          alt=""
          className="w-full h-full object-cover"
        />
      </picture>

      <div className="max-w-7xl mx-auto w-full flex flex-col flex-grow">
        {/* Title */}
        <h2 className="text-white font-nav text-base md:text-xl lg:text-[28px] tracking-nav uppercase mb-8 md:mb-12 lg:mb-14 text-center md:text-left px-6 md:px-16 lg:px-0">
          <span className="text-white/25 font-bold mr-4">03</span>
          Space launch 101
        </h2>

        {/* Content Container */}
        <article className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16 w-full">
          {/* Left: Pagination & Info */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-6 md:px-16 lg:px-0 w-full lg:w-auto">
            <NumberPagination handleCurrent={handleCurrent} current={current} />

            <TechnologyInfo name={techData.name} desc={techData.description} />
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-auto flex justify-end">
            <TechnologyImage img={publicAsset(techData.images)} name={techData.name} />
          </div>
        </article>
      </div>
    </section>
  );
}
