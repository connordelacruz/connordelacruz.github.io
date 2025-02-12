// ================================================================================
// Nav Bar Component
// ================================================================================

import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'

export const NavBar = ({
                         sectionLinks = [],
                       }) => {
  // TODO: hide name until scrolling past hero?
  // TODO: shorten logo to "Cd" on narrow?
  // TODO: figure out how we wanna display responsive menu
  // TODO: mirror the menu open/closed animation on current site
  // TODO: smooth scrolling + account for nav height on section link click
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
//           TODO: uhh what dis:
           aria-haspopup="true"
//           TODO: onclick
          color="inherit">
           <MenuIcon/>
         </IconButton>
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