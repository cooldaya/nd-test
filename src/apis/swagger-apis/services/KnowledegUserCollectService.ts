/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FurionResult_Boolean } from '../models/FurionResult_Boolean';
import type { FurionResult_Int64 } from '../models/FurionResult_Int64';
import type { FurionResult_KnowledegUserCollectVO } from '../models/FurionResult_KnowledegUserCollectVO';
import type { FurionResult_SqlSugarPagedList_KnowledgeBaseFileVO } from '../models/FurionResult_SqlSugarPagedList_KnowledgeBaseFileVO';
import type { KnowledegUserCollectFO } from '../models/KnowledegUserCollectFO';
import type { KnowledegUserCollectPQO } from '../models/KnowledegUserCollectPQO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class KnowledegUserCollectService {
    /**
     * 新增
     * @returns FurionResult_KnowledegUserCollectVO OK
     * @throws ApiError
     */
    public static apiKnowledegUserCollectAddPost({
        requestBody,
    }: {
        requestBody?: KnowledegUserCollectFO,
    }): CancelablePromise<FurionResult_KnowledegUserCollectVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledeg-user-collect/add',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 删除
     * @returns FurionResult_Int64 OK
     * @throws ApiError
     */
    public static apiKnowledegUserCollectDeletePost({
        requestBody,
    }: {
        requestBody?: KnowledegUserCollectFO,
    }): CancelablePromise<FurionResult_Int64> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledeg-user-collect/delete',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 批量删除
     * @returns FurionResult_Int64 OK
     * @throws ApiError
     */
    public static apiKnowledegUserCollectDeleteMulPost({
        requestBody,
    }: {
        requestBody?: KnowledegUserCollectFO,
    }): CancelablePromise<FurionResult_Int64> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledeg-user-collect/delete-mul',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 获取用户收藏知识库文件列表
     * @returns FurionResult_SqlSugarPagedList_KnowledgeBaseFileVO OK
     * @throws ApiError
     */
    public static apiKnowledegUserCollectKnowledgeUserCollectListPost({
        requestBody,
    }: {
        requestBody?: KnowledegUserCollectPQO,
    }): CancelablePromise<FurionResult_SqlSugarPagedList_KnowledgeBaseFileVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledeg-user-collect/knowledge-user-collect-list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 批量收藏
     * @returns FurionResult_Boolean OK
     * @throws ApiError
     */
    public static apiKnowledegUserCollectListPost({
        requestBody,
    }: {
        requestBody?: KnowledegUserCollectFO,
    }): CancelablePromise<FurionResult_Boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledeg-user-collect/list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
}
