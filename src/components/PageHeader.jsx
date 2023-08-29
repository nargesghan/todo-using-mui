import Box from "@mui/material/Box";
import React from "react";
import headerImageLight from "../assets/images/bg-mobile-light.jpg";
import headerImageDark from "../assets/images/bg-mobile-dark.jpg";
import { Container, Typography, Grid } from "@mui/material";
import theme from "../assets/theme.jsx";
import LightToggle from "./LightToggle";
import TaskInput from "./TaskInput";
const PageHeader = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            theme.palette.mode === "light"
              ? `url(${headerImageLight})`
              : `url(${headerImageDark})`,
          width: "100%",
          height: 200,
          margin: 0,
        }}
      >
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {" "}
            <Typography
              sx={{
                fontWeight: 700,
                letterSpacing: 10,
                fontSize: 30,
                color: "#FAFAFA",
                paddingTop: 5,
              }}
              variant="h1"
              component={"h1"}
            >
              TODO
            </Typography>
            <LightToggle />
          </Grid>

          <TaskInput/>
        </Container>
      </Box>
    </>
  );
};

export default PageHeader;
