import { Box } from '@mui/material'
import { THEME_GRADIENT } from '../Theme.jsx'

/**
 * Returns an object to use for sx styling to make a zig zag.
 *
 * Styling based on https://css-shape.com/zig-zag-line/
 *
 * @param angle
 * @param size
 * @param thiccness
 * @param color
 * @return {{}}
 */
const calculateZigZagSx = (
  angle,
  size,
  thiccness,
  color,
) => {
  const zigZagSx = {}
  // Calculations
  const height = `calc(${thiccness} + ${size} / (2 * tan(${angle} / 2)))`
  const g = `${size} repeat-x conic-gradient(from calc(${angle}/-2) at bottom,
    #0000,#000 1deg calc(${angle} - 1deg),#0000 ${angle})`
  const mask = `50% calc(-1*${thiccness})/${g} exclude,50%/${g}`
  zigZagSx.height = height
  zigZagSx.mask = mask

  // Color
  if (color === 'gradient') {
    zigZagSx.background = THEME_GRADIENT
  } else {
    zigZagSx.backgroundColor = color + '.main'
  }

  return zigZagSx
}

/**
 * ZigZag horizontal rule component.
 *
 * @param color
 * @param angle
 * @param size
 * @param thiccness
 * @param sx
 * @return {JSX.Element}
 * @constructor
 */
export const ZigZag = ({
                         color = 'gradient',
                         angle = '90deg',
                         size = '2rem',
                         thiccness = '0.25rem',
                         sx = {},
                       }) => {
  const zigZagSx = calculateZigZagSx(angle, size, thiccness, color)

  return (
    <Box
      sx={{
        my: 2,
        width: '100%',
        ...zigZagSx,
        ...sx
      }}
    />
  )
}

/**
 * Wrap some text with zig zags on either side.
 *
 * @param color
 * @param angle
 * @param size
 * @param thiccness
 * @param sx
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
export const ZigZagContainer = ({
                                  color = 'gradient',
                                  angle = '90deg',
                                  size = '2rem',
                                  thiccness = '0.25rem',
                                  sx = {},
                                  children,
                                }) => {
  const zigZagSx = calculateZigZagSx(angle, size, thiccness, color)

  return (
    <Box
      sx={{
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        my: 2,
        ...sx,
        '&::before, &::after': {
          content: '""',
          width: '100%',
          display: 'inline-block',
          ...zigZagSx,
        },
      }}
    >
      {children}
    </Box>
  )
}