import React from "react";

import { Box, Typography, Button } from "@mui/material";
import { isMobile, isDesktop } from "react-device-detect";

import YellowDots from "./YellowDots";
import ModelInfo from "./ModelInfo";

import model from "../../utils/images/camilla-mobile.png"
import left from "../../utils/images/Group 487.svg"
import right from "../../utils/images/Group 488.svg";

import "../../utils/css/bookinstantly.css";

//TODO: add short line at the bottom of the box
//TODO: add hover attribute to view
const BookInstantly = () => {
	if (isDesktop)
		return (
			<>
				<Box className="bkins-box">
					<YellowDots props={{}} />
					<Typography className="bkins-botalen">Book talented models instantly</Typography>
					<Typography className="bkins-num">
						3150 <span style={{ color: "black" }}>Profiles</span>
					</Typography>
				</Box>
				<Box className="bkins-content">
					<ModelInfo props={{ left: "0px" }} />
					<ModelInfo props={{ left: "343px" }} />
					<ModelInfo props={{ left: "686px" }} />
				</Box>
			</>
		);
    else if (isMobile)
        return (
			<>
				<Box className="bkins">
					<Typography className="title">Book talented models instantly</Typography>
					<Box className="model">
						<Typography className="address">Stockholm, Sweden</Typography>
						<Typography className="name">CAMILLA, 29</Typography>
						<Box className="rect"></Box>
						<img src={model} />
						<Box className="view">
							<Button className="button" style={{ textTransform: "none" }}>
								View
							</Button>
						</Box>
					</Box>
					<img src={left} className="left" />
					<img src={right} className="right" />
				</Box>
			</>
		);
};

export default BookInstantly;
