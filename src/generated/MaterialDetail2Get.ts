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

import { MaterialDetail2GetListData, MaterialDetail2GetListParams } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class MaterialDetail2Get<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Material
   * @name MaterialDetail2GetList
   * @summary Get product updates info
   * @request GET:/MATERIAL_DETAIL2_GET/
   * @secure
   * @response `200` `MaterialDetail2GetListData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  materialDetail2GetList = (query: MaterialDetail2GetListParams, params: RequestParams = {}) =>
    this.request<MaterialDetail2GetListData, void>({
      path: `/MATERIAL_DETAIL2_GET/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
