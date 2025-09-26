/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SqlSugarPagedList_AppVersionVO } from './SqlSugarPagedList_AppVersionVO';
/**
 * 全局返回结果
 */
export type FurionResult_SqlSugarPagedList_AppVersionVO = {
    /**
     * 状态码
     */
    statusCode?: number;
    /**
     * 类型success、warning、error
     */
    succeeded?: string | null;
    /**
     * 错误状态码
     */
    errorCode?: number | null;
    /**
     * 错误信息
     */
    message?: string | null;
    data?: SqlSugarPagedList_AppVersionVO;
    /**
     * 附加数据
     */
    extras?: any;
    /**
     * 时间
     */
    timestamp?: number;
};

