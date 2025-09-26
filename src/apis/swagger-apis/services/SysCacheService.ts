/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FurionResult_Int32 } from '../models/FurionResult_Int32';
import type { FurionResult_List_String } from '../models/FurionResult_List_String';
import type { FurionResult_Object } from '../models/FurionResult_Object';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SysCacheService {
    /**
     * 获取缓存键名集合 🔖
     * @returns FurionResult_List_String OK
     * @throws ApiError
     */
    public static apiSysCacheKeyListGet(): CancelablePromise<FurionResult_List_String> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sys-cache/key-list',
        });
    }
    /**
     * 根据键名前缀获取键名集合 🔖
     * @returns FurionResult_List_String OK
     * @throws ApiError
     */
    public static apiSysCacheKeysByPrefixKeyPrefixkeyGet({
        prefixkey,
    }: {
        /**
         * 键名前缀
         */
        prefixkey: string,
    }): CancelablePromise<FurionResult_List_String> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sys-cache/keys-by-prefix-key/{prefixkey}',
            path: {
                'prefixkey': prefixkey,
            },
        });
    }
    /**
     * 获取缓存值 🔖
     * @returns FurionResult_Object OK
     * @throws ApiError
     */
    public static apiSysCacheValueKeyGet({
        key,
    }: {
        key: string,
    }): CancelablePromise<FurionResult_Object> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sys-cache/value/{key}',
            path: {
                'key': key,
            },
        });
    }
    /**
     * 删除缓存 🔖
     * @returns FurionResult_Int32 OK
     * @throws ApiError
     */
    public static apiSysCacheDeleteKeyPost({
        key,
    }: {
        key: string,
    }): CancelablePromise<FurionResult_Int32> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sys-cache/delete/{key}',
            path: {
                'key': key,
            },
        });
    }
    /**
     * 根据键名前缀删除缓存 🔖
     * @returns FurionResult_Int32 OK
     * @throws ApiError
     */
    public static apiSysCacheDeletebyprekeyPrefixkeyPost({
        prefixkey,
    }: {
        /**
         * 键名前缀
         */
        prefixkey: string,
    }): CancelablePromise<FurionResult_Int32> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sys-cache/deletebyprekey/{prefixkey}',
            path: {
                'prefixkey': prefixkey,
            },
        });
    }
}
