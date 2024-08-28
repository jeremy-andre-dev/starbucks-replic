import { PiMapPinFill } from "react-icons/pi";

const NavBar = () => {
  return (
    <div className="fixed flex w-full flex-col items-center bg-white shadow-md">
      <div className="flex w-full justify-center text-white bg-black px-6 py-1 font-semibold text-[0.9rem] text-center">
        Esta página es un proyecto personal creado para demostrar mis
        habilidades como desarrollador. No es la página oficial de Starbucks.
      </div>
      <div className="flex w-full max-w-[94rem] justify-between px-6 py-6 text-[rgba(0,0,0,0.87)]">
        {/* left NavBar _____________________________*/}
        <div className="flex items-center gap-10 text-[0.8rem] font-extrabold tracking-[0.1rem]">
          <button
            style={{
              backgroundImage: "url('/Starbucks logo.png')",
              backgroundSize: "cover", // Asegura que la imagen cubra todo el área
              backgroundPosition: "center", // Centra la imagen
              backgroundRepeat: "no-repeat", // Evita que la imagen se repita
            }}
            className="aspect-square w-[5rem]"
          />
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

        {/* right NavBar ____________________________*/}
        <div className="flex items-center gap-10 text-[0.85rem] font-bold">
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
    </div>
  );
};

export default NavBar;
