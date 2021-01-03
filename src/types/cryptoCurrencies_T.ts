import { CryptoCurrencies_E } from "../enums/CryptoCurrencies_E";

export type CryptoCurrenciesTicker_T = {
  base: string; //"BTC",
  target: string; //"USD",
  price: string; //"26826.53615765",
  volume: string; //"119771.47616489",
  change: string; //"122.93549640"
};

export type CryptoCurrencies_T = {
  ticker: CryptoCurrenciesTicker_T;
  timestamp: number; //1609271222,
  success: boolean; //true,
  error: string; //""
};

export interface CryptoCurrencyRespData_I {
  [CryptoCurrencies_E.BTC]: number;
}
