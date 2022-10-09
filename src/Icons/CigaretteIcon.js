import React from "react";
import { SvgXml } from 'react-native-svg'; 
import colors from "../colors";
function CigaretteIcon(props) {
  const size = props.size ? props.size : 48;
  const color = props.active ? colors.primary : colors.text;

  return (
    <SvgXml
      xml={
        `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M39.3289 26.3421H5.11842V34.8947H39.3289M47.8816 26.3421V34.8947M15.8092 26.3421V34.8947M39.3289 17.7895C39.3289 12.4441 35.0526 12.4441 35.0526 7.09868M47.8816 17.7895C47.8816 12.4441 43.6053 12.4441 43.6053 7.09868" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>                      
        `
      }

      width={size}
      height={size}
    />
    
  );
}

export default CigaretteIcon;