// ================================================================================
// Nav Bar Component
// ================================================================================

import { AppBar, Toolbar, Typography } from '@mui/material'

export const NavBar = ({}) => {
  // TODO: hide name until scrolling past hero?
  // TODO: shorten logo to "Cd" on narrow?
  // TODO: figure out how we wanna display responsive menu
  // TODO: socials?
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
        {/*Logo*/}
        <Typography
          variant="h6"
          color="primary"
          component="a"
          href="#"
          sx={{
            mr: 2,
            display: 'flex',
            textDecoration: 'none',
          }}
          noWrap
          gutterBottom={false}
          >
          Connor de la Cruz
        </Typography>

      </Toolbar>
    </AppBar>
  )
}