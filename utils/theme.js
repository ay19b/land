import { createTheme } from '@material-ui/core';
// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: "#facd3d"
    },
  },
  overrides:{
    MuiOutlinedInput:{
        root:{
          color:'white',
          border:"1px solid white",
        }
      },
  }

});