/* only exports */

export declare enum AssetGroups_E {
    iis = "iis",
    currency = "currency",
    crypto = "crypto",
    all = "all",
}

export declare enum CryptoCurrencies_E {
    BTC = "BTC",
}

export declare enum Currencies_E {
    USD = "USD",
    EUR = "EUR",
    RUB = "RUB",
}

export declare enum RoleTypes_E {
    ADMIN = "admin",
    USER = "user",
}

export declare enum Shares_E {
    MTS = "MTS",
}

export declare interface AssetSchema {
    _id: string;
    name: string;
}

export declare interface AssetGroup_I {
    _id: string;
    name: AssetGroups_E;
}

export declare type ValuteCBR_T = {
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
export declare interface RateCBR_T {
    Date: string; //"2020-12-29T11:30:00+03:00",
    PreviousDate: string; //"2020-12-26T11:30:00+03:00",
    PreviousURL: string; //"//www.cbr-xml-daily.ru/archive/2020/12/26/daily_json.js",
    Timestamp: string; //"2020-12-28T23:00:00+03:00",
    Valute: ValuteCBR_T;
}

export declare interface CurrencyRespData_I {
    [Currencies_E.USD]: number;
    [Currencies_E.EUR]: number;
}

export interface OperationSchema_I {
    _id: string;
    assetGroupId: string;
    userId: string;
    assetCellId: string;
    cellQuantity: number;
    assetBuyId: string;
    buyQuantity: number;
    date: string;
}

export declare interface Operation_I {
    _id: string;
    date: string;
    assetCellName: string;
    cellQuantity: number;
    assetBuyName: string;
    buyQuantity: number;
    group: AssetGroups_E;
}

export declare interface RoleSchema_I {
    _id: string;
    name: string;
    isAdmin: boolean;
}

export interface UserSchema_I {
    _id: string;
    username: string;
    password: string;
    name: string;
    roleId: string;
}

export declare type User_I = Pick<UserSchema_I, "_id" | "username" | "name"> & {
    isAdmin: boolean;
};
