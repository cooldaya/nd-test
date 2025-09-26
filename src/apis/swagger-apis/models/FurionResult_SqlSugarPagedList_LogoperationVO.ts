/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SqlSugarPagedList_LogoperationVO } from './SqlSugarPagedList_LogoperationVO';
/**
 * 全局返回结果
 */
export type FurionResult_SqlSugarPagedList_LogoperationVO = {
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
    data?: SqlSugarPagedList_LogoperationVO;
    /**
     * 附加数据
     */
    extras?: any;
    /**
     * 时间
     */
    timestamp?: number;
};

