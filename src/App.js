import Header from "components/Header";
import HeroSection from "components/HeroSection";
import Categories from "components/Categories";
import Campaigns from "components/Campaigns";
import Favourites from "components/Favourites";
import MobileApp from "components/MobileApp";
import Cards from "components/Cards";
import Footer from "components/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <Categories></Categories>
      <Campaigns></Campaigns>
      <Favourites></Favourites>
      <MobileApp></MobileApp>
      <Cards></Cards>
      <Footer></Footer>
    </>
  );
}

export default App;
