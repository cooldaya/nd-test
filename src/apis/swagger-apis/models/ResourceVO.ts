/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResourceRoute } from './ResourceRoute';
export type ResourceVO = {
    id?: number;
    createdPerson?: string | null;
    updatedPerson?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    /**
     * 编号
     */
    code?: string | null;
    /**
     * 名称
     */
    name?: string | null;
    /**
     * 类型
     */
    type?: string | null;
    /**
     * 是否启用
     */
    isEnable?: boolean | null;
    /**
     * 是否仅限管理员
     */
    isAdmin?: boolean | null;
    /**
     * 备注
     */
    remark?: string | null;
    /**
     * 父级
     */
    parentId?: number | null;
    /**
     * 路由名称列表
     */
    routeNames?: Array<string> | null;
    resourceRoutes?: Array<ResourceRoute> | null;
};

