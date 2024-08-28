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
      "Atención al Cliente",
      "Teléfono Lima: (01)505-0050",
      "Teléfono Provincia: (044)779-009",
      "Comprobantes electrónicos",
    ],
  },
];

const UpperFooter = () => {
  return (
    <div className="flex w-full flex-col items-center border-t-[2px]">
      <div className="grid max-w-[94rem] grid-cols-6 gap-12 px-6 py-10">
        {infoSections.map((info) => (
          <div key={info.title} className="flex flex-col gap-6">
            <div className="font-medium">{info.title}</div>
            {info.subtitles.map((subtitles) => (
              <div
                key={subtitles}
                className="text-[0.95rem] text-[rgba(0,0,0,0.58)] cursor-pointer"
              >
                {subtitles}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpperFooter;
