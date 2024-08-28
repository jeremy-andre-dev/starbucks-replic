import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const LowerFooter = () => {
  return (
    <div className="flex w-full flex-col items-center border-t-[2px] py-10">
      <div className="flex w-full max-w-[94rem] justify-between px-6">
        <div className="flex flex-col gap-10">
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
          <div className="font-medium text-[rgba(0,0,0,0.58)]">
            © 2024 Starbucks Coffee Company. All rights reserved.
          </div>
        </div>
        <img
          src="/LibroReclamacionesSB.png"
          alt="LibroReclamaciones"
          className="w-32 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default LowerFooter;
