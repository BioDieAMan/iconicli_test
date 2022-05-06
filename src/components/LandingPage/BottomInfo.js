import React, { Component } from "react";

import { Box, Typography } from "@mui/material";

import "../../utils/css/botinfo.css";

import facebook from "../../utils/images/Purplefacebook.svg"
import instgram from "../../utils/images/Purplenstagram.svg";
import twitter from "../../utils/images/Purpletwitter.svg";
import interest from "../../utils/images/Purplepinterest.svg";
import tiktok from "../../utils/images/PurpleTiktok.svg";
import whatsapp from "../../utils/images/Purplewhatsapp.svg";
import youtube from "../../utils/images/PurpleYoutube.svg";

import title from "../../utils/images/Group145.svg"

export default class BottomInfo extends Component {
	render() {
		return (
			<Box className="bottom">
				<Box className="background"></Box>
				<Typography className="contact">Contact</Typography>
				<Typography className="email">info@iconicli.com</Typography>
				<img src={facebook} style={{ left: "7.32%" }} />
				<img src={instgram} style={{ left: "9.35%" }} />
				<img src={twitter} style={{ left: "12.23%" }} />
				<img src={interest} style={{ left: "15.45%" }} />
				<img src={tiktok} style={{ left: "17.94%" }} />
				<img src={whatsapp} style={{ left: "20.52%" }} />
				<img src={youtube} style={{ left: "23.43%" }} />
				<img src={title} className="title" />
				<Typography className="terms">Terms & conditions</Typography>
				<Typography className="aktiebolag">© 2022 ICONICLI AKTIEBOLAG</Typography>
				<Box className="address">
					<Typography className="title">Adress</Typography>
					<Typography className="content">Sågargatan 10B, 75318 Uppsala, Sweden</Typography>
				</Box>
			</Box>
		);
	}
}
