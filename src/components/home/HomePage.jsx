export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 md:pt-40 md:pb-20 lg:pt-48 lg:pb-24 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Background */}
      <picture className="absolute inset-0 -z-10 w-full h-full object-cover">
        <source
          media="(min-width: 1024px)"
          srcSet="/home/background-home-desktop.jpg"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/home/background-home-tablet.jpg"
        />
        <img 
          src="/home/background-home-mobile.jpg" 
          alt="Space background" 
          className="w-full h-full object-cover"
        />
      </picture>

      {/* Main Container (Hero & Explore) */}
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between my-auto gap-16 lg:gap-0">
        
        {/* Hero Text */}
        <div className="max-w-md text-center lg:text-left flex flex-col gap-4 md:gap-6">
          <span className="text-gray-300 text-base md:text-xl tracking-[2.7px] md:tracking-[3.38px] uppercase font-sans">
            So, you want to travel to
          </span>

          <h1 className="text-white text-[80px] md:text-[150px] font-serif uppercase leading-none">
            Space
          </h1>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed font-sans">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>

        {/* Explore Button */}
        <div className="flex items-center justify-center">
          <a
            href="/destination"
            className="relative flex items-center justify-center w-36 h-36 md:w-60 md:h-60 bg-white text-[#0B0D17] font-serif text-lg md:text-2xl uppercase rounded-full transition-all duration-300 hover:ring-[40px] hover:ring-white/10 shadow-2xl"
          >
            Explore
          </a>
        </div>

      </div>
    </section>
  );
}