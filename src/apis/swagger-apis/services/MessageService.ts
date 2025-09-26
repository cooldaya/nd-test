/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FurionResult_List_MessageVO } from '../models/FurionResult_List_MessageVO';
import type { FurionResult_MessageVO } from '../models/FurionResult_MessageVO';
import type { FurionResult_SqlSugarPagedList_MessageVO } from '../models/FurionResult_SqlSugarPagedList_MessageVO';
import type { MessagePQO } from '../models/MessagePQO';
import type { MessageQO } from '../models/MessageQO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MessageService {
    /**
     * 查询1个对象
     * @returns FurionResult_MessageVO OK
     * @throws ApiError
     */
    public static apiMessageShowPost({
        requestBody,
    }: {
        requestBody?: MessageQO,
    }): CancelablePromise<FurionResult_MessageVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/message/show',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询全部对象
     * @returns FurionResult_List_MessageVO OK
     * @throws ApiError
     */
    public static apiMessageListPost({
        requestBody,
    }: {
        requestBody?: MessageQO,
    }): CancelablePromise<FurionResult_List_MessageVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/message/list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询分页数据
     * @returns FurionResult_SqlSugarPagedList_MessageVO OK
     * @throws ApiError
     */
    public static apiMessagePagedListPost({
        requestBody,
    }: {
        requestBody?: MessagePQO,
    }): CancelablePromise<FurionResult_SqlSugarPagedList_MessageVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/message/paged-list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
}
