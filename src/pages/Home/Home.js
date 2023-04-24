import './Home.scss';
import Search from '../../shared/Search';
import Footer from '../../shared/Footer';
import Header from './components/Header';
import Geolocation from './components/Geolocation';
import Cities from './components/Cities';

const Home = () => {
    return(
        <div>
            <Search isHome={true}/>
            <Header/>

            <Geolocation/>

            <p className="above-block">WEATHER IN POPULAR CITIES</p>
            <Cities/>

            <Footer/>
        </div>
    )
}
export default Home;