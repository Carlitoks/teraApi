import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export State, { schema } from './model'

const router = new Router()
const { name } = schema.tree

/**
 * @api {post} /states Create state
 * @apiName CreateState
 * @apiGroup State
 * @apiParam name State's name.
 * @apiSuccess {Object} state State's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 State not found.
 */
router.post('/',
  body({ name }),
  create)

/**
 * @api {get} /states Retrieve states
 * @apiName RetrieveStates
 * @apiGroup State
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of states.
 * @apiSuccess {Object[]} rows List of states.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /states/:id Retrieve state
 * @apiName RetrieveState
 * @apiGroup State
 * @apiSuccess {Object} state State's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 State not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /states/:id Update state
 * @apiName UpdateState
 * @apiGroup State
 * @apiParam name State's name.
 * @apiSuccess {Object} state State's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 State not found.
 */
router.put('/:id',
  body({ name }),
  update)

/**
 * @api {delete} /states/:id Delete state
 * @apiName DeleteState
 * @apiGroup State
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 State not found.
 */
router.delete('/:id',
  destroy)

export default router
