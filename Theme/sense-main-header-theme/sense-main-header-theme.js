/**
 * --------------------------------------------
 * Sense landing page main header section theme
 * --------------------------------------------
 */

export const senseMainHederTheme = {
    mainHeaderConatiner: {
        position: 'relative',
        height: '625px',
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        zIndex: 0,
    },
    afterAndBefore:{
        content: '""',
        zIndex: 2,
        height: '90px',
        bottom: '-85px',
        position: 'absolute',
        background: '#f5f5f5 !important',
    },
    overlay:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
    },
    siteContactBar: {
        position: 'absolute',
        zIndex: 3,
        top: 0,
        left: 0,
        width: '100%',
    }
}
