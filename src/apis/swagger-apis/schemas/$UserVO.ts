/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UserVO = {
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
        loginname: {
            type: 'string',
            description: `登录名`,
            isNullable: true,
        },
        password: {
            type: 'string',
            description: `密码`,
            isNullable: true,
        },
        code: {
            type: 'string',
            description: `编号`,
            isNullable: true,
        },
        name: {
            type: 'string',
            description: `姓名`,
            isNullable: true,
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
        maxNos: {
            type: 'number',
            isNullable: true,
            format: 'int32',
        },
        remark: {
            type: 'string',
            isNullable: true,
        },
        organizationId: {
            type: 'number',
            isNullable: true,
            format: 'int64',
        },
        ssoId: {
            type: 'number',
            description: `ssoid`,
            isNullable: true,
            format: 'int64',
        },
        typeCode: {
            type: 'string',
            isNullable: true,
        },
        lastLoginTime: {
            type: 'string',
            description: `上次登录时间`,
            isNullable: true,
            format: 'date-time',
        },
        organizationName: {
            type: 'string',
            description: `组织机构名称`,
            isNullable: true,
        },
    },
} as const;
