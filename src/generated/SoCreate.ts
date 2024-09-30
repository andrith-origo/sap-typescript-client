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

import { SoCreateCreateData } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class SoCreate<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Order
   * @name SoCreateCreate
   * @summary Creates Sales Order
   * @request POST:/SO_CREATE/
   * @secure
   * @response `200` `SoCreateCreateData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  soCreateCreate = (JSON: any, params: RequestParams = {}) =>
    this.request<SoCreateCreateData, void>({
      path: `/SO_CREATE/`,
      method: "POST",
      body: JSON,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
