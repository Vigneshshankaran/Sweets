import React from 'react';
import { AppBar, Tabs, Tab, Toolbar, Typography, Box, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div">
            Lakshmi Sweets
          </Typography>
        </Box>
        <Tabs textColor="inherit">
          <Tab label="Dashboard" />
          <Tab label="Add Details" />
        </Tabs>
        <Button variant="contained" color="success">Login</Button>
        </Toolbar>
    </AppBar>
  );
};

export default Navbar;
