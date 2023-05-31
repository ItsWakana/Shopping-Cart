import { useEffect, useContext } from "react";
import NavigationContext from "./context/NavigationContext";
import { Link } from "react-router-dom";

const Home = () => {

    const { hideMobileMenu } = useContext(NavigationContext);

    useEffect(() => {
        hideMobileMenu(false);
    },[]);
    return (
        <section className="main-page home" style={
            {backgroundImage: 'url(images/casino-background.gif)'}
        }>
            <Link to="/store">
                <button className="store-btn">SHOP NOW</button>
            </Link>
        </section>
        

    )
}

export default Home;