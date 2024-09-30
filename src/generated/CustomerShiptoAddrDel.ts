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

import { CustomerShiptoAddrDelCreateData } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class CustomerShiptoAddrDel<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Customer
   * @name CustomerShiptoAddrDelCreate
   * @summary Remove ship to address for Customer
   * @request POST:/CUSTOMER_SHIPTO_ADDR_DEL/
   * @secure
   * @response `200` `CustomerShiptoAddrDelCreateData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  customerShiptoAddrDelCreate = (JSON: any, params: RequestParams = {}) =>
    this.request<CustomerShiptoAddrDelCreateData, void>({
      path: `/CUSTOMER_SHIPTO_ADDR_DEL/`,
      method: "POST",
      body: JSON,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
