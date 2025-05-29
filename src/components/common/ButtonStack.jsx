import { Stack } from '@mui/material'

/**
 * Stack to evenly distribute fullwidth buttons on wide views. Collapses to column on narrow views.
 *
 * @param direction
 * @param sx
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
export const ButtonStack = ({
                              direction = {
                                xs: 'column',
                                sm: 'row'
                              },
                              sx = {},
                              children,
                            }) => {
  return (
    <Stack
      direction={direction}
      spacing={2}
      sx={{
        width: '100%',
        ...sx,
      }}
    >
      {children}
    </Stack>
  )
}