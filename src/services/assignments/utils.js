import moment from 'moment'

export function formatAssignment (assignment, projects) {
  const {
    employee,
    project,
    fromDate,
    toDate,
    dedicationPercentage
  } = assignment

  const end = moment(toDate).add(1, 'days')
  const color = getProjectColor(project, projects)

  const result = {
    title: `${project} - ${employee}`,
    start: fromDate,
    end: end.format('YYYY-MM-DD'),
    backgroundColor: color,
    borderColor: color,
    employee,
    project,
    dedicationPercentage
  }

  if (assignment.id) {
    result.id = assignment.id
  }

  return result
}

export function getProjectColor (projectName, projects) {
  const project = projects.find(value => value.projectName === projectName)

  return project.color
}
