import { User } from '.'

let user

beforeEach(async () => {
  user = await User.create({ name: 'test', last: 'test', img: 'test', rol: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = user.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(user.id)
    expect(view.name).toBe(user.name)
    expect(view.last).toBe(user.last)
    expect(view.img).toBe(user.img)
    expect(view.rol).toBe(user.rol)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = user.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(user.id)
    expect(view.name).toBe(user.name)
    expect(view.last).toBe(user.last)
    expect(view.img).toBe(user.img)
    expect(view.rol).toBe(user.rol)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
