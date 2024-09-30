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

import { MaterialCrossSellGetListData, MaterialCrossSellGetListParams } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class MaterialCrossSellGet<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Material
   * @name MaterialCrossSellGetList
   * @summary Get cross selling material.
   * @request GET:/MATERIAL_CROSS_SELL_GET/
   * @secure
   * @response `200` `MaterialCrossSellGetListData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  materialCrossSellGetList = (query: MaterialCrossSellGetListParams, params: RequestParams = {}) =>
    this.request<MaterialCrossSellGetListData, void>({
      path: `/MATERIAL_CROSS_SELL_GET/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
