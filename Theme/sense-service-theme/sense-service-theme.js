/**
 *  -----------------------------------------------------
 *  Sense landing page service area theme provider
 *  Holds all the component themes inside service section
 *  ------------------------------------------------------
 */


export const senseServiceTheme = {
    // landing page service section themes
    serviceContainer:{
        position: 'relative',
        width: '100%',
        padding: '7em 0',
        paddingBottom: '12em',
    },
    serviceCardContainer:{
        padding: '0 50px',
        margin: '0 auto'
    },
    gridItem:{
        padding: '0 10px',
    },


    // service card ui theme
    serviceCardHeader: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: '20px',
    },
    serviceIconHolder: {
        padding: '1.5rem 1.8rem',
        borderRadius: '50%',
        transition: 'all .3s'
    },
    serviceCardIcon: {
        transition: 'all .3s',
    },
    serviceCardBody: {
        marginTop: '1.5em',
        marginBottom: '.8em',
        paddingTop: '15px',
        paddingBottom: '8px',
    },
    serviceCardBodyText:{
        fontFamily: 'Poppins',
        lineHeight: '30px'
    },
    serviceCardFooterText: {
        float: 'right', 
        fontFamily: 'Reenie Beanie',
        fontSize: '25px'
    }
}