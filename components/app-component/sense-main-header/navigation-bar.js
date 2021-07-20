// dependency imports
import React, { Fragment, useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import {useRouter} from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery, useTheme } from '@material-ui/core';

// redux imports
import { useDispatch, useSelector } from 'react-redux';
import {setBackdropNav} from '../../../redux/ui-store/sense-main-header-store/actions/sense-backdrop-nav-actions';

// Material ui component imports
import { Menu } from '@material-ui/icons';
import SenseBackdropNavMenu from '../../ui/sense-backdrop-nav-menu/sense-backdrop-nav-menu';
import { AppBar, Toolbar, Typography, Box, Container, Tabs, Tab, IconButton} from '@material-ui/core';


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
        top: "74px",
        background: "transparent", 
        animation: '$sleepNavbar .2s ease-in-out',
        [theme.breakpoints.down('xs')]:{
            top:'0 !important',
            background: theme.palette.primary.main
        }
    },
    navbarInAwake:{
        width: '100%!important',
        position: 'fixed!important',
        animation: "$awakeNavbar .3s",
        color: theme.palette.common.black,
        backgroundColor: theme.palette.common.white,
    },
    navToggleMenuWhite: { color: theme.palette.common.white },
    navTogglemenuPrimary: {color: `${theme.palette.primary.main} !important`},
    brandInBlue:{ color: theme.palette.primary.main },
    navbarNav: {  marginLeft: 'auto', },
    indicator:{ background: 'transparent'},
    "@keyframes awakeNavbar":{
        "0%":{
            top: '-100%',
        },
        "100%":{
            top: 0,
        }
    },
    "@keyframes sleepNavbar" : {
        "0%": {
            opacity: 0,
            top: '64px'
        },
        "100%":{
            opacity:1,
            top: '74px'
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
    const dispatch = useDispatch();
    const classes = useStyles();
    const theme = useTheme(); 
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
    
    // local states
    const [navValue, setNavValue] = useState(0);
    const [navAppearence, setNavAppearence] = useState('navbarInSleep');
    const [navBrandAppearence, setNavBrandAppearence] = useState(undefined);
    const [navItemAppearence, setNavItemAppearence] = useState('navItemNormal');
    const [navToggleMenuColor, setNavToggleMenuColor] = useState('navToggleMenuWhite');

    const navRef = useRef();
    const navBrandRef = useRef();
    const navItemRef = useRef();
    const navToggleMenuRef = useRef();
    navRef.current = navAppearence;
    navItemRef.current = navItemAppearence;
    navBrandRef.current = navBrandAppearence;
    navToggleMenuRef.current = navToggleMenuColor;
    
    // states from global store
    const isBackdropNavOpen = useSelector(state => state.senseBackdropNav.isOpen);

    // side effects
    useEffect(() => {
        decideRoute();
        
        // side effect on navbar on page scroll
        window.addEventListener('scroll', scrollLimiter);
        return () => {window.removeEventListener('scroll', scrollLimiter)};
        
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
        const show = window.scrollY > 210; 
        if(show){
            setNavAppearence('navbarInAwake');
            setNavBrandAppearence('brandInBlue');
            setNavItemAppearence('navItemBlack');
            setNavToggleMenuColor('navToggleMenuPrimary');
        }else{
            setNavAppearence('navbarInSleep');
            setNavBrandAppearence(undefined);
            setNavItemAppearence('navItemNormal');
            setNavToggleMenuColor('navToggleMenuWhite');
        }
    }
    const handleBackdropMenuOpen = () => dispatch(setBackdropNav(true));
    const scrollLimiter = () => {
        // limit the scroll event calling function for better performance
        let debounce_timer= 0;
        if(debounce_timer) window.clearTimeout(debounce_timer);
        debounce_timer = window.setTimeout(() => {
            handleNavbarAppearence();
        }, 100);
    }


    // jsx content
    return (
        <Fragment>

            {/* Backdrop navigation menu
             *  available only on small screen devices
            */}
            <SenseBackdropNavMenu menuList = {navLinks} open={isBackdropNavOpen} />

             {/* main navigation bar
               * available on big screen devices 
             */}
            <AppBar className={`${classes.navbar} ${classes[navRef.current]}`} elevation={0}>
                <Container className={classes.navbarInnerContainer}>
                    <Toolbar>
                        {/* Navbar brand holder */}
                        <Box component='div' display='flex' flexDirection='row' alignItems='center'>
                            <Image src='/logo/sense_logo.png' alt='sense_logo' height={55} width={55} quality={100} priority/>
                            <Typography variant='h5' classes={{ h5:classes.brand , h5:classes[navBrandRef.current]}}>
                                Sense
                            </Typography>
                        </Box>
                        
                        { /* Navbar navigation items; Can be improved in terms of performance */ }
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
                            : <IconButton                           
                                onClick = {handleBackdropMenuOpen}
                                classes={{ root: classes[navToggleMenuRef.current] }}     
                                style={{ marginLeft: 'auto' }}
                            >
                                <Menu/>
                            </IconButton>
                        }
                    </Toolbar>
                </Container>
            </AppBar>
            
            { isSmallScreen && <div style={{ marginBottom: '20px' }}></div>}
        </Fragment>
    )
}

export default NavigationBar;
