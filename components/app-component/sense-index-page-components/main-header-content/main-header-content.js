// dependency imports
import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';

// material ui components imports
import { Box, Fab, Grid, Typography } from '@material-ui/core';
import { PlayArrow } from '@material-ui/icons';

//custom component styles
const useStyles = makeStyles(theme => ({
    headingContainer:{
        marginTop: '30px',
        marginBottom: '15px',
        [theme.breakpoints.down('md')]:{
            marginTop: '20px',
            marginBottom: 0
        },
    },
    senseWelcomeNote:{
        fontFamily:'"Reenie Beanie", Ariel, Cursive',
        fontWeight: 'bold',
        fontSize: theme.typography.fontSizes.extraLarge,
        color: theme.palette.primary.main,
        [theme.breakpoints.down('md')]:{
            fontSize: theme.typography.fontSizes.large,     
        },
    },
    senseBizzMantra:{
        fontFamily: '"Poppins", Ariel, sans-serif',
        fontSize: '60px',
        fontWeight: 200,
        lineHeight: 1.2,
        display:'grid', 
        alignContent:'center',
        letterSpacing: '3px',
        wordSpacing: '2px',
        color: theme.palette.common.white,
        [theme.breakpoints.down('md')]:{
            fontSize: '40px',
            textAlign: 'jsutify'
        },
    },
    senseBriefNote:{
        fontFamily: 'Poppins, Arial, sans-sarif',
        lineHeight: 1.8,
        display: 'block',
        fontSize: '15px',
        letterSpacing: '1px',
        wordSpacing: 'no-wrap',
        marginBlockStart: '1em',
        marginBlockEnd: '1em',
        marginInlineStart: '0px',
        marginInlineEnd: '0px',
        color: theme.palette.gray.lighter,
        [theme.breakpoints.down('sm')]:{
            
        }   
    },
    videoPlaycontainer:{
        height: '100%',
        [theme.breakpoints.down('xs')]:{
            alignItems: 'flex-start',
            height: 'auto'
        },
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
 *  This is the application index page's main header's content 
 *  This component is page specific 
 */
const MainHederContent = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <Grid container style={{ height: '100%' }}>
                {/* Left pane of the content box */}
                <Grid container item md={6} sm={9} xs={12} alignItems='center'>
                    {/* Left pane of the content box */}
                    <Box component='div' className={`animate__animated animate__fadeInUp ${classes.headingContainer}`}>
                        <Typography variant='h5' classes={{ h5: classes.senseWelcomeNote }}>
                            Welcome to Sense
                        </Typography>
                        <Typography variant='h3' classes={{ h3: classes.senseBizzMantra }}>
                            Bringing Mental Health To All
                        </Typography>
                        <Typography variant='body1' classes={{ body1:classes.senseBriefNote }}>
                            Far far away, behind the word mountains, 
                            far from the countries Vokalia and Consonantia, 
                            there live the blind texts. Separated they live 
                            in Bookmarksgrove.
                        </Typography>
                    </Box>
                </Grid>
                
                {/* Right pane of the content box */}
                <Grid item md={6} sm={3} xs={12}>
                    <Box display='flex' alignItems='center' justifyContent='center' classes={{ root: classes.videoPlaycontainer }}>
                        <Fab component='a' href='#' color='primary' size='large' classes={{ root: classes.playButton }}>
                            <PlayArrow style={{ fontSize: '30px' }}/>
                        </Fab>
                    </Box>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default MainHederContent
