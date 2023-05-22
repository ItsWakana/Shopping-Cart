import { Carousel } from 'react-responsive-carousel';
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel className="slideshow" showArrows={false} autoPlay={true} showThumbs={false}
            showIndicators={false} showStatus={false} infiniteLoop={true}>
                <div>
                    <img className="image-slide" src="https://picsum.photos/id/1018/1000/600/" />
                </div>
                <div>
                    <img className="image-slide" src="https://picsum.photos/id/1015/1000/600/" />
                </div>
                <div>
                    <img className="image-slide" src="https://picsum.photos/id/1019/1000/600/" />
                </div>
            </Carousel>
        );
    }
}

export default DemoCarousel;