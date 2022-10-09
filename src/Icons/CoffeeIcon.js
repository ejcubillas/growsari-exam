import React from "react";
import { SvgXml } from 'react-native-svg'; 
import colors from "../colors";
function CoffeeIcon(props) {
  const size = props.size ? props.size : 48;
  const color = props.active ? colors.primary : colors.text;

  return (
    <SvgXml
      xml={
        `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.1167 12.7292C33.597 12.7292 41.2833 14.6497 41.2833 17.0208C41.2833 19.392 33.597 21.3125 24.1167 21.3125C14.6364 21.3125 6.95001 19.392 6.95001 17.0208C6.95001 16.2548 7.7547 15.5338 9.16666 14.9093" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6.95001 17.0208V37.0693C6.95001 39.3461 7.89418 41.5327 9.97349 42.4618C12.5807 43.627 17.059 44.9167 24.1167 44.9167C31.1765 44.9167 35.6548 43.627 38.2599 42.4618C40.337 41.5327 41.2833 39.3461 41.2833 37.0693V17.0208M41.2833 19.1667C42.9907 19.1667 44.6281 19.8449 45.8353 21.0522C47.0426 22.2594 47.7208 23.8968 47.7208 25.6042C47.7208 27.3115 47.0426 28.9489 45.8353 30.1562C44.6281 31.3634 42.9907 32.0417 41.2833 32.0417M15.5333 4.14583V12.7292M24.1167 2V6.29167M32.7 6.29167V12.7292" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>        
        `
      }

      width={size}
      height={size}
    />
    
  );
}

export default CoffeeIcon;