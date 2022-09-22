import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import "./whatwedo.css";
import Study from "../../assets/wwd/study.jpg";

const Banner = () => {
  return (
    <div className="general">
      <Stack>
        {/* <header className="header">Nav</header> */}

        <Container>
          <Stack direction={"row"} style={{ margin: "10px" }}>
            <Box
              className="box"
              display={"flex"}
              justifyContent={"center"}
              alignItems="center"
            >
              <Stack sx={{ m: 6 }} spacing={2}>
                <h1 className="h1Font">
                  What we do. <br /> Real people.
                </h1>
                <Typography variant="subtitle2" className="captionText">
                  We combine corportate and some other stuff come into it. It's
                  very cool and productive so incase if you worring. This is
                  just some good stuff, very nice
                </Typography>

                {/* <Stack justifyContent="center" alignItems="center">
                    <div className="scroll-downs">
                        <div className="mousey">
                            <div className="scroller"></div>
                        </div>
                    </div>
                </Stack> */}
              </Stack>
            </Box>
            <Box className="box2">
              <img src={Study} className="image" alt="images"/>
            </Box>
          </Stack>
        </Container>
      </Stack>
    </div>
  );
};

export default Banner;
