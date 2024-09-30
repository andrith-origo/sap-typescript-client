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

import { BomsBase2GetCreateData } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class BomsBase2Get<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Boms
   * @name BomsBase2GetCreate
   * @summary Z_WEB_EC_PRODUCT_UPD_SMALL_GET
   * @request POST:/BOMS_BASE2_GET/
   * @secure
   * @response `200` `BomsBase2GetCreateData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  bomsBase2GetCreate = (JSON: any, params: RequestParams = {}) =>
    this.request<BomsBase2GetCreateData, void>({
      path: `/BOMS_BASE2_GET/`,
      method: "POST",
      body: JSON,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
