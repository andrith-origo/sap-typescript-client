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

import { CustomerAddressModData } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class CustomerAddressMod<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Customer
   * @name CustomerAddressMod
   * @summary Modify customer address
   * @request POST:/CUSTOMER_ADDRESS_MOD/
   * @secure
   * @response `200` `CustomerAddressModData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  customerAddressMod = (data: any, params: RequestParams = {}) =>
    this.request<CustomerAddressModData, void>({
      path: `/CUSTOMER_ADDRESS_MOD/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
