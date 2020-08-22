import { Router } from 'express'
import user from './user'
import rol from './rol'
import resource from './resource'
import request from './request'
import resourceRequest from './resource_request'
import state from './state'

const router = new Router()

router.use('/users', user)
router.use('/rols', rol)
router.use('/resources', resource)
router.use('/requests', request)
router.use('/resources_requests', resourceRequest)
router.use('/states', state)

/**
 * @apiDefine master Master access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine admin Admin access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine user User access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine listParams
 * @apiParam {String} [q] Query to search.
 * @apiParam {Number{1..30}} [page=1] Page number.
 * @apiParam {Number{1..100}} [limit=30] Amount of returned items.
 * @apiParam {String[]} [sort=-createdAt] Order of returned items.
 * @apiParam {String[]} [fields] Fields to be returned.
 */

export default router
