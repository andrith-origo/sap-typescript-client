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

import { CustomerBillingdocGetData, CustomerBillingdocGetParams } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class CustomerBillingdocGet<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Customer
   * @name CustomerBillingdocGet
   * @summary Get customers billing documents
   * @request GET:/CUSTOMER_BILLINGDOC_GET/
   * @secure
   * @response `200` `CustomerBillingdocGetData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  customerBillingdocGet = (query: CustomerBillingdocGetParams, params: RequestParams = {}) =>
    this.request<CustomerBillingdocGetData, void>({
      path: `/CUSTOMER_BILLINGDOC_GET/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
