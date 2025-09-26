/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $KnowledgeBaseFile = {
    description: `知识库文件`,
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
        path: {
            type: 'string',
            description: `文件路径`,
            isNullable: true,
        },
        title: {
            type: 'string',
            description: `文件标题`,
            isNullable: true,
        },
        typeId: {
            type: 'number',
            description: `知识类型id`,
            format: 'int64',
        },
        authorName: {
            type: 'string',
            description: `作者名称`,
            isNullable: true,
        },
        source: {
            type: 'string',
            description: `来源`,
            isNullable: true,
        },
        catalogueId: {
            type: 'number',
            description: `知识目录id`,
            format: 'int64',
        },
        content: {
            type: 'string',
            description: `内容描述`,
            isNullable: true,
        },
        primaryKey: {
            type: 'string',
            description: `关键词`,
            isNullable: true,
        },
        downloadCount: {
            type: 'number',
            description: `下载数量`,
            format: 'int32',
        },
        collectCount: {
            type: 'number',
            description: `收藏数量`,
            format: 'int32',
        },
        display: {
            type: 'boolean',
        },
        type: {
            type: 'number',
            description: `类型(1:灌区灌溉 2:防汛抗旱)`,
            format: 'int32',
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
    },
} as const;
