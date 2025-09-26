/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AdminResetPwdQO = {
    properties: {
        userId: {
            type: 'number',
            description: `UserId`,
            isRequired: true,
            format: 'int64',
        },
        password: {
            type: 'string',
            description: `密码`,
            isRequired: true,
            minLength: 1,
        },
    },
} as const;
