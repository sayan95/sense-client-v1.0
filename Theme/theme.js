import { createTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

// theme files imports
import {senseMainHederTheme} from './sense-main-header-theme/sense-main-header-theme';
import {senseTypographyTheme} from './sense-typography-theme/sense-typography-theme';
import {senseSocialButtonTheme} from './sene-social-button-theme/sense-social-button-theme';

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

  props: {
    senseMainHeader: senseMainHederTheme,
    senseSocialButton: senseSocialButtonTheme,
  },

  typography: {
    fontSizes: senseTypographyTheme.fontSizes
  }
});

export default theme;