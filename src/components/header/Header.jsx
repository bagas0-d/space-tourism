import { useState } from "react";

import NavLinks from "./NavLinks";
import NavMobileMenu from "./NavMobileMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header>
      <img src="" alt="" />

      <img src="" alt="" />

      <NavLinks />

      <NavMobileMenu />
    </header>
  );
}
