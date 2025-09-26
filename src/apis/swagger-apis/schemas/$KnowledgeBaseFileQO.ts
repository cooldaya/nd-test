/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $KnowledgeBaseFileQO = {
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
        queryType: {
            type: 'number',
            description: `1:标题 2:内容 3:作者 4:关键词`,
            format: 'int32',
        },
        sort: {
            type: 'number',
            description: `1:时间升序 2:时间降序 3:相关性升序  4:相关性降序`,
            format: 'int32',
        },
        keyword: {
            type: 'string',
            description: `搜索关键字内容`,
            isNullable: true,
        },
        ids: {
            type: 'array',
            contains: {
                type: 'number',
                format: 'int64',
            },
            isNullable: true,
        },
        catalogueIds: {
            type: 'array',
            contains: {
                type: 'number',
                format: 'int64',
            },
            isNullable: true,
        },
    },
} as const;
