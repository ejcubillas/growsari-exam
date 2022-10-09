import React from "react";
import { SvgXml } from 'react-native-svg'; 
import colors from "../colors";
function MilkIcon(props) {
  const size = props.size ? props.size : 48;
  const color = props.active ? colors.primary : colors.text;

  return (
    <SvgXml
      xml={
        `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 23.8333H34.6667V47.6667H6.5V23.8333Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.1667 41.1667V30.3333L20.5833 36.8333L26 30.3333V41.1667M45.5 21.6667L32.5 10.8333M21.6667 6.50001V13L32.5 10.8333V4.33334L21.6667 6.50001ZM34.6667 23.8333L45.5 21.6667V44.4167L34.6667 47.6667V23.8333ZM21.1055 13L6.5 23.8333H34.6667L21.1055 13Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>        
        `
      }

      width={size}
      height={size}
    />
    
  );
}

export default MilkIcon;