// dependency imports
import React, { Fragment } from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

// material ui imports
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography} from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';


// cusom component style
const useStyles = makeStyles(theme => ({
    footerWidget3: {
        ...theme.props.senseMainFooter.footerWidget
    },
    widgetHeading: {
        ...theme.props.senseMainFooter.widgetHeading,
        fontSize: '20px'
    },
    shortLinkList:{
        padding: 0,
    },
    shortLinkItem:{
        paddingLeft: 0,
        paddingRight: 0,
        cursor: 'pointer',
        "&:hover svg": { color: theme.palette.deepPurple.lighter },
        "&:hover p": {
            color: theme.palette.deepPurple.lighter,
            letterSpacing: '2px!important'
        }
    },
    linkIcon:{
        color: '#fff',
        minWidth: '30px',
        transition: 'all .3s',
    },
    linkText:{
        fontFamily: 'Poppins',
        color: '#fff',
        textTransform: 'capitalize',
        letterSpacing: '1px!important',
        transition: 'all .3s',
        fontSize: theme.typography.fontSizes.medium
    }
}));

// short links object
const shortLinks = [
    {label: 'about', href: '/about'},
    {label: 'contact', href: '/'},
    {label: 'services', href: '/'},
    {label: 'blog', href: '/'},
]


/**
 *  Footer widget component for main footer
 *  contains short links of different pages
 */
const FooterWidget3 = () => {
    const classes = useStyles();

    // jsx content
    return (
        <Fragment>
            <Box component='div' className={classes.footerWidget3}>
                <Typography variant='h5' classes={{ h5: classes.widgetHeading }}>
                    Explore 
                </Typography>

                <List className={classes.shortLinkList}>
                    {shortLinks.map(link => (
                        <Link href={link.href}>
                            <ListItem className={classes.shortLinkItem}>
                                <ListItemIcon className={classes.linkIcon}><ChevronRight/></ListItemIcon>
                                <ListItemText>
                                    <Typography className={classes.linkText}>
                                        {link.label}
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Box>
        </Fragment> 
    )
}

export default FooterWidget3
