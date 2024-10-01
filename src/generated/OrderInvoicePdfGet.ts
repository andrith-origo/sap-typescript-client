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

import { OrderInvoicePdfGetData, OrderInvoicePdfGetParams } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class OrderInvoicePdfGet<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Order
   * @name OrderInvoicePdfGet
   * @summary Get invoice from Order
   * @request GET:/ORDER_INVOICE_PDF_GET/
   * @secure
   * @response `200` `OrderInvoicePdfGetData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  orderInvoicePdfGet = (query: OrderInvoicePdfGetParams, params: RequestParams = {}) =>
    this.request<OrderInvoicePdfGetData, void>({
      path: `/ORDER_INVOICE_PDF_GET/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
