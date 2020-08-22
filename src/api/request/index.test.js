import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Request } from '.'

const app = () => express(apiRoot, routes)

let request

beforeEach(async () => {
  request = await Request.create({})
})

test('POST /requests 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ userId: 'test', creationDate: 'test', expirationDate: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.userId).toEqual('test')
  expect(body.creationDate).toEqual('test')
  expect(body.expirationDate).toEqual('test')
})

test('GET /requests 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /requests/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${request.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(request.id)
})

test('GET /requests/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /requests/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${request.id}`)
    .send({ userId: 'test', creationDate: 'test', expirationDate: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(request.id)
  expect(body.userId).toEqual('test')
  expect(body.creationDate).toEqual('test')
  expect(body.expirationDate).toEqual('test')
})

test('PUT /requests/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ userId: 'test', creationDate: 'test', expirationDate: 'test' })
  expect(status).toBe(404)
})

test('DELETE /requests/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${request.id}`)
  expect(status).toBe(204)
})

test('DELETE /requests/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
