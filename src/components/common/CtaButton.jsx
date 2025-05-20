import { Button } from '@mui/material'

export const CtaButton = ({
                            color,
                            href,
                            sx = {},
                            children,
                            ...props
                          }) => {
  return (
    <Button
      variant="contained"
      size="large"
      fullWidth
      color={color}
      href={href}
      target="_blank"
      sx={{
        fontSize: '1.25rem',
        py: 1.5,
        ...sx
      }}
      {...props}
    >
      {children}
    </Button>
  )
}