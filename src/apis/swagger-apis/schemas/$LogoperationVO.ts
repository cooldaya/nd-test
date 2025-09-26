/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LogoperationVO = {
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
        userId: {
            type: 'number',
            description: `操作用户标识`,
            isNullable: true,
            format: 'int64',
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
        timeElapsed: {
            type: 'number',
            description: `操作时间(毫秒)`,
            isNullable: true,
            format: 'int64',
        },
        parameters: {
            type: 'string',
            description: `参数`,
            isNullable: true,
        },
        environment: {
            type: 'string',
            description: `环境`,
            isNullable: true,
        },
    },
} as const;
