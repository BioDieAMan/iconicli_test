import React from "react";
import { Box } from "@mui/material";
import "../utils/css/yellowdots.css";
const YellowDots = ({ props }) => {
    return (
        <React.Fragment>
            <Box className="dots-ellipse" sx={props}>
                <Box className="dots" sx={{ left: "0px" }}></Box>
                <Box className="dots" sx={{ left: "16px" }}></Box>
                <Box className="dots" sx={{ left: "32px" }}></Box>
                <Box className="dots" sx={{ left: "48px" }}></Box>
                <Box className="dots" sx={{ left: "64px" }}></Box>
                <Box className="dots" sx={{ left: "80px" }}></Box>
                <Box className="dots" sx={{ left: "96px" }}></Box>
                <Box className="dots" sx={{ left: "112px" }}></Box>
                <Box className="dots" sx={{ left: "128px" }}></Box>
                <Box className="dots" sx={{ left: "144px" }}></Box>
                <Box className="dots" sx={{ left: "160px" }}></Box>
                <Box className="dots" sx={{ left: "176px" }}></Box>
                <Box className="dots" sx={{ left: "192px" }}></Box>
                <Box className="dots" sx={{ left: "208px" }}></Box>
                <Box className="dots" sx={{ left: "224px" }}></Box>
                <Box className="dots" sx={{ left: "240px" }}></Box>
                <Box className="dots" sx={{ left: "256px" }}></Box>
                <Box className="dots" sx={{ left: "272px" }}></Box>
                <Box className="dots" sx={{ left: "288px" }}></Box>
            </Box>
        </React.Fragment>
    );
};
export default YellowDots;
