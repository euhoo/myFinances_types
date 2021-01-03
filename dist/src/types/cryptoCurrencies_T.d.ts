import { CryptoCurrencies_E } from "../enums/CryptoCurrencies_E";
export declare type CryptoCurrenciesTicker_T = {
    base: string;
    target: string;
    price: string;
    volume: string;
    change: string;
};
export declare type CryptoCurrencies_T = {
    ticker: CryptoCurrenciesTicker_T;
    timestamp: number;
    success: boolean;
    error: string;
};
export interface CryptoCurrencyRespData_I {
    [CryptoCurrencies_E.BTC]: number;
}
