export type KebabToPascalCase<TString extends string> =
  TString extends `${infer First}-${infer Rest}`
    ? `${Capitalize<First>}${KebabToPascalCase<Rest>}`
    : Capitalize<TString>;

export type RecordValues<TRecord extends object> = TRecord[keyof TRecord];
