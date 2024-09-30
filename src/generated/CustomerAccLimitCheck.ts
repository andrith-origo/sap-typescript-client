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

import { CustomerAccLimitCheckListData, CustomerAccLimitCheckListParams } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class CustomerAccLimitCheck<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Customer
   * @name CustomerAccLimitCheckList
   * @summary Check invoice account limit and approval
   * @request GET:/CUSTOMER_ACC_LIMIT_CHECK/
   * @secure
   * @response `200` `CustomerAccLimitCheckListData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  customerAccLimitCheckList = (query: CustomerAccLimitCheckListParams, params: RequestParams = {}) =>
    this.request<CustomerAccLimitCheckListData, void>({
      path: `/CUSTOMER_ACC_LIMIT_CHECK/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
