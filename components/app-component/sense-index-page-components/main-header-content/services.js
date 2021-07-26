// dependency imports
import React, { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';

// material ui imports
import { Box, Container, Grid } from '@material-ui/core';


// app component imports
import SenseServiceCard from '../../../ui/sense-service-card/sense-service-card';
import SenseLazyAnimate from '../../../others/sense-lazy-animate';

// custom component style
const useStyles = makeStyles(theme => ({
    serviceContainer: {
        ...theme.props.senseService.serviceContainer,
    },
    serviceCardContainer: {
       ...theme.props.senseService.serviceCardContainer,
        [theme.breakpoints.down('sm')]:{
            padding: '0 15px'
        }
    },
    gridItem : {
        ...theme.props.senseService.gridItem,
        [theme.breakpoints.down('md')]:{
            marginBottom: '22px'
        }
    }
}));    


/**
 *  Best 3 services array
 *  Wll be fetched from backend APIs in future
 *  New object fields might be added in future
 */
const services = [
    {
        id: 'sense-service-1', 
        title: 'Outdoor-Activities', 
        description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
        icon: 'CloudOutlined',
        animationDuration: .5
    },
    {
        id: 'service-2', 
        title: 'Outdoor-Activities', 
        description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
        icon: 'NaturePeopleOutlined',
        animationDuration: .8,
    },
    {
        id: '', 
        title: 'Outdoor-Activities', 
        description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
        icon: 'FingerprintOutlined',
        animationDuration: 1
    },
];

/**
 *  Sense landing page fetures area
 *  Contains some small features card
 *  Time taken to create - 2 days   
 */
const Services = () => {
    const classes = useStyles();
    const router = useRouter();

    // local state
    const [isServiceAnimation, setServiceAnimation] = useState(false);

    // side effects
    useEffect(() => {
        if(router.asPath === '/'){
            window.addEventListener('scroll', scrollLimitter);
            return () => {window.removeEventListener('scroll', scrollLimitter)};
        }
    }, [isServiceAnimation]);

    const handleServiceAnimation = () => {
        const el = document.getElementById('sense-service');
        const serviceSectionOffset = el.style.height - el.offsetHeight;
        if(window.scrollY > serviceSectionOffset){
            setServiceAnimation(true)
        }
    }

    const scrollLimitter = () => {
        // limit the scroll event calling function for better performance
        let debounce_timer= 0;
        if(debounce_timer) window.clearTimeout(debounce_timer);
        debounce_timer = window.setTimeout(() => {
            handleServiceAnimation();
        }, 100);
    } 

    // jsx content
    return (
        <Fragment>
            <Box id='sense-service' component='section' className={classes.serviceContainer}>
                <Container className={classes.serviceCardContainer}>
                    <Grid container>
                        {services.map(service => (
                            <Grid key={service.id} item md={4} sm={12} xs={12} className={classes.gridItem}>
                                <SenseLazyAnimate
                                    keyProp = {service.id}
                                    applyCondition = {isServiceAnimation} 
                                    initial={{ opacity: 0, y: '30%' }}
                                    animate={{ opacity: 1, y: '0%' }}
                                    transition={{ duration: service.animationDuration }}
                                >
                                    <SenseServiceCard id={service.id} 
                                        title={service.title} 
                                        icon={service.icon}
                                        description={service.description}
                                    />
                                </SenseLazyAnimate>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Fragment>
    )
}

export default Services;
