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
 * @param sx
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export const SocialLink = ({
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
 * List of social links.
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
export const SocialLinks = ({
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
        <SocialLink key={i} sx={{...linkSx}} {...props} color={color}/>
      )}
    </Box>
  )
}