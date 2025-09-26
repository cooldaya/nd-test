/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UsergroupAssignRolesQO = {
    properties: {
        usergroupId: {
            type: 'number',
            isRequired: true,
            format: 'int64',
        },
        roleIds: {
            type: 'array',
            contains: {
                type: 'number',
                format: 'int64',
            },
            isRequired: true,
        },
    },
} as const;
