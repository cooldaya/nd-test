/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FurionResult_Boolean } from '../models/FurionResult_Boolean';
import type { FurionResult_Int64 } from '../models/FurionResult_Int64';
import type { FurionResult_KnowledgeCatalogueVO } from '../models/FurionResult_KnowledgeCatalogueVO';
import type { FurionResult_List_Int64 } from '../models/FurionResult_List_Int64';
import type { FurionResult_List_KnowledgeCatalogueTreeNode } from '../models/FurionResult_List_KnowledgeCatalogueTreeNode';
import type { KnowledgeCatalogueDataDisplayFO } from '../models/KnowledgeCatalogueDataDisplayFO';
import type { KnowledgeCatalogueDataSortFO } from '../models/KnowledgeCatalogueDataSortFO';
import type { KnowledgeCatalogueFO } from '../models/KnowledgeCatalogueFO';
import type { KnowledgeCatalogueTreeFO } from '../models/KnowledgeCatalogueTreeFO';
import type { OnlyIdQO } from '../models/OnlyIdQO';
import type { RemoveMulQO } from '../models/RemoveMulQO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class KnowledgeCatalogueService {
    /**
     * 获取树形结构数据
     * @returns FurionResult_List_KnowledgeCatalogueTreeNode OK
     * @throws ApiError
     */
    public static apiKnowledgeCatalogueTreeDataPost({
        requestBody,
    }: {
        requestBody?: KnowledgeCatalogueTreeFO,
    }): CancelablePromise<FurionResult_List_KnowledgeCatalogueTreeNode> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-catalogue/tree-data',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 知识目录排序
     * @returns FurionResult_Boolean OK
     * @throws ApiError
     */
    public static apiKnowledgeCatalogueDataSortPost({
        requestBody,
    }: {
        requestBody?: KnowledgeCatalogueDataSortFO,
    }): CancelablePromise<FurionResult_Boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-catalogue/data-sort',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 知识目录隐藏
     * @returns FurionResult_Boolean OK
     * @throws ApiError
     */
    public static apiKnowledgeCatalogueDataDisplayPost({
        requestBody,
    }: {
        requestBody?: KnowledgeCatalogueDataDisplayFO,
    }): CancelablePromise<FurionResult_Boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-catalogue/data-display',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 新增数据
     * @returns FurionResult_KnowledgeCatalogueVO OK
     * @throws ApiError
     */
    public static apiKnowledgeCatalogueAddPost({
        requestBody,
    }: {
        requestBody?: KnowledgeCatalogueFO,
    }): CancelablePromise<FurionResult_KnowledgeCatalogueVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-catalogue/add',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 编辑数据
     * @returns FurionResult_KnowledgeCatalogueVO OK
     * @throws ApiError
     */
    public static apiKnowledgeCatalogueEditPost({
        requestBody,
    }: {
        requestBody?: KnowledgeCatalogueFO,
    }): CancelablePromise<FurionResult_KnowledgeCatalogueVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-catalogue/edit',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 删除1条数据
     * @returns FurionResult_Int64 OK
     * @throws ApiError
     */
    public static apiKnowledgeCatalogueRemovePost({
        requestBody,
    }: {
        requestBody?: OnlyIdQO,
    }): CancelablePromise<FurionResult_Int64> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-catalogue/remove',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 删除多条数据
     * @returns FurionResult_List_Int64 OK
     * @throws ApiError
     */
    public static apiKnowledgeCatalogueRemoveMulPost({
        requestBody,
    }: {
        requestBody?: RemoveMulQO,
    }): CancelablePromise<FurionResult_List_Int64> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-catalogue/remove-mul',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
}
