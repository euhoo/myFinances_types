import { Currencies_E } from "../enums/Currencies_E";

export type ValuteCBR_T = {
  [key in Currencies_E]: {
    ID: string; //"R01010",
    NumCode: string; //"036",
    CharCode: Currencies_E; //"AUD",
    Nominal: number; //1,
    Name: string; //"Австралийский доллар",
    Value: string; //56.1211,
    Previous: string; //56.0502
  };
};
export interface RateCBR_T {
  Date: string; //"2020-12-29T11:30:00+03:00",
  PreviousDate: string; //"2020-12-26T11:30:00+03:00",
  PreviousURL: string; //"//www.cbr-xml-daily.ru/archive/2020/12/26/daily_json.js",
  Timestamp: string; //"2020-12-28T23:00:00+03:00",
  Valute: ValuteCBR_T;
}

export interface CurrencyRespData_I {
  [Currencies_E.USD]: number;
  [Currencies_E.EUR]: number;
}
