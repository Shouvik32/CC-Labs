// Footer.js
import React from 'react';
import { Email, Phone, Facebook, Twitter, Instagram } from '@mui/icons-material';
import { Container, Grid, Typography, Link, Box } from '@mui/material';


const Footer = () => {
  return (
    <footer className="app-footer">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant="h5">Contact Us</Typography>
              <Typography>
                <Email /> info@multilevel.com
                <br />
                <Phone /> (123) 456-7890
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant="h5">Follow Us</Typography>
              <Link href="https://facebook.com/servicehub" target="_blank" rel="noopener noreferrer" className="icon-link">
                <Facebook /> Facebook
              </Link>
              <Link href="https://twitter.com/servicehub" target="_blank" rel="noopener noreferrer" className="icon-link">
                <Twitter /> Twitter
              </Link>
              <Link href="https://instagram.com/servicehub" target="_blank" rel="noopener noreferrer" className="icon-link">
                <Instagram /> Instagram
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant="h5">Legal</Typography>
              <Link href="/terms" target="_blank" rel="noopener noreferrer" className="icon-link">
                Terms of Service
              </Link>
              <Link href="/privacy" target="_blank" rel="noopener noreferrer" className="icon-link">
                Privacy Policy
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <div className="footer-bottom">
        <Typography variant="body2">&copy; 2023 Multilevel app. All rights reserved.</Typography>
      </div>
    </footer>
  );
};

export default Footer;
