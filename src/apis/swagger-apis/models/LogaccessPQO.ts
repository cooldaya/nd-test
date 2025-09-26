/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LogaccessPQO = {
    id?: number;
    /**
     * 开始时间(访问时间)
     */
    beginTime?: string | null;
    /**
     * 结束时间(访问时间)
     */
    endTime?: string | null;
    /**
     * 登录名
     */
    authkey?: string | null;
    /**
     * ip地址
     */
    ip?: string | null;
    /**
     * 访问结果
     */
    result?: string | null;
    /**
     * 是否异常
     */
    isException?: boolean | null;
    /**
     * 当前页码
     */
    pageIndex?: number;
    /**
     * 页码容量
     */
    pageSize?: number;
    /**
     * 排序字段
     */
    field?: string | null;
    /**
     * 排序方向
     */
    order?: string | null;
};

