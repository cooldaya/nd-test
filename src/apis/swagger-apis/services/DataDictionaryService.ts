/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataDictionaryFO } from '../models/DataDictionaryFO';
import type { DataDictionaryPQO } from '../models/DataDictionaryPQO';
import type { DataDictionaryQO } from '../models/DataDictionaryQO';
import type { DdTypedataQO } from '../models/DdTypedataQO';
import type { FurionResult_DataDictionaryVO } from '../models/FurionResult_DataDictionaryVO';
import type { FurionResult_List_DataDictionaryVO } from '../models/FurionResult_List_DataDictionaryVO';
import type { FurionResult_List_Int64 } from '../models/FurionResult_List_Int64';
import type { FurionResult_List_TreeNode } from '../models/FurionResult_List_TreeNode';
import type { FurionResult_SqlSugarPagedList_DataDictionaryVO } from '../models/FurionResult_SqlSugarPagedList_DataDictionaryVO';
import type { OnlyIdQO } from '../models/OnlyIdQO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DataDictionaryService {
    /**
     * 新增数据
     * @returns FurionResult_DataDictionaryVO OK
     * @throws ApiError
     */
    public static apiDataDictionaryAddPost({
        requestBody,
    }: {
        requestBody?: DataDictionaryFO,
    }): CancelablePromise<FurionResult_DataDictionaryVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data-dictionary/add',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 编辑数据
     * @returns FurionResult_DataDictionaryVO OK
     * @throws ApiError
     */
    public static apiDataDictionaryEditPost({
        requestBody,
    }: {
        requestBody?: DataDictionaryFO,
    }): CancelablePromise<FurionResult_DataDictionaryVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data-dictionary/edit',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 删除数据
     * @returns FurionResult_List_Int64 OK
     * @throws ApiError
     */
    public static apiDataDictionaryRemovePost({
        requestBody,
    }: {
        requestBody?: OnlyIdQO,
    }): CancelablePromise<FurionResult_List_Int64> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data-dictionary/remove',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 获取树形结构数据
     * @returns FurionResult_List_TreeNode OK
     * @throws ApiError
     */
    public static apiDataDictionaryTreedataPost({
        requestBody,
    }: {
        requestBody?: DataDictionaryQO,
    }): CancelablePromise<FurionResult_List_TreeNode> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data-dictionary/treedata',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 按父级编码获取数据
     * @returns FurionResult_List_TreeNode OK
     * @throws ApiError
     */
    public static apiDataDictionaryTypedataPost({
        requestBody,
    }: {
        requestBody?: DdTypedataQO,
    }): CancelablePromise<FurionResult_List_TreeNode> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data-dictionary/typedata',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询1个对象
     * @returns FurionResult_DataDictionaryVO OK
     * @throws ApiError
     */
    public static apiDataDictionaryShowPost({
        requestBody,
    }: {
        requestBody?: DataDictionaryQO,
    }): CancelablePromise<FurionResult_DataDictionaryVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data-dictionary/show',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询全部对象
     * @returns FurionResult_List_DataDictionaryVO OK
     * @throws ApiError
     */
    public static apiDataDictionaryListPost({
        requestBody,
    }: {
        requestBody?: DataDictionaryQO,
    }): CancelablePromise<FurionResult_List_DataDictionaryVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data-dictionary/list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询分页数据
     * @returns FurionResult_SqlSugarPagedList_DataDictionaryVO OK
     * @throws ApiError
     */
    public static apiDataDictionaryPagedListPost({
        requestBody,
    }: {
        requestBody?: DataDictionaryPQO,
    }): CancelablePromise<FurionResult_SqlSugarPagedList_DataDictionaryVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data-dictionary/paged-list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
}
