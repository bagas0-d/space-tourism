export default function TabList({ handleCurrent, current }) {
  const destinations = ["Moon", "Mars", "Europa", "Titan"];

  return (
    <ul className="flex items-center justify-center lg:justify-start gap-8 font-nav text-space-300 text-sm md:text-base tracking-nav uppercase mb-5 md:mb-8">
      {destinations.map((item, index) => (
        <li
          key={item}
          onClick={() => handleCurrent(index)}
          className={`cursor-pointer pb-3 border-b-2 transition-all duration-300 ${
            current === index
              ? "border-white text-white"
              : "border-transparent hover:border-white/50 hover:text-white"
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
