// ================================================================================
// Nav Bar Component
// ================================================================================
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Tab,
  Tabs,
  Toolbar,
  Typography
} from '@mui/material'
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
  //       - Figure out styling on narrow regardless, it's a real weird size and not centered nicely
  // TODO: responsive menu:
  //       - mirror the menu open/closed icon animation on current site
  // TODO: nav tabs:
  //       - style similarly to channelshift with full height indicator?
  // TODO: nav bar:
  //       - figure out how to hide border until you scroll a tiny bit?

  // Offset scroll height for links by this value
  const navLinksScrollOffset = 85

  // Map of section link hashes to their theme colors
  const sectionHashToColor = []
  sectionLinks.map((sectionLink) =>{
    sectionHashToColor[sectionLink.hash] = sectionLink.color + '.main'
  })

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

  // Responsive nav drawer state
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  // Menu button onClick
  const handleMenuButtonClick = (e) => {
    setDrawerOpen(true)
  }

  // Drawer onClose
  const handleDrawerOnClose = () => {
    setDrawerOpen(false)
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
        // TODO: idk if i like this or not:
        borderBottomColor: activeHash ? 'default' : 'rgba(0,0,0,0)',
        transition: 'border-bottom-color 0.3s',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
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
          {/*Menu Button*/}
          <IconButton
            size="large"
            aria-label="Navigation menu"
            aria-controls="nav-drawer"
            aria-haspopup="true"
            onClick={handleMenuButtonClick}
            color="inherit"
          >
            <MenuIcon/>
          </IconButton>
          {/*Menu Contents*/}
          <Drawer
            id="nav-drawer"
            open={drawerOpen}
            onClose={handleDrawerOnClose}
            // TODO: accessibility stuff (component nav)
            // TODO: swipeable? sounds like it comes with a performance dip...
            // TODO: header list item
            // TODO: close button
          >
            <Box
              role="presentation"
              sx={{
                width: 250,
                // TODO: figure out padding, make links big n juicy and a bit closer to vertical center
                pt: 4,
              }}
            >
              <List>
                {/*Drawer Menu Items*/}
                {/*TODO: colors*/}
                {sectionLinks.map((sectionLink, i) => (
                  <ListItem
                    key={i}
                    disablePadding
                  >
                    <ListItemButton
                      component="a"
                      href={'#' + sectionLink.hash}
                      onClick={createSmoothScrollToSectionHandler(sectionLink.hash, handleDrawerOnClose)}
                      selected={activeHash === sectionLink.hash}
                      sx={{
                        py: 2,
                      }}
                    >
                      {sectionLink.text}
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>

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
            // TODO: make unclickable when hidden?
            opacity: activeHash === null ? 0 : 1,
            transition: 'opacity 0.3s',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
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
            display: {xs: 'none', md: 'block'},
          }}
        >
          <Tabs
            value={activeHash ? activeHash : false}
            sx={{
              '& .MuiTabs-indicator': {
                // Full height indicator
                height: '100%',
                borderRadius: 1,
                // indicatorColor prop doesn't work with custom palettes, so leveraging sx
                backgroundColor: activeHash ? sectionHashToColor[activeHash] : 'inherit',
              },
            }}
          >
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
                  // TODO: maybe make all button text styles bold?
                  fontWeight: 700,
                  // Make sure text appears above full-height tab indicator
                  zIndex: 1,
                  // While the Tabs textColor prop does work with custom palettes, it throws errors if you use anything
                  // other than the default ones, so I guess we're going with sx instead
                  // TODO: transition timing for text color such that it changes after the indicator moves?
                  color: sectionLink.color + '.main',
                  '&.Mui-selected': {
                    // Set a contrasting color so it sticks out over the indicator
                    color: 'background.default',
                  },
                }}
              />
            ))}
          </Tabs>
        </Box>

      </Toolbar>
    </AppBar>
  )
}