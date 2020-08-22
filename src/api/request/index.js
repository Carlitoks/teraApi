import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Request, { schema } from './model'

const router = new Router()
const { userId, creationDate, expirationDate } = schema.tree

/**
 * @api {post} /requests Create request
 * @apiName CreateRequest
 * @apiGroup Request
 * @apiParam userId Request's userId.
 * @apiParam creationDate Request's creationDate.
 * @apiParam expirationDate Request's expirationDate.
 * @apiSuccess {Object} request Request's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Request not found.
 */
router.post('/',
  body({ userId, creationDate, expirationDate }),
  create)

/**
 * @api {get} /requests Retrieve requests
 * @apiName RetrieveRequests
 * @apiGroup Request
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of requests.
 * @apiSuccess {Object[]} rows List of requests.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /requests/:id Retrieve request
 * @apiName RetrieveRequest
 * @apiGroup Request
 * @apiSuccess {Object} request Request's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Request not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /requests/:id Update request
 * @apiName UpdateRequest
 * @apiGroup Request
 * @apiParam userId Request's userId.
 * @apiParam creationDate Request's creationDate.
 * @apiParam expirationDate Request's expirationDate.
 * @apiSuccess {Object} request Request's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Request not found.
 */
router.put('/:id',
  body({ userId, creationDate, expirationDate }),
  update)

/**
 * @api {delete} /requests/:id Delete request
 * @apiName DeleteRequest
 * @apiGroup Request
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Request not found.
 */
router.delete('/:id',
  destroy)

export default router
