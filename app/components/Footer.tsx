import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="text-slate-700 ">
      <div className="container flex flex-col items-center justify-center md:flex-row mx-auto p-6  ">
        <div className="gap-y-2 flex flex-col ">
          <h3 className="text-2xl text-center font-bold uppercase">Sensual Candles</h3>
          <p className="text-center text-sm">Copyright © 2024 SENSUAL CANDLES . Todos los derechos Reservados.</p>
          <div className="flex items-center justify-center space-x-4 mt-2">
            <button className="">
              <FaFacebookF className="inline transition hover:opacity-75" size="1.45em" />
            </button>
            <button className="">
              <RiInstagramFill className="inline transition hover:opacity-75" size="1.45em" />
            </button>
            <button className="">
              <FaPhoneAlt className="inline transition hover:opacity-75" size="1.35em" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};