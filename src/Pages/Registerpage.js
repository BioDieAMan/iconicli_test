import React, { Component, useState, useEffect } from "react";
import { Box, Typography, Button, Input } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { isMobile, isDesktop } from "react-device-detect";
import { Link } from "react-router-dom";

import Navbar from "../components/LandingPage/Navbar";
import ChooseType from "../components/RegisterPage/ChooseType";
import Sidebar from "../components/RegisterPage/Sidebar";
import AlmostThere from "../components/RegisterPage/AlmostThere";

import titleLogo from "../utils/images/ICONICLI_LOGO.png";
import iconicli from "../utils/images/Path 1297.svg";
import back from "../utils/images/Arrow 9.svg";

const Registerpage = () => {
	const pageList = ["choose", "almost", "password"];
	const [path, setPath] = useState(window.location.pathname);
	const [type, setType] = useState("Model");
	const [page, setPage] = useState("choose");
	const [disable, setDisable] = useState(true);
	const [buttonText, setText] = useState("Next step");

	let index = 0;
	let data = {
		type: type,
		page: page,
	};

	useEffect(() => {
		if (page == "choose") {
			setDisable(false);
		} else {
			setDisable(true);
		}
		if (page == "password") {
			setText("Register");
		} else {
			setText("Next step");
		}
	}, [page]);

	const nextPage = () => {
		index = pageList.indexOf(page);
		if (index != pageList.length - 1) setPage(pageList[index + 1]);
	};

	const lastPage = () => {
		index = pageList.indexOf(page);
		if (index != 0) setPage(pageList[index - 1]);
	};

	if (isDesktop)
		return (
			<StyledEngineProvider injectFirst>
				<Box className="registerpage">
					<Box className="rect1"></Box>
					<img src={titleLogo} className="title" />
					<Typography className="become">Become a model now!</Typography>
					<Typography className="instruction">
						It has never been this easy. As a model, you create a beautiful portfolio with photos, reels and
						voice recordings.{" "}
					</Typography>

					<Sidebar data={data} />
					{page == "choose" ? <ChooseType data={data} setType={setType} /> : null}
					{page != "choose" ? <AlmostThere data={data} lastPage={lastPage} setDisable={setDisable} /> : null}

					<Box className="nextstep">
						<Button
							className="box"
							disabled={disable}
							onClick={() => {
								nextPage();
							}}>
							<Typography className="text" style={{ textTransform: "none" }}>
								{buttonText}
							</Typography>
						</Button>
					</Box>
				</Box>
			</StyledEngineProvider>
		);
	else if (isMobile)
		return (
			<StyledEngineProvider injectFirst>
				<Box className="registerpage">
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

					<Sidebar data={data} />
					{page == "choose" ? <ChooseType data={data} setType={setType} /> : null}
					{page != "choose" ? <AlmostThere data={data} lastPage={lastPage} setDisable={setDisable} /> : null}

					<Box className="nextstep">
						<Button
							className="box"
							disabled={disable}
							onClick={() => {
								nextPage();
							}}>
							<Typography className="text" style={{ textTransform: "none" }}>
								{buttonText}
							</Typography>
						</Button>
					</Box>
					<Navbar />
				</Box>
			</StyledEngineProvider>
		);
};

export default Registerpage;
