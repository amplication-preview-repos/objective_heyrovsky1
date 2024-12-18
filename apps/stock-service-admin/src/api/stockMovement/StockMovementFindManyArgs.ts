import { StockMovementWhereInput } from "./StockMovementWhereInput";
import { StockMovementOrderByInput } from "./StockMovementOrderByInput";

export type StockMovementFindManyArgs = {
  where?: StockMovementWhereInput;
  orderBy?: Array<StockMovementOrderByInput>;
  skip?: number;
  take?: number;
};
