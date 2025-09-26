/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LogaccessQO = {
    properties: {
        id: {
            type: 'number',
            format: 'int64',
        },
        beginTime: {
            type: 'string',
            description: `开始时间(访问时间)`,
            isNullable: true,
            format: 'date-time',
        },
        endTime: {
            type: 'string',
            description: `结束时间(访问时间)`,
            isNullable: true,
            format: 'date-time',
        },
        authkey: {
            type: 'string',
            description: `登录名`,
            isNullable: true,
        },
        ip: {
            type: 'string',
            description: `ip地址`,
            isNullable: true,
        },
        result: {
            type: 'string',
            description: `访问结果`,
            isNullable: true,
        },
        isException: {
            type: 'boolean',
            description: `是否异常`,
            isNullable: true,
        },
    },
} as const;
