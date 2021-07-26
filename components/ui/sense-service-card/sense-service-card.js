// dependency imports
import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

// material ui imports
import { Box, Card, CardActions, CardContent, Container, Icon, Typography } from '@material-ui/core';
import * as MuiIcons from '@material-ui/icons';

// custom component style
const useStyles = makeStyles(theme => ({
    serviceCard: {
        "&:hover #service-icon-holder":{
            background: theme.palette.indigo.lighter,
            opacity: .6
        },
        "&:hover #service-icon-holder #service-icon":{
            color: theme.palette.common.white
        },
        "-webkit-box-shadow": theme.palette.senseMatShadow.main,
        "moz-box-shadow": theme.palette.senseMatShadow.main,
        boxShadow: theme.palette.senseMatShadow.main,
    },
    serviceCardHeader: {
        ...theme.props.senseService.serviceCardHeader,
    },
    serviceIconHolder: {
        ...theme.props.senseService.serviceIconHolder,
        background: theme.palette.background.default,
    },
    serviceCardIcon: {
        ...theme.props.senseService.serviceCardIcon,
        color: theme.palette.indigo.main,
        "& svg":{
            transform: 'translateX(-50%)',
            fontSize: theme.typography.fontSizes.extraLarge
        }
    },
    serviceCardHeadingsHolder: { transform: 'translateX(-20%)'},
    serviceCardHedingText:{
        "& span":{
            fontFamily: 'Poppins',
            fontWeight: '400',
            display: 'block',
            lineHeight: '25px',
            background: theme.palette.senseGradient1.main,
            "-webkit-background-clip": 'text',
            "-webkit-text-fill-color": 'transparent',
        }
    },
    serviceCardBody: { ...theme.props.senseService.serviceCardBody, },
    serviceCardBodyText:{ 
        ...theme.props.senseService.serviceCardBodyText, 
        color: theme.palette.gray.main,
    },
    serviceCardFooterText: { ...theme.props.senseService.serviceCardFooterText, }
}));

/**
 *  Sense landing page service card component
 *  contains small service description that sense provides
 *  Time taken - 
 */
const SenseServiceCard = ({id, title, description, icon}) => {
    const classes = useStyles();
    const SenseCardIcon =  MuiIcons[icon];
    const [formattedTitle, setFormattedTitle] = useState([]);

    const cardTitleFormatter = rawTitle => setFormattedTitle(rawTitle.split('-'));

    useEffect(() => {
        cardTitleFormatter(title);
    }, []);

    // jsx content
    return (
        <Fragment>
            <Card id={id} classes={{ root: classes.serviceCard }}>
                <CardContent>
                    {/*  service card headings */}
                    <Container className={classes.serviceCardHeader}>
                        <Box id='service-icon-holder' component='div' className={classes.serviceIconHolder}>
                            <Icon id='service-icon' className={classes.serviceCardIcon}>
                                <SenseCardIcon/>
                            </Icon>
                        </Box>
                        <Box id='service-heading-holder' component='div' className={classes.serviceCardHeadingsHolder}>
                            <Typography variant='h5' classes={{ h5: classes.serviceCardHedingText }}> 
                                {
                                    formattedTitle.map(t => (
                                        <span>{t}</span>
                                    ))
                                }
                            </Typography>
                        </Box>
                    </Container>

                    {/* service card body */}
                    <Container id='service-card-body' className={classes.serviceCardBody}>
                        <Typography varient='body1' classes={{ body1: classes.serviceCardBodyText }}>
                            {description}
                        </Typography>
                    </Container>
                </CardContent>

                {/* service card footer action */}
                <CardActions>
                    <Container id='service-card-footer'>
                        <hr style={{ borderColor:'rgba(0,0,0,0.1)' }}/>
                        <Typography variant='h6' classes={{ h6:classes.serviceCardFooterText }}>
                            Sense
                        </Typography>       
                    </Container>   
                </CardActions>
            </Card>
        </Fragment>
    )
}

// props validation
SenseServiceCard.propTypes = {
    id: PropTypes.any.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default SenseServiceCard;
