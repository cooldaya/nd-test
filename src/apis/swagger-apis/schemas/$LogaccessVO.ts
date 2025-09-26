/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LogaccessVO = {
    properties: {
        isException: {
            type: 'boolean',
            description: `是否异常`,
            isNullable: true,
        },
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
    },
} as const;
