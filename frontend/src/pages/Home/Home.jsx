import React from "react";
import "./Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CategoryComponent from "../../components/Categories/CategoryComponent";
const imgs = [
    "https://www.drivespark.com/img/2018/02/rent-a-bike-at-most-metro-stations-in-bangalore2-1519188283.jpg",
    "https://ychef.files.bbci.co.uk/live/624x351/p014kc76.jpg",
    "https://live.staticflickr.com/65535/48880444927_64a3d3c655_b.jpg"
]

const HomePage = () =>{
    return (
        <div>
            <Carousel showArrows={true} autoPlay={true} showThumbs={false}>
                {imgs.map((URL, index) => (
                    <div className="img1" key={index} style={{backgroundImage: 'url("'+URL+'")'}}/> 
                ))}
            </Carousel>
            <CategoryComponent/>
        </div>
    );
};


export default HomePage;