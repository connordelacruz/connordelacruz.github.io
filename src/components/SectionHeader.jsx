import { Divider, Typography } from '@mui/material'

export const SectionHeader = ({
                                children,
                                ...props
                              }) => {
  return (
    <Divider
      sx={{
        mb: 4,
        '&::before, &::after': {
          borderTopWidth: 2,
        },
      }}
    >
      <Typography variant="h2" gutterBottom={false}>
        {children}
      </Typography>
    </Divider>
  )
}