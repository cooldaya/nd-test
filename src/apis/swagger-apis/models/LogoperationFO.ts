/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LogoperationFO = {
    id?: number;
    createdPerson?: string | null;
    updatedPerson?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    /**
     * 操作用户标识
     */
    userId?: number | null;
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
     * 操作时间(毫秒)
     */
    timeElapsed?: number | null;
    /**
     * 参数
     */
    parameters?: string | null;
    /**
     * 环境
     */
    environment?: string | null;
};

