import { Currencies_E } from "../enums/Currencies_E";
export declare type ValuteCBR_T = {
    [key in Currencies_E]: {
        ID: string;
        NumCode: string;
        CharCode: Currencies_E;
        Nominal: number;
        Name: string;
        Value: string;
        Previous: string;
    };
};
export interface RateCBR_T {
    Date: string;
    PreviousDate: string;
    PreviousURL: string;
    Timestamp: string;
    Valute: ValuteCBR_T;
}
export interface CurrencyRespData_I {
    [Currencies_E.USD]: number;
    [Currencies_E.EUR]: number;
}
