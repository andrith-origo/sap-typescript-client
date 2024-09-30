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

import { OrderInvoicePdfGetListData, OrderInvoicePdfGetListParams } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class OrderInvoicePdfGet<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Order
   * @name OrderInvoicePdfGetList
   * @summary Get invoice from Order
   * @request GET:/ORDER_INVOICE_PDF_GET/
   * @secure
   * @response `200` `OrderInvoicePdfGetListData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  orderInvoicePdfGetList = (query: OrderInvoicePdfGetListParams, params: RequestParams = {}) =>
    this.request<OrderInvoicePdfGetListData, void>({
      path: `/ORDER_INVOICE_PDF_GET/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
