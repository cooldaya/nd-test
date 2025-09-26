/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FurionResult_Int64 } from '../models/FurionResult_Int64';
import type { FurionResult_List_Int64 } from '../models/FurionResult_List_Int64';
import type { FurionResult_List_LogoperationVO } from '../models/FurionResult_List_LogoperationVO';
import type { FurionResult_LogoperationVO } from '../models/FurionResult_LogoperationVO';
import type { FurionResult_SqlSugarPagedList_LogoperationVO } from '../models/FurionResult_SqlSugarPagedList_LogoperationVO';
import type { LogoperationFO } from '../models/LogoperationFO';
import type { LogoperationPQO } from '../models/LogoperationPQO';
import type { LogoperationQO } from '../models/LogoperationQO';
import type { OnlyIdQO } from '../models/OnlyIdQO';
import type { RemoveMulQO } from '../models/RemoveMulQO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LogoperationService {
    /**
     * 查询1个对象
     * @returns FurionResult_LogoperationVO OK
     * @throws ApiError
     */
    public static apiLogoperationShowPost({
        requestBody,
    }: {
        requestBody?: LogoperationQO,
    }): CancelablePromise<FurionResult_LogoperationVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/logoperation/show',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询全部对象
     * @returns FurionResult_List_LogoperationVO OK
     * @throws ApiError
     */
    public static apiLogoperationListPost({
        requestBody,
    }: {
        requestBody?: LogoperationQO,
    }): CancelablePromise<FurionResult_List_LogoperationVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/logoperation/list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询分页数据
     * @returns FurionResult_SqlSugarPagedList_LogoperationVO OK
     * @throws ApiError
     */
    public static apiLogoperationPagedListPost({
        requestBody,
    }: {
        requestBody?: LogoperationPQO,
    }): CancelablePromise<FurionResult_SqlSugarPagedList_LogoperationVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/logoperation/paged-list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 新增数据
     * @returns FurionResult_LogoperationVO OK
     * @throws ApiError
     */
    public static apiLogoperationAddPost({
        requestBody,
    }: {
        requestBody?: LogoperationFO,
    }): CancelablePromise<FurionResult_LogoperationVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/logoperation/add',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 编辑数据
     * @returns FurionResult_LogoperationVO OK
     * @throws ApiError
     */
    public static apiLogoperationEditPost({
        requestBody,
    }: {
        requestBody?: LogoperationFO,
    }): CancelablePromise<FurionResult_LogoperationVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/logoperation/edit',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 删除1条数据
     * @returns FurionResult_Int64 OK
     * @throws ApiError
     */
    public static apiLogoperationRemovePost({
        requestBody,
    }: {
        requestBody?: OnlyIdQO,
    }): CancelablePromise<FurionResult_Int64> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/logoperation/remove',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 删除多条数据
     * @returns FurionResult_List_Int64 OK
     * @throws ApiError
     */
    public static apiLogoperationRemoveMulPost({
        requestBody,
    }: {
        requestBody?: RemoveMulQO,
    }): CancelablePromise<FurionResult_List_Int64> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/logoperation/remove-mul',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
}
