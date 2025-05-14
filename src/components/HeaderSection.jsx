import { Box, Container, Paper, Typography } from '@mui/material'
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
          md: '35%',
        },
        margin: '0 auto',
        mb: {
          xs: 3,
          sm: 6,
        },
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
      maxWidth="md"
      sx={{
        mt: {
          xs: 6,
          md: 8,
        },
        mb: {
          xs: 4,
          md: 8,
        },
      }}
    >
      {/*Header Text*/}
      <Box
        sx={{
          mb: 1,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom={false}
        >
          Hi, my name is
        </Typography>
        <Typography
          variant="h1"
          sx={{
            // inline-block makes it so the zig zag is only as wide as the text
            display: 'inline-block',
            textWrap: 'nowrap',
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
        >
          Connor de la Cruz
          <ZigZag
            color="gradient"
            sx={{
              mt: 1,
            }}
          />
        </Typography>
      </Box>

      {/* About Container */}
      <Paper
        id="about-content"
        sx={{
          py: {
            xs: 4,
            sm: 6,
          },
          // Gradient border
          ...THEME_GRADIENT_BORDERS_SX
        }}
      >

        {/*Profile Photo*/}
        <ProfilePhoto/>

        {/*About Copy*/}
        <Typography
          variant="h5"
          component="p"
          sx={{
            px: {
              xs: 2,
              sm: 6,
              md: 8,
            },
            fontFamily: 'Roboto',
            fontSize: {
              xs: '1.25rem',
              sm: '1.5rem',
            },
            textAlign: 'left',
            textWrap: 'pretty',
          }}
          gutterBottom={false}
        >
          I'm a full-stack software engineer with a passion for creative problem solving and learning new things.
          Whether
          it's front end, back end, or anything in between, I love tackling new challenges and building things I can be
          proud of.
        </Typography>
      </Paper>
    </Container>
  )
}