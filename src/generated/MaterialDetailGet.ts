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

import { MaterialDetailGetListData, MaterialDetailGetListParams } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class MaterialDetailGet<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Material
   * @name MaterialDetailGetList
   * @summary Get product updates info
   * @request GET:/MATERIAL_DETAIL_GET/
   * @secure
   * @response `200` `MaterialDetailGetListData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  materialDetailGetList = (query: MaterialDetailGetListParams, params: RequestParams = {}) =>
    this.request<MaterialDetailGetListData, void>({
      path: `/MATERIAL_DETAIL_GET/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
