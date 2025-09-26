/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoginResultUserAO = {
    properties: {
        id: {
            type: 'number',
            format: 'int64',
        },
        loginname: {
            type: 'string',
            description: `登录名`,
            isNullable: true,
        },
        name: {
            type: 'string',
            description: `姓名`,
            isNullable: true,
        },
        sex: {
            type: 'string',
            description: `性别`,
            isNullable: true,
        },
        mobile: {
            type: 'string',
            description: `手机号`,
            isNullable: true,
        },
        organizationId: {
            type: 'number',
            description: `部门id`,
            isNullable: true,
            format: 'int64',
        },
        organizationName: {
            type: 'string',
            description: `部门名称`,
            isNullable: true,
        },
        roles: {
            type: 'array',
            contains: {
                type: 'IdName',
            },
            isNullable: true,
        },
        resources: {
            type: 'array',
            contains: {
                type: 'string',
            },
            isNullable: true,
        },
    },
} as const;
