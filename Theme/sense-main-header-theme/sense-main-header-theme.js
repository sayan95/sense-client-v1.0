/**
 * --------------------------------------------
 * Sense landing page main header section theme
 * --------------------------------------------
 */

export const senseMainHederTheme = {
  mainHeaderConatiner: {
    position: "relative",
    height: "625px",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
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
  siteContactBar: {
    position: "absolute",
    zIndex: 3,
    top: 0,
    left: 0,
    width: "100%",
  },
  navbar: {
    position: "absolute",
    top: "74px",
    right: 0,
    left: 0,
    background: "transparent!important",
  },
  navbarBrand: {
    fontFamily: "Poppins",
    fontWeight: 700,
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
};
