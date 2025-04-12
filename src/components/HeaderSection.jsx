import { Box, Container, Divider, Paper, Typography } from '@mui/material'
import { SocialLinks } from './common/SocialLinks.jsx'
import { THEME_GRADIENT_BORDERS_SX, THEME_GRADIENT_TEXT_SX } from './Theme.jsx'


const ProfilePhoto = () => {
  return (
    <Box
      sx={{
        maxWidth: {
          xs: '50%',
          sm: '40%',
        },
        margin: '0 auto',
        my: 4,
      }}
    >
      <img
        src="images/about/profile.jpg"
        className="profile-image"
      />
    </Box>
  )
}

/**
 * Page header component.
 *
 * @return {JSX.Element}
 * @constructor
 */
export const HeaderSection = () => {
  return (
    <Container
      id="header-wrapper"
      maxWidth={false}
      disableGutters
    >

      { /* Header */}
      <Container
        maxWidth="md"
        id="section-top"
        sx={{
          py: {
            xs: 2,
            md: 8,
            textAlign: 'center',
          },
        }}
      >
        {/*Header Text*/}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 500,
          }}
          gutterBottom={false}
        >
          Hi, my name is
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            // Handle line breaks in the title a bit smoother by shrinking font size on small viewports
            fontSize: {
              xs: '3rem',
              sm: '4rem',
              md: '6rem',
            },
            px: 0,
            py: 2,
            borderRadius: 16,
            // Gradient text
            ...THEME_GRADIENT_TEXT_SX
          }}
          gutterBottom={false}
        >
          Connor de la Cruz
        </Typography>

        {/* About */}
        <Box
          id="section-about"
          sx={{
            mt: 4,
          }}
        >
          <Paper
            id="about-content"
            sx={{
              p: {
                xs: 2,
                sm: 4,
              },
              // Gradient border
              ...THEME_GRADIENT_BORDERS_SX
            }}
          >

            {/*Profile Photo*/}
            <ProfilePhoto/>
            {/*Socials*/}
            <Divider
              sx={{
                my: 4,
                '&::before, &::after': {
                  borderTopWidth: 2,
                  ...THEME_GRADIENT_BORDERS_SX
                },
              }}
            >
              <SocialLinks/>
            </Divider>

            {/*About Copy*/}
            <Typography
              variant="h5"
              component="p"
              sx={{
                // TODO: merge these styles w/ contact section
                textAlign: 'center',
                fontWeight: 400,
                fontSize: {
                  // TODO: looks a little funky on xs... (maybe it's cuz it's too wordy idk)
                  xs: '1.25rem',
                  sm: '1.5rem',
                },
                // Make sure lines have a pretty even distribution of words
                textWrap: 'balance',
              }}
            >
              I'm a software engineer with a passion for creative problem solving and learning new things. Whether
              it's full-stack web dev, creating command line tools, or even dabbling in design work, I love taking
              on
              new challenges and building things I can be proud of.
            </Typography>

          </Paper>
        </Box>
      </Container>
    </Container>
  )
}