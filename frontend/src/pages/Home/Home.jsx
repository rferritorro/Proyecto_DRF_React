import React from "react";
import "./Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const HomePage = () =>{
    return (
        <div>
            <Carousel showArrows={true} autoPlay={true}>
                <div className="img1"/>
                {/* <img src="https://www.drivespark.com/img/2018/02/rent-a-bike-at-most-metro-stations-in-bangalore2-1519188283.jpg"/> */}
                <div className="img2"/> 
                <div className="img3"/> 
            </Carousel>
        </div>
    )
};


export default HomePage;