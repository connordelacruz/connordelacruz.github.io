import { Box, CardContent, Typography } from '@mui/material'
import { Email } from '@mui/icons-material'
import { CtaButton } from './common/CtaButton.jsx'
import { ContentCard, ContentCardHeader } from './common/ContentCard.jsx'
import { SectionContainer } from './common/SectionContainer.jsx'
import { SocialLinks } from './common/SocialLinks.jsx'

/**
 * Contact section component.
 *
 * @param color
 * @return {*}
 * @constructor
 */
export const ContactSection = ({color}) => {
  return (
    <SectionContainer
      id="section-contact"
      headerText="Contact"
      color={color}
    >
      <ContentCard
        color={color}
      >
        <ContentCardHeader
          title="Hit Me Up!"
          color={color}
          slotProps={{
            title: {
              variant: 'h3',
              textAlign: 'center',
              color: color,
              gutterBottom: false,
            },
          }}
          />
        <CardContent>
          <Typography
            variant="h4"
            component="p"
            sx={{
              fontFamily: 'Roboto',
              textWrap: 'pretty',
              px: {
                xs: 0,
                sm: 2,
                md: 4,
              },
              py: 4,
            }}
          >
            {/*TODO: you gotta re-work this copy and also figure out text wrap*/}
            If you're looking to hire, collaborate, or just want to say hello, feel free to reach out!
          </Typography>
          <CtaButton
            color={color}
            startIcon={<Email/>}
            href="mailto:connor.c.delacruz@gmail.com"
          >
            connor.c.delacruz@gmail.com
          </CtaButton>
        </CardContent>
      </ContentCard>
      <Box
        sx={{
          mt: 3,
        }}
      >
        <SocialLinks color={color}/>
      </Box>
    </SectionContainer>
  )
}