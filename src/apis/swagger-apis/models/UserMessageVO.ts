/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserMessageVO = {
    id?: number;
    createdPerson?: string | null;
    updatedPerson?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    userId?: number;
    messageId?: number;
    /**
     * 是否已读
     */
    isRead?: boolean | null;
    /**
     * 是否已删除
     */
    isDelete?: boolean | null;
    /**
     * 读取时间
     */
    readTime?: string | null;
    /**
     * 删除时间
     */
    deleteTime?: string | null;
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
};

