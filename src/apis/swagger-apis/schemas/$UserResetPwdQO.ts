/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UserResetPwdQO = {
    properties: {
        oldPassword: {
            type: 'string',
            description: `旧密码`,
            isRequired: true,
            minLength: 1,
        },
        newPassword: {
            type: 'string',
            description: `新密码`,
            isRequired: true,
            minLength: 1,
        },
    },
} as const;
