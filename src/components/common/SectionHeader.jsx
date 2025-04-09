import { Divider, Typography } from '@mui/material'

export const SectionHeader = ({
                                children,
                                color,
                                ...props
                              }) => {
  return (
    <Divider
      sx={{
        mb: 4,
        mt: 2,
        '&::before, &::after': {
          borderTopWidth: 3,
          borderTopColor: color + '.main',
        },
      }}
    >
      <Typography
        color={color}
        variant="h2"
        gutterBottom={false}
        sx={{
          fontWeight: 500,
          color: color + '.main',
          // TODO: reign in these values for mobile...
          px: 1,
          py: 0.5,
        }}
      >
        {children}
      </Typography>
    </Divider>
  )
}