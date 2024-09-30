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

import { BomsBaseGetCreateData } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class BomsBaseGet<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Boms
   * @name BomsBaseGetCreate
   * @summary Get Boms base info
   * @request POST:/BOMS_BASE_GET
   * @secure
   * @response `200` `BomsBaseGetCreateData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  bomsBaseGetCreate = (JSON: any, params: RequestParams = {}) =>
    this.request<BomsBaseGetCreateData, void>({
      path: `/BOMS_BASE_GET`,
      method: "POST",
      body: JSON,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
