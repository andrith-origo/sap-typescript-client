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

import { BomsGetData, BomsGetParams } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class BomsGet<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Boms
   * @name BomsGet
   * @summary Get product package
   * @request GET:/BOMS_GET/
   * @secure
   * @response `200` `BomsGetData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  bomsGet = (query: BomsGetParams, params: RequestParams = {}) =>
    this.request<BomsGetData, void>({
      path: `/BOMS_GET/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
