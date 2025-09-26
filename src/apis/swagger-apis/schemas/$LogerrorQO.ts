/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LogerrorQO = {
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
        message: {
            type: 'string',
            description: `异常信息`,
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
    },
} as const;
