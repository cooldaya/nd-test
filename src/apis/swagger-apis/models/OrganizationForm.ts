/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type OrganizationForm = {
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
     * 联系人
     */
    contactPerson?: string | null;
    /**
     * 联系人联系方式
     */
    contactWay?: string | null;
    /**
     * 是否在地图中显示
     */
    isDisplayInmap?: boolean | null;
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
     * 是否包含视频
     */
    isVideo?: boolean | null;
    /**
     * 父级
     */
    parentId?: number | null;
    /**
     * 是否启用
     */
    isEnable?: boolean | null;
    /**
     * 备注
     */
    remark?: string | null;
};

