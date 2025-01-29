import { IconButton } from '@mui/material'
import { Email, GitHub, Instagram, LinkedIn } from '@mui/icons-material'

const SocialLink = ({
                      url,
                      label,
                      iconComponent,
                    }) => {
  return (
    <IconButton
      aria-label={label}
      href={url}
      target="_blank"
    >
      {iconComponent}
    </IconButton>
  )
}

export const Socials = ({}) => {
  return (
    <>
      <SocialLink
        label="GitHub"
        iconComponent={<GitHub/>}
      />
      <SocialLink
        label="LinkedIn"
        iconComponent={<LinkedIn/>}
      />
      <SocialLink
        label="Email"
        iconComponent={<Email/>}
      />
      <SocialLink
        label="Instagram"
        iconComponent={<Instagram/>}
      />
    </>
  )
}