// ================================================================================
// Nav Bar Component
// ================================================================================
import { AppBar, Box, IconButton, Menu, MenuItem, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import React from 'react'
import useScrollSpy from '../utils/useScrollSpy.js'

/**
 * Nav bar component.
 *
 * @param sectionLinks Array of objects with props text (link text) and hash (id of section omitting '#').
 *
 * @return {Element}
 * @constructor
 */
export const NavBar = ({
                         sectionLinks = [],
                       }) => {
  // TODO: logo:
  //       - shorten logo to "Cd" on narrow?
  // TODO: responsive menu:
  //       - figure out how we wanna display responsive menu
  //       - mirror the menu open/closed icon animation on current site
  //       - width and positioning
  // TODO: nav tabs:
  //       - style similarly to channelshift with full height indicator?

  // Offset scroll height for links by this value
  const navLinksScrollOffset = 85

  // Smooth scroll link handlers
  const createSmoothScrollToSectionHandler = (hash, callback = null) => {
    return (e) => {
      e.preventDefault()
      const y = document.getElementById(hash).getBoundingClientRect().top + window.scrollY - navLinksScrollOffset
      window.scrollTo({top: y, behavior: 'smooth'})
      // Update url hash
      history.pushState({}, '', '#' + hash)
      callback && callback()
    }
  }

  // Smooth scroll logo link handler
  const handleLogoClick = (e) => {
    e.preventDefault()
    window.scrollTo({top: 0, behavior: 'smooth'})
    // Update url hash
    history.pushState({}, '', '#')
  }

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

  // ScrollSpy to keep track of section currently scrolled into view.
  const activeHash = useScrollSpy({items: sectionLinks})

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        py: 0,
        borderWidth: '0 0 2px',
        // TODO: figure out how to hide border until you scroll a tiny bit
      }}
    >
      <Toolbar
        sx={{
          px: {xs: 0, md: 2},
        }}
        disableGutters
      >
        {/*Responsive Menu*/}
        <Box
          sx={{
            display: {xs: 'flex', md: 'none'},
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
                href={'#' + sectionLink.hash}
                onClick={createSmoothScrollToSectionHandler(sectionLink.hash, handleMenuClose)}
                selected={activeHash === sectionLink.hash ? true : false}
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
          onClick={handleLogoClick}
          sx={{
            // Fade in when not at top of page
            opacity: activeHash === null ? 0 : 1,
            // TODO: make transition timing consistent with tabs
            transition: 'opacity 0.3s',
            display: 'flex',
            flexGrow: 1,
            textDecoration: 'none',
            mr: 2,
          }}
          noWrap
          gutterBottom={false}
        >
          Connor de la Cruz
        </Typography>

        {/*Wide Viewport Links*/}
        <Box
          sx={{
            display: {xs: 'none', md: 'block'},
          }}
        >
          <Tabs value={activeHash ? activeHash : false}>
            {sectionLinks.map((sectionLink, i) => (
              <Tab
                key={i}
                component="a"
                label={sectionLink.text}
                value={sectionLink.hash}
                href={'#' + sectionLink.hash}
                onClick={createSmoothScrollToSectionHandler(sectionLink.hash)}
                sx={{
                  ml: 1,
                }}
              />
            ))}
          </Tabs>
        </Box>

      </Toolbar>
    </AppBar>
  )
}