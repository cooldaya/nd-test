/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { KnowledgeBaseFile } from './KnowledgeBaseFile';
export type KnowledgeBaseFileVO = {
    id?: number;
    createdPerson?: string | null;
    updatedPerson?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    /**
     * 文件路径
     */
    path?: string | null;
    /**
     * 文件标题
     */
    title?: string | null;
    /**
     * 知识类型id
     */
    typeId?: number;
    /**
     * 作者名称
     */
    authorName?: string | null;
    /**
     * 来源
     */
    source?: string | null;
    /**
     * 知识目录id
     */
    catalogueId?: number;
    /**
     * 内容描述
     */
    content?: string | null;
    /**
     * 关键词
     */
    primaryKey?: string | null;
    /**
     * 下载数量
     */
    downloadCount?: number;
    /**
     * 收藏数量
     */
    collectCount?: number;
    display?: boolean;
    /**
     * 类型(1:灌区灌溉 2:防汛抗旱)
     */
    type?: number;
    /**
     * 文件名
     */
    fileName?: string | null;
    /**
     * 文件大小(Byte)
     */
    fileSize?: number;
    /**
     * 是否收藏
     */
    isCollect?: boolean;
    userCollectDateTime?: string | null;
    primaryKeyList?: Array<string> | null;
    list?: Array<KnowledgeBaseFile> | null;
};

