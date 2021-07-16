// dependency imports
import React, { Fragment, useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import {useRouter} from 'next/router';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Material ui component imports
import { AppBar, Toolbar, Typography, Box, Container, Tabs, Tab,} from '@material-ui/core';

// custom component style
const useStyles = makeStyles(theme => ({
    navbar:{
        ...theme.props.senseMainHeader.navbar,
    },
    brand:{
        ...theme.props.senseMainHeader.brand,
        textShadow: `0 .1px 3px ${theme.palette.gray.dark}`,
    },
    navItemNormal:{
        ...theme.props.senseMainHeader.navItem, 
        color: theme.palette.common.white,
        fontSize: theme.typography.fontSizes.small,
    },
    navItemBlack:{ 
        ...theme.props.senseMainHeader.navItem,
        color: theme.palette.common.black,
        fontSize: theme.typography.fontSizes.small, 
    },
    navbarInnerContainer: { 
        padding: '2px 25px',
        [theme.breakpoints.down('xs')]:{
            padding: '7px 0px'
        }
    },
    navbarInSleep:{ 
        background: "transparent", 
        top: "74px",
        [theme.breakpoints.down('xs')]:{
            top:'0 !important',
            background: theme.palette.primary.main
        }
    },
    navbarInAwake:{
        position: 'fixed!important',
        animation: "$awakeNavbar .3s ease-in",
        width: '100%!important',
        color: theme.palette.common.black,
        backgroundColor: theme.palette.common.white,
    },
    brandInBlue:{ color: theme.palette.primary.main },
    navbarNav: {  marginLeft: 'auto', },
    indicator:{ background: 'transparent'},

    "@keyframes awakeNavbar":{
        "0%":{
            top: '-100px'
        },
        "100%":{
            top: 0
        }
    }
}));

// navlink lists
const navLinks = [
    {label: 'Home', href:'/'},
    {label: 'About', href:'/about'},
    {label: 'Services', href:'#'},
    {label: 'Blogs', href:'#'},
    {label: 'Contact', href:'#'},
]


/**
 *  sesne main header navigation bar
 */
const NavigationBar = () => { 
    // app dependencies
    const router = useRouter();
    const classes = useStyles();
    const theme = useTheme(); 
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
    
    // local states
    const [navValue, setNavValue] = useState(0);
    const [navAppearence, setNavAppearence] = useState('navbarInSleep');
    const [navBrandAppearence, setNavBrandAppearence] = useState(undefined);
    const [navItemAppearence, setNavItemAppearence] = useState('navItemNormal');
    const navRef = useRef();
    const navBrandRef = useRef();
    const navItemRef = useRef();
    navRef.current = navAppearence;
    navBrandRef.current = navBrandAppearence;
    navItemRef.current = navItemAppearence;

    // side effects
    useEffect(() => {
        decideRoute();

        // side effect on navbar on page scroll
        document.addEventListener('scroll', handleNavbarAppearence);
        return () => {
            document.removeEventListener('scroll', handleNavbarAppearence);
        }
    }, [])

    
    // activity handler methods
    const decideRoute = () => {
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
    }
    const handleNavChange = (e, newValue) => setNavValue(newValue);

    const handleRouteChange = (e, route) => router.push(route);

    const handleNavbarAppearence = () => {
        const show = window.scrollY > 110;
        if(show){
            setNavAppearence('navbarInAwake');
            setNavBrandAppearence('brandInBlue');
            setNavItemAppearence('navItemBlack');
        }else{
            setNavAppearence('navbarInSleep');
            setNavBrandAppearence('');
            setNavItemAppearence('navItemNormal');
        }
    }

    // jsx content
    return (
        <Fragment>
            <AppBar className={`${classes.navbar} ${classes[navRef.current]}`} elevation={0}>
                <Container className={classes.navbarInnerContainer}>
                    <Toolbar>
                        <Box component='div' display='flex' flexDirection='row' alignItems='center'>
                            <Image src='/logo/sense_logo.png' alt='sense_logo' height={55} width={55} quality={100} priority/>
                            <Typography variant='h5' classes={{ h5:classes.brand , h5:classes[navBrandRef.current]}}>Sense</Typography>
                        </Box>
                        
                        { !isSmallScreen ? 
                            (
                                <Tabs value={navValue} 
                                    textColor='primary'
                                    onChange={handleNavChange}
                                    classes={{ root: classes.navbarNav, indicator: classes.indicator }}
                                >
                                    {navLinks.map((link, index) => (
                                        <Tab 
                                            key={index}
                                            label={link.label} 
                                            color='primary'
                                            classes={{ root:classes[navItemRef.current]}} 
                                            onClick={event => {handleRouteChange(event, link.href)}}
                                        />
                                    ))}
                                </Tabs>
                            )
                            : undefined
                        }
                    </Toolbar>
                </Container>
            </AppBar>
            { isSmallScreen && <div style={{ marginBottom: '20px' }}></div>}
        </Fragment>
    )
}

export default NavigationBar
