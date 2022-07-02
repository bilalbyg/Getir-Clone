/* eslint-disable jsx-a11y/alt-text */
import { BiGlobe } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiUserPlus } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function Header() {
  return (
    <div>
      <div className="bg-brand-color">
        <div className="container mx-auto  h-16 md:h-11 flex items-center justify-center md:justify-between">
          <a href="https://www.getir.com">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Getir_wordmark.svg/180px-Getir_wordmark.svg.png"
              width="53"
              height="24"
            ></img>
          </a>
          <nav className="hidden md:flex gap-x-8 text-sm font-semibold">
            <a
              href="#"
              className="flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100"
            >
              <BiGlobe size={20} />
              Türkçe (TR)
            </a>

            <a
              href="#"
              className="flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100"
            >
              <BiUser size={20} />
              Giriş Yap
            </a>
            <a
              href="#"
              className="flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100"
            >
              <BiUserPlus size={20} />
              Kayıt Ol
            </a>
          </nav>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between md:hidden px-3">
        <div className="flex items-center gap-x-2 text-gray-500 font-light p-2">
          <HiLocationMarker size={18} className="text-brand-color" />
          Teslimat Adresi Belirle
        </div>
        <MdOutlineArrowForwardIos size={18} className="text-primary-brand-color hover:cursor-pointer"/>
      </div>
    </div>
  );
}
