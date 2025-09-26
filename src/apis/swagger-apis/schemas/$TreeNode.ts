/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TreeNode = {
    properties: {
        id: {
            type: 'number',
            format: 'int64',
        },
        name: {
            type: 'string',
            isNullable: true,
        },
        children: {
            type: 'array',
            contains: {
                type: 'TreeNode',
            },
            isNullable: true,
        },
    },
} as const;
