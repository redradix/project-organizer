import { takeEvery, put, call } from 'redux-saga/effects'
import moment from 'moment'
import { getFromAPI, createEvent } from '../../../api'

function * formatEvent (event) {
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

function * getProjectColor (projectName) {
  const response = yield getFromAPI('projects')
  const projects = response.data
  const project = projects.find(value => value.projectName === projectName)

  return project.color
}

function * addEventWorker (action) {
  try {
    const formatedEvent = yield call(formatEvent, action.payload)
    const response = yield call(createEvent, formatedEvent)

    yield put({ type: 'ADD_EVENT', event: response.data })
  } catch (err) {
    console.log(err)
  }
}

function * addEventSaga () {
  yield takeEvery('ADD_EVENT_REQUEST', addEventWorker)
}

export default addEventSaga
