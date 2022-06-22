import { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from "../api/banners.json";
import Title from "./ui/Title";
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

function NextBtn(className, style, onClick) {
  return (
    <button className={"!text-brand-color absolute top-1/2 -right-6 -translate-y-1/2"} onClick={onClick}>
      <IoIosArrowForward  size={22}/>
    </button>
  );
}

function PrevBtn(className, style, onClick) {
  return (
    <button className={"absolute top-1/2 -left-6 -translate-y-1/2 !text-brand-color"} onClick={onClick}>
      <IoIosArrowBack size={22}/>
    </button>
  );
}

export default function Campaigns() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 3000,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    cssEase: "linear",
  };

  return (
    <div className="container mx-auto py-8">
      <Title>Kampanyalar</Title>
      <Slider className="flex gap-x-4" {...settings}>
        {banners.length &&
          banners.map((banner, index) => (
            <div className="" key={banner.id}>
              <picture className="block px-2">
                <img className="rounded-lg" src={banner.image} />
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
}
