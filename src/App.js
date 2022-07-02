import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import Campaigns from "./components/Campaigns";
import MobileApp from "./components/MobileApp";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Favourites from "./components/Favourites";
import { useWindowWidth } from "@react-hook/window-size";

function App() {

  const windowWith = useWindowWidth()

  return (
    <>
      <Header></Header>
      {windowWith <= 768 && <Campaigns/>}
      <HeroSection></HeroSection>
      <Categories></Categories>
      {windowWith > 768 && <Campaigns/>}
      <Favourites></Favourites>
      <MobileApp></MobileApp>
      <Cards></Cards>
      <Footer></Footer>
    </>
  );
}

export default App;
