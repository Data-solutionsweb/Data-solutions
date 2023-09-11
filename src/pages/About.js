import React from 'react';
import Layout from './../components/Layout/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 1,
          
          p: 2,
          '& h4': {
            fontWeight: 'bold',
            my: 2,
            fontSize: '2rem',
          },
          '& p': {
            textAlign: 'justify',
          },
          '@media (max-width:600px)': {
            mt: 0,
            '& h4 ': {
              fontSize: '1.5rem',
            },
          },
        }}
      >
        <Typography variant='h4'>About Us</Typography>
        <p>
          At Data-Solutions, we understand the critical importance of protecting
          businesses from evolving cyber threats. With the increasing
          sophistication of cyber-attacks, it has become essential for
          organizations to fortify their defenses and implement robust security
          measures to safeguard their sensitive data, intellectual property, and
          digital infrastructure.
        </p>
        <br/>
      </Box>
    </Layout>
  );
};

export default About;
