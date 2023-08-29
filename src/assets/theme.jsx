import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FAFAFA",
      light: "#E4E5F1",
      dark: "#D2D3DB",
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // main:'#C058F3',
      main: "#D2D3DB",
    },
    
  },
  typography: {
    fontFamily: ["Josefin Sans", "Arial", "sans-serif"].join(","),
  },

  components: {
    MuiTextField: {
      variants: [
        {
          props: { variant: "standard" },
          style: {
            fontWeight: 400,
            fontSize: 20,
          },
        },
     
      ],
    },
    MuiTypography:{
      variants:[
        {
          props: { variant: "task" },
          style: {
            fontWeight: 400,
            fontSize: 15,
            fontFamily: ["Josefin Sans", "Arial", "sans-serif"].join(","),
            color:"#616161"
          },
        },
        {
          props: { variant: "summery" },
          style: {
            fontWeight: 400,
            fontSize: 14,
            fontFamily: ["Josefin Sans", "Arial", "sans-serif"].join(","),
            color:"#9e9e9e"
          },
        },
        {
          props: { variant: "bottom" },
          style: {
            fontWeight: 700,
            fontSize: 16,
            fontFamily: ["Josefin Sans", "Arial", "sans-serif"].join(","),
            color:"#9e9e9e"
          },
        },
      ]
    }
  },
});

export default theme;
