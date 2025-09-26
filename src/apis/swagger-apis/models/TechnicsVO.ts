/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TechnicsVO = {
    id?: number;
    /**
     * 编号
     */
    code?: string | null;
    /**
     * 名称
     */
    name?: string | null;
    /**
     * 经度
     */
    longitude?: number | null;
    /**
     * 纬度
     */
    latitude?: number | null;
    /**
     * 地址
     */
    address?: string | null;
    /**
     * 备注
     */
    remark?: string | null;
    /**
     * 创建人
     */
    createdPerson?: string | null;
    /**
     * 更新人
     */
    updatedPerson?: string | null;
    /**
     * 创建时间
     */
    createdAt?: string | null;
    /**
     * 更新时间
     */
    updatedAt?: string | null;
    /**
     * 是否在线
     */
    isOnline?: boolean | null;
    /**
     * 是否预警
     */
    isPrealarm?: boolean | null;
    /**
     * 是否启用监测
     */
    isMonitor?: boolean | null;
    /**
     * 监测状态
     */
    monitorState?: string | null;
    /**
     * 数据时间
     */
    dataTime?: string | null;
    /**
     * 水情,1:死水位以下;2:防洪限制水位以下;3:正常蓄水位以下;4:校核洪水位以下;5:校核洪水位以上
     */
    waterLevel?: number | null;
    /**
     * 渗压是否异常
     */
    isOsmoticPressureEx?: boolean | null;
    /**
     * 是否有vr
     */
    hasVr?: boolean | null;
    /**
     * 蚁情平台标识
     */
    yiqingObjId?: string | null;
    /**
     * 水库代码
     */
    stationCode?: string | null;
    /**
     * 建设期
     */
    buildCycle?: number | null;
    /**
     * 工程规模
     */
    projectScale?: string | null;
    /**
     * 乡镇
     */
    village?: string | null;
    /**
     * 坝型
     */
    damType?: string | null;
    /**
     * 总库容  (万m3)
     */
    totalCapacity?: number | null;
    /**
     * 是否饮用水源
     */
    isDrinkingWater?: boolean | null;
};

