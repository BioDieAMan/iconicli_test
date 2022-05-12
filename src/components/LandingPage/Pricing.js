import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { isMobile, isDesktop } from "react-device-detect";

import YellowDots from "./YellowDots";
import YellowdotsMobile from "./YellowdotsMobile";

import "../../utils/css/pricing.css";

import ForClients from "../../utils/images/ForClients.svg";
import ForModels from "../../utils/images/ForModels.svg";
import modelMobile from "../../utils/images/Models icon.svg";
import clientMobile from "../../utils/images/Clients Icon.svg";

const Pricing = () => {
	if (isDesktop)
		return (
			<>
				<Box className="pricing">
					<YellowDots props={{}} />
					<Typography className="title">Pricing</Typography>
				</Box>
				<Box className="pricontent">
					<img src={ForModels} className="modelimg" />
					<img src={ForClients} className="clientimg" />
					<Box className="text">
						<Box className="model">
							<Typography className="title">For models</Typography>
							<Box className="line"></Box>
							<Typography className="percentage">20%</Typography>
							<Typography className="iconi">
								ICONICLI charge models 20% of the job payment amount
							</Typography>
						</Box>
						<Box className="client">
							<Typography className="title">For clients</Typography>
							<Box className="line"></Box>
							<Typography className="percentage">3%</Typography>
							<Typography className="iconi">
								ICONICLI charges clients 3% of the job payment amount, as a payment transfer fee
							</Typography>
						</Box>
					</Box>
				</Box>
			</>
		);
	else if (isMobile)
		return (
			<Box className="price">
				<YellowdotsMobile props={{ left: "52px", top: "2522px" }} />
				<Typography className="title">Pricing</Typography>
				<Box className="frame">
					<Box className="model">
						<Typography className="model-title">Models</Typography>
						<img src={modelMobile} />
					</Box>
					<Box className="client">
						<Typography className="client-title">Clients</Typography>
						<img src={clientMobile} />
					</Box>
				</Box>
				<Typography className="formodel">For models</Typography>
				<Box className="line"></Box>
				<Typography className="percent">20%</Typography>
				<Typography className="perintro">ICONICLI charge models 20% of the job payment amount</Typography>
			</Box>
		);
};

export default Pricing;
