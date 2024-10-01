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

export type STRING = string;

export interface ZECSBOMSBASE2GET {
  DATA?: {
    RETURN?: {
      /** @maxLength 1 */
      TYPE?: string;
      /** @maxLength 220 */
      MESSAGE?: string;
    }[];
    T_BOMS?: {
      /** @maxLength 40 */
      MATNR?: string;
      /** @maxLength 8 */
      STLNR?: string;
      /** @maxLength 40 */
      MAKTX?: string;
      /** @maxLength 3 */
      MVGR3?: string;
      BASIC_TEXT?: {
        /** @maxLength 2 */
        TDFORMAT?: string;
        /** @maxLength 132 */
        TDLINE?: string;
      }[];
      PRODUCTS?: {
        MENGE?: number;
        /** @maxLength 40 */
        MATNR?: string;
        VERD_VSK?: number;
        VERD?: number;
        TAX_PERCENT?: number;
        /** @maxLength 1 */
        TAXM1?: string;
        TAB_STORAGE?: {
          /** @maxLength 4 */
          LGORT?: string;
          /** @maxLength 16 */
          LGOBE?: string;
          PHYS_QTY?: number;
          NOTDEL_QTY?: number;
          RSV_QTY?: number;
          AVAIL_QTY?: number;
          AVAIL_DATE?: string;
          ERFMG?: number;
        }[];
        /** @maxLength 3 */
        MVGR3?: string;
        /** @maxLength 3 */
        MVGR2?: string;
        /** @maxLength 10 */
        DISCOUNT_TYPE?: string;
        GR_VERD?: number;
        GR_VERD_VSK?: number;
        PHYS_QTY?: number;
        NOTDEL_QTY?: number;
        RSV_QTY?: number;
        AVAIL_QTY?: number;
        PO_QTY?: number;
        CONF_QTY?: number;
        SCHED_DATE?: string;
        CONF_DATE?: string;
        AVAIL_DATE?: string;
        LAEDA?: string;
        LAUHR?: string;
        /** @maxLength 4 */
        MTART?: string;
        /** @maxLength 3 */
        MVGR1?: string;
      }[];
      VERD?: number;
      VERD_VSK?: number;
      GR_VERD?: number;
      GR_VERD_VSK?: number;
    }[];
  };
}

export interface ZEC_S_BOMS_BASE_GET {
  DATA?: {
    RETURN?: {
      /** @maxLength 1 */
      TYPE?: string;
      /** @maxLength 220 */
      MESSAGE?: string;
    }[];
    T_BOMS?: {
      /** @maxLength 40 */
      MATNR?: string;
      /** @maxLength 8 */
      STLNR?: string;
      /** @maxLength 40 */
      MAKTX?: string;
      /** @maxLength 3 */
      MVGR3?: string;
      BASIC_TEXT?: {
        /** @maxLength 2 */
        TDFORMAT?: string;
        /** @maxLength 132 */
        TDLINE?: string;
      }[];
      PRODUCTS?: {
        MENGE?: number;
        /** @maxLength 40 */
        MATNR?: string;
        VERD_VSK?: number;
        VERD?: number;
        TAX_PERCENT?: number;
        /** @maxLength 1 */
        TAXM1?: string;
        TAB_STORAGE?: {
          /** @maxLength 4 */
          LGORT?: string;
          /** @maxLength 16 */
          LGOBE?: string;
          PHYS_QTY?: number;
          NOTDEL_QTY?: number;
          RSV_QTY?: number;
          AVAIL_QTY?: number;
          AVAIL_DATE?: string;
          ERFMG?: number;
        }[];
        /** @maxLength 3 */
        MVGR3?: string;
        /** @maxLength 3 */
        MVGR2?: string;
        /** @maxLength 10 */
        DISCOUNT_TYPE?: string;
        GR_VERD?: number;
        GR_VERD_VSK?: number;
        PHYS_QTY?: number;
        NOTDEL_QTY?: number;
        RSV_QTY?: number;
        AVAIL_QTY?: number;
        PO_QTY?: number;
        CONF_QTY?: number;
        SCHED_DATE?: string;
        CONF_DATE?: string;
        AVAIL_DATE?: string;
        LAEDA?: string;
        LAUHR?: string;
        /** @maxLength 4 */
        MTART?: string;
        /** @maxLength 3 */
        MVGR1?: string;
      }[];
      VERD?: number;
      VERD_VSK?: number;
      GR_VERD?: number;
      GR_VERD_VSK?: number;
    }[];
  };
}

export interface ZEC_S_BOMS_GET {
  DATA?: {
    RETURN?: {
      /** @maxLength 1 */
      TYPE?: string;
      /** @maxLength 220 */
      MESSAGE?: string;
    }[];
    T_BOMS?: {
      /** @maxLength 40 */
      MATNR?: string;
      ANDAT?: string;
      /** @maxLength 12 */
      ANNAM?: string;
      /** @maxLength 8 */
      STLNR?: string;
      /** @maxLength 40 */
      MAKTX?: string;
      /** @maxLength 100 */
      ZZMAKTX?: string;
      COMPONENTS?: {
        /** @maxLength 40 */
        IDNRK?: string;
        /** @maxLength 40 */
        MAKTX?: string;
        MENGE?: number;
        SOLUVERD?: number;
        SOLUVERD_VSK?: number;
        GR_VERD?: number;
        GR_VERD_VSK?: number;
        /** @maxLength 3 */
        MVGR3?: string;
        KBETR?: number;
      }[];
      WEBTEXT?: {
        /** @maxLength 2 */
        TDFORMAT?: string;
        /** @maxLength 132 */
        TDLINE?: string;
      }[];
      /** @format binary */
      NEWTEXT?: File;
      /** @maxLength 18 */
      CLASS?: string;
      /** @maxLength 18 */
      PARENT_CLASS?: string;
      /** @maxLength 18 */
      CLASS2?: string;
      /** @maxLength 18 */
      PARENT_CLASS2?: string;
      /** @maxLength 3 */
      MVGR3?: string;
      VERD?: number;
      VERD_VSK?: number;
      GR_VERD?: number;
      GR_VERD_VSK?: number;
      TAB_CHARACT?: {
        /** @maxLength 30 */
        CHARACT?: string;
        /** @maxLength 30 */
        VALUE_CHAR?: string;
        /** @maxLength 1 */
        INHERITED?: string;
        INSTANCE?: string;
        /** @maxLength 30 */
        VALUE_NEUTRAL?: string;
        /** @maxLength 30 */
        CHARACT_DESCR?: string;
        /** @maxLength 70 */
        VALUE_CHAR_LONG?: string;
        /** @maxLength 70 */
        VALUE_NEUTRAL_LONG?: string;
      }[];
      TAB_CHARACT2?: {
        /** @maxLength 30 */
        CHARACT?: string;
        /** @maxLength 30 */
        VALUE_CHAR?: string;
        /** @maxLength 1 */
        INHERITED?: string;
        INSTANCE?: string;
        /** @maxLength 30 */
        VALUE_NEUTRAL?: string;
        /** @maxLength 30 */
        CHARACT_DESCR?: string;
        /** @maxLength 70 */
        VALUE_CHAR_LONG?: string;
        /** @maxLength 70 */
        VALUE_NEUTRAL_LONG?: string;
      }[];
      /** @maxLength 1 */
      INCOMPLETE?: string;
    }[];
  };
}

export interface ZEC_S_CLASS_CHAR_GET {
  DATA?: {
    T_CLASS_CHARACT?: {
      /** @maxLength 18 */
      CLASSNAME?: string;
      /** @maxLength 40 */
      DESCRIPTION?: string;
      /** @maxLength 1 */
      STATUS?: string;
      /** @maxLength 18 */
      PARENT_CLASSNAME?: string;
      TAB_CHARACT?: {
        /** @maxLength 30 */
        NAME_CHAR?: string;
        /** @maxLength 30 */
        DESCR_CHAR?: string;
        /** @maxLength 1 */
        ENTRY_OBLIGATORY?: string;
        /** @maxLength 1 */
        ADDITIONAL_VAL?: string;
        /** @maxLength 3 */
        UNIT?: string;
        /** @maxLength 6 */
        UNIT_T_EXT?: string;
        /** @maxLength 3 */
        BASE_UOM_ISO?: string;
        /** @maxLength 5 */
        CURRENCY?: string;
        /** @maxLength 3 */
        CURRENCY_ISO?: string;
        /** @maxLength 4 */
        DATA_TYPE?: string;
        NUMBER_DIGITS?: number;
        NUMBER_DECIMALS?: number;
        /** @maxLength 30 */
        TEMPLATE?: string;
        /** @maxLength 3 */
        DIN_KEY?: string;
        /** @maxLength 10 */
        DEPARTMENT_VIEW?: string;
        /** @maxLength 1 */
        SIGN?: string;
        /** @maxLength 1 */
        SINGLE_VALUE?: string;
        /** @maxLength 1 */
        INTERVALS_ALLOWED?: string;
        /** @maxLength 1 */
        CASE_SENSITIVE?: string;
        /** @maxLength 30 */
        OBJECT_TABLE?: string;
        /** @maxLength 30 */
        TABLE_FIELD?: string;
        /** @maxLength 1 */
        CHAR_INHERITED?: string;
        /** @maxLength 70 */
        TEMPLATE_LONG?: string;
      }[];
      TAB_CHARACT_VALUES?: {
        /** @maxLength 30 */
        NAME_CHAR?: string;
        /** @maxLength 30 */
        CHAR_VALUE?: string;
        /** @maxLength 30 */
        DESCR_CVAL?: string;
        NUM_VAL_FM?: number;
        NUM_VAL_TO?: number;
        CURR_VAL_FM?: number;
        CURR_VAL_TO?: number;
        /** @maxLength 1 */
        VAL_RELATN?: string;
        /** @maxLength 30 */
        CHAR_VALUE_HIGH?: string;
        /** @maxLength 70 */
        CHAR_VALUE_LONG?: string;
        /** @maxLength 70 */
        DESCR_CVAL_LONG?: string;
        /** @maxLength 70 */
        CHAR_VALUE_HIGH_LONG?: string;
      }[];
    }[];
    RETURN?: {
      /** @maxLength 1 */
      TYPE?: string;
      /** @maxLength 220 */
      MESSAGE?: string;
    }[];
  };
}

export interface ZEC_S_CUSTOMER_ACC_LIMIT_CHECK {
  DATA?: {
    RETURN?: {
      /** @maxLength 1 */
      TYPE?: string;
      /** @maxLength 220 */
      MESSAGE?: string;
    }[];
    /** @maxLength 1 */
    AVAIL_ACC?: string;
    /** @maxLength 1 */
    INV_APP_AMT?: string;
  };
}

export interface ZEC_S_CUSTOMER_ADDRESS_GET {
  DATA?: {
    T_ADDRESS?: {
      /** @maxLength 40 */
      NAME2?: string;
      /** @maxLength 40 */
      NAME3?: string;
      /** @maxLength 40 */
      NAME4?: string;
      /** @maxLength 30 */
      TEL2_NUMBR?: string;
      /** @maxLength 2 */
      ADDR_TYPE?: string;
      /** @maxLength 10 */
      CUSTOMER?: string;
      /** @maxLength 20 */
      SORT1?: string;
      /** @maxLength 40 */
      NAME?: string;
      /** @maxLength 3 */
      COUNTRY?: string;
      /** @maxLength 2 */
      COUNTRYISO?: string;
      /** @maxLength 40 */
      CITY?: string;
      /** @maxLength 10 */
      POSTL_COD1?: string;
      /** @maxLength 3 */
      REGION?: string;
      /** @maxLength 60 */
      STREET?: string;
      /** @maxLength 30 */
      TEL1_NUMBR?: string;
      /** @maxLength 30 */
      FAX_NUMBER?: string;
      /** @maxLength 10 */
      ADDRESS?: string;
    }[];
    RETURN?: {
      /** @maxLength 1 */
      TYPE?: string;
      /** @maxLength 220 */
      MESSAGE?: string;
    }[];
  };
}

export interface ZEC_S_CUSTOMER_ADDRESS_MOD {
  DATA?: {
    RETURN?: {
      /** @maxLength 1 */
      TYPE?: string;
      /** @maxLength 220 */
      MESSAGE?: string;
    }[];
  };
}

export interface ZEC_S_CUSTOMER_BILLINGDOC_GET {
  DATA?: {
    RETURN?: {
      /** @maxLength 1 */
      TYPE?: string;
      /** @maxLength 220 */
      MESSAGE?: string;
    }[];
    T_TEXTS?: {
      /** @maxLength 70 */
      TDNAME?: string;
      /** @maxLength 4 */
      TDID?: string;
      LINES?: {
        /** @maxLength 2 */
        TDFORMAT?: string;
        /** @maxLength 132 */
        TDLINE?: string;
      }[];
    }[];
    T_BILLING_DOC?: {
      ITEMS?: {
        BILLINGDOCUMENTITEM?: string;
        SALESDOCUMENTITEM?: string;
        /** @maxLength 40 */
        PRODUCT?: string;
        /** @maxLength 40 */
        BILLINGDOCUMENTITEMTEXT?: string;
        BILLINGQUANTITY?: number;
        BILLINGQUANTITYINBASEUNIT?: number;
        /** @maxLength 3 */
        BASEUNIT?: string;
        NETAMOUNT?: number;
        TAXAMOUNT?: number;
        TOTALAMOUNT?: number;
        TRANSPORTAMOUNT?: number;
        /** @maxLength 5 */
        TRANSACTIONCURRENCY?: string;
        /** @maxLength 10 */
        BILLINGPLAN?: string;
        BILLINGPLANITEM?: string;
        BILLINGPLANBILLINGDATE?: string;
        BILLINGPLANSERVICESTARTDATE?: string;
      }[];
      /** @maxLength 10 */
      SOLDTOPARTY?: string;
      /** @maxLength 10 */
      BILLINGDOCUMENT?: string;
      /** @maxLength 4 */
      SDDOCUMENTCATEGORY?: string;
      /** @maxLength 4 */
      BILLINGDOCUMENTTYPE?: string;
      BILLINGDOCUMENTDATE?: string;
      CREATIONDATE?: string;
      CREATIONTIME?: string;
      /** @maxLength 2 */
      SHIPPINGCONDITION?: string;
      /** @maxLength 3 */
      INCOTERMSCLASSIFICATION?: string;
      /** @maxLength 4 */
      CUSTOMERPAYMENTTERMS?: string;
      /** @maxLength 1 */
      INVOICECLEARINGSTATUS?: string;
      /** @maxLength 1 */
      FULLYPAID?: string;
      /** @maxLength 10 */
      SALESDOCUMENT?: string;
      /** @maxLength 4 */
      COMPANYCODE?: string;
      /** @maxLength 4 */
      SALESORGANIZATION?: string;
      /** @maxLength 3 */
      SALESGROUP?: string;
      /** @maxLength 4 */
      SALESOFFICE?: string;
      /** @maxLength 4 */
      SALESDOCUMENTTYPE?: string;
      SALESDOCUMENTDATE?: string;
      /** @maxLength 35 */
      PURCHASEORDERBYCUSTOMER?: string;
      /** @maxLength 10 */
      PAYER?: string;
      /** @maxLength 80 */
      PAYERFULLNAME?: string;
      /** @maxLength 60 */
      PAYERSTREETNAME?: string;
      /** @maxLength 10 */
      PAYERPOSTALCODE?: string;
      /** @maxLength 40 */
      PAYERCITYNAME?: string;
      /** @maxLength 10 */
      SHIPTO?: string;
      /** @maxLength 80 */
      SHIPTOFULLNAME?: string;
      /** @maxLength 60 */
      SHIPTOSTREETNAME?: string;
      /** @maxLength 10 */
      SHIPTOPOSTALCODE?: string;
      /** @maxLength 40 */
      SHIPTOCITYNAME?: string;
      /** @maxLength 241 */
      SOLDTOEMAILADDRESS?: string;
    }[];
  };
}

export interface ZEC_S_CUSTOMER_CREATE {
  DATA?: {
    RETURN?: {
      /** @maxLength 1 */
      TYPE?: string;
      /** @maxLength 220 */
      MESSAGE?: string;
    }[];
    /** @maxLength 3 */
    INCOTERMS?: string;
    /** @maxLength 2 */
    CUSTOMER_GROUP?: string;
    /** @maxLength 10 */
    KUNNR?: string;
  };
}

export interface ZEC_S_CUSTOMER_QUOTATION_GET {
  DATA?: {
    T_QUOTATION?: {
      HEADER?: {
        /** @maxLength 10 */
        VBELN?: string;
        ERDAT?: string;
        /** @maxLength 12 */
        ERNAM?: string;
        BNDDT?: string;
        /** @maxLength 5 */
        WAERK?: string;
        /** @maxLength 10 */
        KUNNR?: string;
        /** @maxLength 35 */
        BSTKD?: string;
      };
      ITEM?: {
        /** @maxLength 10 */
        VBELN?: string;
        POSNR?: string;
        /** @maxLength 40 */
        MATNR?: string;
        /** @maxLength 40 */
        ARKTX?: string;
        /** @maxLength 3 */
        ZIEME?: string;
        KWMENG?: number;
        TOTALBASEPRICE?: number;
        TOTALDISCOUNT?: number;
        TOTALNETPRICE?: number;
        TOTALTAX?: number;
        UEPOS?: string;
      }[];
    }[];
    RETURN?: {
      /** @maxLength 1 */
      TYPE?: string;
      /** @maxLength 220 */
      MESSAGE?: string;
    }[];
  };
}

export interface ZEC_S_CUSTOMER_SALES_HIST_GET {
  DATA?: {
    RETURN?: {
      /** @maxLength 1 */
      TYPE?: string;
      /** @maxLength 220 */
      MESSAGE?: string;
    }[];
    T_SALES_HISTORY?: {
      /** @maxLength 10 */
      VBELN?: string;
      POSNR?: string;
      /** @maxLength 4 */
      FKART?: string;
      NETWR?: number;
      VERDVSK?: number;
      /** @maxLength 40 */
      VTEXT?: string;
      /** @maxLength 5 */
      WAERK?: string;
      /** @maxLength 10 */
      KUNAG?: string;
      /** @maxLength 30 */
      NAME1?: string;
      /** @maxLength 40 */
      MATNR?: string;
      /** @maxLength 40 */
      ARKTX?: string;
      /** @maxLength 18 */
      PRODH?: string;
      /** @maxLength 18 */
      PRODUCTHIERARCHY1?: string;
      /** @maxLength 40 */
      TEXT_LEVEL1?: string;
      /** @maxLength 18 */
      PRODUCTHIERARCHY2?: string;
      /** @maxLength 40 */
      TEXT_LEVEL2?: string;
      FKIMG?: number;
      /** @maxLength 3 */
      VRKME?: string;
      FKDAT?: string;
    }[];
  };
}

export interface ZEC_S_CUSTOMER_SHIPTO_ADDR_ADD {
  DATA?: {
    /** @maxLength 10 */
    SHIPTO?: string;
    RETURN?: {
      /** @maxLength 1 */
      TYPE?: string;
      /** @maxLength 220 */
      MESSAGE?: string;
    }[];
  };
}

export interface ZEC_S_CUSTOMER_SHIPTO_ADDR_DEL {
  DATA?: {
    RETURN?: {
      /** @maxLength 1 */
      TYPE?: string;
      /** @maxLength 220 */
      MESSAGE?: string;
    }[];
  };
}

export interface ZECSMATERIALBASE2GET {
  DATA?: {
    T_MATERIAL?: {
      /** @maxLength 40 */
      MATNR?: string;
      VERD_VSK?: number;
      VERD?: number;
      TAX_PERCENT?: number;
      /** @maxLength 1 */
      TAXM1?: string;
      TAB_STORAGE?: {
        /** @maxLength 4 */
        LGORT?: string;
        /** @maxLength 16 */
        LGOBE?: string;
        PHYS_QTY?: number;
        NOTDEL_QTY?: number;
        RSV_QTY?: number;
        AVAIL_QTY?: number;
        AVAIL_DATE?: string;
        ERFMG?: number;
      }[];
      /** @maxLength 3 */
      MVGR3?: string;
      /** @maxLength 3 */
      MVGR2?: string;
      /** @maxLength 10 */
      DISCOUNT_TYPE?: string;
      GR_VERD?: number;
      GR_VERD_VSK?: number;
      PHYS_QTY?: number;
      NOTDEL_QTY?: number;
      RSV_QTY?: number;
      AVAIL_QTY?: number;
      PO_QTY?: number;
      CONF_QTY?: number;
      SCHED_DATE?: string;
      CONF_DATE?: string;
      AVAIL_DATE?: string;
      LAEDA?: string;
      LAUHR?: string;
      /** @maxLength 4 */
      MTART?: string;
      /** @maxLength 3 */
      MVGR1?: string;
    }[];
    RETURN?: {
      /** @maxLength 1 */
      TYPE?: string;
      /** @maxLength 220 */
      MESSAGE?: string;
    }[];
  };
}

export interface ZEC_S_MATERIAL_BASE_GET {
  DATA?: {
    RETURN?: {
      /** @maxLength 1 */
      TYPE?: string;
      /** @maxLength 220 */
      MESSAGE?: string;
    }[];
    T_MATERIAL?: {
      /** @maxLength 40 */
      MATNR?: string;
      VERD_VSK?: number;
      VERD?: number;
      TAX_PERCENT?: number;
      /** @maxLength 1 */
      TAXM1?: string;
      TAB_STORAGE?: {
        /** @maxLength 4 */
        LGORT?: string;
        /** @maxLength 16 */
        LGOBE?: string;
        PHYS_QTY?: number;
        NOTDEL_QTY?: number;
        RSV_QTY?: number;
        AVAIL_QTY?: number;
        AVAIL_DATE?: string;
        ERFMG?: number;
      }[];
      /** @maxLength 3 */
      MVGR3?: string;
      /** @maxLength 3 */
      MVGR2?: string;
      /** @maxLength 10 */
      DISCOUNT_TYPE?: string;
      GR_VERD?: number;
      GR_VERD_VSK?: number;
      PHYS_QTY?: number;
      NOTDEL_QTY?: number;
      RSV_QTY?: number;
      AVAIL_QTY?: number;
      PO_QTY?: number;
      CONF_QTY?: number;
      SCHED_DATE?: string;
      CONF_DATE?: string;
      AVAIL_DATE?: string;
      LAEDA?: string;
      LAUHR?: string;
      /** @maxLength 4 */
      MTART?: string;
      /** @maxLength 3 */
      MVGR1?: string;
    }[];
  };
}

export interface ZEC_S_MATERIAL_CROSS_SELL_GET {
  DATA?: {
    RETURN?: {
      /** @maxLength 1 */
      TYPE?: string;
      /** @maxLength 220 */
      MESSAGE?: string;
    }[];
    T_MATERIAL?: {
      /** @maxLength 40 */
      MATNR?: string;
    }[];
  };
}

export interface ZECSMATERIALDETAIL2GET {
  DATA?: {
    RETURN?: {
      /** @maxLength 1 */
      TYPE?: string;
      /** @maxLength 220 */
      MESSAGE?: string;
    }[];
    T_MATERIAL?: {
      /** @maxLength 40 */
      MATNR?: string;
      /** @maxLength 40 */
      MFRPN?: string;
      /** @maxLength 18 */
      EXTWG?: string;
      /** @maxLength 3 */
      MVGR2?: string;
      /** @maxLength 3 */
      MVGR3?: string;
      /** @maxLength 40 */
      MVGR4?: string;
      /** @maxLength 25 */
      BEZEI?: string;
      /** @maxLength 18 */
      PRDHA?: string;
      /** @maxLength 18 */
      CLASS?: string;
      /** @maxLength 18 */
      PARENT_CLASS?: string;
      /** @maxLength 18 */
      CLASS2?: string;
      /** @maxLength 18 */
      PARENT_CLASS2?: string;
      /** @maxLength 3 */
      DISPO?: string;
      /** @maxLength 18 */
      DSNAM?: string;
      /** @maxLength 18 */
      EAN11?: string;
      TAB_CHARACT?: {
        /** @maxLength 30 */
        CHARACT?: string;
        /** @maxLength 30 */
        VALUE_CHAR?: string;
        /** @maxLength 1 */
        INHERITED?: string;
        INSTANCE?: string;
        /** @maxLength 30 */
        VALUE_NEUTRAL?: string;
        /** @maxLength 30 */
        CHARACT_DESCR?: string;
        /** @maxLength 70 */
        VALUE_CHAR_LONG?: string;
        /** @maxLength 70 */
        VALUE_NEUTRAL_LONG?: string;
      }[];
      TAB_CHARACT2?: {
        /** @maxLength 30 */
        CHARACT?: string;
        /** @maxLength 30 */
        VALUE_CHAR?: string;
        /** @maxLength 1 */
        INHERITED?: string;
        INSTANCE?: string;
        /** @maxLength 30 */
        VALUE_NEUTRAL?: string;
        /** @maxLength 30 */
        CHARACT_DESCR?: string;
        /** @maxLength 70 */
        VALUE_CHAR_LONG?: string;
        /** @maxLength 70 */
        VALUE_NEUTRAL_LONG?: string;
      }[];
      VERD_VSK?: number;
      VERD?: number;
      TAX_PERCENT?: number;
      /** @maxLength 1 */
      TAXM1?: string;
      TAB_STORAGE?: {
        /** @maxLength 4 */
        LGORT?: string;
        /** @maxLength 16 */
        LGOBE?: string;
        PHYS_QTY?: number;
        NOTDEL_QTY?: number;
        RSV_QTY?: number;
        AVAIL_QTY?: number;
        AVAIL_DATE?: string;
        ERFMG?: number;
      }[];
      TAB_CROSS?: {
        /** @maxLength 40 */
        MATNR?: string;
      }[];
      /** @maxLength 40 */
      MAKTX?: string;
      /** @maxLength 100 */
      ZZMAKTX?: string;
      /** @maxLength 1 */
      SPECIAL?: string;
      GR_VERD?: number;
      GR_VERD_VSK?: number;
      WEBTEXT?: {
        /** @maxLength 2 */
        TDFORMAT?: string;
        /** @maxLength 132 */
        TDLINE?: string;
      }[];
      WEBHEAD?: {
        /** @maxLength 2 */
        TDFORMAT?: string;
        /** @maxLength 132 */
        TDLINE?: string;
      }[];
      AVAIL_DATE?: string;
      SCHED_DATE?: string;
      CONF_DATE?: string;
      PHYS_QTY?: number;
      NOTDEL_QTY?: number;
      RSV_QTY?: number;
      AVAIL_QTY?: number;
      PO_QTY?: number;
      CONF_QTY?: number;
      LAEDA?: string;
      LAUHR?: string;
      /** @maxLength 4 */
      MTART?: string;
      WEBRACK?: {
        /** @maxLength 2 */
        TDFORMAT?: string;
        /** @maxLength 132 */
        TDLINE?: string;
      }[];
      /** @maxLength 20 */
      CARBFOOT?: string;
      WEIGHT_GROSS?: number;
      WEIGHT_NET?: number;
      /** @maxLength 3 */
      WEIGHT_UNIT?: string;
      VOLUME?: number;
      /** @maxLength 3 */
      VOLUME_UNIT?: string;
      /** @maxLength 32 */
      SIZE_DIMENS?: string;
    }[];
  };
}

export interface ZEC_S_MATERIAL_DETAIL_GET {
  DATA?: {
    RETURN?: {
      /** @maxLength 1 */
      TYPE?: string;
      /** @maxLength 220 */
      MESSAGE?: string;
    }[];
    T_MATERIAL?: {
      /** @maxLength 40 */
      MATNR?: string;
      /** @maxLength 40 */
      MFRPN?: string;
      /** @maxLength 18 */
      EXTWG?: string;
      /** @maxLength 3 */
      MVGR2?: string;
      /** @maxLength 3 */
      MVGR3?: string;
      /** @maxLength 40 */
      MVGR4?: string;
      /** @maxLength 25 */
      BEZEI?: string;
      /** @maxLength 18 */
      PRDHA?: string;
      /** @maxLength 18 */
      CLASS?: string;
      /** @maxLength 18 */
      PARENT_CLASS?: string;
      /** @maxLength 18 */
      CLASS2?: string;
      /** @maxLength 18 */
      PARENT_CLASS2?: string;
      /** @maxLength 3 */
      DISPO?: string;
      /** @maxLength 18 */
      DSNAM?: string;
      /** @maxLength 18 */
      EAN11?: string;
      TAB_CHARACT?: {
        /** @maxLength 30 */
        CHARACT?: string;
        /** @maxLength 30 */
        VALUE_CHAR?: string;
        /** @maxLength 1 */
        INHERITED?: string;
        INSTANCE?: string;
        /** @maxLength 30 */
        VALUE_NEUTRAL?: string;
        /** @maxLength 30 */
        CHARACT_DESCR?: string;
        /** @maxLength 70 */
        VALUE_CHAR_LONG?: string;
        /** @maxLength 70 */
        VALUE_NEUTRAL_LONG?: string;
      }[];
      TAB_CHARACT2?: {
        /** @maxLength 30 */
        CHARACT?: string;
        /** @maxLength 30 */
        VALUE_CHAR?: string;
        /** @maxLength 1 */
        INHERITED?: string;
        INSTANCE?: string;
        /** @maxLength 30 */
        VALUE_NEUTRAL?: string;
        /** @maxLength 30 */
        CHARACT_DESCR?: string;
        /** @maxLength 70 */
        VALUE_CHAR_LONG?: string;
        /** @maxLength 70 */
        VALUE_NEUTRAL_LONG?: string;
      }[];
      VERD_VSK?: number;
      VERD?: number;
      TAX_PERCENT?: number;
      /** @maxLength 1 */
      TAXM1?: string;
      TAB_STORAGE?: {
        /** @maxLength 4 */
        LGORT?: string;
        /** @maxLength 16 */
        LGOBE?: string;
        PHYS_QTY?: number;
        NOTDEL_QTY?: number;
        RSV_QTY?: number;
        AVAIL_QTY?: number;
        AVAIL_DATE?: string;
        ERFMG?: number;
      }[];
      TAB_CROSS?: {
        /** @maxLength 40 */
        MATNR?: string;
      }[];
      /** @maxLength 40 */
      MAKTX?: string;
      /** @maxLength 100 */
      ZZMAKTX?: string;
      /** @maxLength 1 */
      SPECIAL?: string;
      GR_VERD?: number;
      GR_VERD_VSK?: number;
      WEBTEXT?: {
        /** @maxLength 2 */
        TDFORMAT?: string;
        /** @maxLength 132 */
        TDLINE?: string;
      }[];
      WEBHEAD?: {
        /** @maxLength 2 */
        TDFORMAT?: string;
        /** @maxLength 132 */
        TDLINE?: string;
      }[];
      AVAIL_DATE?: string;
      SCHED_DATE?: string;
      CONF_DATE?: string;
      PHYS_QTY?: number;
      NOTDEL_QTY?: number;
      RSV_QTY?: number;
      AVAIL_QTY?: number;
      PO_QTY?: number;
      CONF_QTY?: number;
      LAEDA?: string;
      LAUHR?: string;
      /** @maxLength 4 */
      MTART?: string;
      WEBRACK?: {
        /** @maxLength 2 */
        TDFORMAT?: string;
        /** @maxLength 132 */
        TDLINE?: string;
      }[];
      /** @maxLength 20 */
      CARBFOOT?: string;
      WEIGHT_GROSS?: number;
      WEIGHT_NET?: number;
      /** @maxLength 3 */
      WEIGHT_UNIT?: string;
      VOLUME?: number;
      /** @maxLength 3 */
      VOLUME_UNIT?: string;
      /** @maxLength 32 */
      SIZE_DIMENS?: string;
    }[];
  };
}

export interface ZEC_S_MATERIAL_TEXT_GET {
  DATA?: {
    RETURN?: {
      /** @maxLength 1 */
      TYPE?: string;
      /** @maxLength 220 */
      MESSAGE?: string;
    }[];
    STRING?: string;
    T_LONGTEXT?: {
      ROW?: number;
      /** @maxLength 2 */
      FORMAT_COL?: string;
      /** @maxLength 132 */
      TEXT_LINE?: string;
    }[];
  };
}

export interface ZEC_S_NATIONAL_REGISTRY_READ {
  DATA?: {
    /** @maxLength 1 */
    TYPE?: string;
    S_NATR_REG?: {
      /** @maxLength 3 */
      MANDT?: string;
      KENNITALA?: string;
      /** @maxLength 35 */
      NAFN1?: string;
      /** @maxLength 35 */
      HEIMILI?: string;
      /** @maxLength 35 */
      HEIMILI2?: string;
      /** @maxLength 10 */
      POSTNR?: string;
      ATVVFLOKK?: string;
      /** @maxLength 1 */
      BANNMERKI?: string;
      KENNIEIG?: string;
      NNR?: string;
      FJSK?: string;
      /** @maxLength 31 */
      RODUN?: string;
      SVFEL?: string;
      /** @maxLength 12 */
      HEIM_KD?: string;
      /** @maxLength 1 */
      KYN?: string;
      /** @maxLength 1 */
      HJU?: string;
      /** @maxLength 2 */
      RIKISFANG?: string;
      /** @maxLength 4 */
      FST?: string;
      FDAG?: string;
      MAKI?: string;
      KT_UMB?: string;
      /** @maxLength 3 */
      SOKN?: string;
      /** @maxLength 12 */
      HEIM0112SL?: string;
      /** @maxLength 12 */
      HEIM_SID?: string;
      /** @maxLength 4 */
      AFDRIF?: string;
      DAGSAFDR?: string;
      /** @maxLength 2 */
      REFM?: string;
      LOGSV?: string;
      SVEI2?: string;
      /** @maxLength 10 */
      POSTBOX?: string;
      /** @maxLength 10 */
      POSTBOX_PONR?: string;
      /** @maxLength 31 */
      BERIST_TIL?: string;
      /** @maxLength 10 */
      BERIST_TIL_PONR?: string;
      SIDAST_BREYTT?: string;
      VSKNR?: string;
      /** @maxLength 16 */
      STARFSEMI?: string;
      ATVVNUMER?: string;
      /** @maxLength 2 */
      EK?: string;
    };
    RETURN?: {
      /** @maxLength 1 */
      TYPE?: string;
      /** @maxLength 220 */
      MESSAGE?: string;
    }[];
  };
}

export interface ZECSORDERINVOICEPDF2GET {
  DATA?: {
    /** @maxLength 4 */
    OUTPUTTYPE?: string;
    /** @format binary */
    PDF?: File;
    RETURN?: {
      /** @maxLength 1 */
      TYPE?: string;
      /** @maxLength 220 */
      MESSAGE?: string;
    }[];
  };
}

export interface ZEC_S_ORDER_INVOICE_PDF_GET {
  DATA?: {
    RETURN?: {
      /** @maxLength 1 */
      TYPE?: string;
      /** @maxLength 220 */
      MESSAGE?: string;
    }[];
    /** @format binary */
    PDF?: File;
    /** @maxLength 4 */
    OUTPUTTYPE?: string;
  };
}

export interface ZEC_S_ORDER_QUOTATION_PDF_GET {
  DATA?: {
    RETURN?: {
      /** @maxLength 1 */
      TYPE?: string;
      /** @maxLength 220 */
      MESSAGE?: string;
    }[];
    /** @format binary */
    PDF?: File;
  };
}

export interface ZEC_S_SO_CREATE {
  DATA?: {
    /** @maxLength 10 */
    DELVN?: string;
    RETURN?: {
      /** @maxLength 1 */
      TYPE?: string;
      /** @maxLength 220 */
      MESSAGE?: string;
    }[];
    /** @maxLength 10 */
    VBELN?: string;
    ITEM?: {
      ITM_NUMBER?: string;
      /** @maxLength 40 */
      MATERIAL?: string;
      TARGET_QTY?: number;
      /** @maxLength 10 */
      REF_DOC?: string;
      REF_DOC_IT?: string;
      /** @maxLength 3 */
      INCOTERMS1?: string;
      NET_VALUE?: number;
      SUBTOTAL_1?: number;
      /** @maxLength 10 */
      COUPON?: string;
      /** @maxLength 4 */
      MTART?: string;
      /** @maxLength 2 */
      CUST_GROUP?: string;
    }[];
  };
}

export interface ZMS_S_JOURNAL_GET {
  DATA?: {
    JOURNAL_ENTRIES?: {
      /** @maxLength 2 */
      LEDGER?: string;
      /** @maxLength 4 */
      COMPANY_CODE?: string;
      FISCAL_YEAR?: string;
      /** @maxLength 10 */
      DOCUMENT_NR?: string;
      /** @maxLength 6 */
      POSTING_ITEM?: string;
      DOCUMENT_DATE?: string;
      /** @maxLength 50 */
      TEXT?: string;
      AMOUNT?: number;
      /** @maxLength 5 */
      CURRENCY?: string;
      BALANCE?: number;
      /** @maxLength 10 */
      CUSTOMER?: string;
      /** @maxLength 1 */
      ACCOUNT_TYPE?: string;
      /** @maxLength 20 */
      SSID?: string;
      /** @maxLength 60 */
      NAME?: string;
      /** @maxLength 10 */
      REFERENCE_DOCUMENT?: string;
      /** @maxLength 5 */
      REFERENCE_TYPE?: string;
      /** @maxLength 1 */
      OUTPUT?: string;
      OUTPUT_TYPES?: {
        /** @maxLength 30 */
        DOCUMENT?: string;
        /** @maxLength 4 */
        OUTPUT_TYPE?: string;
      }[];
    }[];
    START_BALANCE?: number;
    END_BALANCE?: number;
    /** @maxLength 1 */
    IS_ERROR?: string;
    /** @maxLength 60 */
    ERROR_MSG?: string;
  };
}

export type BomsBase2GetData = ZECSBOMSBASE2GET;

export type BomsBaseGetData = ZEC_S_BOMS_BASE_GET;

export interface BomsGetParams {
  /** @maxLength 10 */
  WEBID: string;
  /** Array of materials */
  T_MATERIAL?: string[];
}

export type BomsGetData = ZEC_S_BOMS_GET;

export interface ClassCharGetParams {
  /** @maxLength 10 */
  WEBID: string;
}

export type ClassCharGetData = ZEC_S_CLASS_CHAR_GET;

export type SoCreateData = ZEC_S_SO_CREATE;

export interface CustomerAccLimitCheckParams {
  INV_AMOUNT: number;
  /** @maxLength 10 */
  WEBID: string;
  KENNITALA?: string;
  /** @maxLength 10 */
  KUNNR?: string;
}

export type CustomerAccLimitCheckData = ZEC_S_CUSTOMER_ACC_LIMIT_CHECK;

export interface CustomerAddressGetParams {
  /** @maxLength 10 */
  KUNNR: string;
  /** @maxLength 10 */
  WEBID: string;
  /** @maxLength 2 */
  TYPE?: string;
}

export type CustomerAddressGetData = ZEC_S_CUSTOMER_ADDRESS_GET;

export type CustomerAddressModData = ZEC_S_CUSTOMER_ADDRESS_MOD;

export type CustomerShiptoAddrAddData = ZEC_S_CUSTOMER_SHIPTO_ADDR_ADD;

export type CustomerShiptoAddrDelData = ZEC_S_CUSTOMER_SHIPTO_ADDR_DEL;

export interface CustomerBillingdocGetParams {
  /** @maxLength 10 */
  KUNNR: string;
  /** @maxLength 10 */
  WEBID: string;
  /** @maxLength 10 */
  BILLINGDOCUMENT?: string;
  DATE_FROM?: string;
  DATE_TO?: string;
  /** @maxLength 1 */
  TEXT?: string;
}

export type CustomerBillingdocGetData = ZEC_S_CUSTOMER_BILLINGDOC_GET;

export type CustomerCreateData = ZEC_S_CUSTOMER_CREATE;

export interface CustomerQuotationGetParams {
  /** @maxLength 10 */
  KUNNR: string;
  /** @maxLength 10 */
  WEBID: string;
  /** @maxLength 10 */
  QUOTATION?: string;
}

export type CustomerQuotationGetData = ZEC_S_CUSTOMER_QUOTATION_GET;

export interface CustomerSalesHistoryGetParams {
  /** @maxLength 10 */
  KUNNR: string;
  /** @maxLength 10 */
  WEBID: string;
  DATE_FROM?: string;
  DATE_TO?: string;
}

export type CustomerSalesHistoryGetData = ZEC_S_CUSTOMER_SALES_HIST_GET;

export type MaterialBase2GetData = ZECSMATERIALBASE2GET;

export type MaterialBaseGetData = ZEC_S_MATERIAL_BASE_GET;

export interface MaterialCrossSellGetParams {
  /** @maxLength 40 */
  MATERIAL: string;
  /** @maxLength 10 */
  WEBID: string;
}

export type MaterialCrossSellGetData = ZEC_S_MATERIAL_CROSS_SELL_GET;

export interface MaterialDetail2GetParams {
  /** @maxLength 10 */
  WEBID: string;
  /** @maxLength 40 */
  MATERIAL?: string;
  /** @maxLength 1 */
  SIMULATE_PRICE?: string;
}

export type MaterialDetail2GetData = ZECSMATERIALDETAIL2GET;

export interface MaterialDetailGetParams {
  /** @maxLength 10 */
  WEBID: string;
  /** @maxLength 40 */
  MATERIAL?: string;
  /** @maxLength 1 */
  SIMULATE_PRICE?: string;
}

export type MaterialDetailGetData = ZEC_S_MATERIAL_DETAIL_GET;

export interface MaterialTextGetParams {
  /** @maxLength 40 */
  MATERIAL: string;
  /** @maxLength 10 */
  WEBID: string;
}

export type MaterialTextGetData = ZEC_S_MATERIAL_TEXT_GET;

export interface NationalRegistryReadParams {
  KENNITALA: string;
  /** @maxLength 10 */
  WEBID: string;
}

export type NationalRegistryReadData = ZEC_S_NATIONAL_REGISTRY_READ;

export interface OrderInvoicePdf2GetParams {
  /** @maxLength 10 */
  KUNNR: string;
  /** @maxLength 10 */
  WEBID: string;
  /** @maxLength 10 */
  BILLINGDOC?: string;
  /** @maxLength 4 */
  OUTPUTTYPE?: string;
  /** @maxLength 10 */
  SALESDOC?: string;
  /** @maxLength 1 */
  SKIP_LEGACY?: string;
}

export type OrderInvoicePdf2GetData = ZECSORDERINVOICEPDF2GET;

export interface OrderInvoicePdfGetParams {
  /** @maxLength 10 */
  KUNNR: string;
  /** @maxLength 10 */
  WEBID: string;
  /** @maxLength 10 */
  BILLINGDOC?: string;
  /** @maxLength 4 */
  OUTPUTTYPE?: string;
  /** @maxLength 10 */
  SALESDOC?: string;
  /** @maxLength 1 */
  SKIP_LEGACY?: string;
}

export type OrderInvoicePdfGetData = ZEC_S_ORDER_INVOICE_PDF_GET;

export interface OrderQuotationPdfGetParams {
  /** @maxLength 10 */
  QUOTATION: string;
  /** @maxLength 10 */
  WEBID: string;
}

export type OrderQuotationPdfGetData = ZEC_S_ORDER_QUOTATION_PDF_GET;

export type MsJournalGetData = ZMS_S_JOURNAL_GET;
