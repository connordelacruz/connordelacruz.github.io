import { Box } from '@mui/material'
import { THEME_GRADIENT } from '../Theme.jsx'

// TODO IDEA 1: multiple components:
//    - make function that handles calculations and returns {height: height, mask: mask}
//    - make un-exported ZigZagRule component that is exactly what we have now
//    - make ZigZagWithChildren, do something similar to Divider
//    - finally, update ZigZag to conditionally render differently based on whether there's kids or not

// TODO IDEA 2: just lump it all together babyyyy
//    - store calculated sx in object
//    - if no children, styles go on root element
//    - if children, styles go before/after, then prob have a wrapper

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
                         color = 'gradient',
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