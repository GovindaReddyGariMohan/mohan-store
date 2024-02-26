import React from "react";
import "./section.scss";
const Section = (props) => {
    const { images, title, grid } = props;
    return (
        <div className="section-grid" >
            <div className="title">
                <h3>{title}</h3>
            </div>
            <div className="row" >
                {
                    images.map((val, index) => {
                        return (
                            <div className={`col-${grid} img-col `} key={`title${index}`}>
                                <a href={val.linkUrl}><img src={val.imgUrl} alt='top_brands' /></a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Section;