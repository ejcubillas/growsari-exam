import React from "react";
import { SvgXml } from 'react-native-svg'; 
import colors from "../colors";
function FilterIcon(props) {
  const size = props.size ? props.size : 48;
  const color = props.active ? colors.primary : colors.text;

  return (
    <SvgXml
      xml={
        `<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 9.625C23.3345 9.625 28.875 8.39378 28.875 6.875C28.875 5.35622 23.3345 4.125 16.5 4.125C9.66548 4.125 4.125 5.35622 4.125 6.875C4.125 8.39378 9.66548 9.625 16.5 9.625Z" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.125 6.875C4.125 9.94125 9.44762 16.0518 12.177 18.9819C13.1782 20.0432 13.7403 21.4444 13.75 22.9034V30.25L19.25 27.5V22.9034C19.25 21.4445 19.8289 20.0503 20.823 18.9819C23.5537 16.0518 28.875 9.94262 28.875 6.875" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>              
        `
      }

      width={size}
      height={size}
    />
    
  );
}

export default FilterIcon;