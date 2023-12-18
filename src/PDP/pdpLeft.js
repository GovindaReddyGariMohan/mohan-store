import React from "react";
const Pdpleft = (props) => {
  const orderitem = props.image
  return (
    <div className="order-images">
      {
        orderitem && orderitem.length && orderitem.map((val) => {
          return (
            <img src={val.imagUrl} alt="images" key={Math.random()} />
          )
        })
      }
    </div>
  )
}
export default Pdpleft;