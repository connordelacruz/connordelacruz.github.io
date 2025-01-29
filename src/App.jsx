import { Box, Container, createTheme, CssBaseline, Divider, ThemeProvider, Typography } from '@mui/material'
import { Socials } from './components/Socials.jsx'

function App() {

  // ================================================================================
  // Theme
  // ================================================================================
  const theme = createTheme({
    palette: {
      mode: 'dark',
    }
  })

  // ================================================================================
  // Render
  // ================================================================================
  return (
    <ThemeProvider theme={ theme }>
      <CssBaseline/>
      {/*Hero/about section*/ }
      <Container maxWidth="md">
        <Box
          id="section-top"
          sx={ {
            py: 16,
          } }
        >
          <Typography variant="h3">Hi, my name is</Typography>
          <Typography
            variant="h1"
            color="primary"
            sx={ { fontWeight: 500 } }
          >
            Connor de la Cruz.
          </Typography>
          <Typography variant="h3">
            I'm a software engineer.
          </Typography>

          <Divider sx={{mt: 4}}>
            <Socials/>
          </Divider>
        </Box>
      </Container>

      {/*TODO: app bar (sticky)*/ }


    </ThemeProvider>
  )
}

export default App
