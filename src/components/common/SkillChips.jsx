import { Chip } from '@mui/material'

/**
 * Component used to highlight a skill.
 *
 * @param skill
 * @param color
 * @param sx
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export const SkillChip = ({
                            skill,
                            color = 'default',
                            sx = {},
                            ...props
                          }) => {
  return (
    <Chip
      label={skill}
      variant="outlined"
      sx={{
        mb: 1,
        mr: 0.5,
        // Remove right margin on final chip
        '&:last-child': {
          mr: 0,
        },
        borderWidth: 2,
        borderColor: color + '.main',
        fontWeight: 500,
        fontSize: '1rem',
        ...sx,
      }}
      {...props}
    />
  )
}

/**
 * List of inline SkillChip components.
 *
 * @param skills
 * @param color
 * @param sx
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export const SkillChips = ({
                             skills,
                             color,
                             sx = {},
                             ...props
                           }) => {
  return (
    <>
      {skills.map((skill, i) =>
        <SkillChip
          key={i}
          skill={skill}
          color={color}
          sx={{...sx}}
          {...props}
        />
      )}
    </>
  )
}