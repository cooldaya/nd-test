/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserForm = {
    /**
     * Id
     */
    id?: number;
    /**
     * 编号
     */
    code: string;
    /**
     * 姓名
     */
    name: string;
    /**
     * 邮箱
     */
    email?: string | null;
    /**
     * 身份证号码
     */
    idcode?: string | null;
    /**
     * 性别
     */
    sex?: string | null;
    /**
     * 民族
     */
    nation?: string | null;
    /**
     * 出生日期
     */
    birthday?: string | null;
    /**
     * 手机号
     */
    mobile?: string | null;
    /**
     * 微信openid
     */
    wxopenid?: string | null;
    /**
     * 微信unionid
     */
    wxunionid?: string | null;
    /**
     * 地址
     */
    address?: string | null;
    /**
     * 是否可以登录
     */
    canLogin?: boolean | null;
    /**
     * 是否启用
     */
    isEnable?: boolean | null;
    /**
     * 备注
     */
    remark?: string | null;
    /**
     * 组织机构
     */
    organizationId: number;
    typeCode?: string | null;
};

