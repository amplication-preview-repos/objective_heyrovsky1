import { StockTransferWhereInput } from "./StockTransferWhereInput";
import { StockTransferOrderByInput } from "./StockTransferOrderByInput";

export type StockTransferFindManyArgs = {
  where?: StockTransferWhereInput;
  orderBy?: Array<StockTransferOrderByInput>;
  skip?: number;
  take?: number;
};
