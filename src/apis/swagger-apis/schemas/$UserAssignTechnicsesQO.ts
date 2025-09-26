/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UserAssignTechnicsesQO = {
    properties: {
        userId: {
            type: 'number',
            isRequired: true,
            format: 'int64',
        },
        technicsIds: {
            type: 'array',
            contains: {
                type: 'number',
                format: 'int64',
            },
            isRequired: true,
        },
    },
} as const;
