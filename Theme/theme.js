import { createTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

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
  },

  typography: {
    fontSizes: appTheme.senseTypographyTheme.fontSizes
  }
});

export default theme;
