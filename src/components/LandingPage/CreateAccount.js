import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { isMobile, isDesktop } from "react-device-detect";
import { Link } from "react-router-dom";

import pexelsahmedsatti from "../../utils/images/pexels-ahmed-satti-3223552.jpg";
import pexelmobile from "../../utils/images/pexels-moblie.jpg";
import iconicli from "../../utils/images/Path 1297.svg";

import "../../utils/css/findbook.css";

//TODO: add hover attribute in buttons

const Frame5 = {
	textAlign: "left",
	position: "static",
	top: "8px",
	left: "8px",
	width: "402px",
	height: "106px",

	fontStyle: "normal",
	fontWeight: "700",
	fontSize: "35px",
	lineHeight: "52px",

	color: "#1F0045",

	fontFamily: "Poppins",
	flex: "none",
	flexGrow: "0",
	margin: "0px 10px",
};

const Frame4 = {
	textAlign: "left",
	position: "static",
	top: "8px",
	left: "8px",
	width: "600px",
	height: "38px",

	fontStyle: "normal",
	fontWeight: "400",
	fontSize: "16px",
	lineHeight: "18.75px",

	color: "#1F0045",

	fontFamily: "Roboto",
	flex: "none",
	flexGrow: "0",
	margin: "0px 10px",
};

const Frame6 = {
	textAlign: "left",
	position: "static",
	top: "8px",
	left: "8px",
	width: "503px",
	height: "19px",

	fontStyle: "normal",
	fontWeight: "400",
	fontSize: "16px",
	lineHeight: "18.75px",

	color: "#000000",

	fontFamily: "Roboto",
	flex: "none",
	flexGrow: "0",
	margin: "0px 10px",
};

class CreateAccount extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			path: window.location.pathname,
		};
	}
	setPath = (e) => {
		this.setState({
			path: e,
		});
	};
	render() {
		if (isDesktop)
			return (
				<React.Fragment>
					<Box className="Findlook_Box">
						<Box className="Findlook_Rectangle"></Box>
						<img src={pexelsahmedsatti} className="Findlook_img" />
						<Box className="Frame5">
							<Typography style={Frame5}>Find and book diverse models near you!</Typography>
						</Box>
						<Box className="Frame4">
							<Typography style={Frame4}>
								Join our community of models and brands, and start collaborating with diverse models to
								bring out the full potential of your brand!
							</Typography>
						</Box>
						<Box className="Frame6">
							<Typography className="Frame6x">
								Modeling and booking models has never been this easy!
							</Typography>
						</Box>
						<Box className="createanaccount">
							<Button className="createaccountbutton">CREATE AN ACCOUNT</Button>
						</Box>
					</Box>
					<Box className="Createanaccount2">
						<Typography className="CreateAccountTypo">CREATE AN ACCOUNT</Typography>
					</Box>
				</React.Fragment>
			);
		else if (isMobile)
			return (
				<React.Fragment>
					<Box className="cabox">
						<img src={iconicli} />
						<Button className="light" component={Link} to="/login" onClick={() => this.setPath("/login")}>
							<Typography className="text" style={{ textTransform: "none" }}>
								Log in
							</Typography>
						</Button>
						<Box className="line1"></Box>
						<Box className="line2"></Box>
						<Box className="line3"></Box>
						<Typography className="findbook">Find and book diverse models near you!</Typography>
						<Typography className="easy">Modeling and booking models has never been this easy!</Typography>
						<Box className="create">
							<Button
								className="button"
								component={Link}
								to="/register"
								onClick={() => this.setPath("/register")}>
								CREATE AN ACCOUNT
							</Button>
						</Box>
					</Box>
				</React.Fragment>
			);
	}
}

export default CreateAccount;
