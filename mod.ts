import { kebabToPascalCase } from "./string.ts";
import type { KebabToPascalCase, RecordValues } from "./types.ts";

export type EnumerationObject<TCases extends string[]> = Readonly<{
  [Case in TCases[number] as KebabToPascalCase<Case>]: Case;
}>;

export type Enumeration<TCases extends string[]> = EnumerationObject<TCases> &
  Iterable<TCases[number] extends never ? string : TCases[number]>;

export type EnumerationValue<TEnumeration extends Enumeration<[]>> =
  RecordValues<Omit<TEnumeration, typeof Symbol.iterator>>;

export function enumi<TCases extends string[]>(
  ...cases: TCases
): Enumeration<TCases> {
  const uniqueCases = [...new Set(cases)];
  const enumeration = uniqueCases.reduce((caseRecord, caseValue) => {
    return { ...caseRecord, [kebabToPascalCase(caseValue)]: caseValue };
  }, {} as EnumerationObject<TCases>);

  return Object.defineProperty(enumeration, Symbol.iterator, {
    value: () => uniqueCases[Symbol.iterator](),
    enumerable: false,
    writable: false,
    configurable: false,
  }) as Enumeration<TCases>;
}
