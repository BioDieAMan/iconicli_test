import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
import { isMobile, isDesktop } from "react-device-detect";

import PurpleCarousel from "./PurpleCarousel";
import YellowDots from "./YellowDots";

import "../../utils/css/whatisiconicli.css";

import pexelstimamiroshnichenko from "../../utils/images/pexels-tima-miroshnichenko-7206527.jpg";
import Arrow10 from "../../utils/images/Arrow10.png";
import Ellipse266 from "../../utils/images/Ellipse266.png";
import Arrow9 from "../../utils/images/Arrow9.png";
import Ellipse267 from "../../utils/images/Ellipse267.png";

const WhatisIconicli = () => {

	if (isDesktop)
		return (
			<React.Fragment>
				<YellowDots props={{ left: "145px", top: "765px" }} />
				<Typography className="whatisiconicli">What is ICONICLI?</Typography>
				<Box className="as" style={{ left: "177px", top: "941px" }}>
					<Box className="whatrectangle"></Box>
					<img src={pexelstimamiroshnichenko} className="whatis-img" />
					<Box className="whatis-onlinebox">
						<Typography className="whatis-online">Online service for models and brands</Typography>
					</Box>
					<Typography className="whatis-intro">
						ICONICLI is a digital service that connects freelancing models with brands worldwide.
						<br />
						<br />
						It{"'"}s an ALL IN ONE service for finding and booking diverse models from a huge database of
						profile, wherever and whenever needed.
						<br />
						<br />
						The service is build with cutting edge technology to make your workflow as effortless as
						possible.
						<br />
						<br />
						No more paperwork, exaggerated fees, and stressful deadlines!
					</Typography>
					<Box className="whatis-button">
						<img src={Arrow10} className="whatis-arrow" />
						<img src={Ellipse266} className="whatis-ellipse" />
					</Box>
					<Box className="whatis-button2">
						<img src={Arrow9} className="whatis-arrow" />
						<img src={Ellipse267} className="whatis-ellipse" />
					</Box>
					<PurpleCarousel position={{ left: "470px", top: "419px" }} length={4} />
				</Box>
			</React.Fragment>
		);
	else if (isMobile)
		return (
			<React.Fragment>
				<Box className="whatis">
					<Typography className="title">What is ICONICLI?</Typography>
					<Box className="img"></Box>
					<Box className="gradient"></Box>
					<Typography className="intro">
						ICONICLI is a digital service that connects freelancing models with brands worldwide.
					</Typography>
					<Typography className="intro2">
						It{"'"}s an ALL IN ONE service for finding and booking diverse models from a huge database of
						profile, wherever and whenever needed.
					</Typography>
					<Typography className="intro3">No more paperwork, exaggerated fees, and stressful deadlines!</Typography>
				</Box>
			</React.Fragment>
		);
};

export default WhatisIconicli;
