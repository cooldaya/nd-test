/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FurionResult_Int64 } from '../models/FurionResult_Int64';
import type { FurionResult_List_Int64 } from '../models/FurionResult_List_Int64';
import type { FurionResult_List_LogerrorVO } from '../models/FurionResult_List_LogerrorVO';
import type { FurionResult_LogerrorVO } from '../models/FurionResult_LogerrorVO';
import type { FurionResult_SqlSugarPagedList_LogerrorVO } from '../models/FurionResult_SqlSugarPagedList_LogerrorVO';
import type { LogerrorFO } from '../models/LogerrorFO';
import type { LogerrorPQO } from '../models/LogerrorPQO';
import type { LogerrorQO } from '../models/LogerrorQO';
import type { OnlyIdQO } from '../models/OnlyIdQO';
import type { RemoveMulQO } from '../models/RemoveMulQO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LogerrorService {
    /**
     * 查询1个对象
     * @returns FurionResult_LogerrorVO OK
     * @throws ApiError
     */
    public static apiLogerrorShowPost({
        requestBody,
    }: {
        requestBody?: LogerrorQO,
    }): CancelablePromise<FurionResult_LogerrorVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/logerror/show',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询全部对象
     * @returns FurionResult_List_LogerrorVO OK
     * @throws ApiError
     */
    public static apiLogerrorListPost({
        requestBody,
    }: {
        requestBody?: LogerrorQO,
    }): CancelablePromise<FurionResult_List_LogerrorVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/logerror/list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询分页数据
     * @returns FurionResult_SqlSugarPagedList_LogerrorVO OK
     * @throws ApiError
     */
    public static apiLogerrorPagedListPost({
        requestBody,
    }: {
        requestBody?: LogerrorPQO,
    }): CancelablePromise<FurionResult_SqlSugarPagedList_LogerrorVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/logerror/paged-list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 新增数据
     * @returns FurionResult_LogerrorVO OK
     * @throws ApiError
     */
    public static apiLogerrorAddPost({
        requestBody,
    }: {
        requestBody?: LogerrorFO,
    }): CancelablePromise<FurionResult_LogerrorVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/logerror/add',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 编辑数据
     * @returns FurionResult_LogerrorVO OK
     * @throws ApiError
     */
    public static apiLogerrorEditPost({
        requestBody,
    }: {
        requestBody?: LogerrorFO,
    }): CancelablePromise<FurionResult_LogerrorVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/logerror/edit',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 删除1条数据
     * @returns FurionResult_Int64 OK
     * @throws ApiError
     */
    public static apiLogerrorRemovePost({
        requestBody,
    }: {
        requestBody?: OnlyIdQO,
    }): CancelablePromise<FurionResult_Int64> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/logerror/remove',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 删除多条数据
     * @returns FurionResult_List_Int64 OK
     * @throws ApiError
     */
    public static apiLogerrorRemoveMulPost({
        requestBody,
    }: {
        requestBody?: RemoveMulQO,
    }): CancelablePromise<FurionResult_List_Int64> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/logerror/remove-mul',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
}
