export default function DestinationImage({ img, name }) {
  return (
    <div className="w-44 h-44 md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px]">
      <img
        src={img}
        alt={name || "planet"}
        className="w-full h-full object-contain animate-fade-in"
      />
    </div>
  );
}
