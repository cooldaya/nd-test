/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FurionResult_List_Int64 } from '../models/FurionResult_List_Int64';
import type { FurionResult_List_ResourceVO } from '../models/FurionResult_List_ResourceVO';
import type { FurionResult_List_String } from '../models/FurionResult_List_String';
import type { FurionResult_List_TreeNode } from '../models/FurionResult_List_TreeNode';
import type { FurionResult_ResourceVO } from '../models/FurionResult_ResourceVO';
import type { FurionResult_SqlSugarPagedList_ResourceVO } from '../models/FurionResult_SqlSugarPagedList_ResourceVO';
import type { OnlyIdQO } from '../models/OnlyIdQO';
import type { ResourceForm } from '../models/ResourceForm';
import type { ResourcePQO } from '../models/ResourcePQO';
import type { ResourceQO } from '../models/ResourceQO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ResourceService {
    /**
     * 新增数据
     * @returns FurionResult_ResourceVO OK
     * @throws ApiError
     */
    public static apiResourceAddPost({
        requestBody,
    }: {
        requestBody?: ResourceForm,
    }): CancelablePromise<FurionResult_ResourceVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/resource/add',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 编辑数据
     * @returns FurionResult_ResourceVO OK
     * @throws ApiError
     */
    public static apiResourceEditPost({
        requestBody,
    }: {
        requestBody?: ResourceForm,
    }): CancelablePromise<FurionResult_ResourceVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/resource/edit',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 删除数据
     * @returns FurionResult_List_Int64 OK
     * @throws ApiError
     */
    public static apiResourceRemovePost({
        requestBody,
    }: {
        requestBody?: OnlyIdQO,
    }): CancelablePromise<FurionResult_List_Int64> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/resource/remove',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 获取树形结构数据
     * @returns FurionResult_List_TreeNode OK
     * @throws ApiError
     */
    public static apiResourceTreedataPost({
        requestBody,
    }: {
        requestBody?: ResourceQO,
    }): CancelablePromise<FurionResult_List_TreeNode> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/resource/treedata',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 根据角色查询资源列表
     * @returns FurionResult_List_Int64 OK
     * @throws ApiError
     */
    public static apiResourceGetResourcesPost({
        requestBody,
    }: {
        requestBody?: OnlyIdQO,
    }): CancelablePromise<FurionResult_List_Int64> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/resource/get-resources',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 获取所有接口路径
     * @returns FurionResult_List_String OK
     * @throws ApiError
     */
    public static apiResourceRoutePathsPost(): CancelablePromise<FurionResult_List_String> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/resource/route-paths',
        });
    }
    /**
     * 查询1个对象
     * @returns FurionResult_ResourceVO OK
     * @throws ApiError
     */
    public static apiResourceShowPost({
        requestBody,
    }: {
        requestBody?: ResourceQO,
    }): CancelablePromise<FurionResult_ResourceVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/resource/show',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询全部对象
     * @returns FurionResult_List_ResourceVO OK
     * @throws ApiError
     */
    public static apiResourceListPost({
        requestBody,
    }: {
        requestBody?: ResourceQO,
    }): CancelablePromise<FurionResult_List_ResourceVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/resource/list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询分页数据
     * @returns FurionResult_SqlSugarPagedList_ResourceVO OK
     * @throws ApiError
     */
    public static apiResourcePagedListPost({
        requestBody,
    }: {
        requestBody?: ResourcePQO,
    }): CancelablePromise<FurionResult_SqlSugarPagedList_ResourceVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/resource/paged-list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
}
