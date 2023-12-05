import React, { useEffect, useState } from "react";

function Carousel() {
    const [index, setIndex] = useState(0);

    function IncreaseIndex() {
        setIndex(index+1);
        if(index >= 3) {
            setIndex(0);
        }
    }

    function DecreaseIndex() {
        setIndex(index-1);
        if(index <= 0) {
            setIndex(3);
        }
    }

    return (
        <div className="carousel h-1/3 pt-12 md:p-12">
            {index === 0 ? (
            <div>
                <img src={require('../images/aboutme/74F7CBCC-A4AF-4EC3-B910-792D86A7F825.jpeg')} alt='Picture1' className="w-max"></img>          
            </div>) : null}

            {index === 1 ? (
            <div>
                <img src={require('../images/aboutme/54AE091F-8022-48C6-8CE3-A0851C89CADE.jpeg')} alt='Picture2' className="h-auto max-w-full"></img>
            </div>) : null}

            {index === 2 ? (
            <div>
                <img src={require('../images/aboutme/AC13F2BA-2017-4502-A5D1-921BFE871821.jpeg')} alt='Picture3' className="h-auto max-w-full"></img>
            </div>) : null}

            {index === 3 ? (
            <div>
                <img src={require('../images/aboutme/5DDD2FB8-149A-4779-B9DA-10DEB0B1EF92.png')} alt='Picture4' className="h-auto max-w-full"></img>
            </div>) : null}

            <button className="pt-2 md:px-1 md:m-4 m-2" 
                    type="button" 
                    onClick={() => DecreaseIndex()}>
                <img src={require('../images/icons/undraw_arrow - Left.png')} alt='ArrowLeft' className="scale-50 md:scale-75"></img>
            </button>
            <button className="pt-2 px-1 md:m-4 m-2" 
                    type="button" 
                    onClick={() => IncreaseIndex()}>
                <img src={require('../images/icons/undraw_arrow.png')} alt='ArrowRight' className="scale-50 md:scale-75"></img>
            </button>
        </div>
    )
}

export default Carousel;
