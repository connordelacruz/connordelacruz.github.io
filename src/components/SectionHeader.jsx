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
          px: 4,
          py: 1,
          borderRadius: 16,
        }}
      >
        {children}
      </Typography>
    </Divider>
  )
}