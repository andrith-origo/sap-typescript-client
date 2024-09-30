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

import { OrderQuotationPdfGetListData, OrderQuotationPdfGetListParams } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class OrderQuotationPdfGet<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Order
   * @name OrderQuotationPdfGetList
   * @summary Get quotation from invoice
   * @request GET:/ORDER_QUOTATION_PDF_GET/
   * @secure
   * @response `200` `OrderQuotationPdfGetListData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  orderQuotationPdfGetList = (query: OrderQuotationPdfGetListParams, params: RequestParams = {}) =>
    this.request<OrderQuotationPdfGetListData, void>({
      path: `/ORDER_QUOTATION_PDF_GET/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
