import React from "react";
import Navbar from "../components/Navbar";
import CreateAccount from "../components/CreateAccount";
import { Box, Typography, Button } from "@mui/material";

import { StickyContainer, Sticky } from "react-sticky";
// import Sticky from 'react-sticky-el';
// import Sticky from 'react-stickynode';

const Landingpage = () => {
    return (
        // <div className="Landingpages">
            <StickyContainer className="Landingpages">
                <Sticky >
                    {() => (
                        <Navbar/>
                    )}
                </Sticky>
                <CreateAccount />
            </StickyContainer>
        // </div>
    );
};

export default Landingpage;
