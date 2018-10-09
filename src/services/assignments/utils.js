import moment from 'moment'
import { getFromAPI } from '../api'

export function * formatEvent (event) {
  const { employee, project, fromDate, toDate, dedicationPercentage } = event

  const end = moment(toDate).add(1, 'days')
  const color = yield getProjectColor(project)

  return {
    title: `${project} - ${employee}`,
    start: fromDate,
    end: end.format('YYYY-MM-DD'),
    backgroundColor: color,
    borderColor: color,
    employee,
    project,
    dedicationPercentage
  }
}

export function * getProjectColor (projectName) {
  const response = yield getFromAPI('projects')
  const projects = response.data
  const project = projects.find(value => value.projectName === projectName)

  return project.color
}
