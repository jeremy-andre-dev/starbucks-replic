"use client";

// Define la interfaz para las propiedades del componente
interface MenuNavBarProps {
  toggleMenu: () => void; // La función que se ejecutará al hacer clic
  isOpen: boolean; // Estado que indica si el menú está abierto o cerrado
}

const MenuNavBar: React.FC<MenuNavBarProps> = ({ toggleMenu, isOpen }) => {
  return (
    <div className="">
      {/* Icono del menú */}
      <div onClick={toggleMenu} className="relative h-12 w-12 cursor-pointer">
        {/* Línea superior */}
        <div
          className={`absolute left-1/2 top-4 h-[4px] w-8 rounded-full bg-black transition-all duration-300 ease-in-out ${
            isOpen
              ? "translate-x-[-50%] translate-y-[8px] rotate-45"
              : "-translate-x-1/2"
          }`}
        />
        {/* Línea media */}
        <div
          className={`absolute left-1/2 top-6 h-[4px] w-8 -translate-x-1/2 rounded-full bg-black transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Línea inferior */}
        <div
          className={`absolute left-1/2 top-8 h-[4px] w-8 rounded-full bg-black transition-all duration-300 ease-in-out ${
            isOpen
              ? "translate-x-[-50%] translate-y-[-8px] -rotate-45"
              : "-translate-x-1/2"
          }`}
        />
      </div>
    </div>
  );
};

export default MenuNavBar;
