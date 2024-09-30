/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { ClassCharGetListData, ClassCharGetListParams } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class ClassCharGet<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Other
   * @name ClassCharGetList
   * @summary Get Class and Characteristic
   * @request GET:/CLASS_CHAR_GET/
   * @secure
   * @response `200` `ClassCharGetListData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  classCharGetList = (query: ClassCharGetListParams, params: RequestParams = {}) =>
    this.request<ClassCharGetListData, void>({
      path: `/CLASS_CHAR_GET/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
