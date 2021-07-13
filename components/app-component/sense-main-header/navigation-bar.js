// dependency imports
import React, { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import {useRouter} from 'next/router';
import { makeStyles } from '@material-ui/core/styles';

// Material ui component imports
import { AppBar, Toolbar, Typography, Box, Container, Tabs, Tab} from '@material-ui/core';

// custom component style
const useStyles = makeStyles(theme => ({
    navbar:{
        position: 'absolute',
        background: 'transparent!important',
        top: '74px',
        left: 0,
        right: 0,
    },
    innerContainer: {
        padding: '2px 15px'
    },
    brand:{
        fontFamily: 'Poppins',
        fontWeight: 700,
        textShadow: `0 .1px 3px ${theme.palette.gray.dark}`,
        textTransform: 'capitalize',
        letterSpacing: '1px'
    },
    nvabarNav: {
        marginLeft: 'auto',
    },
    navItem:{
        padding: '10px!important',
        minHeight: '1em!important', 
        minWidth: '1.8em!important', 
        fontSize: theme.typography.fontSizes.small,
        fontWeight: 500,
        color: theme.palette.common.white,
        marginRight: '15px',
        letterSpacing: '1px'
    },
    indicator:{
        background: 'transparent'
    }
}));

// navlink lists
const navLinks = [
    {label: 'Home', href:'/'},
    {label: 'About', href:'/about'}
]


/**
 *  sesne main header navigation bar
 */
const NavigationBar = () => { 
    const router = useRouter();
    const classes = useStyles();
    const [navValue, setNavValue] = useState(0);

    useEffect(() => {
        switch(router.asPath){
            case '/':
                setNavValue(0);
                break;
            case '/about':
                setNavValue(1);
                break;
            default: 
                break;
        }
    },[])

    const handleNavChange = (e, newValue) => setNavValue(newValue);

    const handleRouteChange = (e, route) => router.push(route);

    return (
        <Fragment>
            <AppBar classes={{ root: classes.navbar }} elevation={0}>
                <Container className={classes.innerContainer}>
                    <Toolbar>
                        <Box component='div' display='flex' flexDirection='row' alignItems='center'>
                            <Image src='/logo/sense_logo.png' height={55} width={55} quality={100} priority/>
                            <Typography variant='h5' classes={{ h5:classes.brand }}>Sense</Typography>
                        </Box>

                        <Tabs value={navValue} 
                            textColor='primary'
                            onChange={handleNavChange}
                            classes={{ root: classes.nvabarNav, indicator: classes.indicator }}
                        >
                            {navLinks.map((link, index) => (
                                <Tab 
                                    key={index}
                                    label={link.label} 
                                    color='primary'
                                    classes={{ root:classes.navItem }} 
                                    onClick={event => {handleRouteChange(event, link.href)}}
                                />
                            ))}
                        </Tabs>
                    </Toolbar>
                </Container>
            </AppBar>
        </Fragment>
    )
}

export default NavigationBar
