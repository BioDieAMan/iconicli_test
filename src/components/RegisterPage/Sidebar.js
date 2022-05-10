import React, { Component, useEffect, useState } from "react";
import { Box, Typography, Button, Input } from "@mui/material";

import "../../utils/css/sidebar.css";

import right from "../../utils/images/Vector.svg";

const Sidebar = (props) => {
	const { data } = props;
	console.log(data);

	return (
		<>
			{data.page == "choose" ? (
				<Box className="sidebar">
					<Box className="yellow"></Box>
					<Box className="white1"></Box>
					<Box className="white2"></Box>
					<Typography style={{ top: "5.42%", color: "#FFFFFF" }}>1</Typography>
					<Typography style={{ top: "45.42%", color: "#FFC710" }}>2</Typography>
					<Typography style={{ top: "85.42%", color: "#FFC710" }}>3</Typography>
				</Box>
			) : null}

			{data.page == "almost" ? (
				<Box className="sidebar">
					<Box className="yellow"></Box>
					<Box className="yellow" style={{ top: "40%", bottom: "39.58%" }}></Box>
					<Box className="white2"></Box>
					<img src={right} style={{ top: "7.08%", bottom: "86.67%" }} />
					<Typography style={{ top: "45.42%", color: "#FFFFFF" }}>2</Typography>
					<Typography style={{ top: "85.42%", color: "#FFC710" }}>3</Typography>
				</Box>
			) : null}

			{data.page == "password" ? (
				<Box className="sidebar">
					<Box className="yellow"></Box>
					<Box className="yellow" style={{ top: "40%", bottom: "39.58%" }}></Box>
					<Box className="yellow" style={{ top: "80%", bottom: "0%" }}></Box>
					<img src={right} style={{ top: "7.08%", bottom: "86.67%" }} />
					<img src={right} style={{ top: "47.08%", bottom: "46.67%" }} />
					<Typography style={{ top: "85.42%", color: "#ffffff" }}>3</Typography>
				</Box>
			) : null}
		</>
	);
};

export default Sidebar;
