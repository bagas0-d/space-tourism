export default function NumberPagination({ handleCurrent, current }) {
  return (
    <div className="flex lg:flex-col gap-4 md:gap-8 items-center justify-center">
      {[0, 1, 2].map((index) => (
        <button
          key={index}
          onClick={() => handleCurrent(index)}
          className={`w-10 h-10 md:w-16 md:h-16 rounded-full font-heading text-base md:text-2xl transition-all duration-300 flex items-center justify-center border ${
            current === index
              ? "bg-white text-space-900 border-white"
              : "bg-transparent text-white border-white/25 hover:border-white"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
