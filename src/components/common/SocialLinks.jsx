import { Box, Button, IconButton, Stack } from '@mui/material'
import { Email, GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import { THEME_CONTENT_STACK_SPACING } from '../Theme.jsx'
import { CtaButton } from './CtaButton.jsx'

// ================================================================================
// Content
// ================================================================================

const socials = [
  {
    label: 'connor.c.delacruz@gmail.com',
    iconComponent: <Email/>,
    href: 'mailto:connor.c.delacruz@gmail.com',
    highlighted: true,
  },
  {
    label: 'GitHub',
    iconComponent: <GitHub/>,
    href: 'https://github.com/connordelacruz',
  },
  {
    label: 'LinkedIn',
    iconComponent: <LinkedIn/>,
    href: 'http://www.linkedin.com/in/connordelacruz',
  },
  {
    label: 'Instagram',
    iconComponent: <Instagram/>,
    href: 'https://www.instagram.com/delachrome',
  },
]

// ================================================================================
// Components
// ================================================================================

/**
 * An icon link to a social media platform.
 *
 * @param href
 * @param label
 * @param iconComponent
 * @param color
 * @param sx
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export const SocialIconLink = ({
                                 href,
                                 label,
                                 iconComponent,
                                 color = 'inherit',
                                 sx = {},
                                 ...props
                               }) => {
  return (
    <IconButton
      aria-label={label}
      href={href}
      target="_blank"
      color={color}
      sx={{
        mx: 3,
        ...sx
      }}
      {...props}
    >
      {iconComponent}
    </IconButton>
  )
}


/**
 * Row of social icon links.
 *
 * @param linkProps Array of objects representing each link. Keys can be any prop that SocialLink accepts, but all
 *                  should include the following keys:
 *                  - href
 *                  - label
 *                  - iconComponent
 * @param color
 * @param sx
 * @return {JSX.Element}
 * @constructor
 */
export const SocialIconLinks = ({
                                  linkProps = socials,
                                  color = 'inherit',
                                  containerSx = {},
                                  linkSx = {},
                                }) => {
  // TODO: figure out how to achieve gradient!!
  //      Prob need to do something like this for the link icon components: https://stackoverflow.com/questions/54273615/passing-props-in-a-component-that-is-stored-in-a-variable
  return (
    <Box
      sx={{
        textAlign: 'center',
        ...containerSx
      }}
    >
      {linkProps.map((props, i) =>
        <SocialIconLink key={i} sx={{...linkSx}} {...props} color={color}/>
      )}
    </Box>
  )
}

/**
 * Button link to socials.
 *
 * If highlighted, will use a big juicy CtaButton. Otherwise, will use an outlined Button.
 *
 * @param href
 * @param label
 * @param iconComponent
 * @param highlighted
 * @param color
 * @param sx
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
const SocialButtonLink = ({
                            href,
                            label,
                            iconComponent,
                            highlighted = false,
                            color = 'inherit',
                            sx = {},
                            ...props
                          }) => {
  return (
    <>
      {
        highlighted
          ? <CtaButton
            href={href}
            target="_blank"
            color={color}
            startIcon={iconComponent}
            sx={{
              ...sx,
            }}
            {...props}
          >
            {label}
          </CtaButton>
          : <Button
            href={href}
            target="_blank"
            variant="outlined"
            color={color}
            startIcon={iconComponent}
            fullWidth
            sx={{
              ...sx,
            }}
            {...props}
          >
            {label}
          </Button>
      }
    </>
  )
}

/**
 * List of full-sized social link buttons.
 *
 * @param linkProps
 * @param color
 * @param containerSx
 * @param linkSx
 * @return {JSX.Element}
 * @constructor
 */
export const SocialButtonLinks = ({
                                    linkProps = socials,
                                    color = 'inherit',
                                    containerSx = {},
                                    linkSx = {},
                                  }) => {
  // TODO: highlighted as a full width top button, non-highlighted as ButtonStack?
  return (
    <Stack
      spacing={THEME_CONTENT_STACK_SPACING}
      sx={{
        ...containerSx,
      }}
    >
      {linkProps.map((props, i) =>
        <SocialButtonLink key={i} sx={{...linkSx}} {...props} color={color}/>
      )}
    </Stack>
  )
}