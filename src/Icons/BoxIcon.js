import React from "react";
import { SvgXml } from 'react-native-svg'; 
import colors from "../colors";
function BoxIcon(props) {
  const size = props.size ? props.size : 48;
  const color = props.active ? colors.primary : colors.text;

  return (
    <SvgXml
      xml={
        `<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.1649 3.49249C15.5733 3.26566 16.0328 3.14664 16.5 3.14664C16.9672 3.14664 17.4267 3.26566 17.8351 3.49249L28.1683 9.23174C28.3825 9.35087 28.561 9.5251 28.6852 9.7364C28.8095 9.94769 28.875 10.1884 28.875 10.4335V21.7566C28.8749 22.247 28.7436 22.7284 28.4949 23.151C28.2461 23.5736 27.8888 23.922 27.4601 24.1601L17.8351 29.5089C17.4267 29.7357 16.9672 29.8547 16.5 29.8547C16.0328 29.8547 15.5733 29.7357 15.1649 29.5089L5.53987 24.1601C5.11136 23.9221 4.75424 23.574 4.50548 23.1516C4.25672 22.7293 4.12536 22.2481 4.125 21.758V10.4335C4.12499 10.1884 4.19051 9.94769 4.31477 9.7364C4.43903 9.5251 4.61752 9.35087 4.83175 9.23174L15.1662 3.49249H15.1649Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.125 9.625L16.5 16.5M16.5 16.5L28.875 9.625M16.5 16.5V30.25" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>
          <path d="M10.3125 13.0625L22.6875 6.1875M8.25 16.951L12.375 19.25" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `
      }

      width={size}
      height={size}
    />
    
  );
}

export default BoxIcon;