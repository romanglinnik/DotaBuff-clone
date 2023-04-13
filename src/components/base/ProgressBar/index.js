import "./index.scss";
import React, { useEffect, useState } from "react";

const ProgressBar = ({progress}) => {
    const getColor = () => {
        if (progress < 100) {
            return "rgb(252, 94, 77)"
        } else if (progress < 200) {
            return "rgb(249, 114, 77)"
        } else if (progress < 300) {
            return "rgb(246, 134, 78)"
        } else if (progress < 400) {
            return "rgb(241, 160, 80)"
        } else if (progress < 500) {
            return "rgb(239, 171, 81)"
        } else if (progress < 600) {
            return "rgb(234, 192, 82)"
        } else if (progress < 1000) {
            return "rgb(201, 220, 87)"
        } else if (progress < 1200) {
            return "rgb(149, 207, 93)"
        } else if (progress < 1300) {
            return "rgb(133, 203, 95)"
        } else if (progress < 1400) {
            return "rgb(121, 198, 97)"
        } else if (progress < 1500) {
            return "rgb(111, 194, 99)"
        } else {
            return "rgb(102, 187, 106)" 
        }
    } 
    const ProgressBarFill = {
        height: '100%',
        width: `${progress / 1625 * 100}%`,
        backgroundColor: getColor(),
        borderRadius: 10,
      }
    return (
        <div class="progress-bar">
            <div style={ProgressBarFill}></div>
        </div>
    );
};

export default ProgressBar