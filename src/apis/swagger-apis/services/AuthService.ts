/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FurionResult_IActionResult } from '../models/FurionResult_IActionResult';
import type { FurionResult_LoginResultUserAO } from '../models/FurionResult_LoginResultUserAO';
import type { FurionResult_LoginResultVO } from '../models/FurionResult_LoginResultVO';
import type { FurionResult_String } from '../models/FurionResult_String';
import type { LoginQO } from '../models/LoginQO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * 获取加密公钥
     * @returns FurionResult_String OK
     * @throws ApiError
     */
    public static apiAuthPkinfoPost(): CancelablePromise<FurionResult_String> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/pkinfo',
        });
    }
    /**
     * 检查是否登录
     * @returns FurionResult_LoginResultUserAO OK
     * @throws ApiError
     */
    public static apiAuthCheckloginPost(): CancelablePromise<FurionResult_LoginResultUserAO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/checklogin',
        });
    }
    /**
     * 登录
     * @returns FurionResult_LoginResultVO OK
     * @throws ApiError
     */
    public static apiAuthLoginPost({
        requestBody,
    }: {
        requestBody?: LoginQO,
    }): CancelablePromise<FurionResult_LoginResultVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/login',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 退出登录
     * @returns any OK
     * @throws ApiError
     */
    public static apiAuthLogoutPost(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/logout',
        });
    }
    /**
     * 单点登录
     * @returns FurionResult_IActionResult OK
     * @throws ApiError
     */
    public static apiAuthLoginSsoGet({
        token,
    }: {
        token?: string,
    }): CancelablePromise<FurionResult_IActionResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/auth/login-sso',
            query: {
                'token': token,
            },
        });
    }
}
