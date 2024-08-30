import React from "react";
import Flag from "react-world-flags";

const FlagVersion2 = ( {countryCode, width = 25, height = 25} ) => {
    return(
        <Flag code={countryCode} width={width} height={height}/>
    )
}

export default FlagVersion2;