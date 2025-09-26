/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type KnowledgeCatalogueVO = {
    /**
     * id
     */
    id?: number;
    createdPerson?: string | null;
    updatedPerson?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
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
    /**
     * 目录对应文件数量
     */
    count?: number;
    /**
     * 类型(1:灌区灌溉 2:防汛抗旱)
     */
    type?: number;
};

