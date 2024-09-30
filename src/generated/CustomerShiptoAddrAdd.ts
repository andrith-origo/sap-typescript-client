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

import { CustomerShiptoAddrAddCreateData } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class CustomerShiptoAddrAdd<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Customer
   * @name CustomerShiptoAddrAddCreate
   * @summary Create ship to address Customer
   * @request POST:/CUSTOMER_SHIPTO_ADDR_ADD/
   * @secure
   * @response `200` `CustomerShiptoAddrAddCreateData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  customerShiptoAddrAddCreate = (JSON: any, params: RequestParams = {}) =>
    this.request<CustomerShiptoAddrAddCreateData, void>({
      path: `/CUSTOMER_SHIPTO_ADDR_ADD/`,
      method: "POST",
      body: JSON,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
