# Enumi

Enumi is a lightweight utility for creating string enums in TypeScipt without the need to use the verbose `enum` syntax not recommended by the TypeScript core team and not allowed with the `erasableSyntaxOnly` flag.

Instead of writing

```ts
enum HttpStatusCode {
  Ok = "ok",
  NotFound = "not-found",
  InternalServerError = "internal-server-error",
}
```

you can just

```ts
const HttpStatusCode = enumi("ok", "not-found", "internal-server-error");
```

Then kebab-case is automatically converted to PascalCase so you can use it as a conventional enum syntax.

```ts
getErrorMessage(HttpStatusCode.NotFound);
```

To get all cases from an enumeration as a string array just use the spread syntax

```ts
const cases = [...enumi("pretty", "cool")];
assertEquals(cases, ["pretty", "cool"]);
```

Duplicated cases are automatically removed.

```ts
const cases = [...enumi("pretty", "pretty", "cool")];
assertEquals(cases, ["pretty", "cool"]);
```
