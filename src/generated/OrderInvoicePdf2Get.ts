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

import { OrderInvoicePdf2GetData, OrderInvoicePdf2GetParams } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class OrderInvoicePdf2Get<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Order
   * @name OrderInvoicePdf2Get
   * @summary Get invoice from Order
   * @request GET:/ORDER_INVOICE_PDF2_GET/
   * @secure
   * @response `200` `OrderInvoicePdf2GetData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  orderInvoicePdf2Get = (query: OrderInvoicePdf2GetParams, params: RequestParams = {}) =>
    this.request<OrderInvoicePdf2GetData, void>({
      path: `/ORDER_INVOICE_PDF2_GET/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
