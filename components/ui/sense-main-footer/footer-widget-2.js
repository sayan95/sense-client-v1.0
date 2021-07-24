// dependency imports
import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

// material ui imports
import { Box, Icon, Typography } from '@material-ui/core';
import { ChatBubbleOutline, DateRange, PermIdentity } from '@material-ui/icons';

// app component imports

// custom component style
const useStyles = makeStyles(theme => ({
    footerWidget2:{
       ...theme.props.senseMainFooter.footerWidget,
    }, 
    widgetHeading: {
        ...theme.props.senseMainFooter.widgetHeading,
        fontSize: '20px',
    },

    blogImage: { 
        borderRadius:'10px', 
        overflow: 'hidden' 
    },
    blogTextContainer:{
        paddingLeft: '15px'
    },
    blogHeading:{
        cursor:'pointer',
        letterSpacing: '2px',
        fontSize: theme.typography.fontSizes.small,
        transition: 'all .3s',
        "&:hover":{ 
            color: theme.palette.deepPurple.lighter, 
        } 
    },
    blogMeta:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '.5em',
        gap: '5px',
        color: '#b39ddb',
    },
    blogMetaCaption:{
        fontFamily:'"Roboto", Ariel, Cursive',
        fontSize: '12px',
    }
}));    

/**
 *  footer widget component 2
 *  contains some recent blog posts 
 */
const FooterWidget2 = () => {
    const classes = useStyles();
    
    // jsx content
    return (
        <Fragment>
            <Box component='div' className={classes.footerWidget2}>
                <Typography variant='h5' classes={{ h5: classes.widgetHeading }}>
                    Recent Blog
                </Typography>

                {[0,1].map(item => (
                    <Box key={item} component='div' display='flex' flexDirection='row' style={{ marginBottom:'15px' }}>
                        <Box component='div' className={classes.blogImagecontainer}>
                            <Image src='/images/sense-blog-1.png' 
                                alt='sense-blog-1'
                                height='100'
                                width='100'
                                quality={100} 
                                priority={true}
                                className={classes.blogImage}
                            /> 
                        </Box>
                        <Box component='div' className={classes.blogTextContainer}>
                            <Link href='/'>
                                <Typography variant='body1' classes={{ body1: classes.blogHeading }}>
                                    Creation timelines for the standard
                                </Typography>
                            </Link>

                            <Box component='div' className={classes.blogMeta}>
                            <Box component='div' display='flex' alignItems='center' style={{ gap:'2px' }}>
                                <Icon><DateRange/></Icon>
                                <Typography variant='caption' classes={{ caption: classes.blogMetaCaption }}>
                                    2 hours ago 
                                </Typography>
                            </Box>
                            <Box component='div' display='flex' alignItems='center' style={{ gap:'2px' }}>
                                <Icon><PermIdentity/></Icon>
                                <Typography variant='caption' classes={{ caption: classes.blogMetaCaption }}>
                                    Admin 
                                </Typography>
                            </Box>
                            <Box component='div' display='flex' alignItems='center' style={{ gap:'2px' }}>
                                <Icon><ChatBubbleOutline/></Icon>
                                <Typography variant='caption' classes={{ caption: classes.blogMetaCaption }}>
                                    9
                                </Typography>
                            </Box>
                        </Box>  
                    </Box>
                </Box>

                ))}
               
            </Box>
        </Fragment>
    )
}

export default FooterWidget2
