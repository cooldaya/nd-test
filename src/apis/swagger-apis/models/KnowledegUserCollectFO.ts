/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type KnowledegUserCollectFO = {
    id?: number;
    createdPerson?: string | null;
    updatedPerson?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    /**
     * 知识库文件id
     */
    fileId?: number;
    /**
     * 用户id
     */
    userId?: number;
    /**
     * 类型(1:灌区灌溉 2:防汛抗旱)
     */
    type?: number;
    fileIds?: Array<number> | null;
};

