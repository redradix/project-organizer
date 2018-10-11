import axios from 'axios'
import { put, call } from 'redux-saga/effects'
import { lpush, lreplace, lrem } from 'reduken/list'
import { hset } from 'reduken/hash'
import { normalize } from 'normalizr'
import schemas from './schemas'
import {
  mergeEntities,
  update as updateEntity,
  removeOne
} from 'reduken/entities'

const baseURL = 'http://localhost:5000'

// Methods for loading control
function * startRequest (domain) {
  yield put(hset(domain, 'loading', true))
}

function * endRequest (domain) {
  yield put(hset(domain, 'loading', false))
}

// API METHODS
const fetchAll = (domain, schema) =>
  function * () {
    yield call(startRequest, domain)
    const response = yield axios.get(`${baseURL}/${domain}`)
    const data = response.data

    const { entities, result } = normalize(data, [schema])

    yield put(lreplace(domain, result))
    yield put(mergeEntities(entities))
    yield call(endRequest, domain)
  }

const create = (domain, schema) =>
  function * (object) {
    yield call(startRequest, domain)
    const response = yield axios.post(`${baseURL}/${domain}`, object)
    const data = response.data

    const { entities, result } = normalize(data, schema)

    yield put(lpush(domain, result))
    yield put(updateEntity(domain, data.id, entities[domain][data.id]))
    yield call(endRequest, domain)
  }

const update = (domain, schema) =>
  function * (object) {
    yield call(startRequest, domain)
    const response = yield axios.put(
      `${baseURL}/${domain}/${object.id}`,
      object
    )
    const data = response.data

    const { entities } = normalize(data, schema)

    yield put(updateEntity(domain, data.id, entities))
    yield call(endRequest, domain)
  }

const remove = domain =>
  function * (id) {
    yield call(startRequest, domain)
    const response = yield axios.delete(`${baseURL}/${domain}/${id}`)
    const data = response.data

    yield put(removeOne(domain, data.id))
    yield put(lrem(domain, data.id))
    yield call(endRequest, domain)
  }

// Final Constructor (fake class)
export const APIClient = domain => {
  const schema = schemas[domain]

  return {
    fetchAll: fetchAll(domain, schema),
    create: create(domain, schema),
    update: update(domain, schema),
    remove: remove(domain)
  }
}
