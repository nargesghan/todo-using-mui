import { createTheme } from "@mui/material";

 const lightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md:1440,
    },
  },
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
      main: "#e0e0e0",
      light:"#bdbdbd",
      dark:"#adadad"
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

const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md:1440,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#25273C",
      light: "#161722",
      dark: "#D2D3DB",
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // main:'#C058F3',
      main: "#393A4C",
      light:"#CACDE8",
      dark:"#777A92"
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
            color:"#CACDE8"
          },
        },
        {
          props: { variant: "summery" },
          style: {
            fontWeight: 400,
            fontSize: 14,
            fontFamily: ["Josefin Sans", "Arial", "sans-serif"].join(","),
            color:"#CACDE8"
          },
        },
        {
          props: { variant: "bottom" },
          style: {
            fontWeight: 700,
            fontSize: 16,
            fontFamily: ["Josefin Sans", "Arial", "sans-serif"].join(","),
            color:"#CACDE8"
          },
        },
      ]
    }
  },
});

export {lightTheme,darkTheme};