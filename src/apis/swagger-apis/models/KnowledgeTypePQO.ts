/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type KnowledgeTypePQO = {
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
     * 类型(1:灌区灌溉 2:防汛抗旱)
     */
    type?: number;
    /**
     * 类别描述
     */
    typeRemark?: string | null;
    /**
     * 目录id
     */
    directoryId?: number | null;
    /**
     * 作者配置长度
     */
    authorLength?: number | null;
    /**
     * 时间格式配置
     */
    dateFormat?: string | null;
    /**
     * 预设关键字
     */
    initKeywrods?: string | null;
    /**
     * 文件格式配置
     */
    fileFormat?: string | null;
    /**
     * 内容模板
     */
    contentTemplate?: string | null;
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

