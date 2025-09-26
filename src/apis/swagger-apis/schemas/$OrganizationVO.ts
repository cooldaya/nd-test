/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OrganizationVO = {
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
        contactPerson: {
            type: 'string',
            description: `联系人`,
            isNullable: true,
        },
        contactWay: {
            type: 'string',
            description: `联系人联系方式`,
            isNullable: true,
        },
        isDisplayInmap: {
            type: 'boolean',
            description: `是否在地图中显示`,
            isNullable: true,
        },
        longitude: {
            type: 'number',
            description: `经度`,
            isNullable: true,
            format: 'double',
        },
        latitude: {
            type: 'number',
            description: `纬度`,
            isNullable: true,
            format: 'double',
        },
        address: {
            type: 'string',
            description: `地址`,
            isNullable: true,
        },
        isVideo: {
            type: 'boolean',
            description: `是否包含视频`,
            isNullable: true,
        },
        parentId: {
            type: 'number',
            description: `父级`,
            isNullable: true,
            format: 'int64',
        },
        isEnable: {
            type: 'boolean',
            description: `是否启用`,
            isNullable: true,
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
        remark: {
            type: 'string',
            description: `备注`,
            isNullable: true,
        },
        parentName: {
            type: 'string',
            description: `上级组织机构`,
            isNullable: true,
        },
    },
} as const;
