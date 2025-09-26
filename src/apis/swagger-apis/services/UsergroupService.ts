/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FurionResult_Int64 } from '../models/FurionResult_Int64';
import type { FurionResult_List_Int64 } from '../models/FurionResult_List_Int64';
import type { FurionResult_List_RoleVO } from '../models/FurionResult_List_RoleVO';
import type { FurionResult_List_UsergroupVO } from '../models/FurionResult_List_UsergroupVO';
import type { FurionResult_SqlSugarPagedList_UsergroupVO } from '../models/FurionResult_SqlSugarPagedList_UsergroupVO';
import type { FurionResult_UsergroupVO } from '../models/FurionResult_UsergroupVO';
import type { OnlyIdQO } from '../models/OnlyIdQO';
import type { RemoveMulQO } from '../models/RemoveMulQO';
import type { UsergroupAssignRolesQO } from '../models/UsergroupAssignRolesQO';
import type { UsergroupFO } from '../models/UsergroupFO';
import type { UsergroupPQO } from '../models/UsergroupPQO';
import type { UsergroupQO } from '../models/UsergroupQO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsergroupService {
    /**
     * 根据用户组id查询角色列表
     * @returns FurionResult_List_RoleVO OK
     * @throws ApiError
     */
    public static apiUsergroupGetRolesPost({
        requestBody,
    }: {
        requestBody?: OnlyIdQO,
    }): CancelablePromise<FurionResult_List_RoleVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/usergroup/get-roles',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 分配角色
     * @returns any OK
     * @throws ApiError
     */
    public static apiUsergroupAssignRolesPost({
        requestBody,
    }: {
        requestBody?: UsergroupAssignRolesQO,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/usergroup/assign-roles',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询1个对象
     * @returns FurionResult_UsergroupVO OK
     * @throws ApiError
     */
    public static apiUsergroupShowPost({
        requestBody,
    }: {
        requestBody?: UsergroupQO,
    }): CancelablePromise<FurionResult_UsergroupVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/usergroup/show',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询全部对象
     * @returns FurionResult_List_UsergroupVO OK
     * @throws ApiError
     */
    public static apiUsergroupListPost({
        requestBody,
    }: {
        requestBody?: UsergroupQO,
    }): CancelablePromise<FurionResult_List_UsergroupVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/usergroup/list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询分页数据
     * @returns FurionResult_SqlSugarPagedList_UsergroupVO OK
     * @throws ApiError
     */
    public static apiUsergroupPagedListPost({
        requestBody,
    }: {
        requestBody?: UsergroupPQO,
    }): CancelablePromise<FurionResult_SqlSugarPagedList_UsergroupVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/usergroup/paged-list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 新增数据
     * @returns FurionResult_UsergroupVO OK
     * @throws ApiError
     */
    public static apiUsergroupAddPost({
        requestBody,
    }: {
        requestBody?: UsergroupFO,
    }): CancelablePromise<FurionResult_UsergroupVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/usergroup/add',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 编辑数据
     * @returns FurionResult_UsergroupVO OK
     * @throws ApiError
     */
    public static apiUsergroupEditPost({
        requestBody,
    }: {
        requestBody?: UsergroupFO,
    }): CancelablePromise<FurionResult_UsergroupVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/usergroup/edit',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 删除1条数据
     * @returns FurionResult_Int64 OK
     * @throws ApiError
     */
    public static apiUsergroupRemovePost({
        requestBody,
    }: {
        requestBody?: OnlyIdQO,
    }): CancelablePromise<FurionResult_Int64> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/usergroup/remove',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 删除多条数据
     * @returns FurionResult_List_Int64 OK
     * @throws ApiError
     */
    public static apiUsergroupRemoveMulPost({
        requestBody,
    }: {
        requestBody?: RemoveMulQO,
    }): CancelablePromise<FurionResult_List_Int64> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/usergroup/remove-mul',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
}
