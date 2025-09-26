/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FurionResult_KnowledgeFile } from '../models/FurionResult_KnowledgeFile';
import type { FurionResult_KnowledgeFileVO } from '../models/FurionResult_KnowledgeFileVO';
import type { FurionResult_List_Int64 } from '../models/FurionResult_List_Int64';
import type { FurionResult_List_KnowledgeFileVO } from '../models/FurionResult_List_KnowledgeFileVO';
import type { FurionResult_List_TreeNodeKf } from '../models/FurionResult_List_TreeNodeKf';
import type { FurionResult_SqlSugarPagedList_KnowledgeFileVO } from '../models/FurionResult_SqlSugarPagedList_KnowledgeFileVO';
import type { KnowledgeFilePQO } from '../models/KnowledgeFilePQO';
import type { KnowledgeFileQO } from '../models/KnowledgeFileQO';
import type { OnlyIdQO } from '../models/OnlyIdQO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class KnowledgeFileService {
    /**
     * 获取树形结构数据
     * @returns FurionResult_List_TreeNodeKf OK
     * @throws ApiError
     */
    public static apiKnowledgeFileTreedataPost({
        requestBody,
    }: {
        requestBody?: KnowledgeFileQO,
    }): CancelablePromise<FurionResult_List_TreeNodeKf> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-file/treedata',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 新增数据
     * @returns FurionResult_KnowledgeFileVO OK
     * @throws ApiError
     */
    public static apiKnowledgeFileAddPost({
        requestBody,
    }: {
        requestBody?: KnowledgeFileQO,
    }): CancelablePromise<FurionResult_KnowledgeFileVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-file/add',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 编辑数据
     * @returns FurionResult_KnowledgeFileVO OK
     * @throws ApiError
     */
    public static apiKnowledgeFileEditPost({
        requestBody,
    }: {
        requestBody?: KnowledgeFileQO,
    }): CancelablePromise<FurionResult_KnowledgeFileVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-file/edit',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 删除数据
     * @returns FurionResult_List_Int64 OK
     * @throws ApiError
     */
    public static apiKnowledgeFileRemovePost({
        requestBody,
    }: {
        requestBody?: OnlyIdQO,
    }): CancelablePromise<FurionResult_List_Int64> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-file/remove',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 上传文件
     * @returns FurionResult_KnowledgeFile OK
     * @throws ApiError
     */
    public static apiKnowledgeFileUploadPost({
        formData,
    }: {
        formData?: {
            /**
             * ParentId
             */
            ParentId?: number;
            /**
             * 文件
             */
            File?: Blob;
            /**
             * 模块
             */
            ModelName?: string;
            /**
             * 是否静态
             */
            IsStatic?: boolean;
        },
    }): CancelablePromise<FurionResult_KnowledgeFile> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-file/upload',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * 查询1个对象
     * @returns FurionResult_KnowledgeFileVO OK
     * @throws ApiError
     */
    public static apiKnowledgeFileShowPost({
        requestBody,
    }: {
        requestBody?: KnowledgeFileQO,
    }): CancelablePromise<FurionResult_KnowledgeFileVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-file/show',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询全部对象
     * @returns FurionResult_List_KnowledgeFileVO OK
     * @throws ApiError
     */
    public static apiKnowledgeFileListPost({
        requestBody,
    }: {
        requestBody?: KnowledgeFileQO,
    }): CancelablePromise<FurionResult_List_KnowledgeFileVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-file/list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询分页数据
     * @returns FurionResult_SqlSugarPagedList_KnowledgeFileVO OK
     * @throws ApiError
     */
    public static apiKnowledgeFilePagedListPost({
        requestBody,
    }: {
        requestBody?: KnowledgeFilePQO,
    }): CancelablePromise<FurionResult_SqlSugarPagedList_KnowledgeFileVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/knowledge-file/paged-list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
}
