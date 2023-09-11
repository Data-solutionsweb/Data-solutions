import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from '@mui/material';
const Footer = () => {
  return (
    <>
      <Box
        sx={{ bgcolor: '#1A1A19', color: 'white', p: 1.5,  display: 'flex',
        justifyContent: 'space-between',   }}
      >
         <Box sx={{ fontSize: 15, mt:1.65 }}>  
          &copy; 2023 Pro Data Solutions &
          Consultants LLC. All Rights Reserved.
          </Box>
        <Box
          sx={{
           
            '& svg': {
              fontSize: '30px',
              cursor: 'pointer',
              mr: 2,
            },
            '& svg:hover': {
              color: 'lightgray',
              transform: 'translateX(5px)',
              transition: 'all 400ms',
            },
          }}
        >
          {/* icons */}
          <FacebookIcon />
          <LinkedInIcon />   
          <TwitterIcon />  
          </Box>
         
        </Box>
     
    </>
  );
};

export default Footer;
