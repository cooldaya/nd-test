/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * 知识库文件
 */
export type KnowledgeFile = {
    /**
     * Desc:
     * Default:
     * Nullable:False
     */
    id?: number;
    /**
     * Desc:
     * Default:
     * Nullable:True
     */
    createdPerson?: string | null;
    /**
     * Desc:
     * Default:
     * Nullable:True
     */
    updatedPerson?: string | null;
    /**
     * Desc:
     * Default:
     * Nullable:True
     */
    createdAt?: string | null;
    /**
     * Desc:
     * Default:
     * Nullable:True
     */
    updatedAt?: string | null;
    /**
     * Desc:父级id
     * Default:
     * Nullable:True
     */
    parentId?: number | null;
    /**
     * Desc:类型(文件、文件夹)
     * Default:
     * Nullable:False
     */
    type?: string | null;
    /**
     * Desc:名称
     * Default:
     * Nullable:False
     */
    name?: string | null;
    /**
     * Desc:备注
     * Default:
     * Nullable:True
     */
    remark?: string | null;
    /**
     * Desc:关联文件id
     * Default:
     * Nullable:False
     */
    recordFileId?: number;
    /**
     * Desc:路径key
     * Default:
     * Nullable:False
     */
    pathkey?: number;
    /**
     * Desc:路径
     * Default:
     * Nullable:True
     */
    nestedpath?: string | null;
    /**
     * Desc:
     * Default:
     * Nullable:True
     */
    deleteAt?: string | null;
    /**
     * Desc:是否可以删除
     * Default:1
     * Nullable:True
     */
    canDelete?: boolean | null;
    /**
     * Desc:是否删除
     * Default:0
     * Nullable:True
     */
    isDelete?: boolean | null;
    /**
     * Desc:级别
     * Default:
     * Nullable:True
     */
    level?: number | null;
};

