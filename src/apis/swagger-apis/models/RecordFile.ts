/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RecordFile = {
    id?: number;
    createdPerson?: string | null;
    updatedPerson?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    /**
     * 实体标识
     */
    recordId?: number;
    /**
     * 文件标识
     */
    fileId?: string | null;
    /**
     * 文件路径
     */
    filePath?: string | null;
    /**
     * 文件名
     */
    fileName?: string | null;
    /**
     * 文件大小(Byte)
     */
    fileSize?: number;
    /**
     * 后缀名
     */
    extname?: string | null;
    /**
     * 原始文件名
     */
    fileNameOrigin?: string | null;
};

