export default function DestinationStats({ stats }) {
  return (
    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-8 sm:gap-16">
      <div className="flex flex-col gap-3">
        <span className="text-space-300 font-nav text-xs md:text-sm tracking-nav uppercase">
          Avg. distance
        </span>
        <span className="text-white font-heading text-2xl md:text-[28px] uppercase">
          {stats.distance}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-space-300 font-nav text-xs md:text-sm tracking-nav uppercase">
          Est. travel time
        </span>
        <span className="text-white font-heading text-2xl md:text-[28px] uppercase">
          {stats.travel}
        </span>
      </div>
    </div>
  );
}
