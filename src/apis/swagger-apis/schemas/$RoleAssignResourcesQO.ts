/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RoleAssignResourcesQO = {
    properties: {
        roleId: {
            type: 'number',
            isRequired: true,
            format: 'int64',
        },
        resourceIds: {
            type: 'array',
            contains: {
                type: 'number',
                format: 'int64',
            },
            isRequired: true,
        },
    },
} as const;
