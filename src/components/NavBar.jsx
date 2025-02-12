// ================================================================================
// Nav Bar Component
// ================================================================================
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import React from 'react'

/**
 * Nav bar component.
 *
 * @param sectionLinks Array of objects with props text and href to use for link text and href respectively.
 *
 * @return {Element}
 * @constructor
 */
export const NavBar = ({
                         sectionLinks = [],
                       }) => {
  // TODO: logo:
  //       - hide name until scrolling past hero?
  //       - shorten logo to "Cd" on narrow?
  // TODO: responsive menu:
  //       - figure out how we wanna display responsive menu
  //       - mirror the menu open/closed icon animation on current site
  //       - width and positioning
  //       - break at sm instead of xs?
  // TODO: clicking links:
  //       - smooth scrolling + account for nav height on section link click

  // Responsive nav menu state
  const [anchorEl, setAnchorEl] = React.useState(null)
  const menuOpen = Boolean(anchorEl)

  // Responsive nav menu handlers
  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        py: {xs: 1, sm: 0},
        borderWidth: '0 0 1px',
      }}
    >
      <Toolbar
        sx={{
          px: 2,
        }}
        disableGutters
      >
        {/*Responsive Menu*/}
        <Box
          sx={{
            display: {xs: 'flex', sm: 'none'},
            flexGrow: 1,
          }}
        >
          <IconButton
            size="large"
            aria-label="Navigation menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenuClick}
            color="inherit"
          >
            <MenuIcon/>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            keepMounted
          >
            {sectionLinks.map((sectionLink, i) => (
              <MenuItem
                key={i}
                component="a"
                href={sectionLink.href}
                onClick={handleMenuClose}
              >
                {sectionLink.text}
              </MenuItem>
            ))}
          </Menu>

        </Box>

        {/*Logo*/}
        <Typography
          variant="h6"
          color="inherit"
          component="a"
          href="#"
          sx={{
            mr: 2,
            display: 'flex',
            flexGrow: 1,
            textDecoration: 'none',
          }}
          noWrap
          gutterBottom={false}
        >
          Connor de la Cruz
        </Typography>

        {/*Wide Viewport Links*/}
        <Box
          sx={{
            display: {xs: 'none', sm: 'block'},
          }}
        >
          {sectionLinks.map((sectionLink, i) => (
            <Button
              key={i}
              variant="text"
              href={sectionLink.href}
            >
              {sectionLink.text}
            </Button>
          ))}
        </Box>

      </Toolbar>
    </AppBar>
  )
}