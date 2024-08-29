"use client";

import { PiMapPinFill } from "react-icons/pi";
import { IoLogoLinkedin } from "react-icons/io5";

import { useState } from "react";
import Link from "next/link";

import MenuNavBar from "./MenuNavBar";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed flex w-full flex-col items-center bg-white lg:shadow-md">
      <div className="flex w-full items-center justify-center gap-2 bg-black px-4 py-1 text-center text-[0.6rem] font-semibold text-white lg:text-[0.9rem]">
        <p className="flex flex-wrap justify-center gap-2">
          Esta página es un proyecto personal creado para demostrar mis
          habilidades como desarrollador. No es la página oficial de Starbucks.
          <span className="">
            <Link
              href={"https://www.linkedin.com/in/jeremyandre99/"}
              target="_blank"
              className="flex cursor-pointer items-center gap-1 font-medium text-green-500 lg:text-[0.8rem]"
            >
              <IoLogoLinkedin size="1rem" />
              Jeremy.dev
            </Link>
          </span>
        </p>
      </div>

      <div
        className={`relative flex h-[5rem] w-full items-center justify-center py-6 shadow-md lg:h-[8rem] lg:max-w-[94rem] lg:px-6 lg:shadow-none`}
      >
        <div className="flex w-full justify-between px-4 text-[rgba(0,0,0,0.87)] lg:max-w-none">
          {/* Left NavBar _____________________________*/}
          <div className="flex items-center gap-10 text-[0.8rem] font-extrabold tracking-[0.1rem]">
            <button
              style={{
                backgroundImage: "url('/Starbucks logo.png')",
                backgroundSize: "cover", // Asegura que la imagen cubra todo el área
                backgroundPosition: "center", // Centra la imagen
                backgroundRepeat: "no-repeat", // Evita que la imagen se repita
              }}
              className="aspect-square w-[3rem] lg:w-[5rem]"
            />
            <div className="hidden gap-10 lg:flex">
              <button className="transition hover:text-[rgba(0,118,55,1)]">
                MENÚ
              </button>
              <button className="transition hover:text-[rgba(0,118,55,1)]">
                REWARDS
              </button>
              <button className="transition hover:text-[rgba(0,118,55,1)]">
                TIENDAS
              </button>
            </div>
          </div>

          {/* Right NavBar _____________________________*/}
          <div className="hidden items-center gap-10 text-[0.85rem] font-bold lg:flex">
            <div className="flex items-center gap-2">
              <PiMapPinFill size="2rem" />
              <button className="transition hover:text-[rgba(0,118,55,1)]">
                Encuentra tu tienda
              </button>
            </div>

            <button className="rounded-full border border-black px-[1rem] py-[0.35rem] transition hover:border-[rgba(0,118,55,1)] hover:text-[rgba(0,118,55,1)]">
              Iniciar Sesión
            </button>

            <button className="rounded-full border border-black bg-black px-[1rem] py-[0.35rem] text-white transition hover:bg-[rgba(0,0,0,0.7)]">
              Regístrate
            </button>
          </div>
        </div>

        {/* MOVIL ________________________________________*/}
        {/* Menu Responsive NavBar _____________________________*/}
        <div className="flex cursor-pointer items-center px-4 lg:hidden">
          <MenuNavBar toggleMenu={toggleMenu} isOpen={isOpen} />
        </div>

        {/* Menú desplegable */}
        <div
          className={`absolute right-0 top-[5rem] -z-10 max-h-0 overflow-hidden rounded-bl-2xl bg-white shadow-lg transition-all duration-[0.4s] ease-in-out lg:hidden ${isOpen ? "max-h-dvh p-5" : "max-h-0 p-0"}`}
        >
          <ul className="flex flex-col gap-10 p-5 pb-6 font-medium">
            <li className="flex">MENÚ</li>
            <li className="flex">REWARDS</li>
            <li className="flex">TIENDAS</li>
          </ul>

          {/* Lower NavBar _____________________________*/}
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
      </div>
    </div>
  );
};

export default NavBar;
