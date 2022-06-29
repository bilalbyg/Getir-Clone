import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="bg-white mt-10 mb-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 pt-10">
          <section>
            <nav className="grid gap-y-4">
              <h6 className="text-lg text-primary-brand-color">
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
            <nav className="grid gap-y-4">
              <h6 className="text-lg text-primary-brand-color">
                Getir'i Keşfedin
              </h6>
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
            </nav>
          </section>
          <section>
            <nav className="grid gap-y-4">
              <h6 className="text-lg text-primary-brand-color">
                Yardıma mı ihtiyacınız var?
              </h6>
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
            </nav>
          </section>
          <section>
            <nav className="grid gap-y-4">
              <h6 className="text-lg text-primary-brand-color">
                İş Ortağımız Olun
              </h6>
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
            </nav>
          </section>
          <div>
            <img
              className="p-7"
              src="https://getir.com/_next/static/images/etbis-33c159729adc8b4e2b946310f038d2f4.png"
            />
          </div>
        </div>
        <div className="flex justify-between items-center border-t border-gray-100 mt-6 pt-6 px-8">
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
