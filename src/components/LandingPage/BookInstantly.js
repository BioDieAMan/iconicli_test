import React from "react";

import { Box, Typography, Button } from "@mui/material";

import YellowDots from "./YellowDots";
import ModelInfo from "./ModelInfo";

import "../../utils/css/bookinstantly.css";

//TODO: add short line at the bottom of the box
const BookInstantly = () => {
    return (
        <>
            <Box className="bkins-box">
                <YellowDots props={{}} />
                <Typography className="bkins-botalen">Book talented models instantly</Typography>
                <Typography className="bkins-num">3150 <span style={{color:"black"}}>Profiles</span></Typography>
            </Box>
            <Box className="bkins-content">
                <ModelInfo props={{left:"0px"}}/>
                <ModelInfo props={{left:"343px"}}/>
                <ModelInfo props={{left:"686px"}}/>
            </Box>
        </>
    )
}

export default BookInstantly