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

import { MsJournalGetCreateData } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class MsJournalGet<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Other
   * @name MsJournalGetCreate
   * @summary Get journals
   * @request POST:/MS_JOURNAL_GET/
   * @secure
   * @response `200` `MsJournalGetCreateData` successful operation
   * @response `401` `void` not authorized
   * @response `404` `void` not found
   * @response `500` `void` error
   */
  msJournalGetCreate = (JSON: any, params: RequestParams = {}) =>
    this.request<MsJournalGetCreateData, void>({
      path: `/MS_JOURNAL_GET/`,
      method: "POST",
      body: JSON,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
