/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppVersionVO } from './AppVersionVO';
/**
 * 分页泛型集合
 */
export type SqlSugarPagedList_AppVersionVO = {
    /**
     * 页码
     */
    pageIndex?: number;
    /**
     * 页容量
     */
    pageSize?: number;
    /**
     * 总条数
     */
    total?: number;
    /**
     * 总页数
     */
    totalPages?: number;
    /**
     * 当前页集合
     */
    items?: Array<AppVersionVO> | null;
    /**
     * 是否有上一页
     */
    hasPrevPage?: boolean;
    /**
     * 是否有下一页
     */
    hasNextPage?: boolean;
};

