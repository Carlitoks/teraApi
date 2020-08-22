import { success, notFound } from '../../services/response/'
import { Rol } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Rol.create(body)
    .then((rol) => rol.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Rol.count(query)
    .then(count => Rol.find(query, select, cursor)
      .then((rols) => ({
        count,
        rows: rols.map((rol) => rol.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Rol.findById(params.id)
    .then(notFound(res))
    .then((rol) => rol ? rol.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Rol.findById(params.id)
    .then(notFound(res))
    .then((rol) => rol ? Object.assign(rol, body).save() : null)
    .then((rol) => rol ? rol.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Rol.findById(params.id)
    .then(notFound(res))
    .then((rol) => rol ? rol.remove() : null)
    .then(success(res, 204))
    .catch(next)
