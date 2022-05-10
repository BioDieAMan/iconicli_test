import React, { Component, useEffect, useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";

import "../utils/css/preload.css";


const Preloadingpage = () => {
	let navigate = useNavigate();
	let location = useLocation();

	const [email, setEmail] = useState(location.state.email);
	const [password, setPassword] = useState(location.state.password);
	const [showError, setShow] = useState(location.state.showError);

	console.log(location);
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
	console.log(count);
	if (count === 0) {
		navigate("/login", { state: { email: email, password: password, showError: showError } });
	}

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
				<Typography className="text">LOGIN IN</Typography>
			</Box>
		</StyledEngineProvider>
	);
};

export default Preloadingpage;
