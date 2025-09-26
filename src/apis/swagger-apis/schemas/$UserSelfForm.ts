/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UserSelfForm = {
    properties: {
        name: {
            type: 'string',
            description: `姓名`,
            isRequired: true,
            maxLength: 50,
        },
        email: {
            type: 'string',
            description: `邮箱`,
            isNullable: true,
        },
        idcode: {
            type: 'string',
            description: `身份证号码`,
            isNullable: true,
        },
        sex: {
            type: 'string',
            description: `性别`,
            isNullable: true,
        },
        nation: {
            type: 'string',
            description: `民族`,
            isNullable: true,
        },
        birthday: {
            type: 'string',
            description: `出生日期`,
            isNullable: true,
            format: 'date-time',
        },
        mobile: {
            type: 'string',
            description: `手机号`,
            isNullable: true,
        },
        address: {
            type: 'string',
            description: `地址`,
            isNullable: true,
        },
    },
} as const;
