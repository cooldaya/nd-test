/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileDownloadQO } from '../models/FileDownloadQO';
import type { FurionResult_Boolean } from '../models/FurionResult_Boolean';
import type { FurionResult_Int64 } from '../models/FurionResult_Int64';
import type { FurionResult_KnowledgeBaseFileVO } from '../models/FurionResult_KnowledgeBaseFileVO';
import type { FurionResult_SqlSugarPagedList_KnowledgeBaseFileVO } from '../models/FurionResult_SqlSugarPagedList_KnowledgeBaseFileVO';
import type { KnowledgeBaseFileDeleteQO } from '../models/KnowledgeBaseFileDeleteQO';
import type { KnowledgeBaseFileFO } from '../models/KnowledgeBaseFileFO';
import type { KnowledgeBaseFilePQO } from '../models/KnowledgeBaseFilePQO';
import type { KnowledgeBaseFileQO } from '../models/KnowledgeBaseFileQO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class KnowledgeBaseFileService {
    /**
     * 文件下载
     * @returns any OK
     * @throws ApiError
     */
    public static apiKnowledgeBaseFileFileDownloadByIdGet({
        filepath,
        filename,
        id,
    }: {
        filepath?: string,
        filename?: string,
        id?: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/knowledge-base-file/file-download-by-id',
            query: {
                'filepath': filepath,
                'filename': filename,
                'id': id,
            },
        });
    }
    /**
     * 批量下载
     * @returns any OK
     * @throws ApiError
     */
    public static apiKnowledgeBaseFileFileDownloadPost({
        requestBody,
    }: {
        requestBody?: Array<FileDownloadQO>,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-base-file/file-download',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 批量导出
     * @returns any OK
     * @throws ApiError
     */
    public static apiKnowledgeBaseFileExportPost({
        requestBody,
    }: {
        requestBody?: KnowledgeBaseFileQO,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-base-file/export',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 列表查询
     * @returns FurionResult_SqlSugarPagedList_KnowledgeBaseFileVO OK
     * @throws ApiError
     */
    public static apiKnowledgeBaseFileKnowledgeListPost({
        requestBody,
    }: {
        requestBody?: KnowledgeBaseFilePQO,
    }): CancelablePromise<FurionResult_SqlSugarPagedList_KnowledgeBaseFileVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-base-file/knowledge-list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 热门知识推荐列表
     * @returns FurionResult_KnowledgeBaseFileVO OK
     * @throws ApiError
     */
    public static apiKnowledgeBaseFileHotKnowledgeListPost({
        requestBody,
    }: {
        requestBody?: KnowledgeBaseFileQO,
    }): CancelablePromise<FurionResult_KnowledgeBaseFileVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-base-file/hot-knowledge-list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 知识管理列表
     * @returns FurionResult_SqlSugarPagedList_KnowledgeBaseFileVO OK
     * @throws ApiError
     */
    public static apiKnowledgeBaseFileAllKnowledgeListPost({
        requestBody,
    }: {
        requestBody?: KnowledgeBaseFilePQO,
    }): CancelablePromise<FurionResult_SqlSugarPagedList_KnowledgeBaseFileVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-base-file/all-knowledge-list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 批量隐藏显示
     * @returns FurionResult_Boolean OK
     * @throws ApiError
     */
    public static apiKnowledgeBaseFileFileDisplayPost({
        requestBody,
    }: {
        requestBody?: KnowledgeBaseFileFO,
    }): CancelablePromise<FurionResult_Boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-base-file/file-display',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 新增数据
     * @returns FurionResult_KnowledgeBaseFileVO OK
     * @throws ApiError
     */
    public static apiKnowledgeBaseFileAddPost({
        requestBody,
    }: {
        requestBody?: KnowledgeBaseFileFO,
    }): CancelablePromise<FurionResult_KnowledgeBaseFileVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-base-file/add',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 删除数据
     * @returns FurionResult_Int64 OK
     * @throws ApiError
     */
    public static apiKnowledgeBaseFileRemovePost({
        requestBody,
    }: {
        requestBody?: KnowledgeBaseFileDeleteQO,
    }): CancelablePromise<FurionResult_Int64> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-base-file/remove',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 编辑数据
     * @returns FurionResult_KnowledgeBaseFileVO OK
     * @throws ApiError
     */
    public static apiKnowledgeBaseFileEditPost({
        requestBody,
    }: {
        requestBody?: KnowledgeBaseFileFO,
    }): CancelablePromise<FurionResult_KnowledgeBaseFileVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-base-file/edit',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
}
