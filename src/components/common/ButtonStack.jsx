import { Stack } from '@mui/material'

/**
 * Stack to evenly distribute fullwidth buttons on wide views. Collapses to column on narrow views.
 *
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
export const ButtonStack = ({
                              children,
                            }) => {
  return (
    <Stack
      direction={{xs: 'column', md: 'row'}}
      spacing={2}
      sx={{
        width: '100%',
      }}
    >
      {children}
    </Stack>
  )
}