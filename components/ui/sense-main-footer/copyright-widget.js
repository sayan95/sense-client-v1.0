// dependency imports
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Material ui component imports
import { Container, Typography } from '@material-ui/core';

// custom component style
const useStyles = makeStyles(theme => ({
    copyrightWidgetContainer: {
        padding: '3rem 0', 
        textAlign: 'center',
        [theme.breakpoints.down('sm')]:{
            paddingTop: 0,
            paddingLeft: '15px',
            paddingRight: '15px', 
        }
    },
    copyrightWidgetText: {
        letterSpacing: '1px',
        fontFamily: 'Poppins, arial sans-sarif',
        [theme.breakpoints.down('sm')]:{
            fontSize: theme.typography.fontSizes.small 
        }
    }
}))


/**
 *  Widget component for footer
 *  Holds application copyrights and privacy information
 */
const CopyrightWidget = () => {
    const classes = useStyles();

    // jsx content
    return (
        <Fragment>
            <Container fluid className={classes.copyrightWidgetContainer}>
                <Typography variant='body1' classes={{ body1: classes.copyrightWidgetText }}>
                    Copyright ©2021 All rights reserved | This template is made with  by Colorlib
                </Typography>
            </Container>
        </Fragment>
    )
}

export default CopyrightWidget;
