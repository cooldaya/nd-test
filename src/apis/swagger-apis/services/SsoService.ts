/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FurionResult_String } from '../models/FurionResult_String';
import type { FurionResult_UserVO } from '../models/FurionResult_UserVO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SsoService {
    /**
     * 获取单点登录授权地址
     * @returns FurionResult_String OK
     * @throws ApiError
     */
    public static apiSsoGetSsoAuthUrlPost({
        clientloginurl,
    }: {
        clientloginurl?: string,
    }): CancelablePromise<FurionResult_String> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sso/get-sso-auth-url',
            query: {
                'clientloginurl': clientloginurl,
            },
        });
    }
    /**
     * 根据Ticket登录
     * @returns FurionResult_UserVO OK
     * @throws ApiError
     */
    public static apiSsoDoLoginByTicketPost({
        ticket,
    }: {
        ticket?: string,
    }): CancelablePromise<FurionResult_UserVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sso/do-login-by-ticket',
            query: {
                'ticket': ticket,
            },
        });
    }
}
