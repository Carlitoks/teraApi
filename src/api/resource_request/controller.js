import { success, notFound } from '../../services/response/'
import { ResourceRequest } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  ResourceRequest.create(body)
    .then((resourceRequest) => resourceRequest.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  ResourceRequest.count(query)
    .then(count => ResourceRequest.find(query, select, cursor)
      .then((resourceRequests) => ({
        count,
        rows: resourceRequests.map((resourceRequest) => resourceRequest.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  ResourceRequest.findById(params.id)
    .then(notFound(res))
    .then((resourceRequest) => resourceRequest ? resourceRequest.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  ResourceRequest.findById(params.id)
    .then(notFound(res))
    .then((resourceRequest) => resourceRequest ? Object.assign(resourceRequest, body).save() : null)
    .then((resourceRequest) => resourceRequest ? resourceRequest.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  ResourceRequest.findById(params.id)
    .then(notFound(res))
    .then((resourceRequest) => resourceRequest ? resourceRequest.remove() : null)
    .then(success(res, 204))
    .catch(next)
