import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";


import pexelsahmedsatti from "../utils/images/pexels-ahmed-satti-3223552.jpg";


const CreateAccount = () => {
    return (
        <React.Fragment>
            <Box className="Findlook_Box">
                
                <Box className="Findlook_Rectangle"></Box>
                <img src={pexelsahmedsatti} className="Findlook_img"/>
            </Box>
        </React.Fragment>
    );
};

export default CreateAccount;
