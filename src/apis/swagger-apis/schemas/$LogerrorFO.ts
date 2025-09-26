/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LogerrorFO = {
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
        message: {
            type: 'string',
            description: `异常信息`,
            isNullable: true,
        },
        userId: {
            type: 'number',
            description: `操作用户标识`,
            isNullable: true,
            format: 'int64',
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
    },
} as const;
