import React from "react";
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs"

const PaginationComponent = (props) => {
    const NumbersPages = [];

    for (let i=1; i <= Math.ceil(props.total / props.pages); i++) {
        NumbersPages.push(i)
    }
    console.log(props)
    return (
        <div>
            <div className="PaginationContainer">
                <ul className="paginationNumbers text-center">
                    <BsFillArrowLeftCircleFill className="btn btn-xs mt-2" onClick={() => props.paginates(NumbersPages[0])} style={{fontSize: "50px"}}/>   
                    {NumbersPages.map((number) => (
                        <button
                            key={number}
                            onClick={() => props.paginates(number)}
                            className="btn btn-xs btn-info mt-2"
                        >
                            {number}
                        </button>
                    ))}
                    <BsFillArrowRightCircleFill className="btn btn-xs mt-2" onClick={() => props.paginates(NumbersPages[1])} style={{fontSize: "50px"}}/>   
                </ul>
            </div>
        </div>
    )
} 

export default PaginationComponent;