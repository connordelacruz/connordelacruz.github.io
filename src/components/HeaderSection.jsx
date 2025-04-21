import { Box, Container, Divider, Paper, Typography } from '@mui/material'
import { SocialLinks } from './common/SocialLinks.jsx'
import { THEME_GRADIENT_BORDERS_SX, THEME_GRADIENT_TEXT_SX } from './Theme.jsx'
import { ZigZag } from './common/ZigZag.jsx'


/**
 * Profile pic component.
 *
 * @return {JSX.Element}
 * @constructor
 */
const ProfilePhoto = () => {
  return (
    <Box
      sx={{
        maxWidth: {
          xs: '50%',
          sm: '40%',
        },
        margin: '0 auto',
        my: 3,
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
          mb: 2,
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
        <Box>
          <Typography
            variant="h1"
            sx={{
              // inline-block makes it so the zig zag is only as wide as the text
              display: 'inline-block',
              textWrap: 'nowrap',
              fontWeight: 700,
              // Handle line breaks in the title a bit smoother by shrinking font size on small viewports
              fontSize: {
                xs: '3rem',
                sm: '4rem',
                md: '6rem',
              },
              px: 0,
              py: 2,
              // Gradient text
              ...THEME_GRADIENT_TEXT_SX
            }}
            gutterBottom={false}
          >
            Connor de la Cruz
            <ZigZag
              color="gradient"
              sx={{
                mt: 0,
                mb: 4,
              }}
            />
          </Typography>
        </Box>

        {/* About */}
        <Box
          id="section-about"
        >
          <Paper
            id="about-content"
            sx={{
              p: {
                xs: 2,
                md: 4,
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
                // TODO: merge these styles w/ contact section?
                textAlign: 'center',
                fontWeight: 400,
                fontSize: {
                  xs: '1.25rem',
                  sm: '1.5rem',
                },
                // Make sure lines have a pretty even distribution of words
                textWrap: 'balance',
              }}
            >
              I'm a software engineer with a passion for creative problem solving and learning new things. Whether
              it's front end, back end, or full stack dev, I love taking on new challenges and building things I can be proud of.
            </Typography>

          </Paper>
        </Box>
      </Container>
    </Container>
  )
}