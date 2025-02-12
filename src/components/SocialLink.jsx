import { IconButton } from '@mui/material'

export const SocialLink = ({
                             href,
                             label,
                             iconComponent,
                             color = 'primary',
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