// dependency imports
import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

// material ui components imports
import { Box, Container} from '@material-ui/core';

//custom component styles
const useStyles = makeStyles(theme => ({
    mainHeaderConatiner:{
        ...theme.props.senseMainHeader.mainHeaderConatiner,
        backgroundImage: ({mainHeaderBackgroundImage}) => `url("${mainHeaderBackgroundImage}")`,
        [theme.breakpoints.down('md')]: {
            backgroundPosition: 'center center!important',
            height: '720px'
        },
        "&:before":{
            ...theme.props.senseMainHeader.afterAndBefore,
            left: 0,
            width: '65%',
            transform: ({headerTrasnformMatrix1}) => headerTrasnformMatrix1,
        },
        "&:after": {
            ...theme.props.senseMainHeader.afterAndBefore,
            right: 0,
            width: '35%',
            transform: ({headerTrasnformMatrix2}) => headerTrasnformMatrix2,
        }
    },
    overlay1:{
        ...theme.props.senseMainHeader.overlay,
        opacity: .1,
        background: theme.palette.common.black
    },
    overlay2:{
        ...theme.props.senseMainHeader.overlay,
        opacity: .74,
        background: `linear-gradient(to bottom right , ${theme.palette.primary.main} 0%, rgba(255, 255, 255, 0) 65%, rgba(255, 255, 255, 0) 100%)`
    },
    innerContainer:{
        ...theme.props.senseMainHeader.innerContainer,
        [theme.breakpoints.down('xs')]:{
            paddingLeft: '20px',
            paddingRight: '20px',
        }
    },
}));

/**
 *  large header panel in sense main header
 */
const MainHeaderContentSection = ({children}) => {
    const router = useRouter();

    // local states
    const [headerTrasnformMatrix1, setHeaderTrasnformMatrix1] = useState('')
    const [headerTrasnformMatrix2, setHeaderTrasnformMatrix2] = useState('')
      
    // states from global store
    const mainHeaderBackgroundImage = useSelector(state => state.senseMainHeaderBackground.backgroundImage);
    const props = {
        mainHeaderBackgroundImage : mainHeaderBackgroundImage ? mainHeaderBackgroundImage : '',
        headerTrasnformMatrix1 : headerTrasnformMatrix1,
        headerTrasnformMatrix2: headerTrasnformMatrix2
    } 
    const classes = useStyles(props);

    // side effects
    useEffect(() => {
        setTransformMatrix();
    }, []);

    // handler methods
    const setTransformMatrix = () => {
        if(router.asPath === '/'){
            setHeaderTrasnformMatrix1('matrix(1, 0.102, 0, 2, 0, 0)');
            setHeaderTrasnformMatrix2('matrix(1, -0.19, 0, 2, 0, 0)');
        }else{
            setHeaderTrasnformMatrix1('');
            setHeaderTrasnformMatrix2('');
        }
    }

    // jsx content
    return (
        <Fragment>
            <Box component='section' className={classes.mainHeaderConatiner}>
                <Box className={classes.overlay1}></Box>
                <Box className={classes.overlay2}></Box>

                <Container className={classes.innerContainer}>
                    {children}
                </Container>
            </Box>
        </Fragment>
    )
}

// props validation
MainHeaderContentSection.propTypes = {}

export default MainHeaderContentSection;
