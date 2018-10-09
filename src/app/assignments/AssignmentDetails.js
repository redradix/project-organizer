import { compose, withProps } from 'recompose'
import moment from 'moment'
import AssignmentDetails from '../../ui/views/AssignmentsDetails'
import {
  withSelectedAssignment,
  withAssignments
} from '../../services/assignments/hocs'

const buildInitialValues = event => {
  const { start, end, employee, project, dedicationPercentage, id } = event

  const toDate = moment(end)
    .subtract(1, 'days')
    .format('YYYY-MM-DD')

  return {
    id,
    employee,
    project,
    dedicationPercentage,
    fromDate: start,
    toDate
  }
}

export default compose(
  withAssignments(),
  withProps({ buildInitialValues }),
  withSelectedAssignment()
)(AssignmentDetails)
