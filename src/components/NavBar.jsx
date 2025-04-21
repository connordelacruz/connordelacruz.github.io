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
import { Close, Menu as MenuIcon } from '@mui/icons-material'
import useScrollSpy from '../utils/useScrollSpy.js'
import {
  THEME_GRADIENT_BORDERS_BG,
  THEME_GRADIENT_BORDERS_SX,
  THEME_TRANSITION_DURATION_AND_TIMING_SX
} from './Theme.jsx'
import React from 'react'


/**
 * Wide viewport nav tabs component.
 *
 * @param sectionLinks
 * @param activeHash
 * @param getActiveHashColor
 * @param createSmoothScrollToSectionHandler
 * @return {Element}
 * @constructor
 */
const NavTabs = ({
                   sectionLinks,
                   activeHash,
                   getActiveHashColor,
                   createSmoothScrollToSectionHandler,
                 }) => {
  return (
    <Box
      sx={{
        // Hide if below md
        display: {xs: 'none', md: 'block'},
      }}
    >
      <Tabs
        value={activeHash ? activeHash : false}
        sx={{
          '& .MuiTabs-indicator': {
            // Full height indicator
            height: '100%',
            borderRadius: '50rem',
            // indicatorColor prop doesn't work with custom palettes, so leveraging sx
            backgroundColor: getActiveHashColor(),
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
              // Make sure text appears above full-height tab indicator
              zIndex: 1,
              // While the Tabs textColor prop does work with custom palettes, it throws errors if you use anything
              // other than the default ones, so I guess we're going with sx instead
              color: sectionLink.color + '.main',
              '&.Mui-selected': {
                // Set a contrasting color so it sticks out over the indicator
                color: 'background.default',
              },
              transitionProperty: 'color',
              ...THEME_TRANSITION_DURATION_AND_TIMING_SX,
            }}
          />
        ))}
      </Tabs>
    </Box>
  )
}

/**
 * Responsive nav menu component. Includes menu button and drawer.
 *
 * @param sectionLinks
 * @param activeHash
 * @param getActiveHashColor
 * @param createSmoothScrollToSectionHandler
 * @return {Element}
 * @constructor
 */
const NavMenu = ({
                   sectionLinks,
                   activeHash,
                   getActiveHashColor,
                   createSmoothScrollToSectionHandler,
                 }) => {
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
  return (
    <Box
      sx={{
        // Hide on md and above
        display: {xs: 'block', md: 'none'},
        // Affix it to the left side (use absolute display so logo can be centered)
        position: 'absolute',
        left: 0,
      }}
    >
      {/*Menu Button*/}
      <IconButton
        size="large"
        aria-label="Navigation menu"
        aria-controls="nav-drawer"
        aria-haspopup="true"
        onClick={handleMenuButtonClick}
      >
        <MenuIcon
          sx={{
            // Change color with active section
            color: getActiveHashColor(),
            transitionProperty: 'color',
            ...THEME_TRANSITION_DURATION_AND_TIMING_SX,
          }}
        />
      </IconButton>

      {/*Menu Contents*/}
      <Drawer
        id="nav-drawer"
        open={drawerOpen}
        onClose={handleDrawerOnClose}
        PaperProps={{
          sx: {
            borderRadius: 0,
            borderWidth: '0 2px 0 0',
            ...THEME_GRADIENT_BORDERS_SX
          },
        }}
      >
        <Box
          role="presentation"
          sx={{
            width: 250,
            pt: 4,
          }}
        >
          {/*Close Button*/}
          <IconButton
            aria-label="close"
            onClick={handleDrawerOnClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              opacity: 0.75,
            }}
          >
            <Close/>
          </IconButton>
          {/*Drawer Menu Items*/}
          <List>
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
                    borderRadius: '50rem',
                    color: sectionLink.color + '.main',
                    '&.Mui-selected': {
                      backgroundColor: sectionLink.color + '.main',
                      color: 'background.default',
                    },
                  }}
                >
                  <Typography
                    variant="button"
                    gutterBottom={false}
                  >
                    {sectionLink.text}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

    </Box>
  )
}

/**
 * Nav logo component.
 *
 * @param activeHash
 * @param color
 * @return {Element}
 * @constructor
 */
const NavLogo = ({
                   activeHash,
                   getActiveHashColor,
                 }) => {
  // Smooth scroll logo link handler
  const handleLogoClick = (e) => {
    e.preventDefault()
    window.scrollTo({top: 0, behavior: 'smooth'})
    // Update url hash
    history.pushState({}, '', '#')
  }

  return (
    <Box sx={{flexGrow: {xs: 0, md: 1}}}>
      <Typography
        variant="h6"
        component="a"
        href="#"
        onClick={handleLogoClick}
        sx={{
          color: getActiveHashColor(),
          display: 'inline',
          textDecoration: 'none',
          // Fade in when not at top of page
          opacity: activeHash === null ? 0 : 1,
          transitionProperty: 'opacity, color',
          ...THEME_TRANSITION_DURATION_AND_TIMING_SX,
          // Hide pointer when not visible
          pointerEvents: activeHash === null ? 'none' : 'initial',
        }}
        noWrap
        gutterBottom={false}
      >
        Connor de la Cruz
      </Typography>
    </Box>
  )
}

/**
 * Nav bar component.
 *
 * @param sectionLinks Array of objects with props text (link text) and hash (id of section omitting '#').
 * @return {Element}
 * @constructor
 */
export const NavBar = ({
                         sectionLinks = [],
                       }) => {
  // ================================================================================
  // Constants
  // ================================================================================
  // Offset scroll height for links by this value
  const navLinksScrollOffset = 85

  // Map of section link hashes to their theme colors
  const sectionHashToColor = []
  sectionLinks.map((sectionLink) => {
    sectionHashToColor[sectionLink.hash] = sectionLink.color + '.main'
  })

  // ================================================================================
  // Handlers + State
  // ================================================================================
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

  // ================================================================================
  // Scrollspy
  // ================================================================================
  // ScrollSpy to keep track of section currently scrolled into view.
  const activeHash = useScrollSpy({items: sectionLinks})

  // Helper function to return the section color for the active hash
  const getActiveHashColor = (defaultTo = 'inherit') =>
    activeHash ? sectionHashToColor[activeHash] : defaultTo

  // ================================================================================
  // Render
  // ================================================================================
  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        py: 0,
        borderWidth: '0 0 2px',
        borderRadius: 0,
        // Gradient borders when at top of page, otherwise match color of active hash
        background: THEME_GRADIENT_BORDERS_BG,
        borderColor: getActiveHashColor('transparent'),
        transitionProperty: 'border-color',
        ...THEME_TRANSITION_DURATION_AND_TIMING_SX,
      }}
    >
      <Toolbar
        sx={{
          px: {xs: 0, md: 2},
          justifyContent: 'center',
        }}
        disableGutters
      >
        {/*Responsive Menu*/}
        <NavMenu
          sectionLinks={sectionLinks}
          activeHash={activeHash}
          getActiveHashColor={getActiveHashColor}
          createSmoothScrollToSectionHandler={createSmoothScrollToSectionHandler}
        />

        {/*Logo*/}
        <NavLogo
          activeHash={activeHash}
          getActiveHashColor={getActiveHashColor}
        />

        {/*Wide Viewport Links*/}
        <NavTabs
          sectionLinks={sectionLinks}
          activeHash={activeHash}
          getActiveHashColor={getActiveHashColor}
          createSmoothScrollToSectionHandler={createSmoothScrollToSectionHandler}
        />

      </Toolbar>
    </AppBar>
  )
}