import React from "react";
const Section = (props) => {
    const { items, title } = props;
    return (
        <div>
            <h3>{title}</h3>
            <ul>
                {
                    items.map((val) => {
                        return (<li key={Math.random()}>{val.item}</li>)
                    })
                }
            </ul>
        </div>
    )
}
export default Section;