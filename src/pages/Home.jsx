import Banner from "../components/Banner";
import CategorySection from "../components/CategorySection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import OfferBanner from "../components/OfferBanner";
import TrendingProducts from "../components/TrendingProducts";

function Home(){
    return(
        <>
        <Navbar/>
        <Banner/>
        <CategorySection/>
        <TrendingProducts/>
        <OfferBanner/>
        <Footer/>
        </>
    )
}
export default Home