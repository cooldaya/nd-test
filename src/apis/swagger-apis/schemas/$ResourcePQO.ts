/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ResourcePQO = {
    description: `用户分页查询参数类`,
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
        type: {
            type: 'string',
            description: `类型`,
            isNullable: true,
        },
        isEnable: {
            type: 'boolean',
            description: `是否启用`,
            isNullable: true,
        },
        isAdmin: {
            type: 'boolean',
            description: `是否仅限管理员`,
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
        level: {
            type: 'number',
            description: `级别`,
            isNullable: true,
            format: 'int32',
        },
        pathkey: {
            type: 'number',
            description: `路径key`,
            format: 'int32',
        },
        nestedpath: {
            type: 'string',
            description: `路径`,
            isNullable: true,
        },
        pageIndex: {
            type: 'number',
            description: `当前页码`,
            format: 'int32',
        },
        pageSize: {
            type: 'number',
            description: `页码容量`,
            format: 'int32',
            maximum: 100,
        },
        field: {
            type: 'string',
            description: `排序字段`,
            isNullable: true,
        },
        order: {
            type: 'string',
            description: `排序方向`,
            isNullable: true,
        },
    },
} as const;
