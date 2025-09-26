import type { ApiRequestOptions } from '../swagger-apis/core/ApiRequestOptions';
import type { ApiResult } from '../swagger-apis/core/ApiResult';


const cusErrorCodeMap = {
    '401':(options: ApiRequestOptions, result: ApiResult)=>{
        console.log(`Unauthorized request: ${options.url}`);
    }
}




const catchCustomErrorCodes = (options: ApiRequestOptions, result: ApiResult):void=>{
    const cusErrorCode = result.body?.statusCode;
    const errorHandle = cusErrorCodeMap[cusErrorCode];
    if(errorHandle){
        errorHandle(options, result);
        throw new Error(`Custom error code ${cusErrorCode} is handled`);
    }
}

export {
    catchCustomErrorCodes
}