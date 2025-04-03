import { Box, IconButton } from '@mui/material'
import { Email, GitHub, Instagram, LinkedIn } from '@mui/icons-material'

// ================================================================================
// Content
// ================================================================================

const socials = [
  {
    label: 'Email',
    iconComponent: <Email/>,
    href: 'mailto:connor.c.delacruz@gmail.com',
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
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export const SocialLink = ({
                             href,
                             label,
                             iconComponent,
                             color = 'inherit',
                             ...props
                           }) => {
  return (
    <IconButton
      aria-label={label}
      href={href}
      target="_blank"
      sx={{
        mx: 3,
      }}
      color={color}
      {...props}
    >
      {iconComponent}
    </IconButton>
  )
}


/**
 * List of social links.
 *
 * @param linkProps Array of objects representing each link. Keys can be any prop that SocialLink accepts, but all
 *                  should include the following keys:
 *                  - href
 *                  - label
 *                  - iconComponent
 * @param color
 * @return {JSX.Element}
 * @constructor
 */
export const SocialLinks = ({
                              // TODO: better name for this?
                              linkProps = socials,
                              color = 'inherit',
                            }) => {
  return (
    <Box
      sx={{
        textAlign: 'center',
      }}
    >
      {linkProps.map((props, i) =>
        <SocialLink key={i} {...props} color={color}/>
      )}
    </Box>
  )
}