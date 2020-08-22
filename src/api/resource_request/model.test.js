import { ResourceRequest } from '.'

let resourceRequest

beforeEach(async () => {
  resourceRequest = await ResourceRequest.create({ resourceId: 'test', requestId: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = resourceRequest.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(resourceRequest.id)
    expect(view.resourceId).toBe(resourceRequest.resourceId)
    expect(view.requestId).toBe(resourceRequest.requestId)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = resourceRequest.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(resourceRequest.id)
    expect(view.resourceId).toBe(resourceRequest.resourceId)
    expect(view.requestId).toBe(resourceRequest.requestId)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
