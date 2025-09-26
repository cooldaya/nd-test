/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TechnicsVO = {
    properties: {
        id: {
            type: 'number',
            format: 'int64',
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
        remark: {
            type: 'string',
            description: `备注`,
            isNullable: true,
        },
        createdPerson: {
            type: 'string',
            description: `创建人`,
            isNullable: true,
        },
        updatedPerson: {
            type: 'string',
            description: `更新人`,
            isNullable: true,
        },
        createdAt: {
            type: 'string',
            description: `创建时间`,
            isNullable: true,
            format: 'date-time',
        },
        updatedAt: {
            type: 'string',
            description: `更新时间`,
            isNullable: true,
            format: 'date-time',
        },
        isOnline: {
            type: 'boolean',
            description: `是否在线`,
            isNullable: true,
        },
        isPrealarm: {
            type: 'boolean',
            description: `是否预警`,
            isNullable: true,
        },
        isMonitor: {
            type: 'boolean',
            description: `是否启用监测`,
            isNullable: true,
        },
        monitorState: {
            type: 'string',
            description: `监测状态`,
            isNullable: true,
        },
        dataTime: {
            type: 'string',
            description: `数据时间`,
            isNullable: true,
            format: 'date-time',
        },
        waterLevel: {
            type: 'number',
            description: `水情,1:死水位以下;2:防洪限制水位以下;3:正常蓄水位以下;4:校核洪水位以下;5:校核洪水位以上`,
            isNullable: true,
            format: 'int32',
        },
        isOsmoticPressureEx: {
            type: 'boolean',
            description: `渗压是否异常`,
            isNullable: true,
        },
        hasVr: {
            type: 'boolean',
            description: `是否有vr`,
            isNullable: true,
        },
        yiqingObjId: {
            type: 'string',
            description: `蚁情平台标识`,
            isNullable: true,
        },
        stationCode: {
            type: 'string',
            description: `水库代码`,
            isNullable: true,
        },
        buildCycle: {
            type: 'number',
            description: `建设期`,
            isNullable: true,
            format: 'int32',
        },
        projectScale: {
            type: 'string',
            description: `工程规模`,
            isNullable: true,
        },
        village: {
            type: 'string',
            description: `乡镇`,
            isNullable: true,
        },
        damType: {
            type: 'string',
            description: `坝型`,
            isNullable: true,
        },
        totalCapacity: {
            type: 'number',
            description: `总库容  (万m3)`,
            isNullable: true,
            format: 'double',
        },
        isDrinkingWater: {
            type: 'boolean',
            description: `是否饮用水源`,
            isNullable: true,
        },
    },
} as const;
