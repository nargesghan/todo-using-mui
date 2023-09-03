import React from "react";
import Container from "@mui/material/Container";
import { BorderTop } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
const Summery = ({ numberOfLeftTasks, DeleteDoneTasks }) => {
  return (
    <Container
      sx={{
        backgroundColor: "primary.main",
        marginTop: 0,
        display: "flex",
        alignItems: "center",
        height: 50,
        borderRadius: 1,
        borderTopStyle: "solid",
        borderTopWidth: 1,
        borderTopColor: "secondary.main",
        maxWidth: 450,
        boxShadow: " rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
      }}
    >
      <Typography variant="summery" component={"p"} sx={{ flexGrow: 1 }}>
        {numberOfLeftTasks} iems left
      </Typography>
      <Typography
        onClick={DeleteDoneTasks}
        variant="summery"
        component={"p"}
        sx={{ cursor: "pointer" }}
      >
        Clear Completed
      </Typography>
    </Container>
  );
};

export default Summery;
