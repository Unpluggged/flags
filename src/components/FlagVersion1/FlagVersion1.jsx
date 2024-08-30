import React from "react";

const FlagVersion1 = ( {countryCode, width=25, height=25} ) => {
  return(
    <img src={countryCode} width={width} height={height} alt="flag" />
  )
}

export default FlagVersion1;