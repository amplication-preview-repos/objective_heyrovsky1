import { StockMovement as TStockMovement } from "../api/stockMovement/StockMovement";

export const STOCKMOVEMENT_TITLE_FIELD = "id";

export const StockMovementTitle = (record: TStockMovement): string => {
  return record.id?.toString() || String(record.id);
};
