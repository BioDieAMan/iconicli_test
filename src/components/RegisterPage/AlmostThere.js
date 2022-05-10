import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Input, Checkbox } from "@mui/material";

import "../../utils/css/almosthere.css";

import eye from "../../utils/images/EYE.svg";
import noteye from "../../utils/images/EYEinverse.svg";
import back from "../../utils/images/Back.svg";

function AlmostThere(props) {
	const { data, lastPage, setDisable } = props;

	const [name, setName] = useState("");
	const [website, setWeb] = useState("");
	const [email, setEmail] = useState("");

	const [pass, setPass] = useState("");
	const [conpass, setConpass] = useState("");

	const [showemailError, setEmailerror] = useState("none");
	const [showpassError, setPasserror] = useState("none");

	const [passImg, setPassimg] = useState("url(" + eye + ")");
	console.log(passImg);
	const [showPass, setShowpass] = useState("password");

	useEffect(() => {
		if (data.page == "almost") {
			if (email.length < 6) {
				setEmailerror("inline");
				setDisable(true);
			} else {
				setEmailerror("none");
				if (name != "") setDisable(false);
				else setDisable(true);
			}
		}

		if (data.page == "password") {
			if (pass.length <= 8) {
				setPasserror("inline");
				setDisable(true);
			} else {
				setPasserror("none");
				if (conpass == pass) setDisable(false);
				else setDisable(true);
			}
		}
	}, [name, email, pass, conpass]);

	const backPage = () => {
		if (data.page == "almost") {
			if (name != "" || email != "") {
				setName("");
				setEmail("");
				setWeb("");
			} else {
				lastPage();
			}
		}

		if (data.page == "password") {
			if (pass != "" || conpass != "") {
				setPass("");
				setConpass("");
			} else {
				lastPage();
			}
		}
	};

	const clickEye = () => {
		if (showPass == "password") {
			setShowpass("text");
			setPassimg("url(" + noteye + ")");
		} else {
			setShowpass("password");
			setPassimg("url(" + eye + ")");
		}
	};

	return (
		<Box className="almosthere">
			<Button className="button" onClick={() => backPage()}>
				<img src={back} className="back" />
			</Button>

			{data.page == "almost" && data.type == "Model" ? (
				<>
					<Input
						type="text"
						disableUnderline
						// autoComplete="off"
						className="name"
						placeholder="First and Last name"
						defaultValue={name}
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<Input
						type="text"
						disableUnderline
						// autoComplete="off"
						className="email"
						placeholder="Email"
						defaultValue={email}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Typography className="text">Almost there...</Typography>
					<Typography className="error" style={{ display: showemailError }}>
						Please choose a valid email adress
					</Typography>
				</>
			) : null}

			{data.page == "almost" && data.type == "Client" ? (
				<>
					<Input
						type="text"
						disableUnderline
						// autoComplete="off"
						className="name"
						placeholder="Company name"
						defaultValue={name}
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<Input
						type="text"
						disableUnderline
						// autoComplete="off"
						className="companyweb"
						placeholder="Company website"
						defaultValue={website}
						value={website}
						onChange={(e) => setWeb(e.target.value)}
					/>
					<Input
						type="text"
						disableUnderline
						// autoComplete="off"
						className="email2"
						placeholder="Email"
						defaultValue={email}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Typography className="text">Almost there...</Typography>
					<Typography className="error" style={{ display: showemailError }}>
						Please choose a valid email adress
					</Typography>
				</>
			) : null}

			{data.page == "password" ? (
				<>
					<Input
						type={showPass}
						disableUnderline
						className="name"
						placeholder="Password"
						defaultValue={pass}
						value={pass}
						onChange={(e) => setPass(e.target.value)}
					/>
					<Input
						type={showPass}
						disableUnderline
						className="email"
						placeholder="Confirm password"
						defaultValue={conpass}
						value={conpass}
						onChange={(e) => setConpass(e.target.value)}
					/>
					<Typography className="finalstep">...final step! Choose a password</Typography>
					<Typography className="passerror" style={{ display: showpassError }}>
						Password should be at least 8 characters long
					</Typography>
					<Button className="eye" onClick={() => clickEye()} style={{ backgroundImage: passImg }}></Button>
					<Checkbox className="checkbox" />
					<Typography className="agree">
						I have read, understood and I agree with the <a href="">Terms of Service</a> and{" "}
						<a href="">Privacy policy</a>
					</Typography>
				</>
			) : null}
		</Box>
	);
}

export default AlmostThere;
