import { StockTransfer as TStockTransfer } from "../api/stockTransfer/StockTransfer";

export const STOCKTRANSFER_TITLE_FIELD = "id";

export const StockTransferTitle = (record: TStockTransfer): string => {
  return record.id?.toString() || String(record.id);
};
