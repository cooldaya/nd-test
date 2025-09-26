/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdName } from './IdName';
export type LoginResultUserAO = {
    id?: number;
    /**
     * 登录名
     */
    loginname?: string | null;
    /**
     * 姓名
     */
    name?: string | null;
    /**
     * 性别
     */
    sex?: string | null;
    /**
     * 手机号
     */
    mobile?: string | null;
    /**
     * 部门id
     */
    organizationId?: number | null;
    /**
     * 部门名称
     */
    organizationName?: string | null;
    roles?: Array<IdName> | null;
    resources?: Array<string> | null;
};

