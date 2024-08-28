const imagesHomes = [
  {
    name: "Image 1",
    image: "/1ST.png",
    bgcolor: "bg-[rgba(181,235,159,1)]",
    bgbuttom: "bg-[rgba(30,57,50,1)]",
    fontColor: "text-[rgba(30,57,50,1)]",
    title: "¡Participa por un pasaje doble!",
    subtitle:
      "Acumula mínimo 100 estrellas del 19 de agosto al 15 de setiembre y entra al sorteo.",
    buttonText: "T&C aquí",
  },
  {
    name: "Image 2",
    image: "/2ST.png",
    bgcolor: "bg-[rgba(207,216,77,0.73)]",
    bgbuttom: "bg-[rgba(0,98,65,1)]",
    fontColor: "text-[rgba(0,98,65,1)]",
    title: "Los nuevos de la temporada",
    subtitle: "Disfruta del invierno con el rico sabor de chocolate y canela.",
    buttonText: "Pídelos aquí",
  },
  {
    name: "Image 3",
    image: "/3ST.png",
    bgcolor: "bg-[rgba(51,116,129,1)]",
    bgbuttom: "bg-[rgba(124,150,143,1)] ",
    fontColor: "text-white",
    title: "Preferimos nuestro Café Perú",
    subtitle: "Tu bebida favorita con el café favorito.",
    buttonText: "Pídelo aquí",
  },
  {
    name: "Image 4",
    image: "/4ST.png",
    bgcolor: "bg-[rgba(163,196,231,0.77)]",
    bgbuttom: "bg-[rgba(0,98,65,1)]",
    fontColor: "text-[rgba(0,98,65,1)]",
    title: "Tu bebida sabe mejor con Mocha Blanco",
    subtitle: "Pide la combinación perfecta y endulza tu día.",
    buttonText: "Pídelo aquí",
  },
  {
    name: "Image 5",
    image: "/5ST.png",
    bgcolor: "bg-[rgba(198,240,211,1)]",
    bgbuttom: "bg-[rgba(0,98,65,1)]",
    fontColor: "text-[rgba(0,98,65,1)]",
    title: "Voyage Blend",
    subtitle: "Un café con notas de néctar de pomelo y avellanas tostadas.",
    buttonText: "Disfrútalo aquí",
  },
];

const HomeLayout = () => {
  return (
    <div className=" mt-[7rem] flex flex-col gap-10 px-6 py-[3rem]">
      {imagesHomes.map((image, index) => (
        <div
          className={`flex w-full items-center justify-between ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} ${image.bgcolor} `}
          key={image.name}
        >
          <div className="w-1/2">
            <img src={image.image} alt="asd" className="w-full" />
          </div>

          <div className="w-1/2">
            <div
              className={`flex w-full flex-col items-center justify-center gap-6 px-8 ${image.fontColor}`}
            >
              <div className={`text-center text-5xl font-bold`}>
                {image.title}
              </div>
              <div className={`text-center text-[1.55rem] font-medium`}>
                {image.subtitle}
              </div>
              <button
                className={`${image.bgbuttom} rounded-full px-6 py-4 text-2xl font-bold text-white`}
              >
                {image.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeLayout;
