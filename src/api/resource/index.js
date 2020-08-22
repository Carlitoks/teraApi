import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Resource, { schema } from './model'

const router = new Router()
const { name, count } = schema.tree

/**
 * @api {post} /resources Create resource
 * @apiName CreateResource
 * @apiGroup Resource
 * @apiParam name Resource's name.
 * @apiParam count Resource's count.
 * @apiSuccess {Object} resource Resource's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Resource not found.
 */
router.post('/',
  body({ name, count }),
  create)

/**
 * @api {get} /resources Retrieve resources
 * @apiName RetrieveResources
 * @apiGroup Resource
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of resources.
 * @apiSuccess {Object[]} rows List of resources.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /resources/:id Retrieve resource
 * @apiName RetrieveResource
 * @apiGroup Resource
 * @apiSuccess {Object} resource Resource's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Resource not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /resources/:id Update resource
 * @apiName UpdateResource
 * @apiGroup Resource
 * @apiParam name Resource's name.
 * @apiParam count Resource's count.
 * @apiSuccess {Object} resource Resource's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Resource not found.
 */
router.put('/:id',
  body({ name, count }),
  update)

/**
 * @api {delete} /resources/:id Delete resource
 * @apiName DeleteResource
 * @apiGroup Resource
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Resource not found.
 */
router.delete('/:id',
  destroy)

export default router
