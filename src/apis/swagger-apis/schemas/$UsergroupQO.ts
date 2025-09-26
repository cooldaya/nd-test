/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UsergroupQO = {
    properties: {
        id: {
            type: 'number',
            description: `Id`,
            format: 'int64',
        },
        createdPerson: {
            type: 'string',
            description: `创建人`,
            isNullable: true,
        },
        updatedPerson: {
            type: 'string',
            description: `更新人`,
            isNullable: true,
        },
        createdAt: {
            type: 'string',
            description: `创建时间`,
            isNullable: true,
            format: 'date-time',
        },
        updatedAt: {
            type: 'string',
            description: `更新时间`,
            isNullable: true,
            format: 'date-time',
        },
        name: {
            type: 'string',
            description: `名称`,
            isNullable: true,
        },
        remark: {
            type: 'string',
            description: `备注`,
            isNullable: true,
        },
    },
} as const;
