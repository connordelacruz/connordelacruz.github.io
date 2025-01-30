import { IconButton } from '@mui/material'

export const SocialLink = ({
                             url,
                             label,
                             iconComponent,
                             ...props
                           }) => {
  return (
    <IconButton
      aria-label={label}
      href={url}
      target="_blank"
      sx={{
        mx: 3,
      }}
      {...props}
    >
      {iconComponent}
    </IconButton>
  )
}