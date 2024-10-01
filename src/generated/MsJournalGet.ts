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

import { MsJournalGetData } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class MsJournalGet<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Other
   * @name MsJournalGet
   * @summary Get journals
   * @request POST:/MS_JOURNAL_GET/
   * @secure
   * @response `200` `MsJournalGetData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  msJournalGet = (data: any, params: RequestParams = {}) =>
    this.request<MsJournalGetData, void>({
      path: `/MS_JOURNAL_GET/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
