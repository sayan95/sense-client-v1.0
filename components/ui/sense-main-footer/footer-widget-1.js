// dependency imports
import React, { Fragment } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

// material ui imports
import { Box, Typography } from '@material-ui/core';

// app component imports
import SenseSocialButton from '../sense-social-button/sense-social-button';

// custom componnet style
const useStyles = makeStyles(theme => ({
    footerWidget1:{
        ...theme.props.senseMainFooter.footerWidget,
    },
    widgetHeading: {
        ...theme.props.senseMainFooter.widgetHeading,
        fontSize: theme.typography.fontSizes.large,
    },
    widgetText: {
        fontFamily: 'Poppins',
        marginBottom: '1em',
        fontWeight: 400,
        lineHeight: '30px',
        fontSize: theme.typography.fontSizes.medium,
    }
}));


/**
 *  main footer widget
 *  contains small description and social media links
 */
const FooterWidget1 = () => {
    const classes = useStyles();
    const theme = useTheme();

    // jsx content
    return (
        <Fragment>
            <Box component='div' className={classes.footerWidget1}>
                <Typography variant='h5' classes={{ h5: classes.widgetHeading }}>
                    Sense
                </Typography>
                <Typography variant='body1' classes={{ body1: classes.widgetText }}>
                    Far far away, behind the word mountains, far from the countries
                </Typography>
            </Box>
            <Box component='div'>
                <SenseSocialButton href='#' icon='facebook' bgColor={theme.palette.deepPurple.light} />
                <SenseSocialButton href='#' icon='whatsapp' bgColor={theme.palette.deepPurple.light}/>
                <SenseSocialButton href='#' icon='instagram' bgColor={theme.palette.deepPurple.light}/>
            </Box>
        </Fragment>
    )
}

export default FooterWidget1
