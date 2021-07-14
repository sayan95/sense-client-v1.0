// dependency imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

// material ui components imports
import { Box, Container} from '@material-ui/core';


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
            right: 0,
            width: '35%',
            transform: 'matrix(1, -0.19, 0, 2, 0, 0)',
        }
    },
    overlay1:{
        ...theme.props.senseMainHeader.overlay,
        opacity: .2,
        background: theme.palette.common.black
    },
    overlay2:{
        ...theme.props.senseMainHeader.overlay,
        opacity: .54,
        background: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0) 100%)`
    },
    innerContainer:{
        width: '100%',
        height: '100%',
        paddingRight: '65px',
        paddingLeft: '65px',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
}));

/**
 *  large header panel in sense main header
 */
const MainHeaderContentSection = props => {
    const {content} = props;
    const classes = useStyles();
    const Content = content;

    return (
        <Fragment>
            <Box component='section' className={classes.mainHeaderConatiner}>
                <Box className={classes.overlay1}></Box>
                <Box className={classes.overlay2}></Box>

                <Container className={classes.innerContainer}>
                    <Content/>
                </Container>
            </Box>
        </Fragment>
    )
}

// props validation
MainHeaderContentSection.propTypes = {
    content: PropTypes.element.isRequired
}

export default MainHeaderContentSection;
