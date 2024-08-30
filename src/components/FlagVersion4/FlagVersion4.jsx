import React, { useState, useEffect } from "react";

const FlagVersion4 = ( { countryCode, width=25, height=25} ) => {
  const [flagSrc, setFlagSrc] = useState(null);

  useEffect(() => {
    const loadFlag = async () => {
      const flag = await import(`./../../svgs/${countryCode.toLowerCase()}.svg`);
      setFlagSrc(flag.default);
    };

    loadFlag();
  }, [countryCode]);

  if (!flagSrc) {
    return <div>Loading...</div>;
  }

  return <img src={flagSrc} width={width} height={height} alt={`${countryCode} flag`} />;
};

export default FlagVersion4;