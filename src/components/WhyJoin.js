import React, { Component } from "react";
import { Box, Button, Typography } from "@mui/material";

import YellowDots from "./YellowDots";
import PurpleCarousel from "./PurpleCarousel";

import "../utils/css/whyjoin.css";

import model from "../utils/images/pexels-joshua-mcknight-3290250.png";
import client from "../utils/images/pexels-antoni-shkraba-7091841.png";
import GenderEquality from "../utils/images/GenderEquality.svg";
import DecentWork from "../utils/images/DecentWork.svg";
import Reduced from "../utils/images/ReducedInequalities.svg";

export default class WhyJoin extends Component {
	render() {
		return (
			<>
				<Box className="whyjoin">
					<YellowDots />
					<Typography className="text">Why you should join ICONICLI</Typography>
				</Box>
				<Box className="whyjoinmodel">
					<Typography className="title">FOR MODELS</Typography>
					<Box className="rect"></Box>
					<img src={model} className="img" />
					<Typography className="contenttitle">WORK WITH CLIENTS WORLDWIDE</Typography>
					<Box className="content">
						<Typography className="text">
							Our clients come from all around the globe.
							<br />
							<br />
							You can apply to jobs near your or on the other side of the planet
							<br />
							<br />
							The choice is always yours
						</Typography>
					</Box>
				</Box>
				<Box className="whyjoinline"></Box>
				<Box className="whyjoinclient">
					<Typography className="title">FOR CLIENTS</Typography>
					<Box className="rect"></Box>
					<img src={client} className="img" />
					<Typography className="contenttitle">WORK WITH CLIENTS WORLDWIDE</Typography>
					<Box className="content">
						<Typography className="text">
							Thanks to an automation and digitalization, booking models to create first class content, is now possible to smaller
							brands and start-ups. <br />
							<br />
							Get the most out of your resources.
						</Typography>
					</Box>
				</Box>
				<PurpleCarousel position={{ left: "340px", top: "4111px" }} length={6} />
				<PurpleCarousel position={{ left: "912px", top: "4111px" }} length={6} />
				<Box className="bepart">
					<Typography className="title">BE PART OF SOMETHING BIGGER!</Typography>
					<Typography className="text">
						By using and supporting ICONICLI, you will automatically contributing to, and be part of a higher purpose! We strive to make a
						better world by supporting 3 of the 17 Global Goals for 2030, which are connected to the modeling, marketing and media
						industry.
					</Typography>
				</Box>
				<Box className="bepartdia">
					<img src={GenderEquality} style={{ left: "10px" }} />
					<img src={DecentWork} style={{ left: "299px" }} />
					<img src={Reduced} style={{ left: "589px" }} />
					<Box className="line" style={{ left: "26px" }}></Box>
					<Box className="line" style={{ left: "315px" }}></Box>
					<Box className="line" style={{ left: "603px" }}></Box>
					<Typography className="gender">GENDER EQUALITY</Typography>
					<Typography className="decent">DECENT WORK AND ECONOMIC GROWTH</Typography>
					<Typography className="reduced">REDUCED INEQUALITIES</Typography>
				</Box>
			</>
		);
	}
}
