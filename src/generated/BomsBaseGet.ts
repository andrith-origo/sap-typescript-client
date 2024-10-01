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

import { BomsBaseGetData } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class BomsBaseGet<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Boms
   * @name BomsBaseGet
   * @summary Get Boms base info
   * @request POST:/BOMS_BASE_GET
   * @secure
   * @response `200` `BomsBaseGetData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  bomsBaseGet = (data: any, params: RequestParams = {}) =>
    this.request<BomsBaseGetData, void>({
      path: `/BOMS_BASE_GET`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
