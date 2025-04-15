import { Box } from '@mui/material'
import { THEME_GRADIENT } from '../Theme.jsx'


/**
 * ZigZag horizontal rule component.
 *
 * Styling based on https://css-shape.com/zig-zag-line/
 *
 * @param color
 * @param angle
 * @param size
 * @param thiccness
 * @param my
 * @param sx
 * @return {JSX.Element}
 * @constructor
 */
export const ZigZag = ({
                             color = 'default',
                             angle = '90deg',
                             size = '2rem',
                             thiccness = '0.25rem',
                             my = 2,
                             sx = {},
                           }) => {
  // Calculations
  const height = `calc(${thiccness} + ${size} / (2 * tan(${angle} / 2)))`
  const g = `${size} repeat-x conic-gradient(from calc(${angle}/-2) at bottom,
    #0000,#000 1deg calc(${angle} - 1deg),#0000 ${angle})`
  const mask = `50% calc(-1*${thiccness})/${g} exclude,50%/${g}`

  // Color
  const colorSx = {}
  if (color === 'gradient') {
    colorSx.background = THEME_GRADIENT
  } else {
    colorSx.backgroundColor = color + '.main'
  }

  // TODO: before/after container version
  return (
    <Box
      sx={{
        my: my,
        height: height,
        width: '100%',
        mask: mask,
        ...colorSx,
        ...sx
      }}
    />
  )
}