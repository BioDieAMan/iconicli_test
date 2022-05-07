import React, { Component } from "react";

import { Box, Typography, Button, Input} from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

import Navbar from "../components/LandingPage/Navbar";

import "../utils/css/login.css";

import google from "../utils/images/Google.svg";
import facebook from "../utils/images/FACEBOOK.svg";

export default class Loginpage extends Component {
	constructor(props) {
		super(props);
		this.setPath = {
			path: window.location.pathname,
		};
	}
	render() {
		return (
			<StyledEngineProvider injectFirst>
				<Box className="login">
					<Box>
						<Typography className="title">Log in to continue the journey </Typography>
						<Typography className="signuptext">
							If you are not a member yet, you can <a href="/register">sign up here!</a>
						</Typography>
						<Box className="purpleback"></Box>
						<Input
							type="text"
							disableUnderline
							autoComplete="off"
							className="email"
							placeholder="Enter Email"
						/>
						<Input
							type="password"
							disableUnderline
							autoComplete="off"
							className="password"
							placeholder="Password"
						/>
						<Typography className="forgot">Forgot your password?</Typography>
						<Button className="button" >
							<Typography className="text">LOG IN</Typography>
						</Button>

						<Button className="google">
							<img src={google} />
						</Button>
						<Typography className="google-text">Log in with Google </Typography>
						<Button className="facebook">
							<img src={facebook} />
						</Button>
						<Typography className="facebook-text">Log in with Facebook </Typography>
					</Box>
					<Navbar />
				</Box>
			</StyledEngineProvider>
		);
	}
}
