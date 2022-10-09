import React from "react";
import { SvgXml } from 'react-native-svg'; 
import colors from "../colors";
function MoreIcon(props) {
  const size = props.size ? props.size : 48;
  const color = props.active ? colors.primary : colors.text;

  return (
    <SvgXml
      xml={
        `<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 26C25.1046 26 26 25.1046 26 24C26 22.8954 25.1046 22 24 22C22.8954 22 22 22.8954 22 24C22 25.1046 22.8954 26 24 26Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M38 26C39.1046 26 40 25.1046 40 24C40 22.8954 39.1046 22 38 22C36.8954 22 36 22.8954 36 24C36 25.1046 36.8954 26 38 26Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 26C11.1046 26 12 25.1046 12 24C12 22.8954 11.1046 22 10 22C8.89543 22 8 22.8954 8 24C8 25.1046 8.89543 26 10 26Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
                                                                   
        `
      }

      width={size}
      height={size}
    />
    
  );
}

export default MoreIcon;