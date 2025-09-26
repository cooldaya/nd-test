/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * 用户分页查询参数类
 */
export type RolePQO = {
    id?: number;
    /**
     * 名称
     */
    name?: string | null;
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

