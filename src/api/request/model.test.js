import { Request } from '.'

let request

beforeEach(async () => {
  request = await Request.create({ userId: 'test', creationDate: 'test', expirationDate: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = request.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(request.id)
    expect(view.userId).toBe(request.userId)
    expect(view.creationDate).toBe(request.creationDate)
    expect(view.expirationDate).toBe(request.expirationDate)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = request.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(request.id)
    expect(view.userId).toBe(request.userId)
    expect(view.creationDate).toBe(request.creationDate)
    expect(view.expirationDate).toBe(request.expirationDate)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
