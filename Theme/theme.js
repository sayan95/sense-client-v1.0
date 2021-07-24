import { createTheme } from '@material-ui/core/styles';
import { blue, indigo, deepPurple } from '@material-ui/core/colors';

// theme files imports
import * as appTheme from './index';

// Create a theme instance.
const theme = createTheme({
  palette: {
    common:{
      white: '#fff',
      black: '#000',
    },
    primary: {
      main: blue[900],
      light: blue[500],
      lighter: blue[400],
      contrastText: '#fff!important'
    },
    indigo:{
      main: indigo[500],
      light: indigo[400],
      lighter: indigo[300],
      dark: indigo[700],
      deep: indigo[900],
      contrastText: '#fff!important'
    },
    deepPurple:{
      main: deepPurple[500],
      light: deepPurple[400],
      lighter: deepPurple[300],
      dark: deepPurple[700],
      deep: deepPurple[900],
      contrastText: '#fff!important'
    },
    background: {
      default: '#f5f5f5',
      none: '#fff',
      invert: '#000'
    },
    gray: {
      main:'#bdbdbd',
      light: '#eeeeee',
      lighter:'#f5f5f5',
      dark: '#616161',
      deep: '#424242',
      lighterOpacity: 'rgba(#f5f5f5,.5)'
    },
    senseGradient1: {
      main: `linear-gradient(153deg, 
        ${blue[900]} 8%, 
        ${indigo[700]} 38%, 
        ${indigo[500]} 56%, 
        ${deepPurple[300]} 100%)`,
      contrastText: '#fff!important'
    }
  },
  
  overrides:{
    MuiCssBaseline:{
      '@global':{
        html:{
          fontFamily:'Roboto!important',
          WebkitFontSmooth:'auto',
          MozFontSmooth:'auto',
          fontSmooth:'auto',
        },
        '*::-webkit-scrollbar': {
          width: '0.8em'
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,.1)',
        }
      }
    }
  },

  props: {
    senseMainHeader: appTheme.senseMainHederTheme,
    senseBackdropNavMenu: appTheme.senseBackdropNavMenuTheme,
    senseSocialButton: appTheme.senseSocialButtonTheme,
    senseMainFooter: appTheme.senseMainFooterTheme,
  },

  typography: {
    fontSizes: appTheme.senseTypographyTheme.fontSizes
  }
});

export default theme;
