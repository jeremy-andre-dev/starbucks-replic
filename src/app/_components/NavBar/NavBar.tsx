import { PiMapPinFill } from "react-icons/pi";
import { IoLogoLinkedin } from "react-icons/io5";

import Link from "next/link";

import MenuNavBar from "./MenuNavBar";

const NavBar = () => {
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

      <div className="relative flex h-[5rem] w-full justify-center px-6 py-6 shadow-md lg:h-[8rem] lg:max-w-[94rem] lg:px-6 lg:shadow-none">
        {/* Left NavBar _____________________________*/}
        <div className="flex w-full max-w-[42rem] justify-between text-[rgba(0,0,0,0.87)] lg:max-w-none">
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
        {/* Menu Responsive NavBar _____________________________*/}
        <div className="flex cursor-pointer items-center lg:hidden">
          <MenuNavBar />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
