import { Resource } from '.'

let resource

beforeEach(async () => {
  resource = await Resource.create({ name: 'test', count: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = resource.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(resource.id)
    expect(view.name).toBe(resource.name)
    expect(view.count).toBe(resource.count)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = resource.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(resource.id)
    expect(view.name).toBe(resource.name)
    expect(view.count).toBe(resource.count)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
