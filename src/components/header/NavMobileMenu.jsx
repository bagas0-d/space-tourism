export default function NavMobileMenu({ isOpen, toggle }) {
  return (
    <button 
      onClick={toggle} 
      className="md:hidden z-50 focus:outline-none p-2"
      aria-label="Toggle menu"
    >
      <img
        src={isOpen ? "/shared/icon-close.svg" : "/shared/icon-hamburger.svg"}
        alt=""
        className="w-6 h-6"
      />
    </button>
  );
}