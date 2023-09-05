import * as React from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import { Container } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Grid from "@mui/material/Grid";
export default function SimpleBottomNavigation({ setDisplayOption }) {
  const [value, setValue] = React.useState(0);
  const styleOfButton = {
    fontWeight: 700,
    fontSize: 18,
    fontFamily: ["Josefin Sans", "Arial", "sans-serif"].join(","),
    color: "#9e9e9e",
    backgroundColor: "primary.main",
  };

  return (
    <Grid item sx={{ maxWidth:450, width: "90%", }}>
      <Container
        sx={{
          backgroundColor: "primary.main",
          marginTop: 0,
          display: "flex",
          justifyContent: "center",
          height: 50,
          borderRadius: 1,
          maxWidth: 450,
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ height: "100%" }}
        >
          <BottomNavigationAction
            onClick={() => setDisplayOption("all")}
            label="All"
            sx={{ ...styleOfButton }}
          />
          <BottomNavigationAction
            onClick={() => setDisplayOption("active")}
            label="Active"
            sx={{ ...styleOfButton }}
          />
          <BottomNavigationAction
            onClick={() => setDisplayOption("completed")}
            label="Completed"
            sx={{ ...styleOfButton }}
          />
        </BottomNavigation>
      </Container>
    </Grid>
  );
}
