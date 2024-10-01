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

import { MaterialCrossSellGetData, MaterialCrossSellGetParams } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class MaterialCrossSellGet<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Material
   * @name MaterialCrossSellGet
   * @summary Get cross selling material.
   * @request GET:/MATERIAL_CROSS_SELL_GET/
   * @secure
   * @response `200` `MaterialCrossSellGetData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  materialCrossSellGet = (query: MaterialCrossSellGetParams, params: RequestParams = {}) =>
    this.request<MaterialCrossSellGetData, void>({
      path: `/MATERIAL_CROSS_SELL_GET/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
