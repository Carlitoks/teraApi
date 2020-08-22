import { State } from '.'

let state

beforeEach(async () => {
  state = await State.create({ name: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = state.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(state.id)
    expect(view.name).toBe(state.name)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = state.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(state.id)
    expect(view.name).toBe(state.name)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
