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

import { NationalRegistryReadListData, NationalRegistryReadListParams } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class NationalRegistryRead<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Other
   * @name NationalRegistryReadList
   * @request GET:/NATIONAL_REGISTRY_READ/
   * @secure
   * @response `200` `NationalRegistryReadListData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  nationalRegistryReadList = (query: NationalRegistryReadListParams, params: RequestParams = {}) =>
    this.request<NationalRegistryReadListData, void>({
      path: `/NATIONAL_REGISTRY_READ/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
