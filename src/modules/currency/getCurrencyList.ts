import { CURRENCY_DATA } from "./data/currencies";
import { GetCurrencyListOutput } from "./types";

export function getCurrencyList(): GetCurrencyListOutput {
  return CURRENCY_DATA;
}
