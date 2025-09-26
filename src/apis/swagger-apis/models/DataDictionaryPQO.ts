/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DataDictionaryPQO = {
    /**
     * id
     */
    id?: number;
    /**
     * created_person
     */
    createdPerson?: string | null;
    /**
     * updated_person
     */
    updatedPerson?: string | null;
    /**
     * created_at
     */
    createdAt?: string | null;
    /**
     * updated_at
     */
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
     * 是否启用
     */
    isEnable?: boolean | null;
    /**
     * 其他属性
     */
    props?: string | null;
    /**
     * 备注
     */
    remark?: string | null;
    /**
     * 父级
     */
    parentId?: number | null;
    parentCode?: string | null;
    parentName?: string | null;
    /**
     * 级别
     */
    level?: number | null;
    /**
     * 路径key
     */
    pathkey?: number;
    /**
     * 路径
     */
    nestedpath?: string | null;
    nestedcode?: string | null;
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

