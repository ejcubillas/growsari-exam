import React from "react";
import { SvgXml } from 'react-native-svg'; 
import colors from "../colors";
function DeleteIcon(props) {
  const size = props.size ? props.size : 48;
  const color = props.active ? colors.primary : colors.text;

  return (
    <SvgXml
      xml={
        `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.17188 3.45312V3.71875H9.82812V3.45312C9.82812 3.10088 9.6882 2.76307 9.43913 2.514C9.19005 2.26493 8.85224 2.125 8.5 2.125C8.14776 2.125 7.80995 2.26493 7.56087 2.514C7.3118 2.76307 7.17188 3.10088 7.17188 3.45312ZM6.10938 3.71875V3.45312C6.10938 2.81909 6.36124 2.21103 6.80957 1.7627C7.2579 1.31437 7.86597 1.0625 8.5 1.0625C9.13403 1.0625 9.7421 1.31437 10.1904 1.7627C10.6388 2.21103 10.8906 2.81909 10.8906 3.45312V3.71875H14.875C15.0159 3.71875 15.151 3.77472 15.2507 3.87435C15.3503 3.97398 15.4062 4.1091 15.4062 4.25C15.4062 4.3909 15.3503 4.52602 15.2507 4.62565C15.151 4.72528 15.0159 4.78125 14.875 4.78125H14.0739L13.0688 13.583C12.9946 14.2312 12.6845 14.8295 12.1976 15.2637C11.7106 15.698 11.0809 15.9378 10.4284 15.9375H6.57156C5.91911 15.9378 5.28937 15.698 4.80242 15.2637C4.31547 14.8295 4.00537 14.2312 3.93125 13.583L2.92612 4.78125H2.125C1.9841 4.78125 1.84898 4.72528 1.74935 4.62565C1.64972 4.52602 1.59375 4.3909 1.59375 4.25C1.59375 4.1091 1.64972 3.97398 1.74935 3.87435C1.84898 3.77472 1.9841 3.71875 2.125 3.71875H6.10938ZM4.98737 13.4619C5.03173 13.8507 5.21759 14.2096 5.50955 14.4702C5.80151 14.7308 6.17915 14.8749 6.5705 14.875H10.429C10.8203 14.8749 11.198 14.7308 11.4899 14.4702C11.7819 14.2096 11.9677 13.8507 12.0121 13.4619L13.005 4.78125H3.99553L4.98737 13.4619ZM6.90625 6.64062C7.04715 6.64062 7.18227 6.6966 7.2819 6.79622C7.38153 6.89585 7.4375 7.03098 7.4375 7.17188V12.4844C7.4375 12.6253 7.38153 12.7604 7.2819 12.86C7.18227 12.9597 7.04715 13.0156 6.90625 13.0156C6.76535 13.0156 6.63023 12.9597 6.5306 12.86C6.43097 12.7604 6.375 12.6253 6.375 12.4844V7.17188C6.375 7.03098 6.43097 6.89585 6.5306 6.79622C6.63023 6.6966 6.76535 6.64062 6.90625 6.64062V6.64062ZM10.625 7.17188C10.625 7.03098 10.569 6.89585 10.4694 6.79622C10.3698 6.6966 10.2346 6.64062 10.0938 6.64062C9.95285 6.64062 9.81773 6.6966 9.7181 6.79622C9.61847 6.89585 9.5625 7.03098 9.5625 7.17188V12.4844C9.5625 12.6253 9.61847 12.7604 9.7181 12.86C9.81773 12.9597 9.95285 13.0156 10.0938 13.0156C10.2346 13.0156 10.3698 12.9597 10.4694 12.86C10.569 12.7604 10.625 12.6253 10.625 12.4844V7.17188Z" fill="#D25757"/>
        </svg>               
        `
      }

      width={size}
      height={size}
    />
    
  );
}

export default DeleteIcon;