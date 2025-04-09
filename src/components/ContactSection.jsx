import { Box, CardContent, Typography } from '@mui/material'
import { SectionHeader } from './common/SectionHeader.jsx'
import { Email } from '@mui/icons-material'
import { CtaButton } from './common/CtaButton.jsx'
import { ContentCard, ContentCardHeader } from './common/ContentCard.jsx'

/**
 * Contact section component.
 *
 * @param color
 * @return {*}
 * @constructor
 */
export const ContactSection = ({color}) => {
  return (
    <Box id="section-contact">
      <SectionHeader color={color}>Contact</SectionHeader>
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
            },
          }}
          />
        <CardContent>
          <Typography
            variant="h5"
            component="p"
            sx={{
              textAlign: 'center',
              fontWeight: 400,
              // Make sure lines have a pretty even distribution of words
              textWrap: 'balance',
              py: 8,
              mb: 2,
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
          {/*TODO: socials*/}
        </CardContent>
      </ContentCard>
    </Box>
  )
}