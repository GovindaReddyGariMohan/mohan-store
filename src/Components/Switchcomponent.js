import React from "react"
import Carosel from "./Carosel";
import Section from "./Section";
const SwitchComponent = (props) => {
    const Components = {
        Carosel,
        Section
    }
    const Component = Components[props.type]
    return Component && (
        <Component {...props} />
    )
}

export default SwitchComponent;