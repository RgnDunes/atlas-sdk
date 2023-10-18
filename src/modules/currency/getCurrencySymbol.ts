import { CURRENCY_DATA } from "./data/currencies";

export function getCurrencySymbol(currencyCode: string): string | undefined {
  const currencyData = CURRENCY_DATA;
  return currencyData[currencyCode]?.symbol;
}
