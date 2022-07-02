import { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from "../api/banners.json";
import Title from "./ui/Title";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useWindowWidth } from "@react-hook/window-size";

function NextBtn(className, style, onClick) {
  return (
    <button
      className={"!text-brand-color absolute top-1/2 -right-6 -translate-y-1/2"}
      onClick={onClick}
    >
      <IoIosArrowForward size={22} />
    </button>
  );
}

function PrevBtn(className, style, onClick) {
  return (
    <button
      className={"absolute top-1/2 -left-6 -translate-y-1/2 !text-brand-color"}
      onClick={onClick}
    >
      <IoIosArrowBack size={22} />
    </button>
  );
}

export default function Campaigns() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, []);

  const windowWith = useWindowWidth()

  const settings = {
    dots: false,
    infinite: true,
    arrows:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 3000,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto md:py-8 overflow-x-hidden">
      <div className="hidden md:block">
        <Title className=" ">Kampanyalar</Title>
      </div>
      <Slider className="md:-mx-2" {...settings}>
        {banners.length &&
          banners.map((banner, index) => (
            <div className="" key={banner.id}>
              <picture className="block md:px-2">
                <img className="hover:cursor-move md:rounded-lg w-full" src={banner.image} />
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
}
