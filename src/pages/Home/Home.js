import "./Home.scss";
import Search from "../../shared/Search";
import Footer from "../../shared/Footer";
import Header from "./components/Header";
import Geolocation from "./components/Geolocation";
import Cities from "./components/Cities";
import AboveBlock from "../../shared/AboveBlock";

const Home = () => {
  return (
    <div>
      <Search isHome={true} />
      <Header />

      <Geolocation />

      <AboveBlock>WEATHER IN POPULAR CITIES</AboveBlock>
      <Cities />

      <Footer />
    </div>
  );
};
export default Home;
