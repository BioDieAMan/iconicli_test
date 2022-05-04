import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";

import "../utils/css/purplecarousel.css";

const PurpleCarousel = ({ props }) => {
    return (
        <React.Fragment>
            <Box className="purcar-box" sx={props}>
                <Box className="purcar-dots1"></Box>
                <Box className="purcar-dots2" sx={{ left: "24px" }}></Box>
                <Box className="purcar-dots2" sx={{ left: "44px" }}></Box>
                <Box className="purcar-dots2" sx={{ left: "64px" }}></Box>
            </Box>
        </React.Fragment>
    );
};

export default PurpleCarousel;
