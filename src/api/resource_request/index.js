import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export ResourceRequest, { schema } from './model'

const router = new Router()
const { resourceId, requestId } = schema.tree

/**
 * @api {post} /resources_requests Create resource request
 * @apiName CreateResourceRequest
 * @apiGroup ResourceRequest
 * @apiParam resourceId Resource request's resourceId.
 * @apiParam requestId Resource request's requestId.
 * @apiSuccess {Object} resourceRequest Resource request's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Resource request not found.
 */
router.post('/',
  body({ resourceId, requestId }),
  create)

/**
 * @api {get} /resources_requests Retrieve resource requests
 * @apiName RetrieveResourceRequests
 * @apiGroup ResourceRequest
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of resource requests.
 * @apiSuccess {Object[]} rows List of resource requests.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /resources_requests/:id Retrieve resource request
 * @apiName RetrieveResourceRequest
 * @apiGroup ResourceRequest
 * @apiSuccess {Object} resourceRequest Resource request's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Resource request not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /resources_requests/:id Update resource request
 * @apiName UpdateResourceRequest
 * @apiGroup ResourceRequest
 * @apiParam resourceId Resource request's resourceId.
 * @apiParam requestId Resource request's requestId.
 * @apiSuccess {Object} resourceRequest Resource request's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Resource request not found.
 */
router.put('/:id',
  body({ resourceId, requestId }),
  update)

/**
 * @api {delete} /resources_requests/:id Delete resource request
 * @apiName DeleteResourceRequest
 * @apiGroup ResourceRequest
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Resource request not found.
 */
router.delete('/:id',
  destroy)

export default router
