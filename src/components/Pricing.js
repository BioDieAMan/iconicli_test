import React from "react";
import { Box, Typography, Button } from "@mui/material";

import YellowDots from "./YellowDots";

import "../utils/css/pricing.css";

import ForClients from "../utils/images/ForClients.svg";
import ForModels from "../utils/images/ForModels.svg";

const Pricing = () => {
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
						<Typography className="iconi">ICONICLI charge models 20% of the job payment amount</Typography>
					</Box>
					<Box className="client">
						<Typography className="title">For clients</Typography>
						<Box className="line"></Box>
						<Typography className="percentage">3%</Typography>
						<Typography className="iconi">ICONICLI charges clients 3% of the job payment amount, as a payment transfer fee</Typography>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Pricing;
