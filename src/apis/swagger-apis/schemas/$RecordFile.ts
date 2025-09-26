/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RecordFile = {
    properties: {
        id: {
            type: 'number',
            format: 'int64',
        },
        createdPerson: {
            type: 'string',
            isNullable: true,
        },
        updatedPerson: {
            type: 'string',
            isNullable: true,
        },
        createdAt: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        updatedAt: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        recordId: {
            type: 'number',
            description: `实体标识`,
            format: 'int64',
        },
        fileId: {
            type: 'string',
            description: `文件标识`,
            isNullable: true,
        },
        filePath: {
            type: 'string',
            description: `文件路径`,
            isNullable: true,
        },
        fileName: {
            type: 'string',
            description: `文件名`,
            isNullable: true,
        },
        fileSize: {
            type: 'number',
            description: `文件大小(Byte)`,
            format: 'int64',
        },
        extname: {
            type: 'string',
            description: `后缀名`,
            isNullable: true,
        },
        fileNameOrigin: {
            type: 'string',
            description: `原始文件名`,
            isNullable: true,
        },
    },
} as const;
