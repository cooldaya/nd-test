/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RoleVO = {
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
        name: {
            type: 'string',
            description: `名称`,
            isRequired: true,
            minLength: 1,
        },
        remark: {
            type: 'string',
            description: `备注`,
            isNullable: true,
        },
    },
} as const;
