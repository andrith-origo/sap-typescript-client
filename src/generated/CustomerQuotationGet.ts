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

import { CustomerQuotationGetListData, CustomerQuotationGetListParams } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class CustomerQuotationGet<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Customer
   * @name CustomerQuotationGetList
   * @summary Get quotation for Customer
   * @request GET:/CUSTOMER_QUOTATION_GET/
   * @secure
   * @response `200` `CustomerQuotationGetListData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  customerQuotationGetList = (query: CustomerQuotationGetListParams, params: RequestParams = {}) =>
    this.request<CustomerQuotationGetListData, void>({
      path: `/CUSTOMER_QUOTATION_GET/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
