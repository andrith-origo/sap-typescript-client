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

import { MaterialBase2GetData } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class MaterialBase2Get<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Material
   * @name MaterialBase2Get
   * @summary Get material basic information
   * @request POST:/MATERIAL_BASE2_GET/
   * @secure
   * @response `200` `MaterialBase2GetData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  materialBase2Get = (data: any, params: RequestParams = {}) =>
    this.request<MaterialBase2GetData, void>({
      path: `/MATERIAL_BASE2_GET/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
