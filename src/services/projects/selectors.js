import { getList } from 'reduken/list'
import { PROJECTS } from '../domains'
import { getDomain } from 'reduken/entities'
import { isLoading } from '../genericHOC'

export const getProjectsFromState = state => {
  const ids = getList(PROJECTS, state)
  const projects = getDomain(PROJECTS, state)

  return ids && Object.keys(projects).length !== 0
    ? ids.map(id => projects[id])
    : []
}

export const isLoadingProjects = isLoading(PROJECTS)
