import { Divider, Typography } from '@mui/material'

export const SectionHeader = ({
                                children,
                                color,
                                ...props
                              }) => {
  return (
    <Divider
      sx={{
        my: 4,
        '&::before, &::after': {
          borderTopWidth: 2,
          borderTopColor: color + '.main',
        },
      }}
    >
      <Typography
        color={color}
        variant="h2"
        gutterBottom={false}
        sx={{
          color: 'background.default',
          backgroundColor: color + '.main',
          // TODO: reign in these values for mobile...
          px: 3,
          py: 0.5,
          borderRadius: 16,
        }}
      >
        {children}
      </Typography>
    </Divider>
  )
}