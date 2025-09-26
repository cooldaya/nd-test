/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppVersionPQO } from '../models/AppVersionPQO';
import type { AppVersionQO } from '../models/AppVersionQO';
import type { FurionResult_AppVersionVO } from '../models/FurionResult_AppVersionVO';
import type { FurionResult_List_AppVersionVO } from '../models/FurionResult_List_AppVersionVO';
import type { FurionResult_SqlSugarPagedList_AppVersionVO } from '../models/FurionResult_SqlSugarPagedList_AppVersionVO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AppVersionService {
    /**
     * 上传apk
     * @returns FurionResult_AppVersionVO OK
     * @throws ApiError
     */
    public static apiAppVersionUploadApkPost({
        formData,
    }: {
        formData?: {
            /**
             * 文件
             */
            File: Blob;
            /**
             * 版本号
             */
            Version: string;
        },
    }): CancelablePromise<FurionResult_AppVersionVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/app-version/upload-apk',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * 查询最新版本
     * @returns FurionResult_AppVersionVO OK
     * @throws ApiError
     */
    public static apiAppVersionLastVersionPost(): CancelablePromise<FurionResult_AppVersionVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/app-version/last-version',
        });
    }
    /**
     * 查询1个对象
     * @returns FurionResult_AppVersionVO OK
     * @throws ApiError
     */
    public static apiAppVersionShowPost({
        requestBody,
    }: {
        requestBody?: AppVersionQO,
    }): CancelablePromise<FurionResult_AppVersionVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/app-version/show',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询全部对象
     * @returns FurionResult_List_AppVersionVO OK
     * @throws ApiError
     */
    public static apiAppVersionListPost({
        requestBody,
    }: {
        requestBody?: AppVersionQO,
    }): CancelablePromise<FurionResult_List_AppVersionVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/app-version/list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询分页数据
     * @returns FurionResult_SqlSugarPagedList_AppVersionVO OK
     * @throws ApiError
     */
    public static apiAppVersionPagedListPost({
        requestBody,
    }: {
        requestBody?: AppVersionPQO,
    }): CancelablePromise<FurionResult_SqlSugarPagedList_AppVersionVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/app-version/paged-list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
}
