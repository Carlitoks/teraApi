import { Rol } from '.'

let rol

beforeEach(async () => {
  rol = await Rol.create({ name: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = rol.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(rol.id)
    expect(view.name).toBe(rol.name)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = rol.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(rol.id)
    expect(view.name).toBe(rol.name)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
