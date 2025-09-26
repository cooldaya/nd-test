/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UserFormAdd = {
    properties: {
        id: {
            type: 'number',
            description: `Id`,
            format: 'int64',
        },
        code: {
            type: 'string',
            description: `编号`,
            isRequired: true,
            maxLength: 50,
        },
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
        wxopenid: {
            type: 'string',
            description: `微信openid`,
            isNullable: true,
        },
        wxunionid: {
            type: 'string',
            description: `微信unionid`,
            isNullable: true,
        },
        address: {
            type: 'string',
            description: `地址`,
            isNullable: true,
        },
        canLogin: {
            type: 'boolean',
            description: `是否可以登录`,
            isNullable: true,
        },
        isEnable: {
            type: 'boolean',
            description: `是否启用`,
            isNullable: true,
        },
        remark: {
            type: 'string',
            description: `备注`,
            isNullable: true,
        },
        organizationId: {
            type: 'number',
            description: `组织机构`,
            isRequired: true,
            format: 'int64',
        },
        typeCode: {
            type: 'string',
            isNullable: true,
        },
        loginname: {
            type: 'string',
            description: `登录名`,
            isRequired: true,
            maxLength: 50,
        },
        password: {
            type: 'string',
            description: `密码`,
            isRequired: true,
            minLength: 1,
        },
    },
} as const;
