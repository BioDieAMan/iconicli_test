import React from 'react'

import { Box, Typography, Button, Input } from "@mui/material";


import chooseIcon from "../../utils/images/Chooseaccounttype.svg";
import modelIcon from "../../utils/images/Modelsicon.svg";
import clientsIcon from "../../utils/images/ClientsIcon.svg";

const ChooseType=()=> {
  return (
		<Box>
			<img src={chooseIcon} className="chooseicon" />
			<Typography className="choose">Choose your account type</Typography>
			<Typography className="enable">It will enable us to tailor your ICONICLI experience</Typography>
			<Box className="model">
				<Box className="rect"></Box>
				<img src={modelIcon} className="modelicon" />
				<Typography className="choice">Model</Typography>
				<Typography className="star">Become a star</Typography>
			</Box>
			<Box className="client">
				<Box className="rect"></Box>
				<img src={clientsIcon} className="modelicon" />
				<Typography className="choice">Client</Typography>
				<Typography className="star">Find talents</Typography>
			</Box>
		</Box>
  );
}

export default ChooseType