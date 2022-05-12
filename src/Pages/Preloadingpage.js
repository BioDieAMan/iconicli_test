import React, { Component, useEffect, useState, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { useLocation, Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { isMobile, isDesktop } from "react-device-detect";

import "../utils/css/preload.css";

import iconicli from "../utils/images/Path 1297.svg";

const Preloadingpage = () => {
	let navigate = useNavigate();
	let location = useLocation();

	const [email, setEmail] = useState(location.state.email);
	const [password, setPassword] = useState(location.state.password);
	const [showError, setShow] = useState(location.state.showError);
	const [path, setPath] = useState(window.location.pathname);

	// console.log(location);
	let [count, setCount] = useState(5);
	const myRef = useRef(null);
	myRef.current = () => {
		setCount(count - 1);
	};
	useEffect(() => {
		let id = setInterval(() => {
			myRef.current();
		}, 1000);
		return () => clearInterval(id);
	}, []);
	// console.log(count);
	if (count === 0) {
		navigate("/login", { state: { email: email, password: password, showError: showError } });
	}
	if (isDesktop)
		return (
			<StyledEngineProvider injectFirst>
				<Box className="preload">
					<Box className="ellipse1"></Box>
					<Box className="ellipse2"></Box>
					<Box className="ellipse3"></Box>
					<Box className="ellipse4"></Box>
					<Box className="ellipse5"></Box>
					<Box className="ellipse6"></Box>
					<Box className="ellipse7"></Box>
					<Box className="ellipse8"></Box>
					<Typography className="text1">LOGIN IN</Typography>
				</Box>
			</StyledEngineProvider>
		);
	else if (isMobile)
		return (
			<StyledEngineProvider injectFirst>
				<Box className="preload">
					<Box className="topbar">
						<img src={iconicli} />
						<Button className="light" component={Link} to="/login" onClick={() => setPath("/login")}>
							<Typography className="text" style={{ textTransform: "none" }}>
								Log in
							</Typography>
						</Button>
						<Box className="line1"></Box>
						<Box className="line2"></Box>
						<Box className="line3"></Box>
					</Box>
					<Box className="ellipse1"></Box>
					<Box className="ellipse2"></Box>
					<Box className="ellipse3"></Box>
					<Box className="ellipse4"></Box>
					<Box className="ellipse5"></Box>
					<Box className="ellipse6"></Box>
					<Box className="ellipse7"></Box>
					<Box className="ellipse8"></Box>
					<Typography className="text1">LOGIN IN</Typography>
				</Box>
			</StyledEngineProvider>
		);
};

export default Preloadingpage;
