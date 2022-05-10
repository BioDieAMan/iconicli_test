import React, { useEffect, useState } from "react";

import { Box, Typography, Button, Input } from "@mui/material";

import chooseIcon from "../../utils/images/Chooseaccounttype.svg";
import modelIcon from "../../utils/images/Modelsicon.svg";
import clientsIcon from "../../utils/images/ClientsIcon.svg";

import "../../utils/css/choosetype.css";

const ChooseType = ( props ) => {
	const { data, setType } = props
	
	
	const [showModel, setShow] = useState(data.type);
	const [model_sx, setModel] = useState({});
	const [client_sx, setClient] = useState({});

	useEffect(() => {
		setShow(data.type);
		if (showModel == "Model") {
			setModel({
				background: "#DED3F5",
				border: "3px solid #8c52ff",
			});
			setClient({});
		} else {
			setClient({
				background: "#DED3F5",
				border: "3px solid #8c52ff",
			});
			setModel({});
		}
	}, [data, showModel]);

	return (
		<Box>
			<img src={chooseIcon} className="chooseicon" />
			<Typography className="choose">Choose your account type</Typography>
			<Typography className="enable">It will enable us to tailor your ICONICLI experience</Typography>
			<Button
				className="model"
				onClick={() => {
					setType("Model");
				}}>
				<Box className="rect" style={model_sx}></Box>
				<img src={modelIcon} className="modelicon" />
				<Typography className="choice" style={{ textTransform: "none" }}>
					Model
				</Typography>
				<Typography className="star" style={{ textTransform: "none" }}>
					Become a star
				</Typography>
			</Button>
			<Button
				className="client"
				onClick={() => {
					setType("Client");
				}}>
				<Box className="rect" style={client_sx}></Box>
				<img src={clientsIcon} className="modelicon" />
				<Typography className="choice" style={{ textTransform: "none" }}>
					Client
				</Typography>
				<Typography className="star" style={{ textTransform: "none" }}>
					Find talents
				</Typography>
			</Button>
		</Box>
	);
};

export default ChooseType;
