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

import { CustomerShiptoAddrDelData } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class CustomerShiptoAddrDel<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Customer
   * @name CustomerShiptoAddrDel
   * @summary Remove ship to address for Customer
   * @request POST:/CUSTOMER_SHIPTO_ADDR_DEL/
   * @secure
   * @response `200` `CustomerShiptoAddrDelData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  customerShiptoAddrDel = (data: any, params: RequestParams = {}) =>
    this.request<CustomerShiptoAddrDelData, void>({
      path: `/CUSTOMER_SHIPTO_ADDR_DEL/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
