import { AssetGroups_E } from "../enums/assetGroups_E";

export interface AssetGroup_I {
  _id: string;
  name: string;
  group: AssetGroups_E;
}
