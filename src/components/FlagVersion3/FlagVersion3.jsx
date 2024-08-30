import React from "react";
import flags from "../lib/flagMap";

const FlagVersion3 = ( {countryCode, width=25, height=25} ) => {

    const flagSrc = flags[countryCode.toUpperCase()];

    if(!flagSrc) {
        return <div>undefiend</div>
    }

    return <img src={flagSrc} width={width} height={height} alt="flag" />

}

export default FlagVersion3;