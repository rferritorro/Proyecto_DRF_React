import React from "react";
import "./Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {GiDutchBike, GiHouse} from "react-icons/gi"
import {FaChargingStation} from "react-icons/fa"
import {Link} from 'react-router-dom'
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
            <div className="category">
                    <div className="categorys">
                        <FaChargingStation style={{fontSize: "90px"}}/>
                        <h2>SLOTS</h2>
                        <strong>55</strong>
                    </div>
                    <div className="categorys">
                        <GiHouse style={{fontSize: "90px"}}/>
                        <Link to={"/stations"} className="header_decoration">
                            <h2>STATIONS</h2>
                        </Link>
                        <strong>5</strong>
                    </div>
                    <div className="categorys">
                        <GiDutchBike style={{fontSize: "90px"}}/>
                        <h2>BIKES</h2>
                        <strong>65</strong><br></br>
                    </div>
            </div>
        </div>
    );
};


export default HomePage;