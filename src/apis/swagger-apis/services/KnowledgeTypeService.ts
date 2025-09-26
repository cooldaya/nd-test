/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FurionResult_Int64 } from '../models/FurionResult_Int64';
import type { FurionResult_KnowledgeTypeVO } from '../models/FurionResult_KnowledgeTypeVO';
import type { FurionResult_List_Int64 } from '../models/FurionResult_List_Int64';
import type { FurionResult_List_KnowledgeTypeVO } from '../models/FurionResult_List_KnowledgeTypeVO';
import type { FurionResult_SqlSugarPagedList_KnowledgeTypeVO } from '../models/FurionResult_SqlSugarPagedList_KnowledgeTypeVO';
import type { KnowledgeTypeFO } from '../models/KnowledgeTypeFO';
import type { KnowledgeTypePQO } from '../models/KnowledgeTypePQO';
import type { KnowledgeTypeQO } from '../models/KnowledgeTypeQO';
import type { OnlyIdQO } from '../models/OnlyIdQO';
import type { RemoveMulQO } from '../models/RemoveMulQO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class KnowledgeTypeService {
    /**
     * 查询全部数据
     * @returns FurionResult_List_KnowledgeTypeVO OK
     * @throws ApiError
     */
    public static apiKnowledgeTypeAllListPost({
        requestBody,
    }: {
        requestBody?: KnowledgeTypeQO,
    }): CancelablePromise<FurionResult_List_KnowledgeTypeVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-type/all-list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询1个对象
     * @returns FurionResult_KnowledgeTypeVO OK
     * @throws ApiError
     */
    public static apiKnowledgeTypeShowPost({
        requestBody,
    }: {
        requestBody?: KnowledgeTypeQO,
    }): CancelablePromise<FurionResult_KnowledgeTypeVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-type/show',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询全部对象
     * @returns FurionResult_List_KnowledgeTypeVO OK
     * @throws ApiError
     */
    public static apiKnowledgeTypeListPost({
        requestBody,
    }: {
        requestBody?: KnowledgeTypeQO,
    }): CancelablePromise<FurionResult_List_KnowledgeTypeVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-type/list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询分页数据
     * @returns FurionResult_SqlSugarPagedList_KnowledgeTypeVO OK
     * @throws ApiError
     */
    public static apiKnowledgeTypePagedListPost({
        requestBody,
    }: {
        requestBody?: KnowledgeTypePQO,
    }): CancelablePromise<FurionResult_SqlSugarPagedList_KnowledgeTypeVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-type/paged-list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 新增数据
     * @returns FurionResult_KnowledgeTypeVO OK
     * @throws ApiError
     */
    public static apiKnowledgeTypeAddPost({
        requestBody,
    }: {
        requestBody?: KnowledgeTypeFO,
    }): CancelablePromise<FurionResult_KnowledgeTypeVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-type/add',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 编辑数据
     * @returns FurionResult_KnowledgeTypeVO OK
     * @throws ApiError
     */
    public static apiKnowledgeTypeEditPost({
        requestBody,
    }: {
        requestBody?: KnowledgeTypeFO,
    }): CancelablePromise<FurionResult_KnowledgeTypeVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-type/edit',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 删除1条数据
     * @returns FurionResult_Int64 OK
     * @throws ApiError
     */
    public static apiKnowledgeTypeRemovePost({
        requestBody,
    }: {
        requestBody?: OnlyIdQO,
    }): CancelablePromise<FurionResult_Int64> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-type/remove',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 删除多条数据
     * @returns FurionResult_List_Int64 OK
     * @throws ApiError
     */
    public static apiKnowledgeTypeRemoveMulPost({
        requestBody,
    }: {
        requestBody?: RemoveMulQO,
    }): CancelablePromise<FurionResult_List_Int64> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-type/remove-mul',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
}
