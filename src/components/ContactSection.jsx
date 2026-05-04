import {Box, CardContent, Typography} from '@mui/material'
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
              align: 'center',
              color: color,
              gutterBottom: false,
            },
          }}
          />
        <CardContent>
          <Box
          sx={{
            px: {
              xs: 0,
              sm: 4,
              md: 8,
            },
            py: 2,
          }}>
            <SocialButtonLinks color={color}/>
          </Box>
        </CardContent>
      </ContentCard>
    </SectionContainer>
  )
}