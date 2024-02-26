import React, { useState } from "react";
import './pdp.scss'
const Pdpleft = (props) => {
  const orderitem = props.image
  const [images, setImages] = useState(props.image)
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
      <div className="order-images">
        {
          orderitem && orderitem.length && orderitem.map((val) => {
            return (
              <img src={val.imagUrl} alt="images" key={Math.random()} />
            )
          })
        }
      </div>
      <div className="pdp-carosel">
        <div>
          {
            images.map((val) => {
              return (
                val.isActive && <img src={val.imagUrl} alt="imag" dot={val.id} key={Math.random()} />
              )
            })
          }
        </div>
        <button onClick={() => handleClickevent()} className="pdp-next-button">
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button onClick={handlePrevevent} className="pdp-prev-button">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </>
  )
}
export default Pdpleft;