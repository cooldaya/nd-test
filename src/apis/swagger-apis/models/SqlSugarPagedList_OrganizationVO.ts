/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrganizationVO } from './OrganizationVO';
/**
 * 分页泛型集合
 */
export type SqlSugarPagedList_OrganizationVO = {
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
    items?: Array<OrganizationVO> | null;
    /**
     * 是否有上一页
     */
    hasPrevPage?: boolean;
    /**
     * 是否有下一页
     */
    hasNextPage?: boolean;
};

