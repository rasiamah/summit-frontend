import { Box, Stack } from '@mui/material'
import React from 'react'

const DefineWhatWeDo = () => {
  return (
    <div className='community' style={{ marginBottom: "50px"}}>
        <Box sx={{p: 6}}>
           <Stack justifyContent={"center"} alignItems="center">
                <span className='defineTitle'>
                Deliver the 6 Essentials Necessary for
                <br /> Large-Scale, High-Quality Mentorship
                </span>

                <span className='defineCaption'>
                    In as little as 1 hour of staff time per week, 
                    you can contribute to key student outcomes by 
                    delivering on the 6 essentials required for 
                    creating and managing a successful mentorship program.
                </span>
           </Stack>
        </Box>

        <Box bgcolor="red">
            <h3>sdas</h3>
        </Box>
    </div>
  )
}

export default DefineWhatWeDo