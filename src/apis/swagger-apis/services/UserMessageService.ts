/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FurionResult_Boolean } from '../models/FurionResult_Boolean';
import type { FurionResult_List_UserMessageVO } from '../models/FurionResult_List_UserMessageVO';
import type { FurionResult_MessageStRes } from '../models/FurionResult_MessageStRes';
import type { FurionResult_SqlSugarPagedList_UserMessageVO } from '../models/FurionResult_SqlSugarPagedList_UserMessageVO';
import type { FurionResult_UserMessageVO } from '../models/FurionResult_UserMessageVO';
import type { OnlyMsgIdList } from '../models/OnlyMsgIdList';
import type { UserMessagePQO } from '../models/UserMessagePQO';
import type { UserMessageQO } from '../models/UserMessageQO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserMessageService {
    /**
     * 消息数量统计
     * @returns FurionResult_MessageStRes OK
     * @throws ApiError
     */
    public static apiUserMessageAmountstPost(): CancelablePromise<FurionResult_MessageStRes> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user-message/amountst',
        });
    }
    /**
     * 设置消息已读
     * @returns FurionResult_Boolean OK
     * @throws ApiError
     */
    public static apiUserMessageReadMessagePost({
        requestBody,
    }: {
        requestBody?: OnlyMsgIdList,
    }): CancelablePromise<FurionResult_Boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user-message/read-message',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 标记消息已删除
     * @returns FurionResult_Boolean OK
     * @throws ApiError
     */
    public static apiUserMessageDeleteMessagePost({
        requestBody,
    }: {
        requestBody?: OnlyMsgIdList,
    }): CancelablePromise<FurionResult_Boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user-message/delete-message',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 标记全部消息已读
     * @returns FurionResult_Boolean OK
     * @throws ApiError
     */
    public static apiUserMessageReadAllMessagePost(): CancelablePromise<FurionResult_Boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user-message/read-all-message',
        });
    }
    /**
     * 查询1个对象
     * @returns FurionResult_UserMessageVO OK
     * @throws ApiError
     */
    public static apiUserMessageShowPost({
        requestBody,
    }: {
        requestBody?: UserMessageQO,
    }): CancelablePromise<FurionResult_UserMessageVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user-message/show',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询全部对象
     * @returns FurionResult_List_UserMessageVO OK
     * @throws ApiError
     */
    public static apiUserMessageListPost({
        requestBody,
    }: {
        requestBody?: UserMessageQO,
    }): CancelablePromise<FurionResult_List_UserMessageVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user-message/list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询分页数据
     * @returns FurionResult_SqlSugarPagedList_UserMessageVO OK
     * @throws ApiError
     */
    public static apiUserMessagePagedListPost({
        requestBody,
    }: {
        requestBody?: UserMessagePQO,
    }): CancelablePromise<FurionResult_SqlSugarPagedList_UserMessageVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user-message/paged-list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
}
