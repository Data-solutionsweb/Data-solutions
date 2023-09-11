import React from 'react';
import Layout from './../components/Layout/Layout';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import {Button} from '@mui/material'
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField,
} from '@mui/material';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, '& h4': { fontWeight: 'bold', mb: 2 } }}>
        <Typography variant='h4'>Contact Us</Typography>
        <p>
          At Data-Solutions, we understand the critical importance of protecting
          businesses from evolving cyber threats.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          ml: 10,
          '@media (max-width:600px)': {
            width: '300px',
          },
          display: 'flex',
          gap: 10,
          flexDirection: 'column',
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: 'black', color: 'white' }}
                  align='center'
                >
                  Contact Form
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: 'red', pt: 1 }} /> Name:
                  <TextField
                    id='outlined-basic'
                    label='name'
                    variant='outlined'
                    sx={{ ml: 10 }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: 'skyblue', pt: 1 }} />
                  Email:
                  <TextField
                    id='outlined-basic'
                    label='email'
                    variant='outlined'
                    sx={{ ml: 10 }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Type your message:
                  <TextField
                    id='outlined-basic'
                    label='type your message...'
                    variant='outlined'
                    sx={{ ml: 10 }}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
            <Button >Submit</Button>
          </Table>
        </TableContainer>
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: 'black', color: 'white' }}
                  align='center'
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: 'skyblue', pt: 1 }} />{' '}
                  pravardhan@data-solutions.org
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: 'green', pt: 1 }} /> 512-669-8459
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

      </Box>
    </Layout>
  );
};

export default Contact;
