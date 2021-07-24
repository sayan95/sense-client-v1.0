// dependency imports
import React, { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

// redux imports
import {setBackdropNav} from '../../../redux/ui-store/sense-main-header-store/actions/sense-backdrop-nav-actions';

// Material ui componsnet imports
import { Backdrop, Box, IconButton, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';

// app component imports
import SenseLazyAnimate from '../../others/sense-lazy-animate';


// component custom styles
const useStyles = makeStyles(theme => ({
    backdrop:{
        ...theme.props.senseBackdropNavMenu.backdrop,
        background: theme.palette.senseGradient1.main,
        zIndex: theme.zIndex.drawer + 1,
    },
    topBar:{
        ...theme.props.senseBackdropNavMenu.topBar
    },
    closeButton:{ 
        color: theme.palette.common.white
    },
    logoContainer:{
        paddingLeft: '15px'
    }
}));


/**
 *  This menu is the replacement of main header navigation meny bar
 *  Appers only in small screen devices
 */
const SenseBackdropNavMenu = props => {
    const {menuList} = props;
    const router = useRouter();
    const dispatch = useDispatch();
    const classes = useStyles();

    // local component states
    const [isBackdropVisible, setBackdropVisibility] = useState(false);

    // animate styles
    const backdropCloseBtnAnimation = {
        initial:{y: -100},
        animate:{y: isBackdropVisible ? 0 : -100 }
    }
    const backdropmenuAnimation = {
        initial:{ translateX: 100 },
        animate:{ translateX : isBackdropVisible ? 0 : 100 }
    }

    // states from global store 
    const isOpen = useSelector(state => state.senseBackdropNav.isOpen);

    // sideeffects
    useEffect(() => {
        setBackdropVisibility(isOpen);
    }, [isOpen]);

    // handler methods
    const handleBackdropNavClose = () => {
        dispatch(setBackdropNav(false))
    } 
    const handleRouteChange = (e, href) => {
        handleBackdropNavClose();
        router.push(href);
    } 

    // jsx content
    return (
        <Fragment>
            <Backdrop open={isOpen} className={classes.backdrop}>
                {/* top bar, contains menu close button  */}
                <Box component='div' className={classes.topBar}>
                    <SenseLazyAnimate initial={backdropCloseBtnAnimation.initial} 
                        animate={backdropCloseBtnAnimation.animate}
                    >
                        <Box component='div' display='flex' alignItems='center' className={classes.logoContainer}>
                            <Image src='/logo/sense_logo.png' alt='sense-logo' height={55} width={55} priority quality={100} />
                            <Typography variant='h5'>Sense</Typography>
                        </Box>
                    </SenseLazyAnimate>
                    <Box component='div'>
                        <SenseLazyAnimate
                            initial={backdropCloseBtnAnimation.initial} 
                            animate={backdropCloseBtnAnimation.animate}
                        >
                            <IconButton onClick={handleBackdropNavClose} classes={{ root: classes.closeButton }}>
                                <Close/>
                            </IconButton>
                        </SenseLazyAnimate>       
                    </Box>
                </Box>

                {/* Menu list items */}
                <List>
                    {menuList.map((menu, index) => (
                        <SenseLazyAnimate 
                            key={index} 
                            initial={backdropmenuAnimation.initial} 
                            animate={backdropmenuAnimation.animate}
                        >
                            <ListItem  style={{ textAlign:'center' }}>
                                <ListItemText>
                                    <Typography onClick={event => handleRouteChange(event, menu.href)}>
                                        {menu.label}
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </SenseLazyAnimate>
                    ))}
                </List>
            </Backdrop>
        </Fragment>
    )
}

// props validation
SenseBackdropNavMenu.propTypes = {
    menuList: PropTypes.array.isRequired,
}

export default SenseBackdropNavMenu;
