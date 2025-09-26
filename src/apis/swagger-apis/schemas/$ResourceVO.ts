/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ResourceVO = {
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
        code: {
            type: 'string',
            description: `编号`,
            isNullable: true,
        },
        name: {
            type: 'string',
            description: `名称`,
            isNullable: true,
        },
        type: {
            type: 'string',
            description: `类型`,
            isNullable: true,
        },
        isEnable: {
            type: 'boolean',
            description: `是否启用`,
            isNullable: true,
        },
        isAdmin: {
            type: 'boolean',
            description: `是否仅限管理员`,
            isNullable: true,
        },
        remark: {
            type: 'string',
            description: `备注`,
            isNullable: true,
        },
        parentId: {
            type: 'number',
            description: `父级`,
            isNullable: true,
            format: 'int64',
        },
        routeNames: {
            type: 'array',
            contains: {
                type: 'string',
            },
            isNullable: true,
        },
        resourceRoutes: {
            type: 'array',
            contains: {
                type: 'ResourceRoute',
            },
            isNullable: true,
        },
    },
} as const;
