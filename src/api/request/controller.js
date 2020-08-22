import { success, notFound } from '../../services/response/'
import { Request } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Request.create(body)
    .then((request) => request.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Request.count(query)
    .then(count => Request.find(query, select, cursor)
      .then((requests) => ({
        count,
        rows: requests.map((request) => request.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Request.findById(params.id)
    .then(notFound(res))
    .then((request) => request ? request.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Request.findById(params.id)
    .then(notFound(res))
    .then((request) => request ? Object.assign(request, body).save() : null)
    .then((request) => request ? request.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Request.findById(params.id)
    .then(notFound(res))
    .then((request) => request ? request.remove() : null)
    .then(success(res, 204))
    .catch(next)
