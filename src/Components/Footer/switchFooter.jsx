import React from "react"
import Section from "./Footeritems"
import Mobileapp from "./Mobile"
import Socialapp from "./Social_app"
import ProductStatus from "./Status"
const Switchfooter = (props) => {
    const Components = {
        Section,
        Mobileapp,
        Socialapp,
        ProductStatus
    }
    const Component = Components[props.type]
    return Component && (
        <Component {...props} />
    )
}

export default Switchfooter;