import { Box } from '@mui/material'
import { SectionHeader } from './SectionHeader.jsx'

export const SectionContainer = ({
                                   id,
                                   headerText,
                                   color,
                                   children,
                                 }) => {
  return (
    <Box
      id={id}
    >
      <SectionHeader color={color}>
        {headerText}
      </SectionHeader>

      {children}
    </Box>
  )
}