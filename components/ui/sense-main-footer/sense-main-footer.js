// dependency imports
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material ui imports
import { Box, Container, Grid, Typography } from '@material-ui/core';

// app component imports
import FooterWidget1 from './footer-widget-1';
import CopyrightWidget from './copyright-widget';
import FooterWidget2 from './footer-widget-2';
import FooterWidget3 from './footer-widget-3';
import FooeterWidget4 from './footer-widget-4';

// component custom style
const useStyles = makeStyles(theme => ({
    footerContainer: {
        width: '100%',
        paddingTop: '6em',
        color: theme.palette.common.white,
        fontFamily: 'Poppins, sans-srif',
        background: `linear-gradient(153deg, 
            ${theme.palette.primary.main} 8%, 
            ${theme.palette.indigo.dark} 38%, 
            ${theme.palette.indigo.main} 56%, 
            ${theme.palette.deepPurple.lighter} 100%)`,
    },
    gridContainer: { 
        padding: '0 50px',
        marginBottom: '3em',
        [theme.breakpoints.down('md')]:{
            padding: '0 20px',
        } 
    },
    gridItem: {
        padding: '0 15px',
        [theme.breakpoints.down('sm')]:{
            borderBottom: '1px solid #fff',
            "&:nth-child(1)":{
                marginBottom: '20px',
                paddingBottom: '30px',
            },
            "&:nth-child(2)":{
                marginBottom: '20px',
                paddingBottom: '10px',
            },
            "&:nth-child(3)":{
                marginBottom: '20px',
                paddingBottom: 0,
            },
            "&:nth-child(4)":{
                marginBottom: 0,
                paddingBottom: '10px',
            },
        } 
    },
    
}));


/**
 *  Application main footer section
 *  Provides a quick tour of the wholw app
 *  Issue may arise at any part of this component 
 */
const SenseMainFooter = () => {
    const classes = useStyles();

    // jsx content
    return (
        <Fragment>
            <footer className={classes.footerContainer}>
                <Container className={classes.gridContainer}>
                    <Grid container>
                        <Grid item md={3} xs={12} className={classes.gridItem}>
                            <FooterWidget1/>
                        </Grid>
                        <Grid item md={4} xs={12} className={classes.gridItem}>
                            <FooterWidget2/>
                        </Grid>
                        <Grid item md={2} xs={12} className={classes.gridItem}>
                            <FooterWidget3/>
                        </Grid>
                        <Grid item md={3} xs={12} className={classes.gridItem}>
                            <FooeterWidget4/>
                        </Grid>
                    </Grid>
                </Container>
                
                <CopyrightWidget/>
            </footer>
        </Fragment>
    )
}

export default SenseMainFooter
