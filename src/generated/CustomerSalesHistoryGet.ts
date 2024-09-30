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

import { CustomerSalesHistoryGetListData, CustomerSalesHistoryGetListParams } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class CustomerSalesHistoryGet<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Customer
   * @name CustomerSalesHistoryGetList
   * @summary Get Purchase History for Customer
   * @request GET:/CUSTOMER_SALES_HISTORY_GET/
   * @secure
   * @response `200` `CustomerSalesHistoryGetListData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  customerSalesHistoryGetList = (query: CustomerSalesHistoryGetListParams, params: RequestParams = {}) =>
    this.request<CustomerSalesHistoryGetListData, void>({
      path: `/CUSTOMER_SALES_HISTORY_GET/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
