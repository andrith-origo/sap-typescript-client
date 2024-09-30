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

import { BomsGetListData, BomsGetListParams } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class BomsGet<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Boms
   * @name BomsGetList
   * @summary Get product package
   * @request GET:/BOMS_GET/
   * @secure
   * @response `200` `BomsGetListData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  bomsGetList = (query: BomsGetListParams, params: RequestParams = {}) =>
    this.request<BomsGetListData, void>({
      path: `/BOMS_GET/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
