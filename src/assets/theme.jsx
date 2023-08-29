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
      light:"#"
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
  },
});

export default theme;
