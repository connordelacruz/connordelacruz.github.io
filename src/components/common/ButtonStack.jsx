import { Stack } from '@mui/material'

/**
 * Stack to evenly distribute fullwidth buttons on wide views. Collapses to column on narrow views.
 *
 * @param direction
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
export const ButtonStack = ({
                              direction = {
                                xs: 'column',
                                sm: 'row'
                              },
                              children,
                            }) => {
  return (
    <Stack
      // TODO: better defaults and/or allow overrides
      direction={direction}
      spacing={2}
      sx={{
        width: '100%',
      }}
    >
      {children}
    </Stack>
  )
}