import { Typography } from '@mui/material'
import { ZigZagContainer } from './ZigZag.jsx'

/**
 * Section header component.
 *
 * @param color
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
export const SectionHeader = ({
                                color,
                                children,
                              }) => {
  return (
    <ZigZagContainer
      color={color}
      sx={{
        mb: 4,
        mt: 2,
      }}
    >
      <Typography
        color={color}
        variant="h2"
        gutterBottom={false}
        sx={{
          px: 1,
          py: 0.5,
          color: color + '.main',
        }}
      >
        {children}
      </Typography>
    </ZigZagContainer>
  )
}