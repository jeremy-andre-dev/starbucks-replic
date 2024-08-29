import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const LowerFooter = () => {
  return (
    <div className="flex w-full flex-col items-center border-t-[2px] py-10">
      <div className="flex w-full max-w-[45rem] flex-wrap items-center justify-between gap-4 px-6 lg:max-w-[94rem]">
        {/*Left LowerFooter ____________________*/}
        <div className="flex w-full flex-col items-center gap-10 md:w-auto md:items-start">
          <div className="flex gap-3">
            <FaFacebookSquare
              size="2rem"
              className="cursor-pointer hover:text-[rgb(13,110,253)]"
            />
            <FaInstagram
              size="2rem"
              className="cursor-pointer hover:text-[rgb(13,110,253)]"
            />
          </div>
          <div className="text-center font-medium text-[rgba(0,0,0,0.58)]">
            © 2024 Starbucks Coffee Company. All rights reserved.
          </div>
        </div>

        {/*Right LowerFooter ____________________*/}
        <div className="flex w-full justify-center md:w-auto">
          <img
            src="/LibroReclamacionesSB.png"
            alt="LibroReclamaciones"
            className="w-32 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default LowerFooter;
