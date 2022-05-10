import React from "react";
import { Box, Typography, Button, Input } from "@mui/material";

import "../../utils/css/sidebar.css"

const Sidebar = ({props}) => {
    return (
		<Box className="sidebar">
			<Box className="yellow"></Box>
			<Box className="white1"></Box>
			<Box className="white2"></Box>
			<Typography style={{ color: "#FFFFFF" }}>1</Typography>
			<Typography style={{ top: "45.42%", color: "#FFC710" }}>2</Typography>
			<Typography style={{ top: "85.42%", color: "#FFC710"}}>3</Typography>
		</Box>
	);
};

export default Sidebar;
