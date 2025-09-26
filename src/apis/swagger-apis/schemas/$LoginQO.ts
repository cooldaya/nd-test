/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoginQO = {
    properties: {
        authkey: {
            type: 'string',
            description: `用户名`,
            isNullable: true,
        },
        password: {
            type: 'string',
            description: `密码`,
            isRequired: true,
            minLength: 1,
        },
    },
} as const;
