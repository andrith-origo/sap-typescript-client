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

import { CustomerAccLimitCheckData, CustomerAccLimitCheckParams } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class CustomerAccLimitCheck<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Customer
   * @name CustomerAccLimitCheck
   * @summary Check invoice account limit and approval
   * @request GET:/CUSTOMER_ACC_LIMIT_CHECK/
   * @secure
   * @response `200` `CustomerAccLimitCheckData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  customerAccLimitCheck = (query: CustomerAccLimitCheckParams, params: RequestParams = {}) =>
    this.request<CustomerAccLimitCheckData, void>({
      path: `/CUSTOMER_ACC_LIMIT_CHECK/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
