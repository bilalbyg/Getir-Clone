import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useWindowWidth } from "@react-hook/window-size";

export default function HeroSection() {
  const [selected, setSelected] = useState("TR");

  const windowWith = useWindowWidth();

  const phones = {
    US: "+1",
    TR: "+90",
    DE: "+50",
    IT: "+7",
    IN: "+15",
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  // object-cover : Resize an element’s content to cover its container using .object-cover.
  return (
    <div
      className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color
                    before:to-transparent before:absolute before:inset-0 before:h-full before:z-10"
    >
      {
        windowWith > 768 && <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"
          />
        </div>
      </Slider>
      }

      <div className="container flex justify-between items-center relative left-0 md:absolute top-0 md:left-1/2 
                      translate-x-0 md:-translate-x-1/2 h-full z-20">
        <div className="hidden md:block flex flex-col gap-y-8">
          <img
            width="70%"
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
          ></img>
          <h3 className="mt-8 text-4xl text-white font-semibold">
            Dakikalar içinde <br /> kapınızda
          </h3>
        </div>
        <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color font-semibold text-center mb-4">
            Giriş yap veya kayıt ol
          </h4>
          <div className="grid gap-y-4">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                onSelect={(code) => setSelected(code)}
                selected={selected}
                className="flagSelect"
              />
              <label className="flex-1 relative block">
                <input
                  required
                  className="h-14 px-4 border-2 border-gray-200 rounded-lg w-full outline-none transition-colors 
                              hover:border-primary-brand-color focus:border-primary-brand-color peer text-sm pt-2  
                              font-semibold"
                />
                <span
                  className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-400 transition-all 
                              peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs
                              peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs"
                >
                  Telefon Numarası
                </span>
              </label>
            </div>
          </div>
          <button
            className="bg-brand-yellow text-primary-brand-color h-12 w-full mt-3 text-sm font-semibold p-2 
          rounded-lg hover:bg-primary-brand-color hover:text-brand-yellow transition-all"
          >
            Telefon numarası ile devam et
          </button>
        </div>
      </div>
    </div>
  );
}
