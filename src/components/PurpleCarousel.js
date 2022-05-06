import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";

import "../utils/css/purplecarousel.css";

//TODO: use carousel component in React and rewrite the component

const PurpleCarousel = ({ position,length}) => {
    let dots = [];
	for (let i = 0; i < length-1; i++) {
		let l = 24+i * 20;
		let string = l.toString() + "px";
		dots.push(<Box className="purcar-dots2" sx={{ left: string }}></Box>);
	}
	return (
		<React.Fragment>
			<Box className="purcar-box" sx={position}>
				<Box className="purcar-dots1"></Box>
				{dots}
			</Box>
		</React.Fragment>
	);
};

export default PurpleCarousel;
