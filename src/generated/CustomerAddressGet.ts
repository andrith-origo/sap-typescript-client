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

import { CustomerAddressGetListData, CustomerAddressGetListParams } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class CustomerAddressGet<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Customer
   * @name CustomerAddressGetList
   * @summary Get all addresses for Customer
   * @request GET:/CUSTOMER_ADDRESS_GET/
   * @secure
   * @response `200` `CustomerAddressGetListData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  customerAddressGetList = (query: CustomerAddressGetListParams, params: RequestParams = {}) =>
    this.request<CustomerAddressGetListData, void>({
      path: `/CUSTOMER_ADDRESS_GET/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
