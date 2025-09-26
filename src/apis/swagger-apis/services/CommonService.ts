/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FurionResult_Int64 } from '../models/FurionResult_Int64';
import type { FurionResult_List_Int64 } from '../models/FurionResult_List_Int64';
import type { FurionResult_List_RecordFile } from '../models/FurionResult_List_RecordFile';
import type { FurionResult_RecordFile } from '../models/FurionResult_RecordFile';
import type { ReqIdsQO } from '../models/ReqIdsQO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CommonService {
    /**
     * 上传单个文件
     * @returns FurionResult_RecordFile OK
     * @throws ApiError
     */
    public static apiCommonUploadFilePost({
        formData,
    }: {
        formData?: {
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
    }): CancelablePromise<FurionResult_RecordFile> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/common/upload-file',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * 上传多个文件
     * @returns FurionResult_List_RecordFile OK
     * @throws ApiError
     */
    public static apiCommonUploadFilesPost({
        formData,
    }: {
        formData?: {
            Files?: Array<Blob>;
            /**
             * 模块
             */
            ModelName?: string;
            /**
             * 是否静态
             */
            IsStatic?: boolean;
            /**
             * 业务对象id
             */
            RecordId: number;
        },
    }): CancelablePromise<FurionResult_List_RecordFile> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/common/upload-files',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * 上传多个图片
     * @returns FurionResult_List_RecordFile OK
     * @throws ApiError
     */
    public static apiCommonUploadImgsPost({
        formData,
    }: {
        formData?: {
            Files?: Array<Blob>;
            /**
             * 模块
             */
            ModelName?: string;
            /**
             * 是否静态
             */
            IsStatic?: boolean;
            /**
             * 业务对象id
             */
            RecordId: number;
        },
    }): CancelablePromise<FurionResult_List_RecordFile> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/common/upload-imgs',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public static apiCommonFileDownloadGet({
        filepath,
        filename,
    }: {
        filepath?: string,
        filename?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/common/file-download',
            query: {
                'filepath': filepath,
                'filename': filename,
            },
        });
    }
    /**
     * 获取1个id
     * @returns FurionResult_Int64 OK
     * @throws ApiError
     */
    public static apiCommonGenIdPost(): CancelablePromise<FurionResult_Int64> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/common/gen-id',
        });
    }
    /**
     * 获取多个id
     * @returns FurionResult_List_Int64 OK
     * @throws ApiError
     */
    public static apiCommonGenIdsPost({
        requestBody,
    }: {
        requestBody?: ReqIdsQO,
    }): CancelablePromise<FurionResult_List_Int64> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/common/gen-ids',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
}
