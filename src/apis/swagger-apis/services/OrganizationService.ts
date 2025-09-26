/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FurionResult_List_Int64 } from '../models/FurionResult_List_Int64';
import type { FurionResult_List_OrganizationVO } from '../models/FurionResult_List_OrganizationVO';
import type { FurionResult_List_TreeNode } from '../models/FurionResult_List_TreeNode';
import type { FurionResult_OrganizationVO } from '../models/FurionResult_OrganizationVO';
import type { FurionResult_SqlSugarPagedList_OrganizationVO } from '../models/FurionResult_SqlSugarPagedList_OrganizationVO';
import type { OnlyIdQO } from '../models/OnlyIdQO';
import type { OrganizationForm } from '../models/OrganizationForm';
import type { OrganizationPQO } from '../models/OrganizationPQO';
import type { OrganizationQO } from '../models/OrganizationQO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrganizationService {
    /**
     * 获取树形结构数据
     * @returns FurionResult_List_TreeNode OK
     * @throws ApiError
     */
    public static apiOrganizationTreedataPost({
        requestBody,
    }: {
        requestBody?: OrganizationQO,
    }): CancelablePromise<FurionResult_List_TreeNode> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/organization/treedata',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 新增数据
     * @returns FurionResult_OrganizationVO OK
     * @throws ApiError
     */
    public static apiOrganizationAddPost({
        requestBody,
    }: {
        requestBody?: OrganizationForm,
    }): CancelablePromise<FurionResult_OrganizationVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/organization/add',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 编辑数据
     * @returns FurionResult_OrganizationVO OK
     * @throws ApiError
     */
    public static apiOrganizationEditPost({
        requestBody,
    }: {
        requestBody?: OrganizationForm,
    }): CancelablePromise<FurionResult_OrganizationVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/organization/edit',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 删除数据
     * @returns FurionResult_List_Int64 OK
     * @throws ApiError
     */
    public static apiOrganizationRemovePost({
        requestBody,
    }: {
        requestBody?: OnlyIdQO,
    }): CancelablePromise<FurionResult_List_Int64> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/organization/remove',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询1个对象
     * @returns FurionResult_OrganizationVO OK
     * @throws ApiError
     */
    public static apiOrganizationShowPost({
        requestBody,
    }: {
        requestBody?: OrganizationQO,
    }): CancelablePromise<FurionResult_OrganizationVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/organization/show',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询全部对象
     * @returns FurionResult_List_OrganizationVO OK
     * @throws ApiError
     */
    public static apiOrganizationListPost({
        requestBody,
    }: {
        requestBody?: OrganizationQO,
    }): CancelablePromise<FurionResult_List_OrganizationVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/organization/list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询分页数据
     * @returns FurionResult_SqlSugarPagedList_OrganizationVO OK
     * @throws ApiError
     */
    public static apiOrganizationPagedListPost({
        requestBody,
    }: {
        requestBody?: OrganizationPQO,
    }): CancelablePromise<FurionResult_SqlSugarPagedList_OrganizationVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/organization/paged-list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
}
