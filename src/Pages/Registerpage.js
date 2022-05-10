import React, { Component } from "react";
import { Box, Typography, Button, Input } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

import "../utils/css/registerpage.css";

import ChooseType from "../components/RegisterPage/ChooseType";
import Sidebar from "../components/RegisterPage/Sidebar";
import AlmostThere from "../components/RegisterPage/AlmostThere";

import titleLogo from "../utils/images/ICONICLI_LOGO.png";

const Registerpage = () => {
	return (
		<StyledEngineProvider injectFirst>
			<Box className="registerpage">
				<Box className="rect"></Box>
				<img src={titleLogo} className="title" />
				<Typography className="become">Become a model now!</Typography>
				<Typography className="instruction">
					It has never been this easy. As a model, you create a beautiful portfolio with photos, reels and
					voice recordings.{" "}
        </Typography>

        <Sidebar/>
        {/* <ChooseType /> */}
        <AlmostThere/>

				<Box className="nextstep">
					<Button className="box"></Button>
					<Typography className="text">Next step</Typography>
				</Box>
			</Box>
		</StyledEngineProvider>
	);
};

export default Registerpage;
