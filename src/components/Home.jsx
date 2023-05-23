import { useEffect, useContext } from "react";
import NavigationContext from "./context/NavigationContext";
// import ImageGallery from "./ImageGallery";
// import DemoCarousel from "./DemoCarousel";
import { Link } from "react-router-dom";

const Home = () => {

    const { hideMobileMenu } = useContext(NavigationContext);

    useEffect(() => {
        hideMobileMenu(false);
    },[]);
    return (
        // <DemoCarousel />
        <section className="main-page home">
            <Link to="/store">
                <button className="store-btn">SHOP NOW</button>
            </Link>
        </section>
        

    )
}

export default Home;