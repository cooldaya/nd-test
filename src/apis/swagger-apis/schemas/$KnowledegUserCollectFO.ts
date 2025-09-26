/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $KnowledegUserCollectFO = {
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
        fileId: {
            type: 'number',
            description: `知识库文件id`,
            format: 'int64',
        },
        userId: {
            type: 'number',
            description: `用户id`,
            format: 'int64',
        },
        type: {
            type: 'number',
            description: `类型(1:灌区灌溉 2:防汛抗旱)`,
            format: 'int32',
        },
        fileIds: {
            type: 'array',
            contains: {
                type: 'number',
                format: 'int64',
            },
            isNullable: true,
        },
    },
} as const;
