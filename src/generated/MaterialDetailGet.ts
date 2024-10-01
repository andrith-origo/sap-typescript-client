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

import { MaterialDetailGetData, MaterialDetailGetParams } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class MaterialDetailGet<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Material
   * @name MaterialDetailGet
   * @summary Get product updates info
   * @request GET:/MATERIAL_DETAIL_GET/
   * @secure
   * @response `200` `MaterialDetailGetData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  materialDetailGet = (query: MaterialDetailGetParams, params: RequestParams = {}) =>
    this.request<MaterialDetailGetData, void>({
      path: `/MATERIAL_DETAIL_GET/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
