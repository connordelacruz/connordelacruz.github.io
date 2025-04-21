import { Box, useTheme } from '@mui/material'
import { SectionHeader } from './SectionHeader.jsx'
import { rgb2rgba } from '../Theme.jsx'

/**
 * Container element for a content section.
 *
 * @param id
 * @param headerText
 * @param color
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
export const SectionContainer = ({
                                   id,
                                   headerText,
                                   color,
                                   children,
                                 }) => {
  // Apply transparency to selection color
  const theme = useTheme()
  const selectionColor = rgb2rgba(theme.palette[color].dark, 0.5)
  return (
    <Box
      id={id}
      sx={{
        '*::selection': {
          background: selectionColor,
        },
      }}
    >
      <SectionHeader color={color}>
        {headerText}
      </SectionHeader>

      {children}
    </Box>
  )
}