/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TreeNodeKf = {
    properties: {
        id: {
            type: 'number',
            format: 'int64',
        },
        name: {
            type: 'string',
            isNullable: true,
        },
        type: {
            type: 'string',
            isNullable: true,
        },
        children: {
            type: 'array',
            contains: {
                type: 'TreeNodeKf',
            },
            isNullable: true,
        },
    },
} as const;
