/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $KnowledgeFilePQO = {
    properties: {
        id: {
            type: 'number',
            description: `Desc:
            Default:
            Nullable:False`,
            format: 'int64',
        },
        createdPerson: {
            type: 'string',
            description: `Desc:
            Default:
            Nullable:True`,
            isNullable: true,
        },
        updatedPerson: {
            type: 'string',
            description: `Desc:
            Default:
            Nullable:True`,
            isNullable: true,
        },
        createdAt: {
            type: 'string',
            description: `Desc:
            Default:
            Nullable:True`,
            isNullable: true,
            format: 'date-time',
        },
        updatedAt: {
            type: 'string',
            description: `Desc:
            Default:
            Nullable:True`,
            isNullable: true,
            format: 'date-time',
        },
        parentId: {
            type: 'number',
            description: `Desc:父级id
            Default:
            Nullable:True`,
            isNullable: true,
            format: 'int64',
        },
        type: {
            type: 'string',
            description: `Desc:类型(文件、文件夹)
            Default:
            Nullable:False`,
            isNullable: true,
        },
        name: {
            type: 'string',
            description: `Desc:名称
            Default:
            Nullable:False`,
            isNullable: true,
        },
        remark: {
            type: 'string',
            description: `Desc:备注
            Default:
            Nullable:True`,
            isNullable: true,
        },
        recordFileId: {
            type: 'number',
            description: `Desc:关联文件id
            Default:
            Nullable:False`,
            format: 'int64',
        },
        pathkey: {
            type: 'number',
            description: `Desc:路径key
            Default:
            Nullable:False`,
            format: 'int32',
        },
        nestedpath: {
            type: 'string',
            description: `Desc:路径
            Default:
            Nullable:True`,
            isNullable: true,
        },
        deleteAt: {
            type: 'string',
            description: `Desc:
            Default:
            Nullable:True`,
            isNullable: true,
            format: 'date-time',
        },
        canDelete: {
            type: 'boolean',
            description: `Desc:是否可以删除
            Default:1
            Nullable:True`,
            isNullable: true,
        },
        isDelete: {
            type: 'boolean',
            description: `Desc:是否删除
            Default:0
            Nullable:True`,
            isNullable: true,
        },
        level: {
            type: 'number',
            description: `Desc:级别
            Default:
            Nullable:True`,
            isNullable: true,
            format: 'int32',
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
