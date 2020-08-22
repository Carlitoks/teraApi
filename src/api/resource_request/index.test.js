import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { ResourceRequest } from '.'

const app = () => express(apiRoot, routes)

let resourceRequest

beforeEach(async () => {
  resourceRequest = await ResourceRequest.create({})
})

test('POST /resources_requests 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ resourceId: 'test', requestId: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.resourceId).toEqual('test')
  expect(body.requestId).toEqual('test')
})

test('GET /resources_requests 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /resources_requests/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${resourceRequest.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(resourceRequest.id)
})

test('GET /resources_requests/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /resources_requests/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${resourceRequest.id}`)
    .send({ resourceId: 'test', requestId: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(resourceRequest.id)
  expect(body.resourceId).toEqual('test')
  expect(body.requestId).toEqual('test')
})

test('PUT /resources_requests/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ resourceId: 'test', requestId: 'test' })
  expect(status).toBe(404)
})

test('DELETE /resources_requests/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${resourceRequest.id}`)
  expect(status).toBe(204)
})

test('DELETE /resources_requests/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
