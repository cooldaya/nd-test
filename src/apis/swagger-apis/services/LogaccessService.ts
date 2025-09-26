/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FurionResult_Int64 } from '../models/FurionResult_Int64';
import type { FurionResult_List_Int64 } from '../models/FurionResult_List_Int64';
import type { FurionResult_List_LogaccessVO } from '../models/FurionResult_List_LogaccessVO';
import type { FurionResult_LogaccessVO } from '../models/FurionResult_LogaccessVO';
import type { FurionResult_SqlSugarPagedList_LogaccessVO } from '../models/FurionResult_SqlSugarPagedList_LogaccessVO';
import type { LogaccessFO } from '../models/LogaccessFO';
import type { LogaccessPQO } from '../models/LogaccessPQO';
import type { LogaccessQO } from '../models/LogaccessQO';
import type { OnlyIdQO } from '../models/OnlyIdQO';
import type { RemoveMulQO } from '../models/RemoveMulQO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LogaccessService {
    /**
     * 查询1个对象
     * @returns FurionResult_LogaccessVO OK
     * @throws ApiError
     */
    public static apiLogaccessShowPost({
        requestBody,
    }: {
        requestBody?: LogaccessQO,
    }): CancelablePromise<FurionResult_LogaccessVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/logaccess/show',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询全部对象
     * @returns FurionResult_List_LogaccessVO OK
     * @throws ApiError
     */
    public static apiLogaccessListPost({
        requestBody,
    }: {
        requestBody?: LogaccessQO,
    }): CancelablePromise<FurionResult_List_LogaccessVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/logaccess/list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询分页数据
     * @returns FurionResult_SqlSugarPagedList_LogaccessVO OK
     * @throws ApiError
     */
    public static apiLogaccessPagedListPost({
        requestBody,
    }: {
        requestBody?: LogaccessPQO,
    }): CancelablePromise<FurionResult_SqlSugarPagedList_LogaccessVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/logaccess/paged-list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 新增数据
     * @returns FurionResult_LogaccessVO OK
     * @throws ApiError
     */
    public static apiLogaccessAddPost({
        requestBody,
    }: {
        requestBody?: LogaccessFO,
    }): CancelablePromise<FurionResult_LogaccessVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/logaccess/add',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 编辑数据
     * @returns FurionResult_LogaccessVO OK
     * @throws ApiError
     */
    public static apiLogaccessEditPost({
        requestBody,
    }: {
        requestBody?: LogaccessFO,
    }): CancelablePromise<FurionResult_LogaccessVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/logaccess/edit',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 删除1条数据
     * @returns FurionResult_Int64 OK
     * @throws ApiError
     */
    public static apiLogaccessRemovePost({
        requestBody,
    }: {
        requestBody?: OnlyIdQO,
    }): CancelablePromise<FurionResult_Int64> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/logaccess/remove',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 删除多条数据
     * @returns FurionResult_List_Int64 OK
     * @throws ApiError
     */
    public static apiLogaccessRemoveMulPost({
        requestBody,
    }: {
        requestBody?: RemoveMulQO,
    }): CancelablePromise<FurionResult_List_Int64> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/logaccess/remove-mul',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
}
