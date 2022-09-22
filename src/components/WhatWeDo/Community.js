import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Student from "../../assets/wwd/student.jpg";
import Soccer from "../../assets/wwd/soccer.jpg";
import Teer from "../../assets/wwd/teer.jpg";
import Basketball from "../../assets/wwd/basketball.jpg";

const Community = () => {
  return (
    <div className="community">
      <Stack>
        <Box sx={{ p: 2, mt: 4 }}>
          <Stack alignItems="center">
            <h1 className="comFont">
              We not just a summit, <br /> but we also family
            </h1>

            <Typography variant="body2" className="comText">
              Actually, what do we do?
            </Typography>
          </Stack>
        </Box>

        <Box sx={{ p: 6 }}>
          <Grid container spacing={5}>
            <Grid item xs={6} sm={3}>
              <img
                src={Student}
                style={{ borderRadius: "10px" }}
                alt="Student"
              />
            </Grid>

            <Grid item xs={6} sm={3}>
              <img src={Soccer} style={{ borderRadius: "10px" }} alt="Soccer" />
            </Grid>

            <Grid item xs={6} sm={3}>
              <img src={Teer} style={{ borderRadius: "10px" }} alt="Teer" />
            </Grid>

            <Grid item xs={6} sm={3}>
              <img
                src={Basketball}
                style={{ borderRadius: "10px" }}
                alt="Basketball"
              />
            </Grid>
          </Grid>
        </Box>

        <Stack justifyContent="center" alignItems="center" sx={{ mb: 6}}>
          <div className="scroll-downs">
            <div className="mousey">
              <div className="scroller"></div>
            </div>
          </div>
        </Stack>
      </Stack>
    </div>
  );
};

export default Community;
