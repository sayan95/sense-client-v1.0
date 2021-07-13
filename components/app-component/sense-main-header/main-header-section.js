// dependency imports
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material ui components imports
import { Box } from '@material-ui/core';


//custom component styles
const useStyles = makeStyles(theme => ({
    mainHeaderConatiner:{
        ...theme.props.senseMainHeader.mainHeaderConatiner,
        backgroundImage: "url('/images/sense-header-bg1.png')",
        [theme.breakpoints.down('md')]:{
            backgroundPosition: 'top right center!important',
        },
        "&:before":{
            ...theme.props.senseMainHeader.afterAndBefore,
            width: '65%',
            left: 0,
            transform: 'matrix(1, 0.102, 0, 2, 0, 0)',
        },
        "&:after":{
            ...theme.props.senseMainHeader.afterAndBefore,
            width: '35%',
            right: 0,
            transform: 'matrix(1, -0.19, 0, 2, 0, 0)',
        }
    },
    overlay1:{
        ...theme.props.senseMainHeader.overlay,
        opacity: .1,
        background: theme.palette.common.black
    },
    overlay2:{
        ...theme.props.senseMainHeader.overlay,
        opacity: .54,
        background: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0) 100%)`
    },
}));

/**
 *  large header panel in sense main header
 */
const MainHeaderSection = () => {
    const classes = useStyles();
    
    return (
        <Fragment>
            <Box component='section' className={classes.mainHeaderConatiner}>
                <Box className={classes.overlay1}></Box>
                <Box className={classes.overlay2}></Box>
            </Box>
        </Fragment>
    )
}

export default MainHeaderSection;
