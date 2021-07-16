// dependency imports
import React, { Fragment } from 'react';

// material ui component imports
import { Box, Container, Grid } from '@material-ui/core';

// appplication component imports
import SenseSocialButton from '../../ui/sense-social-button/sense-social-button';
import { makeStyles, useTheme } from '@material-ui/styles';

// custom component styling
const useStyles = makeStyles(theme => ({
    siteContactBar: {
        ...theme.props.senseMainHeader.siteContactBar,
        [theme.breakpoints.down('xs')]:{
            display: 'none'
        }
    },
    contactBarContainer:{
        ...theme.props.senseMainHeader.contactBarContainer,
        fontSize: theme.typography.fontSizes.small,
        color: theme.palette.gray.light,
    },
    socialbuttonContainer:{
        [theme.breakpoints.down('sm')]:{
            alignItems: 'flex-start',
        }
    }
}));    

/**
 *  upper contact bar component in main heder
 */
const SiteContactBar = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Fragment>
            <Box component='div' className={classes.siteContactBar}>
                <Container className={classes.contactBarContainer}>
                    <Grid container>
                        <Grid item md={8}>
                            <span>Phone no:</span>
                            <span style={{ color: theme.palette.gray.lighter, fontWeight: 400 }}> +01 1234 567</span>
                            <span> or email us: </span>
                            <span style={{ color: theme.palette.gray.lighter, fontWeight: 400 }}> support@sense.com</span>
                        </Grid>
                        <Grid container justifyContent='flex-end' item md={4} classes={{ root: classes.socialbuttonContainer }}>
                            <SenseSocialButton href='#' icon='facebook' bgColor='rgba(255,255,255, .3)'/>
                            <SenseSocialButton href='#' icon='whatsapp' bgColor='rgba(255,255,255, .3)'/>
                            <SenseSocialButton href='#' icon='instagram' bgColor='rgba(255,255,255, .3)'/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Fragment>
    )
}

export default SiteContactBar
