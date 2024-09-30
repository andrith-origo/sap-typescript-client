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

import { MaterialTextGetListData, MaterialTextGetListParams } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class MaterialTextGet<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Material
   * @name MaterialTextGetList
   * @summary Get long text for material
   * @request GET:/MATERIAL_TEXT_GET/
   * @secure
   * @response `200` `MaterialTextGetListData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  materialTextGetList = (query: MaterialTextGetListParams, params: RequestParams = {}) =>
    this.request<MaterialTextGetListData, void>({
      path: `/MATERIAL_TEXT_GET/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
