import { Box, Container, Paper, Typography } from '@mui/material'
import { SocialLinks } from './SocialLinks.jsx'

/**
 * Page header component.
 *
 * @param color Theme color for header section.
 * @param socialLinkProps props to use on SocialLinks component.
 *
 * @return {JSX.Element}
 * @constructor
 */
export const PageHeader = ({
                             color,
                             socialLinkProps,
                           }) => {
  return (
    <Container
      id="header-wrapper"
      maxWidth={false}
      disableGutters
      sx={{
        // TODO: use upscaled image
        // TODO: fallback color?
//          backgroundImage: 'url("./images/header/background.png")',
        // TODO: width 100% wide, height 100% narrow?
//          backgroundSize: '100%',
        // TODO: no repeat?
      }}
    >

      { /* Header */}
      <Container
        maxWidth="md"
        id="section-top"
        sx={{
          my: {
            xs: 2,
            md: 6,
            textAlign: 'center',
          },
        }}
      >
        {/*Header Text*/}
        <Typography
          variant="h4"
          color={color}
          sx={{
            fontWeight: 400,
          }}
        >
          Hi, my name is
        </Typography>
        {/*TODO: make sure name scales nicely, breaks well on narrow views (damn this 3 word last name)*/}
        <Typography
          variant="h1"
          color={color}
          sx={{
            fontWeight: 500,
            // Handle line breaks in the title a bit smoother by shrinking font size on small viewports
            fontSize: {
              // TODO: figure out the best numbers here, scale subheader to look nice too
              xs: '3rem',
              sm: '4rem',
              md: '6rem',
            },
            color: color + '.contrastText',
            backgroundColor: color + '.main',
            // TODO: make sure this padding doesn't break mobile
            px: 0,
            py: 2,
            borderRadius: 16,
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
            }}
          >

            {/*Profile Photo*/}
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
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontSize: {
                  // TODO: looks a little funky on xs... (maybe it's cuz it's too wordy idk)
                  xs: '1.25rem',
                  sm: '1.5rem',
                },
              }}
            >
              I'm a software engineer with a passion for creative problem solving and learning new things. Whether
              it's full-stack web dev, creating command line tools, or even dabbling in design work, I love taking
              on
              new challenges and building things I can be proud of.
            </Typography>
          </Paper>
        </Box>

        {/*Socials*/}
        <SocialLinks linkProps={socialLinkProps} color={color}/>
      </Container>
    </Container>
  )
}