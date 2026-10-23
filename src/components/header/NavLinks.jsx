import { NavLink } from "react-router-dom";

export default function NavLinks({ isOpen }) {
  // Styling untuk status active & inactive pada NavLink
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 py-3 md:py-8 border-r-4 md:border-r-0 md:border-b-2 transition-all duration-300 text-sm tracking-widest uppercase ${
      isActive 
        ? "border-white text-white font-normal" 
        : "border-transparent text-gray-300 hover:border-gray-500 hover:text-white"
    }`;

  // Kondisi responsive & mobile drawer
  const navContainerClass = isOpen
    ? "fixed inset-y-0 right-0 w-[254px] bg-[#0B0D17]/90 backdrop-blur-2xl flex flex-col pt-36 pl-8 gap-4 z-40 shadow-2xl transition-all duration-300 md:static md:w-auto md:bg-white/5 md:backdrop-blur-xl md:flex-row md:p-0 md:px-12 lg:px-16 md:gap-10 md:items-center"
    : "hidden md:flex md:bg-white/5 md:backdrop-blur-xl md:flex-row md:px-12 lg:px-16 md:gap-10 md:items-center";

  return (
    <nav className={navContainerClass}>
      <NavLink to="/" className={linkClass}>
        <span className="font-bold">00</span>
        <span>Home</span>
      </NavLink>

      <NavLink to="/destination" className={linkClass}>
        <span className="font-bold">01</span>
        <span>Destination</span>
      </NavLink>

      <NavLink to="/crew" className={linkClass}>
        <span className="font-bold">02</span>
        <span>Crew</span>
      </NavLink>

      <NavLink to="/technology" className={linkClass}>
        <span className="font-bold">03</span>
        <span>Technology</span>
      </NavLink>
    </nav>
  );
}