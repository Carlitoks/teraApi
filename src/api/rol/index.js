import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Rol, { schema } from './model'

const router = new Router()
const { name } = schema.tree

/**
 * @api {post} /rols Create rol
 * @apiName CreateRol
 * @apiGroup Rol
 * @apiParam name Rol's name.
 * @apiSuccess {Object} rol Rol's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Rol not found.
 */
router.post('/',
  body({ name }),
  create)

/**
 * @api {get} /rols Retrieve rols
 * @apiName RetrieveRols
 * @apiGroup Rol
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of rols.
 * @apiSuccess {Object[]} rows List of rols.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /rols/:id Retrieve rol
 * @apiName RetrieveRol
 * @apiGroup Rol
 * @apiSuccess {Object} rol Rol's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Rol not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /rols/:id Update rol
 * @apiName UpdateRol
 * @apiGroup Rol
 * @apiParam name Rol's name.
 * @apiSuccess {Object} rol Rol's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Rol not found.
 */
router.put('/:id',
  body({ name }),
  update)

/**
 * @api {delete} /rols/:id Delete rol
 * @apiName DeleteRol
 * @apiGroup Rol
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Rol not found.
 */
router.delete('/:id',
  destroy)

export default router
