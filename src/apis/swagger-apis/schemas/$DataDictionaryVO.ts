/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DataDictionaryVO = {
    properties: {
        id: {
            type: 'number',
            format: 'int64',
        },
        createdPerson: {
            type: 'string',
            description: `created_person`,
            isNullable: true,
        },
        updatedPerson: {
            type: 'string',
            description: `updated_person`,
            isNullable: true,
        },
        createdAt: {
            type: 'string',
            description: `created_at`,
            isNullable: true,
            format: 'date-time',
        },
        updatedAt: {
            type: 'string',
            description: `updated_at`,
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
        isEnable: {
            type: 'boolean',
            description: `是否启用`,
            isNullable: true,
        },
        props: {
            type: 'string',
            description: `其他属性`,
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
        parentCode: {
            type: 'string',
            isNullable: true,
        },
        parentName: {
            type: 'string',
            isNullable: true,
        },
        level: {
            type: 'number',
            description: `级别`,
            isNullable: true,
            format: 'int32',
        },
        nestedcode: {
            type: 'string',
            isNullable: true,
        },
    },
} as const;
