// dependency imports
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material ui imports
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { Map, Phone, Telegram } from '@material-ui/icons';



// custom component styles
const useStyles = makeStyles(theme => ({
    footerWidget4:{
        ...theme.props.senseMainFooter.footerWidget,
    },
    widgetHeading: {
        ...theme.props.senseMainFooter.widgetHeading,
        fontSize: '20px',
    },
    quickContactList: {padding: 0},
    quickContactListItem: {
        paddingLeft: 0, 
        padingRight: 0, 
        alignItems: 'flex-start'
    },
    contactListIcon: {
        ...theme.props.senseMainFooter.contactListIcon,
        color: theme.palette.deepPurple.lighter,
    },
    contactListTextVariant1: {
        ...theme.props.senseMainFooter.contactListText,
        fontSize: theme.typography.fontSizes.medium,
    },
    contactListTextVariant2: {
        ...theme.props.senseMainFooter.contactListText,
        fontSize: theme.typography.fontSizes.small,
    },
}));    

/**
 *  Footer widget component
 *  Conatainse company address, quick contact infos
 */
const FooeterWidget4 = () => {
    const classes = useStyles();

    //  jsx content
    return (
        <Fragment>
            <Box component='div' className={classes.footerWidget4}>
                <Typography variant='h5' classes={{ h5: classes.widgetHeading }}>
                    Have a Question?
                </Typography>

                <List className={classes.quickContactList}>
                    {/*  contact address */}
                    <ListItem className={classes.quickContactListItem}>
                        <ListItemIcon className={classes.contactListIcon}><Map/></ListItemIcon>
                        <ListItemText>
                            <Typography variant='body1' classes={{ body1: classes.contactListTextVariant1 }}>
                                203 Fake St. Mountain View, 
                                San Francisco, California, USA
                            </Typography>
                        </ListItemText>
                    </ListItem>
                        
                    {/* contact number */}
                    <ListItem className={classes.quickContactListItem}>
                        <ListItemIcon className={classes.contactListIcon}><Phone fontSize='small'/></ListItemIcon>
                        <ListItemText>
                            <Typography variant='body1' classes={{ body1: classes.contactListTextVariant2 }}>
                                + 01 1234 567
                            </Typography>
                        </ListItemText>
                    </ListItem>

                    {/* contact email */}
                    <ListItem className={classes.quickContactListItem}>
                        <ListItemIcon className={classes.contactListIcon}><Telegram fontSize='small'/></ListItemIcon>
                        <ListItemText>
                            <Typography variant='body1' classes={{ body1: classes.contactListTextVariant2 }}>
                                info@yourdomain.com
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </List>
            </Box>
        </Fragment>
    )
}

export default FooeterWidget4
