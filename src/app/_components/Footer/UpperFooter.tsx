"use client";

import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const infoSections = [
  {
    title: "Sobre Nosotros",
    subtitles: [
      "Nuestra compañía",
      "Nuestro Café",
      "Starbucks Stories",
      "Servicio al cliente",
      "Línea y ética",
    ],
  },
  {
    title: "Nuestra Cultura",
    subtitles: ["Cultura y Valores", "Trabaja con nosotros"],
  },
  {
    title: "Impacto Social",
    subtitles: ["Planeta", "Personas"],
  },
  {
    title: "Compras",
    subtitles: ["Pedidos por la APP", "Pedidos por la Web"],
  },
  {
    title: "Políticas",
    subtitles: [
      "Política de Privacidad App, Web y Starbucks Rewards",
      "Términos y condiciones de la web, Delivery, Pick Up y Auto Starbucks",
      "Términos y condiciones de Starbucks Rewards",
      "Términos y condiciones de promociones",
      "Preguntas frecuentes",
    ],
  },
  {
    title: "Atención al Cliente",
    subtitles: [
      "Teléfono Lima: (01)505-0050",
      "Teléfono Provincia: (044)779-009",
      "Comprobantes electrónicos",
    ],
  },
];

const UpperFooter = () => {
  // Definir el estado usando el tipo SectionState
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  // Typing del título como string
  const toggleMenu = (title: string) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [title]: !prevState[title], // Cambia el estado de la sección clickeada
    }));
  };

  return (
    <div className="flex w-full flex-col items-center border-t-[2px]">
      <div className="grid w-full max-w-[45rem] gap-12 px-6 py-10 md:grid-cols-3 lg:max-w-[94rem] lg:grid-cols-6">
        {infoSections.map((info) => (
          <div
            key={info.title}
            className="flex flex-col overflow-hidden md:gap-6"
          >
            {/* DESKTOP ________________*/}
            <div className="hidden justify-between font-medium md:flex">
              <div>{info.title}</div>
            </div>

            {info.subtitles.map((subtitles) => (
              <div
                key={subtitles}
                className="hidden cursor-pointer text-[0.95rem] text-[rgba(0,0,0,0.58)] md:flex"
              >
                {subtitles}
              </div>
            ))}

            {/* MOVIL ________________*/}
            <div
              className="flex cursor-pointer justify-between font-medium md:hidden"
              onClick={() => toggleMenu(info.title)}
            >
              <div>{info.title}</div>
              <MdKeyboardArrowDown
                className={`-z-20 transition-transform duration-500 md:hidden ${
                  openSections[info.title] ? "-rotate-180" : ""
                }`}
                size="1.5rem"
              />
            </div>

            <div
              className={`flex max-h-0 flex-col transition-all duration-500 ${openSections[info.title] ? "max-h-dvh" : "max-h-0"}`}
            >
              {info.subtitles.map((subtitles) => (
                <div
                  key={subtitles}
                  className={`flex cursor-pointer pt-6 text-[0.95rem] text-[rgba(0,0,0,0.58)] md:hidden`}
                >
                  {subtitles}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpperFooter;
