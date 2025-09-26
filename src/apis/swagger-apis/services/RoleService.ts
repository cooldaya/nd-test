/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FurionResult_Int64 } from '../models/FurionResult_Int64';
import type { FurionResult_List_Int64 } from '../models/FurionResult_List_Int64';
import type { FurionResult_List_RoleVO } from '../models/FurionResult_List_RoleVO';
import type { FurionResult_RoleVO } from '../models/FurionResult_RoleVO';
import type { FurionResult_SqlSugarPagedList_RoleVO } from '../models/FurionResult_SqlSugarPagedList_RoleVO';
import type { OnlyIdQO } from '../models/OnlyIdQO';
import type { RemoveMulQO } from '../models/RemoveMulQO';
import type { RoleAssignResourcesQO } from '../models/RoleAssignResourcesQO';
import type { RoleFO } from '../models/RoleFO';
import type { RolePQO } from '../models/RolePQO';
import type { RoleQO } from '../models/RoleQO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RoleService {
    /**
     * 角色分配资源
     * @returns any OK
     * @throws ApiError
     */
    public static apiRoleAssignResourcePost({
        requestBody,
    }: {
        requestBody?: RoleAssignResourcesQO,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/role/assign-resource',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询1个对象
     * @returns FurionResult_RoleVO OK
     * @throws ApiError
     */
    public static apiRoleShowPost({
        requestBody,
    }: {
        requestBody?: RoleQO,
    }): CancelablePromise<FurionResult_RoleVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/role/show',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询全部对象
     * @returns FurionResult_List_RoleVO OK
     * @throws ApiError
     */
    public static apiRoleListPost({
        requestBody,
    }: {
        requestBody?: RoleQO,
    }): CancelablePromise<FurionResult_List_RoleVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/role/list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询分页数据
     * @returns FurionResult_SqlSugarPagedList_RoleVO OK
     * @throws ApiError
     */
    public static apiRolePagedListPost({
        requestBody,
    }: {
        requestBody?: RolePQO,
    }): CancelablePromise<FurionResult_SqlSugarPagedList_RoleVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/role/paged-list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 新增数据
     * @returns FurionResult_RoleVO OK
     * @throws ApiError
     */
    public static apiRoleAddPost({
        requestBody,
    }: {
        requestBody?: RoleFO,
    }): CancelablePromise<FurionResult_RoleVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/role/add',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 编辑数据
     * @returns FurionResult_RoleVO OK
     * @throws ApiError
     */
    public static apiRoleEditPost({
        requestBody,
    }: {
        requestBody?: RoleFO,
    }): CancelablePromise<FurionResult_RoleVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/role/edit',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 删除1条数据
     * @returns FurionResult_Int64 OK
     * @throws ApiError
     */
    public static apiRoleRemovePost({
        requestBody,
    }: {
        requestBody?: OnlyIdQO,
    }): CancelablePromise<FurionResult_Int64> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/role/remove',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 删除多条数据
     * @returns FurionResult_List_Int64 OK
     * @throws ApiError
     */
    public static apiRoleRemoveMulPost({
        requestBody,
    }: {
        requestBody?: RemoveMulQO,
    }): CancelablePromise<FurionResult_List_Int64> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/role/remove-mul',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
}
