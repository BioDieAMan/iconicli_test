import React, { Component } from "react";
import { Box, Typography } from "@mui/material";

import YellowDots from "./YellowDots";

import "../../utils/css/whatsay.css";

import kai from "../../utils/images/pexels-hassan-ouajbir-1306247.png";
import emelie from "../../utils/images/pexels-emre-keshavarz-7232215.png";

export default class WhatSay extends Component {
	render() {
		return (
			<Box className="whatsay">
				<Box className="title">
					<YellowDots />
					<Typography className="text">What they say about ICONICLI</Typography>
				</Box>
				<Box className="content">
					<Box className="kai">
						<Box className="rect"></Box>
						<img src={kai} />
						<Typography className="nameage">KAI, 31</Typography>
						<Typography className="title">Freelance photographer</Typography>
						<Typography className="desc">
							{'"'}Saved the day, again and again! Booking the right profile has never been this fast, affordable and effortless!{'"'}
						</Typography>
					</Box>
					<Box className="emelie">
						<Box className="rect"></Box>
						<img src={emelie} />
						<Typography className="nameage">EMELIE, 25</Typography>
						<Typography className="title">Model</Typography>
						<Typography className="desc">
                            {'"'}I{"'"}m so grateful for the career opportunities that have been possible thanks to ICONICLI{'"'}
						</Typography>
					</Box>
				</Box>
			</Box>
		);
	}
}
