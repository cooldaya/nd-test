/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $KnowledgeTypePQO = {
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
        type: {
            type: 'number',
            description: `类型(1:灌区灌溉 2:防汛抗旱)`,
            format: 'int32',
        },
        typeRemark: {
            type: 'string',
            description: `类别描述`,
            isNullable: true,
        },
        directoryId: {
            type: 'number',
            description: `目录id`,
            isNullable: true,
            format: 'int64',
        },
        authorLength: {
            type: 'number',
            description: `作者配置长度`,
            isNullable: true,
            format: 'int32',
        },
        dateFormat: {
            type: 'string',
            description: `时间格式配置`,
            isNullable: true,
        },
        initKeywrods: {
            type: 'string',
            description: `预设关键字`,
            isNullable: true,
        },
        fileFormat: {
            type: 'string',
            description: `文件格式配置`,
            isNullable: true,
        },
        contentTemplate: {
            type: 'string',
            description: `内容模板`,
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
