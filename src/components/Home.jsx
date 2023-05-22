import { useEffect, useContext } from "react";
import NavigationContext from "./context/NavigationContext";
// import ImageGallery from "./ImageGallery";
import DemoCarousel from "./DemoCarousel";

const Home = () => {

    const { hideMobileMenu } = useContext(NavigationContext);

    useEffect(() => {
        hideMobileMenu(false);
    },[]);
    return (
        // <h1>Home</h1>
        <DemoCarousel />
    )
}

export default Home;