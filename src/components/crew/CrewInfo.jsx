export default function CrewInfo({ role, name, bio }) {
  return (
    <div className="flex flex-col gap-2 md:gap-4 mb-8 lg:mb-12">
      <p className="text-white/50 font-heading text-lg md:text-2xl lg:text-[32px] uppercase">
        {role}
      </p>
      <p className="text-white font-heading text-2xl md:text-4xl lg:text-[56px] uppercase leading-none">
        {name}
      </p>
      <p className="text-space-300 font-body text-sm md:text-base lg:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
        {bio}
      </p>
    </div>
  );
}
