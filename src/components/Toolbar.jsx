import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar as MUIToolbar, Typography, Box, Button } from '@mui/material'
import logo from '../assets/ZB.svg'
import ContactForm from './ContactForm'

export default function Toolbar() {
  const [contactOpen, setContactOpen] = useState(false)

  useEffect(() => {
    document.title = "Portfolio"
  }, [])

  // Style object to reuse for buttons
  const buttonStyles = {
    fontFamily: "'Anton', sans-serif",
    fontWeight: 400,
    fontSize: '1.8rem',
    marginRight: 0,
  }

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(2px)',
          px: 2,
          zIndex: 1300,
        }}
      >
        <MUIToolbar
          disableGutters
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          {/* Logo and Name */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logo}
              alt="ZB Logo"
              style={{ marginLeft: 20, marginTop: 20, height: 80, marginRight: 20 }}
            />
            <Typography
              variant="h6"
              sx={{ fontFamily: "'Anton', sans-serif", fontWeight: 400, fontSize: '1.8rem' }}
            >
              Zain Bughio
            </Typography>
          </Box>

          {/* Navigation Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1, gap: 2 }}>
            <Button color="inherit" href="#about" sx={buttonStyles}>
              About
            </Button>
            <Button color="inherit" href="#projects" sx={buttonStyles}>
              Projects
            </Button>
            <Button color="inherit" href="#interests" sx={buttonStyles}>
              Interests
            </Button>
          </Box>

          {/* Contact Button */}
          <Button
            color="inherit"
            sx={buttonStyles}
            onClick={() => setContactOpen(true)}
          >
            Contact
          </Button>

          <Box sx={{ width: 120 }} />
        </MUIToolbar>
      </AppBar>

      {/* Conditionally render ContactForm */}
      {contactOpen && <ContactForm onClose={() => setContactOpen(false)} />}
    </>
  )
}
