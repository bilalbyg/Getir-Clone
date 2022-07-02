import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { Collapse } from "react-collapse";
import { useState, useEffect } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import { IoIosArrowDown } from "react-icons/io";

export default function Footer() {
  const windowWith = useWindowWidth();
  const [isOpenFirst, setIsOpenFirst] = useState(true);
  const [isOpenSecond, setIsOpenSecond] = useState(true);
  const [isOpenThird, setIsOpenThird] = useState(true);

  const toggleCollapseFirst = () => {
    if (windowWith <= 768) {
      setIsOpenFirst(!isOpenFirst);
    }
  };

  const toggleCollapseSecond = () => {
    if (windowWith <= 768) {
      setIsOpenSecond(!isOpenSecond);
    }
  };

  const toggleCollapseThird = () => {
    if (windowWith <= 768) {
      setIsOpenThird(!isOpenThird);
    }
  };

  return (
    <div className="bg-white mt-10 mb-10">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-5 pt-5 md:pt-10">
          <section>
            <nav className="grid gap-y-4">
              <h6 className="text-lg text-primary-brand-color mb-4">
                Getir'i indirin
              </h6>
              <a href="#">
                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
              </a>
              <a href="#">
                <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
              </a>
              <a href="#">
                <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
              </a>
            </nav>
          </section>
          <section>
            <nav className="grid gap-y-1 md:gap-y-4">
              <h6
                onClick={toggleCollapseFirst}
                className="text-lg text-primary-brand-color hover:cursor-pointer flex md:items-center justify-between"
              >
                Getir'i Keşfedin
                <button className="md:hidden">
                  <IoIosArrowDown size={14} />
                </button>
              </h6>
              <Collapse isOpened={isOpenFirst}>
                <nav>
                  <ul className="grid gap-y-2">
                    <li>
                      <a href="#" className="">
                        <span className="text-gray-600 text-sm hover:text-primary-brand-color tracking-wide">
                          Hakkımızda
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        <span className="text-gray-600 text-sm hover:text-primary-brand-color tracking-wide">
                          Kariyer
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        <span className="text-gray-600 text-sm hover:text-primary-brand-color tracking-wide">
                          Teknoloji Kariyerleri
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        <span className="text-gray-600 text-sm hover:text-primary-brand-color tracking-wide">
                          İletişim
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        <span className="text-gray-600 text-sm">
                          COVID-19 Duyuru
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        <span className="text-gray-600 text-sm">
                          Sosyal Sorumluluk Projeleri
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </Collapse>
            </nav>
          </section>
          <section>
            <nav className="grid gap-y-1 md:gap-y-4">
              <h6
                onClick={toggleCollapseSecond}
                className="text-lg text-primary-brand-color hover:cursor-pointer flex md:items-center justify-between"
              >
                Yardıma mı ihtiyacınız var?
                <button className="md:hidden">
                  <IoIosArrowDown size={14} />
                </button>
              </h6>
              <Collapse isOpened={isOpenSecond}>
                <nav>
                  <ul className="grid gap-y-2">
                    <li>
                      <a href="#" className="">
                        <span className="text-gray-600 text-sm hover:text-primary-brand-color tracking-wide">
                          Sıkça Sorulan Sorular
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        <span className="text-gray-600 text-sm hover:text-primary-brand-color tracking-wide">
                          Kişisel Verilerin Korunması
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        <span className="text-gray-600 text-sm hover:text-primary-brand-color tracking-wide">
                          Gizlilik Politikası
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        <span className="text-gray-600 text-sm hover:text-primary-brand-color tracking-wide">
                          Kullanım Koşulları
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        <span className="text-gray-600 text-sm">
                          Çerez Politikası
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </Collapse>
            </nav>
          </section>
          <section>
            <nav className="grid gap-y-1 md:gap-y-4">
              <h6
                onClick={toggleCollapseThird}
                className="text-lg text-primary-brand-color hover:cursor-pointer flex md:items-center justify-between"
              >
                İş Ortağımız Olun
                <button className="md:hidden">
                  {/* <span className={`transition-all transform ${isOpenThird ? '-rotate-180' : ''}`}> */}
                    <IoIosArrowDown size={14} />
                  {/* </span> */}
                </button>
              </h6>
              <Collapse isOpened={isOpenThird}>
                <nav>
                  <ul className="grid gap-y-2">
                    <li>
                      <a href="#" className="">
                        <span className="text-gray-600 text-sm hover:text-primary-brand-color tracking-wide">
                          Bayimiz Olun
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        <span className="text-gray-600 text-sm hover:text-primary-brand-color tracking-wide">
                          Deponuzu Kiralayın
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        <span className="text-gray-600 text-sm hover:text-primary-brand-color tracking-wide">
                          Getir Yemek Restoranı Olun
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        <span className="text-gray-600 text-sm hover:text-primary-brand-color tracking-wide">
                          Getir Çarşı İşletmesi Olun
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        <span className="text-gray-600 text-sm hover:text-primary-brand-colortracking-wide">
                          Zincir Restoranlar
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </Collapse>
            </nav>
          </section>
          <div>
            <img
              className="p-7"
              src="https://getir.com/_next/static/images/etbis-33c159729adc8b4e2b946310f038d2f4.png"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-y-4 justify-between items-center border-t border-gray-100 mt-6 pt-6 px-8">
          <div className="text-sm text-gray-600">© 2022 Getir</div>
          <nav className="flex justify-between gap-x-5 text-xl">
            <div className="flex items-center p-2 gap-x-1 text-gray-500 hover:bg-gray-200 hover:text-primary-brand-color hover:cursor-pointer border hover:rounded-lg">
              <BsFacebook></BsFacebook>
            </div>
            <div className="flex items-center p-2 gap-x-1 text-gray-500 hover:bg-gray-200 hover:text-primary-brand-color hover:cursor-pointer border hover:rounded-lg">
              <BsTwitter></BsTwitter>
            </div>
            <div className="flex items-center p-2 gap-x-1 text-gray-500 hover:bg-gray-200 hover:text-primary-brand-color hover:cursor-pointer border hover:rounded-lg">
              <BsInstagram></BsInstagram>
            </div>
            <a className="flex items-center text-sm font-semibold p-2 gap-x-1 text-gray-500 hover:bg-gray-200 hover:text-primary-brand-color hover:cursor-pointer border hover:rounded-lg">
              <BsGlobe></BsGlobe>
              Türkçe (TR)
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
