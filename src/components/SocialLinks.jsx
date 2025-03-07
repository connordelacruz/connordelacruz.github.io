import { Box, IconButton } from '@mui/material'

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
                              linkProps,
                              color = 'inherit',
                            }) => {
  return (
    <Box
      sx={{
        mt: 4,
        textAlign: 'center',
      }}
    >
      {linkProps.map((props, i) =>
        <SocialLink key={i} {...props} color={color}/>
      )}
    </Box>
  )
}