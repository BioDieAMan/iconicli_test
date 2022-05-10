import React from 'react'
import { Box, Typography, Button, Input } from "@mui/material";

import "../../utils/css/almosthere.css"

import eye from "../../utils/images/EYE.svg"

function AlmostThere() {
  return (
		<Box className="almosthere">
			<Typography className="text">Almost there...</Typography>
			<Typography className="error">Please chose a valid email adress</Typography>
			<Input
				type="text"
				disableUnderline
				autoComplete="off"
				className="name"
				placeholder="First and Last name"
				// defaultValue={email}
				// value={email}
				// onChange={(e) => setEmail(e.target.value)}
          />
          <img src={eye} />
			<Input
				type="text"
				disableUnderline
				autoComplete="off"
				className="email"
				placeholder="Email"
				// defaultValue={email}
				// value={email}
				// onChange={(e) => setEmail(e.target.value)}
			/>
			<Typography className="agree">
				I have read, understood and I agree with the <a href="">Terms of Service</a> and{" "}
				<a href="">Privacy policy</a>
			</Typography>
		</Box>
  );
}

export default AlmostThere