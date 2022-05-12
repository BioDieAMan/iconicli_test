import React from "react";
import { Box, Typography, Button } from "@mui/material";

import "../../utils/css/yellowdots.css";

const YellowdotsMobile = ({ props }) => {
	return (
		<React.Fragment>
			<Box className="dots-ellipse-mobile" sx={props}>
				<Box className="dots-mobile" sx={{ left: "0px" }}></Box>
				<Box className="dots-mobile" sx={{ left: "14px" }}></Box>
				<Box className="dots-mobile" sx={{ left: "28px" }}></Box>
				<Box className="dots-mobile" sx={{ left: "42px" }}></Box>
				<Box className="dots-mobile" sx={{ left: "56px" }}></Box>
				<Box className="dots-mobile" sx={{ left: "70px" }}></Box>
				<Box className="dots-mobile" sx={{ left: "84px" }}></Box>
				<Box className="dots-mobile" sx={{ left: "98px" }}></Box>
				<Box className="dots-mobile" sx={{ left: "112px" }}></Box>
				<Box className="dots-mobile" sx={{ left: "126px" }}></Box>
				<Box className="dots-mobile" sx={{ left: "140px" }}></Box>
				<Box className="dots-mobile" sx={{ left: "154px" }}></Box>
				<Box className="dots-mobile" sx={{ left: "168px" }}></Box>
				<Box className="dots-mobile" sx={{ left: "182px" }}></Box>
				<Box className="dots-mobile" sx={{ left: "196px" }}></Box>
				<Box className="dots-mobile" sx={{ left: "210px" }}></Box>
				<Box className="dots-mobile" sx={{ left: "224px" }}></Box>
				<Box className="dots-mobile" sx={{ left: "238px" }}></Box>
				<Box className="dots-mobile" sx={{ left: "252px" }}></Box>
			</Box>
		</React.Fragment>
	);
};

export default YellowdotsMobile;
