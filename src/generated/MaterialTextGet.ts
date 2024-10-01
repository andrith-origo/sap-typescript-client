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

import { MaterialTextGetData, MaterialTextGetParams } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class MaterialTextGet<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Material
   * @name MaterialTextGet
   * @summary Get long text for material
   * @request GET:/MATERIAL_TEXT_GET/
   * @secure
   * @response `200` `MaterialTextGetData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  materialTextGet = (query: MaterialTextGetParams, params: RequestParams = {}) =>
    this.request<MaterialTextGetData, void>({
      path: `/MATERIAL_TEXT_GET/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
