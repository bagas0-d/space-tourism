export default function DestinationInfo({ data }) {
  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <h1 className="text-white font-heading text-5xl md:text-7xl lg:text-[100px] uppercase leading-none">
        {data.name}
      </h1>

      <p className="text-space-300 font-body text-sm md:text-base lg:text-lg leading-relaxed">
        {data.desc}
      </p>
    </div>
  );
}
