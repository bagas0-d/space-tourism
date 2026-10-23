import { useState } from "react";
import NavLinks from "./NavLinks";
import NavMobileMenu from "./NavMobileMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="absolute top-0 left-0 right-0 mx-auto w-full max-w-7xl flex items-center justify-between px-6 pt-6 md:px-10 md:pt-0 lg:pt-10 z-40">
      {/* Logo */}
      <div className="flex items-center lg:ml-12 shrink-0">
        <img
          src="/shared/logo.svg"
          alt="Space tourism logo"
          className="w-10 h-10 md:w-12 md:h-12 "
        />
      </div>

      {/* Garis dekoratif horizontal di desktop */}
      <div className="hidden lg:block h-[1px] bg-white/25 w-full -mr-16 ml-16 z-50 relative lg:-translate-x-8"></div>

      {/* Navigasi Link */}
      <NavLinks isOpen={isOpen} />

      {/* Tombol Hamburger Mobile */}
      <NavMobileMenu isOpen={isOpen} toggle={toggle} />
    </header>
  );
}
