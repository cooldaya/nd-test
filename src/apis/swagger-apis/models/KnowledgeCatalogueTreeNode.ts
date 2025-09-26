/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type KnowledgeCatalogueTreeNode = {
    id?: number;
    /**
     * 名称
     */
    name?: string | null;
    /**
     * 父级id
     */
    parentId?: number;
    /**
     * 排序号
     */
    sort?: number;
    /**
     * 是否显示
     */
    display?: boolean;
    count?: number;
    children?: Array<KnowledgeCatalogueTreeNode> | null;
};

