import React from "react";
import { StyledEngineProvider } from '@mui/material/styles';
import { Box, Typography, Button } from "@mui/material";

import pexelsahmedsatti from "../utils/images/pexels-ahmed-satti-3223552.jpg";

import "../utils/css/findbook.css";

const Frame5 = {
    textAlign: "left",
    position: "static",
    top: "8px",
    left: "8px",
    width: "402px",
    height: "106px",

    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "35px",
    lineHeight: "52px",

    color: "#1F0045",

    fontFamily: "Poppins",
    flex: "none",
    flexGrow: "0",
    margin: "0px 10px",
};

const Frame4 = {
    textAlign: "left",
    position: "static",
    top: "8px",
    left: "8px",
    width: "600px",
    height: "38px",

    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "18.75px",

    color: "#1F0045",

    fontFamily: "Roboto",
    flex: "none",
    flexGrow: "0",
    margin: "0px 10px",
};

const Frame6 = {
    textAlign: "left",
    position: "static",
    top: "8px",
    left: "8px",
    width: "503px",
    height: "19px",

    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "18.75px",

    color: "#000000",

    fontFamily: "Roboto",
    flex: "none",
    flexGrow: "0",
    margin: "0px 10px",
};

class CreateAccount extends React.Component{
    constructor(props){
        super(props)         
     }
    render(){
        return (
            <React.Fragment>
                <Box className="Findlook_Box">
                    <Box className="Findlook_Rectangle"></Box>
                    <img src={pexelsahmedsatti} className="Findlook_img" />
                    <Box className="Frame5">
                        <Typography style={Frame5}>
                            Find and book diverse models near you!
                        </Typography>
                    </Box>
                    <Box className="Frame4">
                        <Typography style={Frame4}>
                            Join our community of models and brands, and start
                            collaborating with diverse models to bring out the full
                            potential of your brand!
                        </Typography>
                    </Box>
                    <Box className="Frame6">
                        <Typography className="Frame6x">
                            Modeling and booking models has never been this easy!
                        </Typography>
                    </Box>
                    <Box className="createanaccount">
                        <Button className="createaccountbutton" >
                            CREATE AN ACCOUNT
                        </Button>
                    </Box>
                </Box>
                <Box className="Createanaccount2">
                    <Typography className="CreateAccountTypo">
                        CREATE AN ACCOUNT
                    </Typography>
                </Box>
            </React.Fragment>
        )
    }
}

export default CreateAccount;
