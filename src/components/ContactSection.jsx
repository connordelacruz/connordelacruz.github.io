import { CardContent, Typography } from '@mui/material'
import { ContentCard, ContentCardHeader } from './common/ContentCard.jsx'
import { SectionContainer } from './common/SectionContainer.jsx'
import { SocialButtonLinks } from './common/SocialLinks.jsx'

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
          <SocialButtonLinks color={color}/>
        </CardContent>
      </ContentCard>
    </SectionContainer>
  )
}