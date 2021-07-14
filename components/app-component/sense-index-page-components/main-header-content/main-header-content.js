// dependency imports
import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';

// material ui components imports
import { Box, Fab, Grid, Typography } from '@material-ui/core';
import { PlayArrow } from '@material-ui/icons';

//custom component styles
const useStyles = makeStyles(theme => ({
    welcomeNote:{
        fontFamily:'"Reenie Beanie", Ariel, Cursive',
        fontWeight: 'bold',
        color: theme.palette.primary.main,
        marginBottom:'15px'
    },
    headingContainer:{
        fontFamily: '"Poppins", Ariel, sans-serif',
        fontSize: '60px',
        fontWeight: 200,
        lineHeight: 1.2,
        letterSpacing: '3px',
        display:'grid', 
        alignContent:'center',
        wordSpacing: '2px',
        marginBottom: '15px',
        color: theme.palette.common.white
    },
    briefNote:{
        fontFamily: 'Poppins, Arial, sans-sarif',
        lineHeight: 1.8,
        display: 'block',
        marginBlockStart: '1em',
        marginBlockEnd: '1em',
        marginInlineStart: '0px',
        marginInlineEnd: '0px',
        fontSize: '16px',
        color: theme.palette.common.white,
    },
    playButton:{
        //position: 'relative',
        boxShadow: '0 0 0 0 rgba(26, 64, 125, .5)',
        width: '70px',
        height:'70px',
        zIndex: 4,
        animation: '$pulse 1.9s infinite',
    }, 
    "@keyframes pulse": {
        "0%": {
            MozTransform: 'scale(0.9)',
            MsTransform: 'scale(0.9)',
            WebkitTransform: 'scale(0.9)',
            transform: 'scale(0.9)',
        },
        "70%": {
            MozTransform: 'scale(1)',
            MsTransform: 'scale(1)',
            WebkitTransform: 'scale(1)',
            transform: 'scale(1)',
            boxShadow: '0 0 0 50px rgba(26, 64, 125, 0)',
        },
        "100%": {
            MozTransform: 'scale(0.9)',
            MsTransform: 'scale(0.9)',
            WebkitTransform: 'scale(0.9)',
            transform: 'scale(0.9)',
            boxShadow: '0 0 0 0 rgba(26, 64, 125, 0)',
        }
    },
}));    

/**
 *  This is the app main header's content 
 *  This component is page specific 
 */
const MainHederContent = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <Grid container style={{ height: '100%' }}>
                <Grid container item md={6} sm={12} alignItems='center'>
                    <Box component='div' style={{ marginBottom: '0'}}>
                        <Typography variant='h5' classes={{ h5: classes.welcomeNote }}>
                            Welcome to Sense
                        </Typography>
                        <Typography variant='h3' classes={{ h3: classes.headingContainer }}>
                            <span style={{ display:'block' }}>Bringing Mental</span>
                            <span style={{ display:'block'}}>Health To All</span>
                        </Typography>
                        <Typography variant='body1' classes={{ body1:classes.briefNote }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, 
                            Eum quasi quidem quibusdam.
                        </Typography>
                    </Box>
                </Grid>
                <Grid container item md={6} sm={12} alignItems='center' justifyContent='center'>
                    <Fab component='a' href='#' color='primary' size='large' classes={{ root: classes.playButton }}>
                        <PlayArrow style={{ fontSize: '30px' }}/>
                    </Fab>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default MainHederContent
