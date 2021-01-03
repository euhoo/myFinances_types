import { AssetGroups_E } from "../enums/assetGroups_E";
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
export interface Operation_I {
    _id: string;
    date: string;
    assetCellName: string;
    cellQuantity: number;
    assetBuyName: string;
    buyQuantity: number;
    group: AssetGroups_E;
}
