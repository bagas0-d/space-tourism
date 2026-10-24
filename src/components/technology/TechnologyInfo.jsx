export default function TechnologyInfo({ name, desc }) {
  return (
    <div className="flex flex-col text-center lg:text-left max-w-md">
      <span className="text-space-300 font-nav text-sm md:text-base tracking-nav uppercase mb-2 md:mb-3">
        The terminology...
      </span>
      <h1 className="text-white font-heading text-2xl md:text-4xl lg:text-[56px] uppercase leading-none mb-4 md:mb-6">
        {name}
      </h1>
      <p className="text-space-300 font-body text-sm md:text-base lg:text-lg leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
