import { success, notFound } from '../../services/response/'
import { State } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  State.create(body)
    .then((state) => state.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  State.count(query)
    .then(count => State.find(query, select, cursor)
      .then((states) => ({
        count,
        rows: states.map((state) => state.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  State.findById(params.id)
    .then(notFound(res))
    .then((state) => state ? state.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  State.findById(params.id)
    .then(notFound(res))
    .then((state) => state ? Object.assign(state, body).save() : null)
    .then((state) => state ? state.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  State.findById(params.id)
    .then(notFound(res))
    .then((state) => state ? state.remove() : null)
    .then(success(res, 204))
    .catch(next)
