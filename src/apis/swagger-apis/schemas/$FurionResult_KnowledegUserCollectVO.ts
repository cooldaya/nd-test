/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $FurionResult_KnowledegUserCollectVO = {
    description: `全局返回结果`,
    properties: {
        statusCode: {
            type: 'number',
            description: `状态码`,
            format: 'int32',
        },
        succeeded: {
            type: 'string',
            description: `类型success、warning、error`,
            isNullable: true,
        },
        errorCode: {
            type: 'number',
            description: `错误状态码`,
            isNullable: true,
            format: 'int32',
        },
        message: {
            type: 'string',
            description: `错误信息`,
            isNullable: true,
        },
        data: {
            type: 'KnowledegUserCollectVO',
        },
        extras: {
            description: `附加数据`,
            properties: {
            },
            isNullable: true,
        },
        timestamp: {
            type: 'number',
            description: `时间`,
            format: 'int64',
        },
    },
} as const;
