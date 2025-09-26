/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LogoperationQO = {
    properties: {
        id: {
            type: 'number',
            format: 'int64',
        },
        createdPerson: {
            type: 'string',
            isNullable: true,
        },
        beginTime: {
            type: 'string',
            description: `开始时间(异常时间)`,
            isNullable: true,
            format: 'date-time',
        },
        endTime: {
            type: 'string',
            description: `结束时间(异常时间)`,
            isNullable: true,
            format: 'date-time',
        },
        isException: {
            type: 'boolean',
            description: `是否异常`,
            isNullable: true,
        },
        controller: {
            type: 'string',
            description: `controller`,
            isNullable: true,
        },
        action: {
            type: 'string',
            description: `action`,
            isNullable: true,
        },
        ip: {
            type: 'string',
            description: `ip`,
            isNullable: true,
        },
        requestUrl: {
            type: 'string',
            description: `请求地址`,
            isNullable: true,
        },
        refererUrl: {
            type: 'string',
            description: `远程地址`,
            isNullable: true,
        },
        environment: {
            type: 'string',
            description: `环境`,
            isNullable: true,
        },
    },
} as const;
