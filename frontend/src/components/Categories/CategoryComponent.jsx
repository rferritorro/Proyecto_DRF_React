import React, { useState } from "react";
import './CategoryComponent.css'
import { GiDutchBike, GiChemicalTank } from "react-icons/gi"
import { FaChargingStation } from "react-icons/fa"
import { Link } from 'react-router-dom'
import ReactCardFlip from 'react-card-flip';
import { Doughnut } from "react-chartjs-2";
import { useBike } from "../../hooks/useBike";
import 'chart.js/auto'

const CategoryComponent = () => {
    const bikes = useBike()
    const [isFlippedBike, setIsFlippedBike] = useState(false);
    const [isFlippedSlot, setIsFlippedSlot] = useState(false);

    const Array_Bikes = (bikes) => {          
        let available_bike = 0
        let ocuped_bike = 0
        let fault_bike = 0
        if (bikes && bikes.bike) {
            var array_bikes = new Array(bikes.bike)
            for (let i=0;i<array_bikes[0].length;i++) {
                switch (array_bikes[0][i].state) {
                    case 0:
                        available_bike++
                        break;
                    case 1:
                        ocuped_bike++
                        break;
                    default:
                        fault_bike++
                        break;
                }
            }
        }
       return [ocuped_bike,fault_bike,available_bike]
}
    
    const data = {
        labels: ['Unavailable', 'Faulted', 'Available'],
        datasets: [
          {
            label: '',
            data: Array_Bikes(bikes),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(54, 162, 235, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',
              ],
              borderWidth: 1,
            },
          ],
        };




    const handleClickBike = (e) => {
        e.preventDefault();
        setIsFlippedBike(prevState => !prevState);
    };
    const handleClickSlot = (e) => {
        e.preventDefault();
        setIsFlippedSlot(prevState => !prevState);
    };
        return (
        <div className="category">
            <div className="categorys">
            <div>
                <Link to={"/stations"} className="header_decoration">
                    <GiChemicalTank style={{ fontSize: "180px" }} />
                </Link>
            </div>
            </div>
            <div className="categorys">
                <ReactCardFlip isFlipped={isFlippedSlot} flipDirection="horizontal">
                    <div onClick={handleClickSlot} className="header_decoration">
                        <FaChargingStation style={{ fontSize: "180px" }} />
                    </div>
                    <div onClick={handleClickSlot}>
                        <Doughnut data={data} />
                    </div>
                </ReactCardFlip>
            </div>
            <div className="categorys">
                <ReactCardFlip isFlipped={isFlippedBike} flipDirection="horizontal">
                    <div onClick={handleClickBike} className="header_decoration">
                        <GiDutchBike style={{ fontSize: "180px" }} />
                    </div>
                    <div onClick={handleClickBike} className="header_decoration">
                        <Doughnut data={data} />
                    </div>
                </ReactCardFlip>
            </div>
        </div>
    )
}

export default CategoryComponent