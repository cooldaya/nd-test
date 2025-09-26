/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FurionResult_String } from '../models/FurionResult_String';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WeatherService {
    /**
     * 获取天气api token
     * @returns FurionResult_String OK
     * @throws ApiError
     */
    public static apiWeatherWeatherTokenPost(): CancelablePromise<FurionResult_String> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/weather/weather-token',
        });
    }
}
