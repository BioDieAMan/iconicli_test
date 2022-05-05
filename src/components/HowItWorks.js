import React from "react";

import { Box, Typography, Button } from "@mui/material";

import YellowDots from "./YellowDots";

import "../utils/css/howitworks.css";

import Clients from "../utils/images/Clients.png";
import Yinyang from "../utils/images/Yin_yangCOLOR1.png";

const HowItWorks = () => {
    return (
        <>
            <Box className="howitworks">
                <YellowDots props={{}} />
                <Typography className="title">How it works</Typography>
                <Box className="flow">
                    <Box className="line1"></Box>
                    <Box className="line2"></Box>
                    <Box className="line3"></Box>
                    <Box className="line4"></Box>
                    <img src={Yinyang} className="yinyang"></img>
                    <Box
                        className="ellipse"
                        sx={{
                            left: "0px",
                            top: "0px",
                            bgcolor:"#1f0045"
                        }}
                    >
                        <img src={Clients} className="clientimg"></img>
                        <Typography className="client">CLIENT</Typography>
                    </Box>
                    <Box
                        className="block"
                        sx={{
                            left: "104.3px",
                            top: "16px",
                        }}
                    >
                        <Typography className="text1">
                            Register an account
                        </Typography>
                    </Box>
                    <Box
                        className="block"
                        sx={{
                            left: "258.32px",
                            top: "16px",
                        }}
                    >
                        <Typography className="text1">
                            Build your profile
                        </Typography>
                    </Box>
                    <Box
                        className="block"
                        sx={{
                            left: "412.52px",
                            top: "16px",
                        }}
                    >
                        <Typography className="text2">Create job</Typography>
                    </Box>
                    <Box
                        className="block"
                        sx={{
                            left: "566.71px",
                            top: "16px",
                        }}
                    >
                        <Typography className="text2">Book</Typography>
                    </Box>
                    <Box
                        className="ellipse"
                        sx={{
                            left: "0px",
                            top: "186px",
                            bgcolor:"#8C52FF"
                        }}
                    >
                        <img src={Clients} className="clientimg"></img>
                        <Typography className="client">CLIENT</Typography>
                    </Box>
                    <Box
                        className="block2"
                        sx={{
                            left: "104.3px",
                            top: "202px"
                        }}
                    >
                        <Typography className="text1">
                            Register an account
                        </Typography>
                    </Box>
                    <Box
                        className="block2"
                        sx={{
                            left: "258.32px",
                            top: "202px"
                        }}
                    >
                        <Typography className="text1">
                            Build your protfolio
                        </Typography>
                    </Box>
                    <Box
                        className="block2"
                        sx={{
                            left: "412.52px",
                            top: "202px"
                        }}
                    >
                        <Typography className="text1">
                            Apply to job
                        </Typography>
                    </Box>
                    <Box
                        className="block2"
                        sx={{
                            left: "566.71px",
                            top: "202px"
                        }}
                    >
                        <Typography className="text2">
                            Get booked
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default HowItWorks;
