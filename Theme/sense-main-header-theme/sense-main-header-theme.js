/**
 * --------------------------------------------
 * Sense landing page main header section theme
 * --------------------------------------------
 */

export const senseMainHederTheme = {

  // full main header theme
  mainHeaderConatiner: {
    position: "relative",
    height: "660px",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left bottom !important",
    zIndex: 0,
  },
  afterAndBefore: {
    content: '""',
    zIndex: 2,
    height: "90px",
    bottom: "-85px",
    position: "absolute",
    background: "#f5f5f5 !important",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },

  // mainheader site contact bar theme
  siteContactBar: {
    position: "absolute",
    zIndex: 3,
    top: 0,
    left: 0,
    width: "100%",
  },
  contactBarContainer:{
    padding: '15px 65px',
    fontFamily: 'Poppins',
    fontWeight: 300,
  },

  // main-header navigation bar theme
  navbar: {
    position: "absolute",
    right: 0,
    left: 0,
  },
  navbarBrand: {
    fontFamily: "Roboto, ariel sans-sarif",
    fontWeight: 500,
    textTransform: "capitalize",
    letterSpacing: "1px",
  },
  nvabarNav: {
    marginLeft: "auto",
  },
  navItem: {
    fontWeight: 500,
    marginRight: "15px",
    letterSpacing: "1px",
    padding: "10px!important",
    minHeight: "1em!important",
    minWidth: "1.8em!important",
  },

  //  main-header content section theme
  innerContainer:{
    width: '100%',
    height: '100%',
    paddingRight: '65px',
    paddingLeft: '65px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
};
