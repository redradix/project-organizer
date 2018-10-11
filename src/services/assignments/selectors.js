import { getList } from 'reduken/list'
import { getDomain } from 'reduken/entities'
import { isLoading } from '../genericHOC'
import { ASSIGNMENTS } from '../domains'

export const getAssignmentsFromState = state => {
  const ids = getList(ASSIGNMENTS, state)
  const assignments = getDomain(ASSIGNMENTS, state)

  return ids && Object.keys(assignments).length !== 0
    ? ids.map(id => assignments[id])
    : []
}

export const isLoadingAssignments = isLoading(ASSIGNMENTS)

export const findAssignmentById = (state, id) => {
  const assignments = getDomain(ASSIGNMENTS, state)
  return assignments[id]
}
