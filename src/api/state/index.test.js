import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { State } from '.'

const app = () => express(apiRoot, routes)

let state

beforeEach(async () => {
  state = await State.create({})
})

test('POST /states 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
})

test('GET /states 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /states/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${state.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(state.id)
})

test('GET /states/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /states/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${state.id}`)
    .send({ name: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(state.id)
  expect(body.name).toEqual('test')
})

test('PUT /states/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test' })
  expect(status).toBe(404)
})

test('DELETE /states/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${state.id}`)
  expect(status).toBe(204)
})

test('DELETE /states/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
