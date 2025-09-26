/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LogoperationQO = {
    id?: number;
    createdPerson?: string | null;
    /**
     * 开始时间(异常时间)
     */
    beginTime?: string | null;
    /**
     * 结束时间(异常时间)
     */
    endTime?: string | null;
    /**
     * 是否异常
     */
    isException?: boolean | null;
    /**
     * controller
     */
    controller?: string | null;
    /**
     * action
     */
    action?: string | null;
    /**
     * ip
     */
    ip?: string | null;
    /**
     * 请求地址
     */
    requestUrl?: string | null;
    /**
     * 远程地址
     */
    refererUrl?: string | null;
    /**
     * 环境
     */
    environment?: string | null;
};

