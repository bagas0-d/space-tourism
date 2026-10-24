import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import data from "../../data.json";

import CrewTitle from "./CrewTitle";
import CrewInfo from "./CrewInfo";

const crew = data.crew;

export default function Crew() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  useEffect(() => {
    if (!emblaApi) return;

    const updateCarousel = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setScrollSnaps(emblaApi.scrollSnapList());
    };

    updateCarousel();

    emblaApi.on("select", updateCarousel);
    emblaApi.on("reInit", updateCarousel);

    return () => {
      emblaApi.off("select", updateCarousel);
      emblaApi.off("reInit", updateCarousel);
    };
  }, [emblaApi]);

  return (
    <section className="relative min-h-screen pt-32 pb-0 md:pt-40 xl:pt-44 px-6 md:px-16 lg:px-24 overflow-hidden flex flex-col justify-between">
      {/* Background */}
      <picture className="absolute inset-0 -z-10 w-full h-full object-cover">
        <source
          media="(min-width: 1024px)"
          srcSet="/crew/background-crew-desktop.jpg"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/crew/background-crew-tablet.jpg"
        />
        <img
          src="/crew/background-crew-mobile.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </picture>

      <div className="max-w-7xl mx-auto w-full flex flex-col flex-grow">
        <div ref={emblaRef} className="overflow-hidden flex-grow">
          {/* Carousel track */}
          <div className="flex touch-pan-y h-full">
            {crew.map((member) => (
              <article
                key={member.name}
                className="min-w-0 shrink-0 basis-full flex flex-col"
              >
                <CrewTitle />

                <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between flex-grow gap-8 lg:gap-12">
                  {/* Left Column: Info & Dots */}
                  <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg lg:pb-24">
                    <CrewInfo
                      role={member.role}
                      name={member.name}
                      bio={member.bio}
                    />

                    {/* Dot navigation */}
                    <div
                      className="flex gap-4 items-center justify-center lg:justify-start"
                      aria-label="Crew navigation"
                    >
                      {scrollSnaps.map((_, index) => (
                        <button
                          key={index}
                          type="button"
                          aria-label={`Show crew member ${index + 1}`}
                          aria-current={
                            selectedIndex === index ? "true" : undefined
                          }
                          onClick={() => emblaApi?.scrollTo(index)}
                          className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                            selectedIndex === index
                              ? "bg-white"
                              : "bg-white/20 hover:bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Image */}
                  <div className="w-full flex justify-center lg:justify-end items-end h-full">
                    <img
                      src={member.images.webp}
                      alt={member.name}
                      className="max-h-[340px] md:max-h-[530px] lg:max-h-[600px] object-contain"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
