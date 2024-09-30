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

import { MaterialBaseGetCreateData } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class MaterialBaseGet<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Material
   * @name MaterialBaseGetCreate
   * @summary Get material basic information
   * @request POST:/MATERIAL_BASE_GET/
   * @secure
   * @response `200` `MaterialBaseGetCreateData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  materialBaseGetCreate = (JSON: any, params: RequestParams = {}) =>
    this.request<MaterialBaseGetCreateData, void>({
      path: `/MATERIAL_BASE_GET/`,
      method: "POST",
      body: JSON,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
