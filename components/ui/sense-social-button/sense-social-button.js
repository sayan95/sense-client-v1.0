// dependency imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';

// material ui component imports
import { IconButton } from '@material-ui/core';
import { Facebook, Instagram, WhatsApp } from '@material-ui/icons';

// custom component style
const useStyles = makeStyles(theme => ({
    icon: {
        ...theme.props.senseSocialButton,
        backgroundColor: ({bgColor}) => bgColor,
        "&:hover":{
            backgroundColor: ({bgColor}) => bgColor,
        }
    }
}));


/**
 *  Sense social media link buttons
 *  simple link element
 *  may cause FOUC issues
 */
const SenseSocialButton = props => {
    const {icon, href} = props
    const classes = useStyles(props);
    const theme = useTheme(); 
    return (
        <Fragment>
            <IconButton href={href} classes={{ root: classes.icon }}>
                {
                    icon === 'facebook' ? <Facebook style={{ fontSize: theme.typography.fontSizes.medium}}/>
                    : icon === 'whatsapp' ? <WhatsApp style={{ fontSize: theme.typography.fontSizes.medium}}/>
                    : icon === 'instagram' ? <Instagram style={{ fontSize: theme.typography.fontSizes.medium}}/>
                    : undefined
                }
            </IconButton>
        </Fragment>
    )
}

// props validation
SenseSocialButton.propTypes = {
    icon: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
}

export default SenseSocialButton
