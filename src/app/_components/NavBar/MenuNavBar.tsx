"use client";
import { IoMenu } from "react-icons/io5";
import { PiMapPinFill } from "react-icons/pi";

import { useState } from "react";

const MenuNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      {/* Icono del menú */}
      <div onClick={toggleMenu} className="">
        <IoMenu size="3rem" />
      </div>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute right-0 top-[5rem] rounded-bl-2xl bg-white p-5 shadow-lg -z-10">
          <ul className="flex flex-col gap-10 pb-6 font-medium">
            <li className="flex">MENÚ</li>
            <li className="flex">REWARDS</li>
            <li className="flex">TIENDAS</li>
          </ul>

          {/* Right NavBar _____________________________*/}
          <div className="flex flex-col gap-6 border-t-[1px] border-black/35 pt-6">
            <div className="flex items-center gap-8 text-[0.75rem] font-bold">
              <button className="rounded-full border border-black px-[1rem] py-[0.35rem] transition hover:border-[rgba(0,118,55,1)] hover:text-[rgba(0,118,55,1)]">
                Iniciar Sesión
              </button>

              <button className="rounded-full border border-black bg-black px-[1rem] py-[0.35rem] text-white transition hover:bg-[rgba(0,0,0,0.7)]">
                Regístrate
              </button>
            </div>

            <div className="flex items-center gap-2 text-[0.80rem] font-bold">
              <PiMapPinFill size="2rem" />
              <button className="transition hover:text-[rgba(0,118,55,1)]">
                Encuentra tu tienda
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuNavBar;
