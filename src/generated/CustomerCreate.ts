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

import { CustomerCreateData } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class CustomerCreate<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Customer
   * @name CustomerCreate
   * @summary Create new customer from National registry
   * @request POST:/CUSTOMER_CREATE/
   * @secure
   * @response `200` `CustomerCreateData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  customerCreate = (data: any, params: RequestParams = {}) =>
    this.request<CustomerCreateData, void>({
      path: `/CUSTOMER_CREATE/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
