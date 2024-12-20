import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#3E2723', 
        color: '#F1E3D3', 
        padding: 4,
        marginTop: 'auto',
        fontFamily: 'Georgia, serif',
      }}
    >
      {/* Footer Content */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 3,
        }}
      >

        {/* Section 2: Social Media */}
        <Box>
          <Typography variant="h6" gutterBottom sx={{ color: '#D7CCC8' }}>
            Connect with Us
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              sx={{ color: '#F1E3D3', '&:hover': { color: '#D7CCC8' } }}
              aria-label="Facebook"
              href='https://www.facebook.com/ranggacahyaw'
              target='_blank'
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              sx={{ color: '#F1E3D3', '&:hover': { color: '#D7CCC8' } }}
              aria-label="Instagram"
              href='https://www.instagram.com/ranggacaw'
              target='_blank'
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Section 3: Location */}
        <Box>
          <Typography variant="h6" gutterBottom sx={{ color: '#D7CCC8' }}>
            Visit Us
          </Typography>
          <Typography variant="body2">
            Rumah Saya
            <br />
            di Bekasi
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            Open: 8:00 AM - 9:00 PM
          </Typography>
        </Box>
      </Box>

      {/* Footer Bottom */}
      <Box sx={{ marginTop: 4, textAlign: 'center', borderTop: '1px solid #D7CCC8', paddingTop: 2 }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Coffee Cold. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
