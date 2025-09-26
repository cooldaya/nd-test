/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminResetPwdQO } from '../models/AdminResetPwdQO';
import type { FurionResult_Int64 } from '../models/FurionResult_Int64';
import type { FurionResult_List_Int64 } from '../models/FurionResult_List_Int64';
import type { FurionResult_List_RoleVO } from '../models/FurionResult_List_RoleVO';
import type { FurionResult_List_TechnicsVO } from '../models/FurionResult_List_TechnicsVO';
import type { FurionResult_List_UsergroupVO } from '../models/FurionResult_List_UsergroupVO';
import type { FurionResult_List_UserVO } from '../models/FurionResult_List_UserVO';
import type { FurionResult_SqlSugarPagedList_UserVO } from '../models/FurionResult_SqlSugarPagedList_UserVO';
import type { FurionResult_UserVO } from '../models/FurionResult_UserVO';
import type { OnlyIdQO } from '../models/OnlyIdQO';
import type { RemoveMulQO } from '../models/RemoveMulQO';
import type { UserAssignRolesQO } from '../models/UserAssignRolesQO';
import type { UserAssignTechnicsesQO } from '../models/UserAssignTechnicsesQO';
import type { UserAssignUsergroupsQO } from '../models/UserAssignUsergroupsQO';
import type { UserForm } from '../models/UserForm';
import type { UserFormAdd } from '../models/UserFormAdd';
import type { UserPQO } from '../models/UserPQO';
import type { UserQO } from '../models/UserQO';
import type { UserResetPwdQO } from '../models/UserResetPwdQO';
import type { UserSelfForm } from '../models/UserSelfForm';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * 登录用户获取信息
     * @returns FurionResult_UserVO OK
     * @throws ApiError
     */
    public static apiUserShowSelfPost(): CancelablePromise<FurionResult_UserVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/show-self',
        });
    }
    /**
     * 登录用户更新信息
     * @returns FurionResult_UserVO OK
     * @throws ApiError
     */
    public static apiUserEditSelfPost({
        requestBody,
    }: {
        requestBody?: UserSelfForm,
    }): CancelablePromise<FurionResult_UserVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/edit-self',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 新增数据
     * @returns FurionResult_UserVO OK
     * @throws ApiError
     */
    public static apiUserAddPost({
        requestBody,
    }: {
        requestBody?: UserFormAdd,
    }): CancelablePromise<FurionResult_UserVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/add',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 编辑数据
     * @returns FurionResult_UserVO OK
     * @throws ApiError
     */
    public static apiUserEditPost({
        requestBody,
    }: {
        requestBody?: UserForm,
    }): CancelablePromise<FurionResult_UserVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/edit',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 根据用户id查询角色列表
     * @returns FurionResult_List_RoleVO OK
     * @throws ApiError
     */
    public static apiUserGetRolesPost({
        requestBody,
    }: {
        requestBody?: OnlyIdQO,
    }): CancelablePromise<FurionResult_List_RoleVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/get-roles',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 根据用户id查询用户组列表
     * @returns FurionResult_List_UsergroupVO OK
     * @throws ApiError
     */
    public static apiUserGetUsergroupsPost({
        requestBody,
    }: {
        requestBody?: OnlyIdQO,
    }): CancelablePromise<FurionResult_List_UsergroupVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/get-usergroups',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 根据用户id查询水库列表
     * @returns FurionResult_List_TechnicsVO OK
     * @throws ApiError
     */
    public static apiUserGetTechnicsesPost({
        requestBody,
    }: {
        requestBody?: OnlyIdQO,
    }): CancelablePromise<FurionResult_List_TechnicsVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/get-technicses',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 分配角色
     * @returns any OK
     * @throws ApiError
     */
    public static apiUserAssignRolesPost({
        requestBody,
    }: {
        requestBody?: UserAssignRolesQO,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/assign-roles',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 分配用户组
     * @returns any OK
     * @throws ApiError
     */
    public static apiUserAssignUsergroupsPost({
        requestBody,
    }: {
        requestBody?: UserAssignUsergroupsQO,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/assign-usergroups',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 分配水库数据权限
     * @returns any OK
     * @throws ApiError
     */
    public static apiUserAssignTechnicsesPost({
        requestBody,
    }: {
        requestBody?: UserAssignTechnicsesQO,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/assign-technicses',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 管理员重置密码
     * @returns any OK
     * @throws ApiError
     */
    public static apiUserEditPwdPost({
        requestBody,
    }: {
        requestBody?: AdminResetPwdQO,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/edit-pwd',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 用户重置密码
     * @returns any OK
     * @throws ApiError
     */
    public static apiUserResetPwdPost({
        requestBody,
    }: {
        requestBody?: UserResetPwdQO,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/reset-pwd',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询1个对象
     * @returns FurionResult_UserVO OK
     * @throws ApiError
     */
    public static apiUserShowPost({
        requestBody,
    }: {
        requestBody?: UserQO,
    }): CancelablePromise<FurionResult_UserVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/show',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询全部对象
     * @returns FurionResult_List_UserVO OK
     * @throws ApiError
     */
    public static apiUserListPost({
        requestBody,
    }: {
        requestBody?: UserQO,
    }): CancelablePromise<FurionResult_List_UserVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 查询分页数据
     * @returns FurionResult_SqlSugarPagedList_UserVO OK
     * @throws ApiError
     */
    public static apiUserPagedListPost({
        requestBody,
    }: {
        requestBody?: UserPQO,
    }): CancelablePromise<FurionResult_SqlSugarPagedList_UserVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/paged-list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 删除1条数据
     * @returns FurionResult_Int64 OK
     * @throws ApiError
     */
    public static apiUserRemovePost({
        requestBody,
    }: {
        requestBody?: OnlyIdQO,
    }): CancelablePromise<FurionResult_Int64> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/remove',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
    /**
     * 删除多条数据
     * @returns FurionResult_List_Int64 OK
     * @throws ApiError
     */
    public static apiUserRemoveMulPost({
        requestBody,
    }: {
        requestBody?: RemoveMulQO,
    }): CancelablePromise<FurionResult_List_Int64> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/remove-mul',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }
}
