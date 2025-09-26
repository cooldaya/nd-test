/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MessageQO = {
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
        title: {
            type: 'string',
            description: `标题`,
            isNullable: true,
        },
        content: {
            type: 'string',
            description: `内容`,
            isNullable: true,
        },
        type: {
            type: 'string',
            description: `类型`,
            isNullable: true,
        },
        recordId: {
            type: 'number',
            description: `实体id`,
            isNullable: true,
            format: 'int64',
        },
        ftwobpmId: {
            type: 'string',
            description: `流程引擎里的id`,
            isNullable: true,
        },
    },
} as const;
