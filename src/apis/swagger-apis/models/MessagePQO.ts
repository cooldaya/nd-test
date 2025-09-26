/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type MessagePQO = {
    id?: number;
    createdPerson?: string | null;
    updatedPerson?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    /**
     * 标题
     */
    title?: string | null;
    /**
     * 内容
     */
    content?: string | null;
    /**
     * 类型
     */
    type?: string | null;
    /**
     * 实体id
     */
    recordId?: number | null;
    /**
     * 流程引擎里的id
     */
    ftwobpmId?: string | null;
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

