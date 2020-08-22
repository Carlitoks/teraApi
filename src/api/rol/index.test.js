import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Rol } from '.'

const app = () => express(apiRoot, routes)

let rol

beforeEach(async () => {
  rol = await Rol.create({})
})

test('POST /rols 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
})

test('GET /rols 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /rols/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${rol.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(rol.id)
})

test('GET /rols/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /rols/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${rol.id}`)
    .send({ name: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(rol.id)
  expect(body.name).toEqual('test')
})

test('PUT /rols/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test' })
  expect(status).toBe(404)
})

test('DELETE /rols/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${rol.id}`)
  expect(status).toBe(204)
})

test('DELETE /rols/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
