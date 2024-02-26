import React, { useState } from "react";
const Carosel = (props) => {
    const [images, setImages] = useState(props.images)
    const handleClickevent = () => {
        let activindex;
        const tempImgs = images;
        images.forEach((img, index) => {
            if (img.isActive) {
                activindex = index;
            }
            tempImgs[index].isActive = false;
        })
        if (tempImgs[activindex + 1]) {
            tempImgs[activindex + 1].isActive = true
        } else {
            tempImgs[0].isActive = true
        }
        setImages([...tempImgs])
    }
    const handlePrevevent = () => {
        let activindex;
        const tempImgs = images;
        const len = images.length - 1
        images.forEach((img, index) => {
            if (img.isActive) {
                activindex = index;
            }
            tempImgs[index].isActive = false;
        })
        if (tempImgs[activindex - 1]) {
            tempImgs[activindex - 1].isActive = true
        } else {
            tempImgs[len].isActive = true
        }
        setImages([...tempImgs])
    }
    return (
        <>
            <div className="carosel">
                <div>
                    {
                        images.map((val) => {
                            return (
                                val.isActive && <img src={val.imgUrl} alt="imag" dot={val.id} key={Math.random()} />
                            )
                        })
                    }
                </div>
                <button onClick={() => handleClickevent()} className="next-button">
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button onClick={handlePrevevent} className="prev-button">
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
            </div>
        </>
    )
}

export default Carosel;