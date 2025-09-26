/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LogerrorPQO = {
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
        pageIndex: {
            type: 'number',
            description: `当前页码`,
            format: 'int32',
        },
        pageSize: {
            type: 'number',
            description: `页码容量`,
            format: 'int32',
            maximum: 100,
        },
        field: {
            type: 'string',
            description: `排序字段`,
            isNullable: true,
        },
        order: {
            type: 'string',
            description: `排序方向`,
            isNullable: true,
        },
    },
} as const;
