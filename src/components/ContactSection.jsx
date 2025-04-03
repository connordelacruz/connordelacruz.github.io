import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import { SectionHeader } from './SectionHeader.jsx'
import { Email } from '@mui/icons-material'

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
      <Card
        sx={{
          borderColor: color + '.main',
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="p"
            sx={{
              py: 8,
              mb: 2,
            }}
          >
            If you're looking to hire, collaborate, or just want to say hello, feel free to reach out!
          </Typography>
          {/*TODO: big juicy CTA buttons*/}
          <Button
            variant="contained"
            color={color}
            startIcon={<Email/>}
            size="large"
            fullWidth
            href="mailto:connor.c.delacruz@gmail.com"
            target="_blank"
          >
            connor.c.delacruz@gmail.com
          </Button>
          {/*TODO: socials*/}
        </CardContent>
      </Card>
    </Box>
  )
}