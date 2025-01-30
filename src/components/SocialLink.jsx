import { IconButton } from '@mui/material'

export const SocialLink = ({
                             url,
                             label,
                             iconComponent,
                             color = 'primary',
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
      color={color}
      {...props}
    >
      {iconComponent}
    </IconButton>
  )
}