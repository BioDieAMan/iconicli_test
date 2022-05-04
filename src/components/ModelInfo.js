import React from "react";

import { Box, Typography, Button } from "@mui/material";

import pexelsrodnaeproductions from "../utils/images/pexels-rodnae-productions-7239878.png"

import "../utils/css/bookinstantly.css"

const ModelInfo = ({props}) => {
    return (
        <>
            <Box className="bkins-modelinfo-box" sx={props}>
                <Box className="bkins-modelinfo-rect"></Box>
                <img src={pexelsrodnaeproductions} className="bkins-img"></img>
                <Typography className="bkins-modelinfo-name">CAMILLA, 29</Typography>
                <Typography className="bkins-modelinfo-address">Stockholm, Sweden</Typography>
                <Box className="bkins-button-box">
                    <Button className="bkins-button">VIEW</Button>
                </Box>
            </Box>
        </>
    )
}

export default ModelInfo