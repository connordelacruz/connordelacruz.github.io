import {Box, Container, Divider, Paper, Typography} from '@mui/material'
import { THEME_GRADIENT_BORDERS_SX, THEME_GRADIENT_TEXT_SX } from './Theme.jsx'
import { ZigZag } from './common/ZigZag.jsx'
import {SocialIconLinks} from "./common/SocialLinks.jsx";

/**
 * Title text.
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const TitleSection = () => {
    return (
        <Box
            sx={{
                textAlign: 'center',
            }}
        >
            <Typography
                variant="h4"
                gutterBottom={false}
            >
                hi, my name is
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
    )
}

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
 * Container with profile photo and about copy.
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const AboutSection = () => {
  return (
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
      <ProfilePhoto/>

      {/*About Copy*/}
      <Typography
        variant="h5"
        component="p"
        sx={{
          px: {
            xs: 2,
            sm: 4,
            md: 8,
          },
          py: {
            xs: 2,
            sm: 4,
          },
          fontSize: {
            xs: '1.25rem',
            sm: '1.5rem',
          },
          textAlign: 'center',
          textWrap: 'pretty',
        }}
        gutterBottom={false}
      >
        I'm a software engineer with a passion for creative problem solving and learning new things.
      </Typography>

      {/*Social Links*/}
      <Box
        sx={{
          opacity: 0.5,
        }}
      >
        <SocialIconLinks />
      </Box>

    </Paper>
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
        my: {
          xs: 4,
          md: 8,
        },
      }}
    >
      <TitleSection/>
      <AboutSection/>
    </Container>
  )
}